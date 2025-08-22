"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Events", href: "#events" },
  // { name: "Gallery", href: "#gallery" },
  { name: "Join Us", href: "#social" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => document.querySelector(item.href))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.slice(1))
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-hackclub-red/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("#home")}
            className="flex items-baseline text-2xl font-extrabold leading-none tracking-tight cursor-pointer"
          >
            <span className=" hover:text-hackclub-red transition-colors duration-300 text-hackclub-red ">
              HackClubSBS
            </span>
            
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-md font-medium transition-all duration-300 hover:text-hackclub-red hover:scale-105 relative group ${
                  activeSection === item.href.slice(1) ? "text-hackclub-red" : "text-muted-foreground"
                }`}
              >
                {item.name}
                <div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-hackclub-red rounded-full transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="hidden sm:flex bg-hackclub-red hover:bg-hackclub-red/90 text-white hover:scale-105 transition-all duration-200"
              onClick={() => handleNavClick("#social")}
            >
              Join Now
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-xl animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    activeSection === item.href.slice(1)
                      ? "text-hackclub-red bg-hackclub-red/10 shadow-lg"
                      : "text-muted-foreground hover:text-hackclub-red hover:bg-hackclub-red/5"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </button>
              ))}
              <Button
                size="sm"
                className="w-full mt-4 bg-hackclub-red hover:bg-hackclub-red/90 text-white hover:scale-105 transition-all duration-200 animate-glow"
                onClick={() => handleNavClick("#join")}
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
