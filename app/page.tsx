"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { HackTheGapSection } from "@/components/hack-the-gap-section"
import { JoinUsSection } from "@/components/join-us-section"
import { SocialHubSection } from "@/components/social-hub-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EventsSection />
      <HackTheGapSection />
      {/* <GallerySection /> */}
      {/* <JoinUsSection /> */}
      <SocialHubSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
