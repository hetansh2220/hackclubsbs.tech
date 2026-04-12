"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "HackClubSBS Website",
    description:
      "A modern, responsive website built for HackClubSBS to showcase projects, events, and student achievements while fostering a vibrant coding community.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "TypeScript"],
    github: "https://github.com/HackClubSBS/hackclubsbs.tech",
    demo: "https://www.hackclubsbs.tech/",
    featured: true,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Top divider — diagonal stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="sticker text-[10px] mb-4 inline-block">What we shipped</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mt-4">
            Our{" "}
            <span className="text-hackclub-red italic">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-base leading-relaxed">
            From concept to launch — real products built by real students.
          </p>
        </motion.div>

        {/* Featured Project — hero card */}
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="group border-3 border-foreground bg-card relative hover:shadow-[8px_8px_0_var(--hackclub-red)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
              {/* Featured stamp */}
              {project.featured && (
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-hackclub-yellow text-hackclub-dark px-3 py-1.5 font-black text-xs uppercase tracking-wider rotate-3 shadow-[2px_3px_0_rgba(0,0,0,0.2)] flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left — info */}
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 group-hover:text-hackclub-red transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={tech}
                          className={`inline-block border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                            i % 2 === 0 ? "-rotate-1" : "rotate-1"
                          } hover:bg-hackclub-red hover:text-white hover:border-hackclub-red transition-colors cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — actions */}
                  <div className="flex lg:flex-col gap-3 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs font-black uppercase tracking-wider hover:bg-hackclub-red hover:shadow-[4px_4px_0_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-hackclub-red text-white px-6 py-3 text-xs font-black uppercase tracking-wider hover:shadow-[4px_4px_0_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
