"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "motion/react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Events", href: "#events" },
  { name: "Connect", href: "#social" },
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b-3 border-hackclub-red shadow-[0_4px_0_0_var(--hackclub-red)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — zine style */}
          <button
            onClick={() => handleNavClick("#home")}
            className="group"
          >
            <img src="/logo.png" alt="HackClubSBS" className="w-20 h-20 group-hover:rotate-6 transition-transform duration-200" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-3 py-1.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-hackclub-red -skew-x-6"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="hidden sm:inline-flex bg-foreground text-background px-4 py-2 text-xs font-black uppercase tracking-wider hover:bg-hackclub-red hover:text-white transition-colors duration-200 -skew-x-3 hover:skew-x-0"
              onClick={() => handleNavClick("#social")}
            >
              Join Us
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-b-3 border-hackclub-red"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "bg-hackclub-red text-white -skew-x-3"
                      : "text-muted-foreground hover:text-foreground hover:pl-6"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
