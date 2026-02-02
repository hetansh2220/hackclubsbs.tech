"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HackTheGapSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="hack-the-gap" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-hackclub-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-hackclub-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-hackclub-red/10 border border-hackclub-red/20 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hackclub-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-hackclub-red"></span>
            </span>
            <span className="text-sm font-semibold text-hackclub-red tracking-wide uppercase">Past Events</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-hackclub-red">Hackathons</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the moments from our flagship events where innovation meets collaboration
          </p>
        </div>

        {/* Event Card */}
        <Link href="/hack-the-gap-2026">
          <div
            className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card Background Image */}
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dr2qmyios/image/upload/f_auto,q_auto,w_1200,c_limit/hack-the-gap-2026/PXL_20260130_124937356.jpg"
                alt="Hack The Gap 2026 - Final Group Photo"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Animated Border Effect */}
              <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 ${
                isHovered ? "border-hackclub-red" : "border-transparent"
              }`} />
            </div>

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 bg-hackclub-red text-white rounded-full px-3 py-1 text-sm font-medium mb-4">
                <Trophy className="w-4 h-4" />
                <span>6 Winners</span>
              </div>

              {/* Event Title */}
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-hackclub-red to-orange-400 bg-clip-text text-transparent">
                  Hack The Gap
                </span>{" "}
                2026
              </h3>

              {/* Event Description */}
              <p className="text-white/80 text-base sm:text-lg mb-4 max-w-xl">
                An inter-college hackathon bridging gaps in technology
              </p>

              {/* Event Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="w-4 h-4 text-hackclub-red" />
                  <span className="text-sm">January 30, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4 text-hackclub-red" />
                  <span className="text-sm">SBS Campus</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Users className="w-4 h-4 text-hackclub-red" />
                  <span className="text-sm">50+ Participants</span>
                </div>
              </div>

              {/* View Gallery CTA */}
              <div className={`inline-flex items-center gap-2 text-hackclub-red font-semibold transition-all duration-300 ${
                isHovered ? "gap-4" : "gap-2"
              }`}>
                <span>View Gallery</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`} />
              </div>
            </div>

            {/* Corner Decorations */}
            <div className={`absolute top-4 right-4 w-12 h-12 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-hackclub-red rounded-tr-lg" />
            </div>
            <div className={`absolute bottom-4 left-4 w-12 h-12 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-hackclub-red rounded-bl-lg" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
