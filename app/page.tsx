"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { EventsSection } from "@/components/events-section"
import { HackTheGapSection } from "@/components/hack-the-gap-section"
import { SocialHubSection } from "@/components/social-hub-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden grain">
      <Navigation />
      <HeroSection />
      {/* Marquee ticker divider */}
      <div className="bg-hackclub-red text-white py-2.5 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-[0.2em] mr-8">
              <span>Build</span>
              <span className="text-hackclub-yellow">★</span>
              <span>Break</span>
              <span className="text-hackclub-yellow">★</span>
              <span>Learn</span>
              <span className="text-hackclub-yellow">★</span>
              <span>Repeat</span>
              <span className="text-hackclub-yellow">★</span>
              <span>Hack the Limits</span>
              <span className="text-hackclub-yellow">★</span>
              <span>Ship it</span>
              <span className="text-hackclub-yellow">★</span>
              <span>No Gatekeeping</span>
              <span className="text-hackclub-yellow">★</span>
              <span>Just Code</span>
              <span className="text-hackclub-yellow">★</span>
            </span>
          ))}
        </div>
      </div>
      <AboutSection />
      <ProjectsSection />
      <EventsSection />
      <HackTheGapSection />
      <SocialHubSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
