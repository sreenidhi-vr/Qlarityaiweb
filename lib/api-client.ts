const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://retirerichqa.centralindia.cloudapp.azure.com"

export async function queryDocument(
  question: string,
  documentContent: string,
  documentName?: string,
): Promise<{
  answer: string
  metadata?: Record<string, unknown>
}> {
  const url = API_BASE_URL + "/api/query"

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      documentContent,
      documentName,
    }),
  })

  if (!response.ok) {
    throw new Error("Query failed")
  }

  return response.json()
}

export async function checkApiHealth(): Promise<boolean> {
  const url = API_BASE_URL + "/health"

  try {
    const response = await fetch(url, { method: "GET" })
    return response.ok
  } catch {
    return false
  }
}

export async function checkApiLiveness(): Promise<{
  alive: boolean
  timestamp: string
  status?: string
}> {
  const url = API_BASE_URL + "/api/live"

  try {
    const response = await fetch(url, { method: "GET" })
    const data = await response.json()

    return {
      alive: response.ok && data.status === "alive",
      timestamp: data.timestamp || new Date().toISOString(),
      status: data.status || (response.ok ? "OK" : "Error"),
    }
  } catch (error) {
    console.log("[v0] Liveness check error:", error)
    return {
      alive: false,
      timestamp: new Date().toISOString(),
      status: "Connection error",
    }
  }
}

export async function getApiCapabilities(): Promise<{
  capabilities?: Record<string, unknown>
  timestamp: string
  error?: string
}> {
  const url = API_BASE_URL + "/health"

  try {
    const response = await fetch(url, { method: "GET" })

    if (!response.ok) {
      return {
        timestamp: new Date().toISOString(),
        error: `HTTP ${response.status}`,
      }
    }

    const data = await response.json()
    return {
      capabilities: data,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Connection error",
    }
  }
}
