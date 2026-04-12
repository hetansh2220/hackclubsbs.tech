"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Code, Users, Lightbulb, Trophy } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const features = [
  {
    icon: Code,
    title: "Learn",
    description: "Real-world projects. Emerging tech. Solutions that matter — not just tutorials.",
    color: "bg-hackclub-red",
    rotate: "-rotate-1",
  },
  {
    icon: Users,
    title: "Community",
    description: "Peers and mentors who push each other forward. No egos, just growth.",
    color: "bg-hackclub-yellow",
    rotate: "rotate-1",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    description: "Think different. Experiment fearlessly. Ship groundbreaking ideas.",
    color: "bg-hackclub-red",
    rotate: "-rotate-0.5",
  },
  {
    icon: Trophy,
    title: "Compete",
    description: "Hackathons, coding challenges, global competitions. Prove yourself on stage.",
    color: "bg-hackclub-yellow",
    rotate: "rotate-1.5",
  },
]

const teamMembers = [
  {
    name: "Darsh ",
    role: "Backend",
    description: "Scalable systems & cloud architecture.",
    avatar: "/avatar/darsh.png",
    fallback: "D",
    tilt: "-rotate-2",
  },
  {
    name: "Hetansh",
    role: "Frontend",
    description: "Building interfaces & leading the club.",
    avatar: "/avatar/hetansh.png",
    fallback: "H",
    tilt: "rotate-1",
  },
  {
    name: "Dhrumil",
    role: "UX Design",
    description: "Inclusive tech spaces & beautiful experiences.",
    avatar: "/avatar/dhrumil.png",
    fallback: "D",
    tilt: "-rotate-1",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Diagonal stripe accent */}
      <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripes opacity-10 dark:opacity-5" />

      <div className="max-w-7xl mx-auto">
        {/* Header — editorial asymmetry */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="sticker text-[10px]">Who we are</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
            A student-led
            <br />
            initiative for{" "}
            <span className="relative inline-block">
              <span className="text-hackclub-red italic">builders</span>
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,5 Q150,1 200,6" stroke="var(--hackclub-red)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed">
            HackClubSBS is where curiosity meets opportunity. We help students learn,
            collaborate, and turn bold ideas into impactful solutions.
          </p>
        </motion.div>

        {/* Feature pillars — stacked cards with tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className={`border-3 border-foreground p-6 bg-card hover:shadow-[6px_6px_0_var(--hackclub-red)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative`}>
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-hackclub-red text-white flex items-center justify-center font-black text-xs rotate-3">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={`w-10 h-10 ${feature.color} ${feature.color === "bg-hackclub-yellow" ? "text-hackclub-dark" : "text-white"} flex items-center justify-center mb-4 ${feature.rotate}`}>
                  <feature.icon className="w-5 h-5" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="sticker sticker-yellow text-[10px] -rotate-3">The Crew</span>
            <div className="flex-1 h-0.5 bg-foreground/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className={`relative border-3 border-foreground p-6 bg-card hover:shadow-[6px_6px_0_var(--hackclub-yellow)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200`}>
                  {/* Avatar */}
                  <Avatar className={`w-14 h-14 rounded-none border-2 border-foreground bg-hackclub-red text-white mb-4 ${member.tilt}`}>
                    <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                    <AvatarFallback className="rounded-none bg-hackclub-red text-white font-black text-2xl">
                      {member.fallback}
                    </AvatarFallback>
                  </Avatar>

                  {/* Role sticker */}
                  <div className="inline-block bg-foreground text-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-3 -skew-x-3">
                    {member.role}
                  </div>

                  <h4 className="text-lg font-black tracking-tight mb-1">
                    {member.name}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
