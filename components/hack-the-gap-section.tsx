"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HackTheGapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="hack-the-gap" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="sticker sticker-yellow text-[10px] -rotate-3 mb-4 inline-block">Past Events</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mt-4">
            Our{" "}
            <span className="text-hackclub-red italic">Hackathons</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-base leading-relaxed">
            Relive the moments where innovation meets collaboration.
          </p>
        </motion.div>

        {/* Event Card — editorial photo card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="/hackthegap2026" className="block group">
            <div className="relative border-3 border-foreground overflow-hidden hover:shadow-[8px_8px_0_var(--hackclub-red)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dr2qmyios/image/upload/f_auto,q_auto,w_1200,c_limit/hack-the-gap-2026/PXL_20260130_124937356.jpg"
                  alt="Hack The Gap 2026 - Final Group Photo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Diagonal stripe accent corner */}
                <div className="absolute top-0 right-0 w-24 h-24 diagonal-stripes opacity-50" />
              </div>

              {/* Floating stamp badge */}
              <div className="absolute top-6 left-6 z-10">
                <motion.div
                  initial={{ scale: 2, rotate: -12, opacity: 0 }}
                  animate={isInView ? { scale: 1, rotate: -3, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-hackclub-yellow text-hackclub-dark px-3 py-1.5 font-black text-xs uppercase tracking-wider -rotate-3 shadow-[3px_3px_0_rgba(0,0,0,0.3)] flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    6 Winners
                  </div>
                </motion.div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.85] mb-3">
                  Hack The Gap{" "}
                  <span className="text-hackclub-red">2026</span>
                </h3>

                <p className="text-white/70 text-sm sm:text-base mb-6 max-w-lg">
                  An inter-college hackathon bridging gaps in technology
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
                  {[
                    { icon: Calendar, text: "January 30, 2026" },
                    { icon: MapPin, text: "SBS Campus" },
                    { icon: Users, text: "50+ Participants" },
                  ].map((stat) => (
                    <div key={stat.text} className="flex items-center gap-1.5 text-white/80 text-xs sm:text-sm font-mono">
                      <stat.icon className="w-3.5 h-3.5 text-hackclub-red" />
                      {stat.text}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-white text-hackclub-dark px-5 py-2.5 text-xs font-black uppercase tracking-wider group-hover:bg-hackclub-red group-hover:text-white transition-colors duration-200">
                  View Gallery
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
