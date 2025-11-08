// Client-side config loader - replaces hardcoded config.js
let SATYR_CONFIG = null

let configLoadedPromise = null

async function loadConfig() {
  try {
    const backendUrl = "https://satyr-airender-backend-9caa.onrender.com"
    console.log("[v0] Attempting to fetch config from:", `${backendUrl}/api/config`)

    const response = await fetch(`${backendUrl}/api/config`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("[v0] Backend response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] Backend error response:", errorText)
      throw new Error(`Failed to load config: ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] Config loaded from backend:", data)
    SATYR_CONFIG = data
    window.SATYR_CONFIG = data

    console.log("[v0] Config loaded successfully from backend")
    return data
  } catch (error) {
    console.error("[v0] Failed to load config from backend:", error)
    throw new Error("Failed to load config from backend. Application requires backend server to be running.")
  }
}

configLoadedPromise = new Promise((resolve) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", async () => {
      await loadConfig()
      resolve()
    })
  } else {
    loadConfig().then(() => resolve())
  }
})

// Expose globally so Firebase init can wait for it
window.configLoadedPromise = configLoadedPromise
