"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import {
  GithubLogo,
  DiscordLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
  ArrowSquareOut,
} from "phosphor-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubLogo,
    url: "https://github.com/HackClubSBS",
    handle: "@HackClubSBS",
    description: "Open source projects & contributions",
    tilt: "-rotate-1",
  },
  {
    name: "Discord",
    icon: DiscordLogo,
    url: "https://discord.gg/XP72PfRYEw",
    handle: "HackClubSBS",
    description: "Real-time discussions & community",
    tilt: "rotate-1",
  },
  {
    name: "Instagram",
    icon: InstagramLogo,
    url: "https://www.instagram.com/hackclubsbs?igsh=eXhkNms4N3FhbDE1",
    handle: "@hackclubsbs",
    description: "Behind-the-scenes & event highlights",
    tilt: "-rotate-0.5",
  },
  {
    name: "LinkedIn",
    icon: LinkedinLogo,
    url: "https://linkedin.com/company/hackclubsbs",
    handle: "HackClubSBS",
    description: "Professional network & opportunities",
    tilt: "rotate-0.5",
  },
  {
    name: "Twitter / X",
    icon: TwitterLogo,
    url: "https://x.com/hackclubsbs",
    handle: "@hackclubsbs",
    description: "Updates & tech insights",
    tilt: "-rotate-1",
  },
  {
    name: "WhatsApp",
    icon: WhatsappLogo,
    url: "https://chat.whatsapp.com/DVF3LM8JmnG0Kg9hwwcjIG",
    handle: "Community",
    description: "Quick updates & discussions",
    tilt: "rotate-1",
  },
]

export function SocialHubSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="social" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="sticker text-[10px] mb-4 inline-block rotate-1">Join the movement</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mt-4">
            Find us{" "}
            <span className="text-hackclub-red italic">everywhere</span>.
          </h2>
        </motion.div>

        {/* Social cards grid — tilted, punky */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group block"
            >
              <div className="border-3 border-foreground p-5 bg-card hover:shadow-[6px_6px_0_var(--hackclub-red)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative h-full">
                {/* Arrow indicator */}
                <ArrowSquareOut
                  size={16}
                  weight="bold"
                  className="absolute top-4 right-4 text-muted-foreground/30 group-hover:text-hackclub-red transition-colors"
                />

                {/* Icon */}
                <div className={`w-11 h-11 bg-hackclub-red text-white flex items-center justify-center mb-4 ${social.tilt} group-hover:rotate-0 transition-transform duration-200`}>
                  <social.icon size={22} weight="fill" />
                </div>

                <h3 className="font-black text-lg tracking-tight mb-0.5 group-hover:text-hackclub-red transition-colors">
                  {social.name}
                </h3>
                <span className="text-xs font-mono text-hackclub-red font-bold block mb-2">
                  {social.handle}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {social.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner — bold, zine-style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="bg-hackclub-red text-white p-8 sm:p-10 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 dot-grid opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 0.8px, transparent 0.8px)" }} />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                  Ready to hack?
                </h3>
                <p className="text-white/80 text-sm max-w-md">
                  Join 50+ student developers building the future. No experience needed.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://discord.gg/XP72PfRYEw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-hackclub-red px-5 py-3 text-xs font-black uppercase tracking-wider hover:bg-hackclub-dark hover:text-white hover:shadow-[4px_4px_0_white] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <DiscordLogo size={16} weight="fill" />
                  Discord
                </a>
                <a
                  href="https://github.com/HackClubSBS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent text-white px-5 py-3 text-xs font-black uppercase tracking-wider border-2 border-white hover:bg-white hover:text-hackclub-red transition-colors duration-200"
                >
                  <GithubLogo size={16} weight="fill" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
