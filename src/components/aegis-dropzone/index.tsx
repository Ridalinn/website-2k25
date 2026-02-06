"use client"

import { useCallback, useRef, useState } from "react"

import { useArcadeStore, type AegisScanResult } from "@/store/arcade-store"
import { cn } from "@/utils/cn"

const MOCK_SCAN_RESULT: AegisScanResult = {
  scan_id: "AEGIS-2026-00142",
  vehicle: "2023 Toyota RAV4 — Hail Damage",
  estimating_system: "CCC ONE",
  findings: {
    missing_operations: 12,
    adas_calibrations_needed: 3,
    otu_parts_identified: 7,
    labor_time_discrepancies: 4,
    total_supplement_value: "$3,247.00"
  },
  categories: [
    { name: "ADAS Calibrations", count: 3, value: "$1,450.00" },
    { name: "One-Time-Use Parts", count: 7, value: "$892.00" },
    { name: "Missing R&I Operations", count: 5, value: "$485.00" },
    { name: "Blend Operations", count: 4, value: "$420.00" }
  ]
}

const SCAN_MESSAGES = [
  "Parsing estimate format...",
  "Identifying vehicle and damage type...",
  "Analyzing OEM procedures...",
  "Checking ADAS calibration requirements...",
  "Identifying one-time-use parts...",
  "Scanning for missing R&I operations...",
  "Checking blend operation requirements...",
  "Cross-referencing labor time databases...",
  "Validating parts pricing...",
  "Generating supplement findings..."
]

async function runMockScan() {
  const store = useArcadeStore.getState()
  store.setAegisStatus("scanning")
  store.setAegisProgress(0)
  store.setAegisScanResult(null)

  for (let i = 0; i < SCAN_MESSAGES.length; i++) {
    store.setAegisStatusMessage(SCAN_MESSAGES[i])
    const progress = ((i + 1) / SCAN_MESSAGES.length) * 100
    store.setAegisProgress(progress)
    await new Promise((r) => setTimeout(r, 400 + Math.random() * 200))
  }

  store.setAegisStatus("complete")
  store.setAegisScanResult(MOCK_SCAN_RESULT)
  store.setAegisStatusMessage("Scan complete")
}

export const AegisDropzone = () => {
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const aegisStatus = useArcadeStore((s) => s.aegisStatus)

  const handleFiles = useCallback(() => {
    if (
      aegisStatus === "scanning" ||
      aegisStatus === "analyzing"
    )
      return
    runMockScan()
  }, [aegisStatus])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)
      handleFiles()
    },
    [handleFiles]
  )

  const handleClick = useCallback(() => {
    if (aegisStatus === "complete") {
      // Reset for new scan
      useArcadeStore.getState().setAegisStatus("idle")
      useArcadeStore.getState().setAegisScanResult(null)
      useArcadeStore.getState().setAegisProgress(0)
      return
    }
    fileInputRef.current?.click()
  }, [aegisStatus])

  const handleFileInput = useCallback(
    (_e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles()
    },
    [handleFiles]
  )

  return (
    <div className="grid-layout pointer-events-none fixed inset-0 z-50 items-end pb-8">
      <div className="pointer-events-auto col-span-full flex flex-col items-center gap-4 lg:col-span-4 lg:col-start-9">
        <div
          className={cn(
            "w-full cursor-pointer border-2 border-dashed p-6 text-center transition-all duration-300",
            isDragOver
              ? "border-brand-o bg-brand-o/10"
              : "border-brand-w1/20 bg-brand-k/80 backdrop-blur-sm hover:border-brand-o/50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileInput}
          />

          {aegisStatus === "idle" && (
            <>
              <p className="mb-2 text-f-h4-mobile font-semibold text-brand-o lg:text-f-h4">
                AEGIS Forensic Audit
              </p>
              <p className="mb-3 text-f-p-mobile text-brand-w2 lg:text-f-p">
                Drop a collision repair estimate PDF here to scan
              </p>
              <div className="inline-block border border-brand-o/30 bg-brand-o/5 px-4 py-2">
                <span className="text-f-p-mobile text-brand-o lg:text-f-p">
                  Drop PDF or Click to Upload
                </span>
              </div>
            </>
          )}

          {(aegisStatus === "scanning" || aegisStatus === "analyzing") && (
            <>
              <p className="mb-2 text-f-h4-mobile font-semibold text-brand-y lg:text-f-h4">
                Scanning Estimate...
              </p>
              <div className="mx-auto mb-2 h-1.5 w-full max-w-xs overflow-hidden bg-brand-g2">
                <div
                  className="h-full bg-brand-o transition-all duration-300"
                  style={{
                    width: `${useArcadeStore.getState().aegisProgress}%`
                  }}
                />
              </div>
              <p className="font-mono text-f-p-mobile text-brand-o lg:text-f-p">
                {useArcadeStore.getState().aegisStatusMessage}
              </p>
            </>
          )}

          {aegisStatus === "complete" && (
            <>
              <p className="mb-2 text-f-h4-mobile font-semibold text-brand-g lg:text-f-h4">
                Scan Complete
              </p>
              <p className="mb-1 text-f-p-mobile text-brand-w1 lg:text-f-p">
                12 missing operations found
              </p>
              <p className="mb-3 text-f-h3-mobile font-bold text-brand-g lg:text-f-h3">
                Supplement Value: $3,247.00
              </p>
              <p className="text-f-p-mobile text-brand-g1 lg:text-f-p">
                Click to start a new scan
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
