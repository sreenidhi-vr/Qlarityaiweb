"use client"

import { useEffect, useState } from "react"
import { checkApiHealth, checkApiLiveness, getApiCapabilities } from "@/lib/api-client"
import { AlertCircle, CheckCircle, Loader } from "lucide-react"

interface StatusResult {
  loading: boolean
  success: boolean
  data: Record<string, unknown> | null
  error: string | null
}

export function ApiStatusChecker() {
  const [health, setHealth] = useState<StatusResult>({ loading: true, success: false, data: null, error: null })
  const [liveness, setLiveness] = useState<StatusResult>({ loading: true, success: false, data: null, error: null })
  const [capabilities, setCapabilities] = useState<StatusResult>({
    loading: true,
    success: false,
    data: null,
    error: null,
  })

  useEffect(() => {
    const fetchStatuses = async () => {
      // Fetch health status
      try {
        const healthResult = await checkApiHealth()
        setHealth({
          loading: false,
          success: healthResult,
          data: { healthy: healthResult },
          error: healthResult ? null : "Health check failed",
        })
      } catch (err) {
        setHealth({
          loading: false,
          success: false,
          data: null,
          error: err instanceof Error ? err.message : "Unknown error",
        })
      }

      // Fetch liveness status
      try {
        const livenessResult = await checkApiLiveness()
        setLiveness({
          loading: false,
          success: livenessResult.alive,
          data: livenessResult,
          error: livenessResult.alive ? null : (livenessResult.status || "Connection error"),
        })
      } catch (err) {
        setLiveness({
          loading: false,
          success: false,
          data: null,
          error: err instanceof Error ? err.message : "Unknown error",
        })
      }

      // Fetch capabilities
      try {
        const capabilitiesResult = await getApiCapabilities()
        setCapabilities({
          loading: false,
          success: true,
          data: capabilitiesResult,
          error: null,
        })
      } catch (err) {
        setCapabilities({
          loading: false,
          success: false,
          data: null,
          error: err instanceof Error ? err.message : "Unknown error",
        })
      }
    }

    fetchStatuses()
  }, [])

  const StatusCard = ({ title, status }: { title: string; status: StatusResult }) => (
    <div className="border border-border rounded-lg p-6 bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {status.loading && <Loader className="w-5 h-5 animate-spin text-muted-foreground" />}
        {!status.loading && status.success && <CheckCircle className="w-5 h-5 text-green-500" />}
        {!status.loading && !status.success && <AlertCircle className="w-5 h-5 text-red-500" />}
      </div>

      {status.loading && <p className="text-muted-foreground text-sm">Checking...</p>}
      {!status.loading && status.error && <p className="text-red-500 text-sm">{status.error}</p>}
      {!status.loading && status.data && (
        <pre className="bg-muted p-3 rounded text-xs overflow-auto max-h-48 text-foreground">
          {JSON.stringify(status.data, null, 2)}
        </pre>
      )}
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="bg-muted/50 border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">External API Status</h2>
        <p className="text-muted-foreground">
          Checking connection to:{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            https://retirerichqa.centralindia.cloudapp.azure.com
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard title="Health Check" status={health} />
        <StatusCard title="Liveness Check" status={liveness} />
        <StatusCard title="Capabilities" status={capabilities} />
      </div>
    </div>
  )
}
