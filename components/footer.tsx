"use client"

import { GithubLogo, DiscordLogo, InstagramLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "phosphor-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: GithubLogo, href: "https://github.com/hackclubsbs" },
    { icon: DiscordLogo, href: "https://discord.gg/XP72PfRYEw" },
    { icon: InstagramLogo, href: "https://instagram.com/hackclubsbs" },
    { icon: LinkedinLogo, href: "https://linkedin.com/company/hackclubsbs" },
    { icon: TwitterLogo, href: "https://x.com/hackclubsbs" },
    { icon: WhatsappLogo, href: "https://chat.whatsapp.com/DVF3LM8JmnG0Kg9hwwcjIG" },
  ]

  return (
    <footer className="relative">
      {/* Top stripe */}
      <div className="h-2 bg-hackclub-red" />

      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="HackClubSBS" className="w-8 h-8" />
                <span className="font-black text-lg tracking-tight">
                  <span className="text-hackclub-red">Hack</span>ClubSBS
                </span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed max-w-sm mb-6">
                Empowering student developers to build, learn, and innovate together.
                A student-run tech collective at Shanti Business School, Ahmedabad.
              </p>
              <div className="flex gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border-2 border-background/20 flex items-center justify-center text-background/50 hover:bg-hackclub-red hover:border-hackclub-red hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <social.icon className="h-4 w-4" weight="fill" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-hackclub-red mb-4">
                Navigate
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Events", href: "#events" },
                  { name: "Connect", href: "#social" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/50 hover:text-hackclub-red transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="md:col-span-3">
              <h3 className="font-black text-xs uppercase tracking-[0.2em] text-hackclub-red mb-4">
                Location
              </h3>
              <address className="not-italic text-background/50 text-sm leading-relaxed">
                Shanti Business School
                <br />
                Ahmedabad, Gujarat
                <br />
                India
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-background/40 text-xs font-mono">
              &copy; {currentYear} HackClubSBS. All rights reserved.
            </p>
            <p className="text-background/40 text-xs">
              Built with{" "}
              <span className="text-hackclub-red font-bold">&lt;3</span>{" "}
              by the HackClubSBS team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
