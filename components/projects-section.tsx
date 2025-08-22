"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "HackClubSBS Website",
    description:
      "A modern, responsive website built for HackClubSBS to showcase projects, events, and student achievements while fostering a vibrant coding community.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "TypeScript"],
    github: "#",
    demo: "#",
    featured: true,
  },
]

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-hackclub-red">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the innovative solutions our members have built. From AI-powered applications to sustainability
            tools, our projects showcase the creativity and technical skills of our community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-xl hover:shadow-hackclub-red/10 transition-all duration-500 hover:scale-105 border-border/50 hover:border-hackclub-red/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-hackclub-red transition-colors flex items-center justify-between">
                  {project.title}
                  {project.featured && (
                    <span className="bg-hackclub-red text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" /> Featured
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md group-hover:bg-hackclub-red/10 group-hover:text-hackclub-red transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-hackclub-red/30 text-hackclub-red hover:bg-hackclub-red hover:text-white transition-all bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-hackclub-red hover:bg-hackclub-red/90 text-white" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <Button
            variant="outline"
            size="lg"
            className="border-hackclub-red text-hackclub-red hover:bg-hackclub-red hover:text-white px-8 py-3 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-200 bg-transparent"
          >
            View All Projects
          </Button> */}
        </div>
      </div>
    </section>
  )
}
