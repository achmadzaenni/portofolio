"use client"

import React, { forwardRef, useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import {
  IconBrandTypescript, IconBrandJavascript, IconBrandReact,
  IconBrandTailwind, IconBrandSupabase, IconBrandAndroid,
  IconBrandPython, IconBrandLaravel
} from "@tabler/icons-react"
import { relative } from "path"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; size?: number }
>(({ className, children, size = 88 }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-5 flex shrink-0 items-center justify-center rounded-full bg-transparent shadow-md",
        className
      )}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  )
})
Circle.displayName = "Circle"

const MySkill = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const div9Ref = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const circleSize = isMobile ? 52 : 88
  const iconSize   = isMobile ? 32 : 60
  const colGap     = isMobile ? 24 : 24
  const rowGap     = isMobile ? 60 : 140
  const centerW    = isMobile ? 72 : 100
  const centerH    = isMobile ? 30 : 40
  const centerFont = isMobile ? 13 : 20

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden top-0 left-0 right-0 bottom-0 flex items-center justify-center"
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: rowGap }}>

        {/* Kolom kiri */}
        <div style={{ display: "flex", flexDirection: "column", gap: colGap }}>
          <Circle ref={div1Ref} size={circleSize}>
            <IconBrandTypescript width={iconSize} height={iconSize} color="#3b82f6" />
          </Circle>
          <Circle ref={div5Ref} size={circleSize}>
            <IconBrandJavascript width={iconSize} height={iconSize} color="#eab308" />
          </Circle>
          <Circle ref={div8Ref} size={circleSize}>
            <IconBrandLaravel width={iconSize} height={iconSize} color="#ef4444" />
          </Circle>
          <Circle ref={div2Ref} size={circleSize}>
            <IconBrandReact width={iconSize} height={iconSize} color="#06b6d4" />
          </Circle>
        </div>

        {/* Center */}
        <div
          ref={div4Ref}
          className="z-10 flex shrink-0 items-center justify-center rounded-md bg-black font-bold text-white"
          style={{
            width: centerW,
            height: centerH,
            fontSize: centerFont,
            boxShadow: "0 0 50px rgba(0,255,255,0.4)",
          }}
        >
          My Skill
        </div>

        {/* Kolom kanan */}
        <div style={{ display: "flex", flexDirection: "column", gap: colGap }}>
          <Circle ref={div6Ref} size={circleSize}>
            <IconBrandSupabase width={iconSize} height={iconSize} color="#16a34a" />
          </Circle>
          <Circle ref={div3Ref} size={circleSize}>
            <IconBrandAndroid width={iconSize} height={iconSize} color="#22c55e" />
          </Circle>
          <Circle ref={div7Ref} size={circleSize}>
            <IconBrandPython width={iconSize} height={iconSize} color="#60a5fa" />
          </Circle>
          <Circle ref={div9Ref} size={circleSize}>
            <IconBrandTailwind width={iconSize} height={iconSize} color="#06b6d4" />
          </Circle>
        </div>
      </div>

      {/* Beams kiri → center */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-30} endYOffset={-10} duration={8} delay={0} reverse/>
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-10} duration={8} delay={2.5} reverse/>
      <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} curvature={10} duration={8} delay={4.5} reverse/>
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} curvature={30} endYOffset={10} duration={8} delay={5.5} reverse/>

      {/* Beams kanan → center */}
      <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} curvature={30} endYOffset={10} duration={8} delay={1}  />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={10} duration={8} delay={4}  />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={-10} duration={8} delay={5}  />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} curvature={-30} endYOffset={-10} duration={8} delay={6} />
    </div>
  )
}

export default MySkill