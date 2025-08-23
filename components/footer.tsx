"use client"

import { GithubLogo, DiscordLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-removebg-preview-ISnR5Vln2gDrQguJp5x0bwL5zxVMYa.png"
                alt="HackClubSBS Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-hackclub-red">HackClubSBS</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering student developers to build, learn, and innovate together. Join our community and shape the
              future of technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: GithubLogo, href: "https://github.com/hackclubsbs" },
                { icon: DiscordLogo, href: "https://discord.gg/XP72PfRYEw" },
                { icon: InstagramLogo, href: "https://instagram.com/hackclubsbs" },
                { icon: LinkedinLogo, href: "https://linkedin.com/company/hackclubsbs" },
                { icon: TwitterLogo, href: "https://x.com/hackclubsbs" },
                { icon: WhatsappLogo, href: "https://chat.whatsapp.com/DVF3LM8JmnG0Kg9hwwcjIG" }, // WhatsApp
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-hackclub-red transition-colors"
                >
                  <social.icon className="h-5 w-5" weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Events", href: "#events" },
                { name: "Join Us", href: "#social" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-hackclub-red transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Shanti Business School,</li>
              <li>Ahmedabad</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} HackClubSBS. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-hackclub-red" /> by HackClubSBS Team
          </p>
        </div>
      </div>
    </footer>
  )
}
