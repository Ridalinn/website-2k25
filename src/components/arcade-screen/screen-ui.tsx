import { Container, Text } from "@react-three/uikit"
import { useEffect, useMemo, useRef, useState } from "react"

import { useArcadeStore } from "@/store/arcade-store"

interface ScreenUIProps {
  onLoad?: () => void
  visible: boolean
}

export const COLORS_THEME = {
  primary: "#00a6ff",
  secondary: "#ffb800",
  black: "#000",
  green: "#00ff9b",
  red: "#ff4d4d",
  white: "#e6e6e6",
  gray: "#757575"
}

export interface LabTab {
  id: string
  type: "button" | "experiment" | "featured"
  title: string
  url?: string
  isClickable: boolean
}

export const createLabTabs = (experiments: any[]): LabTab[] => {
  const tabs: LabTab[] = [
    {
      id: "close",
      type: "button",
      title: "CLOSE [ESC]",
      isClickable: true
    },
    ...experiments.map((exp: any) => ({
      id: `experiment-${exp._title}`,
      type: "experiment" as const,
      title: exp._title.toUpperCase(),
      url: exp.url,
      isClickable: true
    })),
    {
      id: "aegis-demo",
      type: "button",
      title: "AEGIS DEMO",
      isClickable: true
    }
  ]
  return tabs
}

export const ScreenUI = ({ onLoad, visible }: ScreenUIProps) => {
  const onLoadRef = useRef(onLoad)
  onLoadRef.current = onLoad
  const aegisStatus = useArcadeStore((s) => s.aegisStatus)
  const aegisProgress = useArcadeStore((s) => s.aegisProgress)
  const aegisStatusMessage = useArcadeStore((s) => s.aegisStatusMessage)
  const aegisScanResult = useArcadeStore((s) => s.aegisScanResult)
  const [pulseOpacity, setPulseOpacity] = useState(1)

  const fontFamilies = useMemo(
    () => ({
      ffflauta: {
        normal: "/fonts/ffflauta.json"
      }
    }),
    []
  )

  useEffect(() => {
    if (visible) {
      useArcadeStore.getState().setLabTabs([])
      onLoadRef.current?.()
    }
  }, [visible])

  // Pulse animation for idle state
  useEffect(() => {
    if (aegisStatus !== "idle") return
    let frame: number
    let t = 0
    const tick = () => {
      t += 0.03
      setPulseOpacity(0.5 + Math.sin(t) * 0.5)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [aegisStatus])

  return (
    <group visible={visible} scale={[-1, 1, 1]}>
      <Container
        width={590}
        height={390}
        backgroundColor={COLORS_THEME.black}
        positionType="relative"
        display="flex"
        flexDirection="column"
        paddingY={24}
        paddingX={18}
        {...({
          fontFamilies,
          "*": {
            fontFamily: "ffflauta",
            fontSize: 13,
            fontWeight: "normal",
            color: COLORS_THEME.primary
          }
        } as any)}
      >
        <Container
          width={"100%"}
          height={"100%"}
          borderWidth={1.5}
          borderColor={COLORS_THEME.primary}
          borderRadius={10}
          paddingY={10}
          paddingX={14}
          flexDirection="column"
          gap={8}
        >
          {/* Header */}
          <Container
            width={"100%"}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Container flexDirection="column">
              <Text fontSize={22} color={COLORS_THEME.primary}>
                AEGIS
              </Text>
              <Text fontSize={8} color={COLORS_THEME.gray}>
                FORENSIC AUDIT TERMINAL v2.1
              </Text>
            </Container>
            <Container flexDirection="column" alignItems="flex-end">
              <Text fontSize={8} color={COLORS_THEME.gray}>
                FULCRUM TECHNOLOGIES
              </Text>
              <Text fontSize={8} color={COLORS_THEME.primary}>
                {aegisStatus === "idle"
                  ? "READY"
                  : aegisStatus === "complete"
                    ? "COMPLETE"
                    : "PROCESSING"}
              </Text>
            </Container>
          </Container>

          {/* Divider */}
          <Container
            width={"100%"}
            height={1}
            backgroundColor={COLORS_THEME.primary}
            {...({ opacity: 0.3 } as any)}
          />

          {/* Main Content - Idle */}
          {aegisStatus === "idle" && (
            <Container
              width={"100%"}
              flexGrow={1}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={12}
            >
              <Text
                fontSize={16}
                color={COLORS_THEME.primary}
                {...({ opacity: pulseOpacity } as any)}
              >
                DROP ESTIMATE HERE
              </Text>
              <Container
                width={200}
                height={100}
                borderWidth={2}
                borderColor={COLORS_THEME.primary}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={6}
              >
                <Text fontSize={24} color={COLORS_THEME.primary}>
                  PDF
                </Text>
                <Text fontSize={8} color={COLORS_THEME.gray}>
                  DRAG & DROP OR CLICK TO UPLOAD
                </Text>
              </Container>
              <Text fontSize={9} color={COLORS_THEME.gray}>
                SUPPORTS CCC ONE, MITCHELL, AUDATEX FORMATS
              </Text>
            </Container>
          )}

          {/* Main Content - Scanning */}
          {(aegisStatus === "scanning" || aegisStatus === "analyzing") && (
            <Container
              width={"100%"}
              flexGrow={1}
              flexDirection="column"
              gap={10}
              paddingTop={8}
            >
              <Text fontSize={14} color={COLORS_THEME.secondary}>
                SCANNING...
              </Text>

              {/* Progress bar */}
              <Container width={"100%"} height={6} backgroundColor="#1a1a1a">
                <Container
                  width={`${aegisProgress}%` as any}
                  height={6}
                  backgroundColor={COLORS_THEME.primary}
                />
              </Container>

              <Text fontSize={10} color={COLORS_THEME.primary}>
                {aegisStatusMessage}
              </Text>

              {/* Scan output lines */}
              <Container
                width={"100%"}
                flexDirection="column"
                gap={3}
                paddingTop={6}
              >
                {aegisProgress > 15 && (
                  <Text fontSize={8} color={COLORS_THEME.green}>
                    [OK] Estimate format detected: CCC ONE
                  </Text>
                )}
                {aegisProgress > 30 && (
                  <Text fontSize={8} color={COLORS_THEME.green}>
                    [OK] Vehicle identified: 2023 Toyota RAV4
                  </Text>
                )}
                {aegisProgress > 45 && (
                  <Text fontSize={8} color={COLORS_THEME.secondary}>
                    [!!] 3 ADAS calibrations required — not on estimate
                  </Text>
                )}
                {aegisProgress > 60 && (
                  <Text fontSize={8} color={COLORS_THEME.secondary}>
                    [!!] 7 one-time-use parts missing
                  </Text>
                )}
                {aegisProgress > 75 && (
                  <Text fontSize={8} color={COLORS_THEME.secondary}>
                    [!!] 5 R&I operations not included
                  </Text>
                )}
                {aegisProgress > 90 && (
                  <Text fontSize={8} color={COLORS_THEME.green}>
                    [OK] Cross-referencing labor time databases...
                  </Text>
                )}
              </Container>
            </Container>
          )}

          {/* Main Content - Complete */}
          {aegisStatus === "complete" && aegisScanResult && (
            <Container
              width={"100%"}
              flexGrow={1}
              flexDirection="column"
              gap={6}
              paddingTop={4}
            >
              <Container
                width={"100%"}
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text fontSize={9} color={COLORS_THEME.gray}>
                  SCAN: {aegisScanResult.scan_id}
                </Text>
                <Text fontSize={9} color={COLORS_THEME.gray}>
                  {aegisScanResult.estimating_system}
                </Text>
              </Container>

              <Text fontSize={10} color={COLORS_THEME.white}>
                {aegisScanResult.vehicle}
              </Text>

              {/* Results summary box */}
              <Container
                width={"100%"}
                backgroundColor="#0a1a2a"
                padding={8}
                flexDirection="column"
                gap={4}
                borderWidth={1}
                borderColor={COLORS_THEME.primary}
              >
                <Text fontSize={11} color={COLORS_THEME.secondary}>
                  {aegisScanResult.findings.missing_operations} MISSING
                  OPERATIONS FOUND
                </Text>
                <Text fontSize={18} color={COLORS_THEME.green}>
                  SUPPLEMENT VALUE:{" "}
                  {aegisScanResult.findings.total_supplement_value}
                </Text>
              </Container>

              {/* Category breakdown */}
              <Container width={"100%"} flexDirection="column" gap={3}>
                {aegisScanResult.categories.map((cat, i) => (
                  <Container
                    key={i}
                    width={"100%"}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Text fontSize={9} color={COLORS_THEME.white}>
                      {cat.name} ({cat.count})
                    </Text>
                    <Text fontSize={9} color={COLORS_THEME.green}>
                      {cat.value}
                    </Text>
                  </Container>
                ))}
              </Container>

              {/* Actions */}
              <Container
                width={"100%"}
                flexDirection="row"
                justifyContent="center"
                gap={20}
                paddingTop={4}
              >
                <Text fontSize={10} color={COLORS_THEME.primary}>
                  [DOWNLOAD REPORT]
                </Text>
                <Text fontSize={10} color={COLORS_THEME.primary}>
                  [NEW SCAN]
                </Text>
              </Container>
            </Container>
          )}

          {/* Bottom status bar */}
          <Container
            width={"100%"}
            height={1}
            backgroundColor={COLORS_THEME.primary}
            {...({ opacity: 0.3 } as any)}
          />
          <Container
            width={"100%"}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text fontSize={7} color={COLORS_THEME.gray}>
              AEGIS ENGINE v2.1.0 | 12 AI AGENTS ACTIVE
            </Text>
            <Text fontSize={7} color={COLORS_THEME.gray}>
              FULCRUMTECHNOLOGIES.AI
            </Text>
          </Container>
        </Container>
      </Container>
    </group>
  )
}
