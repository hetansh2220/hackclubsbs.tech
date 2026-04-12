"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"

export function LoadingSpinner() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 18 + 4
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8 inline-flex items-center gap-1"
        >
          <span className="bg-hackclub-red text-white font-black text-2xl px-3 py-1 -rotate-2 inline-block">
            HACK
          </span>
          <span className="font-black text-2xl tracking-tight">ClubSBS</span>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 mx-auto">
          <div className="h-1.5 bg-foreground/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-hackclub-red"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-xs font-mono text-muted-foreground mt-3 tracking-wider uppercase">
            Loading{Math.min(Math.round(progress), 100)}%
          </p>
        </div>
      </div>
    </div>
  )
}
