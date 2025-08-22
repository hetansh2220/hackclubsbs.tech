"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, MessageCircle, Instagram, Linkedin, Twitter, ExternalLink, Users, Phone } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/HackClubSBS",
    description: "Explore our open source projects and contribute to the community",

  },
  {
    name: "Discord",
    icon: MessageCircle,
    url: "https://discord.gg/XP72PfRYEw",
    description: "Join our Discord server for real-time discussions and support",

  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/hackclubsbs?igsh=eXhkNms4N3FhbDE1",
    description: "Follow us for behind-the-scenes content and event highlights",

  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/hackclubsbs",
    description: "Connect with us professionally and stay updated on opportunities",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/hackclubsbs",
    description: "Get the latest updates, announcements, and tech insights",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    url: "https://chat.whatsapp.com/your-community-link", // replace with your actual link
    description: "Join our WhatsApp community for quick updates and discussions",
  },
]

export function SocialHubSection() {
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
    <section id="social" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Connect With <span className="text-hackclub-red">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with HackClubSBS across all platforms. Join our vibrant online community, get updates on
            events, and engage with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {socialLinks.map((social, index) => (
            <Card
              key={social.name}
              className={`group hover:shadow-lg hover:shadow-hackclub-red/10 transition-all duration-300 hover:scale-105 border-border/50 hover:border-hackclub-red/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-hackclub-red/10 flex items-center justify-center group-hover:bg-hackclub-red/20 transition-colors">
                  <social.icon className="h-6 w-6 text-hackclub-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-hackclub-red transition-colors">
                  {social.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{social.description}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-hackclub-red hover:text-hackclub-red/80 transition-colors text-sm font-medium"
                >
                  Visit <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>


        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="bg-gradient-to-r from-hackclub-red/10 via-hackclub-red/5 to-hackclub-red/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't miss out on any updates! Follow us on your favorite platforms and be the first to know about new
              events, workshops, and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-hackclub-red hover:bg-hackclub-red/90 text-white hover:scale-105 transition-all duration-200"
                asChild
              >
                <a href="https://discord.gg/XP72PfRYEw" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Join Discord
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-hackclub-red text-hackclub-red hover:bg-hackclub-red hover:text-white hover:scale-105 transition-all duration-200 bg-transparent"
                asChild
              >
                <a href="https://github.com/HackClubSBS" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
