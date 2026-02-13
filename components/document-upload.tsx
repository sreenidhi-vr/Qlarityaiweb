"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Check } from "lucide-react"
import { extractMetadata } from "@/lib/document-processor"

interface DocumentUploadProps {
  onDocumentUpload: (doc: { name: string; content: string; metadata?: ReturnType<typeof extractMetadata> }) => void
}

export function DocumentUpload({ onDocumentUpload }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [metadata, setMetadata] = useState<ReturnType<typeof extractMetadata> | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile)
    setLoading(true)

    try {
      const text = await selectedFile.text()
      const docMetadata = extractMetadata(selectedFile.name, text)
      setMetadata(docMetadata)

      onDocumentUpload({
        name: selectedFile.name,
        content: text,
        metadata: docMetadata,
      })
    } catch (error) {
      console.error("Error reading file:", error)
      setFile(null)
      setMetadata(null)
    } finally {
      setLoading(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-6">Upload Your Document</h2>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
          className="hidden"
          accept=".txt,.pdf,.md,.json,.csv"
        />

        {loading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            <p className="text-muted-foreground">Processing document...</p>
          </div>
        ) : file ? (
          <div className="flex flex-col items-center gap-3">
            <Check className="w-12 h-12 text-primary" />
            <p className="font-semibold">{file.name}</p>
            {metadata && (
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  {(metadata.size / 1024).toFixed(2)} KB • {metadata.wordCount} words
                </p>
                <p>
                  {metadata.charCount.toLocaleString()} characters • {metadata.lineCount} lines
                </p>
              </div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFile(null)
                setMetadata(null)
              }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded hover:bg-secondary/30 transition"
            >
              <X className="w-4 h-4" />
              Remove
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Upload className="w-12 h-12 text-muted-foreground" />
            <p className="font-semibold">Drag or click to upload</p>
            <p className="text-sm text-muted-foreground">Supports TXT, PDF, MD, JSON, CSV</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-secondary/20 border border-border">
        <h3 className="font-semibold mb-2">Smart Processing:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Automatically extracts document metadata</li>
          <li>• Intelligently chunks large documents for better context</li>
          <li>• Finds most relevant sections for your questions</li>
          <li>• Optimized for fast, accurate responses</li>
        </ul>
      </div>
    </div>
  )
}
