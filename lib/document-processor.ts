/**
 * Document Processing Utility
 * Handles document parsing, metadata extraction, and context chunking
 */

export interface DocumentMetadata {
  name: string
  size: number
  charCount: number
  wordCount: number
  lineCount: number
  language: string
}

export interface DocumentChunk {
  id: string
  content: string
  startIndex: number
  endIndex: number
  relevanceScore?: number
}

const CHUNK_SIZE = 1000 // characters per chunk
const CHUNK_OVERLAP = 200 // overlap between chunks for context continuity

/**
 * Extract metadata from a document
 */
export function extractMetadata(name: string, content: string): DocumentMetadata {
  const charCount = content.length
  const wordCount = content.split(/\s+/).filter((word) => word.length > 0).length
  const lineCount = content.split("\n").length

  // Simple language detection (English by default, can be enhanced)
  const language = detectLanguage(content)

  return {
    name,
    size: new Blob([content]).size,
    charCount,
    wordCount,
    lineCount,
    language,
  }
}

/**
 * Simple language detection based on common words
 */
function detectLanguage(content: string): string {
  const lowerContent = content.toLowerCase()
  // Add more language detection logic as needed
  if (lowerContent.includes("the") && lowerContent.includes("and")) {
    return "English"
  }
  return "Unknown"
}

/**
 * Split document into overlapping chunks for better context management
 */
export function chunkDocument(content: string): DocumentChunk[] {
  const chunks: DocumentChunk[] = []
  let startIndex = 0
  let chunkId = 0

  while (startIndex < content.length) {
    const endIndex = Math.min(startIndex + CHUNK_SIZE, content.length)
    const chunkContent = content.substring(startIndex, endIndex)

    chunks.push({
      id: `chunk-${chunkId}`,
      content: chunkContent,
      startIndex,
      endIndex,
    })

    chunkId++
    startIndex = endIndex - CHUNK_OVERLAP
  }

  return chunks
}

/**
 * Find relevant chunks based on search terms
 */
export function findRelevantChunks(chunks: DocumentChunk[], query: string, topK = 3): DocumentChunk[] {
  const queryTerms = query.toLowerCase().split(/\s+/)

  const scoredChunks = chunks.map((chunk) => {
    let score = 0
    const chunkLower = chunk.content.toLowerCase()

    // Score based on term frequency
    queryTerms.forEach((term) => {
      const regex = new RegExp(`\\b${term}\\b`, "g")
      const matches = chunkLower.match(regex)
      score += matches?.length || 0
    })

    return { ...chunk, relevanceScore: score }
  })

  // Sort by relevance score and return top chunks
  return scoredChunks
    .filter((chunk) => chunk.relevanceScore && chunk.relevanceScore > 0)
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, topK)
}

/**
 * Build context from relevant chunks with size limits
 */
export function buildContextFromChunks(chunks: DocumentChunk[], maxSize = 4000): string {
  let context = ""

  for (const chunk of chunks) {
    const potentialContext = context + "\n---\n" + chunk.content
    if (potentialContext.length > maxSize) {
      break
    }
    context = potentialContext
  }

  return context.trim()
}

/**
 * Process document for optimal AI context
 */
export function processDocumentForAI(
  content: string,
  query: string,
): {
  context: string
  metadata: DocumentMetadata
  chunkCount: number
} {
  // Extract metadata
  const metadata = extractMetadata("Document", content)

  // If document is small enough, use entire content
  if (metadata.charCount <= 4000) {
    return {
      context: content,
      metadata,
      chunkCount: 1,
    }
  }

  // For larger documents, use smart chunking
  const chunks = chunkDocument(content)
  const relevantChunks = findRelevantChunks(chunks, query)

  // Fall back to first chunk if no relevant chunks found
  const contextChunks = relevantChunks.length > 0 ? relevantChunks : chunks.slice(0, 3)
  const context = buildContextFromChunks(contextChunks)

  return {
    context,
    metadata,
    chunkCount: chunks.length,
  }
}
