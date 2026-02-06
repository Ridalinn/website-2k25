"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { AegisDropzone } from "@/components/aegis-dropzone"
import { useAppLoadingStore } from "@/components/loading/app-loading-handler"

export const LabClient = () => {
  const router = useRouter()
  const canvasErrorBoundaryTriggered = useAppLoadingStore(
    (state) => state.canvasErrorBoundaryTriggered
  )

  useEffect(() => {
    if (canvasErrorBoundaryTriggered) {
      router.push("/")
    }
  }, [canvasErrorBoundaryTriggered, router])

  return <AegisDropzone />
}
