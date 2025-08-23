"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles, Code2, Zap } from "lucide-react"
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-hackclub-red/10" />

      {/* Professional geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, currentColor 1px, transparent 1px),
            linear-gradient(currentColor 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Professional diagonal lines overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            currentColor 2px,
            currentColor 4px
          )`,
          }}
        />
      </div>

      {/* Enhanced mouse-following gradient */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,55,80,0.15) 0%, rgba(236,55,80,0.05) 40%, transparent 70%)`,
        }}
      />

      {/* Professional floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Code2 className="h-6 w-6 text-hackclub-red/10 dark:text-hackclub-red/20" />
            ) : i % 3 === 1 ? (
              <Zap className="h-5 w-5 text-hackclub-red/15 dark:text-hackclub-red/25" />
            ) : (
              <Sparkles className="h-4 w-4 text-hackclub-red/12 dark:text-hackclub-red/22" />
            )}
          </div>
        ))}
      </div>

      {/* Content container */}
      <div
        className={`relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* === NEW HEADLINE === */}
        {/* === NEW HEADLINE (Single Tagline) === */}
       <h1
  className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight transition-all duration-1000 delay-300 
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
>
  <span className="transition-all duration-700 bg-gradient-to-r from-hackclub-red to-hackclub-red bg-[length:0%_100%] bg-no-repeat bg-left hover:bg-[length:100%_100%] bg-clip-text">
    Unleash Your Potential,
  </span>
  <br />
  <span className="transition-all duration-700 bg-gradient-to-r from-hackclub-red to-hackclub-red bg-[length:0%_100%] bg-no-repeat bg-left hover:bg-[length:100%_100%] bg-clip-text">
    Hack the Limits
  </span>
</h1>




        {/* === NEW SUBHEADLINE === */}
        <p
          className={`text-md sm:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 font-light ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          Hack the Limits” isn’t just about technology – it’s about mindset. At HackClubSBS, every member learns to think beyond the ordinary, collaborate fearlessly, and innovate without restrictions
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <Button
            size="lg"
            className="bg-hackclub-red hover:bg-hackclub-red/90 text-white px-10 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-hackclub-red/30 border-0"
            onClick={() => document.querySelector("#social")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join the Club
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-hackclub-red text-hackclub-red hover:bg-hackclub-red hover:text-white px-10 py-4 text-lg font-semibold rounded-2xl bg-transparent hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-hackclub-red/20"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            See Projects
          </Button>
        </div>

        <div
          className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-hackclub-red transition-colors duration-200 group"
          >
            <span className="text-sm font-medium mb-3 group-hover:scale-105 transition-transform">Discover More</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  )
}
