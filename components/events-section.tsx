"use client"

import { useEffect, useRef, useState } from "react"

const upcomingEvents: any[] = [] // empty to show "Coming Soon"

export function EventsSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section
      ref={sectionRef}
      id="events"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Events & <span className="text-hackclub-red">Workshops</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our exciting events, workshops, and hackathons. Learn new
            skills, network with peers, and be part of our thriving tech
            community.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
       

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* your event cards will render here */}
            </div>
          ) : (
            <div className="text-center text-2xl text-hackclub-red font-semibold">
              🚀 Coming Soon
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
