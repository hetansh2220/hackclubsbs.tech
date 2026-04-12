"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300)
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-11 h-11 bg-hackclub-red text-white flex items-center justify-center shadow-[3px_3px_0_var(--foreground)] hover:shadow-[5px_5px_0_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 -rotate-2 hover:rotate-0"
      >
        <ArrowUp className="h-4 w-4" />
        <span className="sr-only">Scroll to top</span>
      </button>
    </div>
  )
}
