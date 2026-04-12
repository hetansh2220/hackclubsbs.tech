"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Zap, Code2, Rocket } from "lucide-react"

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

 

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-[0.04] dark:opacity-[0.08]" />

      {/* Mouse-follow glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(236,55,80,0.12), transparent 60%)`,
        }}
      />

      {/* Floating sticker decorations */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [12, 14, 12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[10%] hidden lg:block"
      >
        <div className="sticker sticker-yellow text-[10px] rotate-12">
          Est. 2025
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[15%] hidden lg:block"
      >
        <div className="bg-foreground text-background px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider -rotate-6 shadow-[3px_3px_0_var(--hackclub-red)]">
          Open Source
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0], rotate: [3, 5, 3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-[5%] hidden xl:block"
      >
        <div className="w-12 h-12 border-3 border-hackclub-red border-dashed rounded-full flex items-center justify-center rotate-3">
          <Zap className="w-5 h-5 text-hackclub-red" />
        </div>
      </motion.div>

      {/* Large ghost text */}
      <div className="absolute -bottom-6 -left-4 text-[18vw] font-black text-foreground/[0.02] dark:text-foreground/[0.03] leading-none select-none pointer-events-none tracking-tighter">
        HACKCLUB
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <span className="sticker">
              Student-Run Tech Collective
            </span>
          </motion.div>

          {/* Headline — massive, mixed weights */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter mb-8"
          >
            <span className="block">Unleash</span>
            <span className="block text-hackclub-red italic">Your Potential,</span>
            <span className="block">
              Hack the{" "}
              <span className="relative inline-block">
                <span className="marker-highlight">Limits</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-1 left-0 h-1 bg-hackclub-red"
                />
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
          >
            We build things. We break things. We learn by doing.{" "}
            <span className="font-bold text-foreground">No gatekeeping. No prerequisites.</span>{" "}
            Just code and community at{" "}
            <span className="font-mono text-hackclub-red font-bold">SBS Ahmedabad</span>.
          </motion.p>

          {/* CTA Buttons — zine style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => document.querySelector("#social")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-hackclub-red text-white px-8 py-4 text-sm font-black uppercase tracking-wider hover:shadow-[6px_6px_0_var(--foreground)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              Join the Club
            </button>
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-transparent text-foreground px-8 py-4 text-sm font-black uppercase tracking-wider border-3 border-foreground hover:bg-foreground hover:text-background hover:shadow-[6px_6px_0_var(--hackclub-red)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              See Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
