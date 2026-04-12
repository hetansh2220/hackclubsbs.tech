"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { CalendarClock, Sparkles } from "lucide-react"

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="events" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes opacity-30" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="sticker text-[10px] mb-4 inline-block">Mark your calendar</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mt-4">
            Events &{" "}
            <span className="text-hackclub-red italic">Workshops</span>
          </h2>
        </motion.div>

        {/* Coming Soon — zine style */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="border-3 border-dashed border-foreground/30 p-12 sm:p-16 text-center relative bg-card">
            {/* Tape decoration */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-hackclub-yellow -rotate-1 opacity-90 z-10" />

            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-hackclub-red text-white flex items-center justify-center mx-auto rotate-6">
                <CalendarClock className="w-8 h-8" strokeWidth={1.5} />
              </div>
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
              Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed mb-6">
              New workshops and hackathons are being cooked up. Stay connected to be the first to know.
            </p>

            <div className="inline-flex items-center gap-2 bg-foreground/5 border-2 border-foreground/10 px-4 py-2 text-xs font-mono text-muted-foreground">
              <Sparkles className="w-3 h-3 text-hackclub-yellow" />
              Something big is brewing...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
