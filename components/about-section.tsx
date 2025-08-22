"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Lightbulb, Trophy } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Hands-on Learning",
    description:
      "Gain practical experience by working on real-world projects, exploring emerging technologies, and building solutions that matter.",
  },
  {
    icon: Users,
    title: "Thriving Community",
    description:
      "Be part of a collaborative ecosystem of passionate peers, mentors, and tech enthusiasts who support and inspire each other.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description:
      "Unlock your potential to think differently, experiment fearlessly, and bring groundbreaking ideas to life.",
  },
  {
    icon: Trophy,
    title: "Opportunities to Excel",
    description:
      "Showcase your talent at hackathons, coding challenges, and global competitions, gaining recognition and invaluable experience.",
  },
]


const teamMembers = [
  {
    name: "Prof. Reena Paswan",
    role: "Mentor",
    description: "A dedicated mentor fostering innovation, discipline, and excellence.",
  },
  {
    name: "Hetansh Sachaniya",
    role: "Founder",
    description: "Frontend engineer and community builder, leading HackClubSBS toward creativity and impact.",
  },
  {
    name: "Darsh Bhatt",
    role: "Co-Founder",
    description: "Backend engineer focused on scalable systems and cloud architecture.",
  },
  {
    name: "Dhrumil Dholakiya",
    role: "Co-Founder",
    description: "UX designer and community builder dedicated to inclusive tech spaces.",
  },
]

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-hackclub-red">HackClubSBS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
         HackClubSBS is a student-led initiative dedicated to empowering the next generation of innovators, developers, and creators. We provide a platform where curiosity meets opportunity—helping students learn, collaborate, and turn bold ideas into impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group hover:shadow-lg hover:shadow-hackclub-red/10 transition-all duration-300 hover:scale-105 border-border/50 hover:border-hackclub-red/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-hackclub-red/10 flex items-center justify-center group-hover:bg-hackclub-red/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-hackclub-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-hackclub-red transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-hackclub-red">Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`group hover:shadow-lg hover:shadow-hackclub-red/10 transition-all duration-300 hover:scale-105 border-border/50 hover:border-hackclub-red/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-hackclub-red/20 to-hackclub-red/10 flex items-center justify-center group-hover:from-hackclub-red/30 group-hover:to-hackclub-red/20 transition-all">
                    <span className="text-2xl font-bold text-hackclub-red">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-hackclub-red transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-hackclub-red text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
