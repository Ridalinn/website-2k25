import { create } from "zustand"

import { LabTab } from "@/components/arcade-screen/screen-ui"

export type AegisStatus =
  | "idle"
  | "scanning"
  | "analyzing"
  | "complete"
  | "error"

export interface AegisScanResult {
  scan_id: string
  vehicle: string
  estimating_system: string
  findings: {
    missing_operations: number
    adas_calibrations_needed: number
    otu_parts_identified: number
    labor_time_discrepancies: number
    total_supplement_value: string
  }
  categories: {
    name: string
    count: number
    value: string
  }[]
}

interface ArcadeStore {
  isInGame: boolean
  setIsInGame: (value: boolean) => void
  resetArcadeScreen: () => void

  isInLabTab: boolean
  setIsInLabTab: (value: boolean) => void

  labTabIndex: number
  setLabTabIndex: (value: number) => void

  labTabs: LabTab[]
  setLabTabs: (tabs: LabTab[]) => void

  currentLabTabIndex: number
  setCurrentLabTabIndex: (index: number) => void

  isSourceButtonSelected: boolean
  setIsSourceButtonSelected: (value: boolean) => void

  // AEGIS Terminal State
  aegisStatus: AegisStatus
  setAegisStatus: (status: AegisStatus) => void
  aegisScanResult: AegisScanResult | null
  setAegisScanResult: (result: AegisScanResult | null) => void
  aegisProgress: number
  setAegisProgress: (progress: number) => void
  aegisStatusMessage: string
  setAegisStatusMessage: (message: string) => void
}

export const useArcadeStore = create<ArcadeStore>((set) => ({
  isInGame: false,
  setIsInGame: (value) => set({ isInGame: value }),
  resetArcadeScreen: () =>
    set({ isInGame: false, isInLabTab: false, aegisStatus: "idle" }),

  isInLabTab: false,
  setIsInLabTab: (value) => set({ isInLabTab: value }),

  labTabIndex: -1,
  setLabTabIndex: (value) => set({ labTabIndex: value }),

  labTabs: [],
  setLabTabs: (tabs) => set({ labTabs: tabs }),

  currentLabTabIndex: -1,
  setCurrentLabTabIndex: (index) => set({ currentLabTabIndex: index }),

  isSourceButtonSelected: false,
  setIsSourceButtonSelected: (value) => set({ isSourceButtonSelected: value }),

  // AEGIS Terminal State
  aegisStatus: "idle",
  setAegisStatus: (status) => set({ aegisStatus: status }),
  aegisScanResult: null,
  setAegisScanResult: (result) => set({ aegisScanResult: result }),
  aegisProgress: 0,
  setAegisProgress: (progress) => set({ aegisProgress: progress }),
  aegisStatusMessage: "",
  setAegisStatusMessage: (message) => set({ aegisStatusMessage: message })
}))
