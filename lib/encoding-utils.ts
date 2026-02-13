/**
 * Safely encode a string to base64, handling Unicode characters
 * Fixes the "InvalidCharacterError: Failed to execute 'btoa' on 'Window'" error
 */
export function safeBase64Encode(str: string): string {
  try {
    // For Node.js environment
    if (typeof Buffer !== "undefined") {
      return Buffer.from(str, "utf-8").toString("base64")
    }

    // For browser environment with Unicode support
    // First encode the string to UTF-8, then convert to base64
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => {
        return String.fromCharCode(Number.parseInt(p1, 16))
      }),
    )
  } catch (error) {
    console.error("[v0] Base64 encoding error:", error)
    // Fallback: remove non-Latin1 characters
    const latin1Str = str.replace(/[^\x00-\xFF]/g, "") // eslint-disable-line no-control-regex
    return btoa(latin1Str)
  }
}

/**
 * Safely decode a base64 string, handling Unicode characters
 */
export function safeBase64Decode(str: string): string {
  try {
    // For Node.js environment
    if (typeof Buffer !== "undefined") {
      return Buffer.from(str, "base64").toString("utf-8")
    }

    // For browser environment with Unicode support
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), (c: string) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join(""),
    )
  } catch (error) {
    console.error("[v0] Base64 decoding error:", error)
    return atob(str)
  }
}
