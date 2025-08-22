"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Mail, User, Heart } from "lucide-react"

const interests = [
  "Web Development",
  "Mobile Development",
  "AI & Machine Learning",
  "Data Science",
  "Cybersecurity",
  "Game Development",
  "UI/UX Design",
  "DevOps",
  "Blockchain",
  "IoT",
  "Other",
]

export function JoinUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section ref={sectionRef} id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in zoom-in duration-500">
            <CheckCircle className="h-16 w-16 text-hackclub-red mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Welcome to HackClubSBS!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for joining our community. We'll be in touch soon with more information about upcoming events
              and opportunities.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-hackclub-red text-hackclub-red hover:bg-hackclub-red hover:text-white bg-transparent"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join <span className="text-hackclub-red">Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to be part of something amazing? Join HackClubSBS and connect with passionate developers, attend
            exciting workshops, and build the future of technology together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Why Join HackClubSBS?</h3>
            <div className="space-y-4">
              {[
                "Access to exclusive workshops and tech talks",
                "Networking opportunities with industry professionals",
                "Collaborative projects and hackathon participation",
                "Mentorship from experienced developers",
                "Career guidance and internship opportunities",
                "Free resources and learning materials",
              ].map((benefit, index) => (
                <div
                  key={benefit}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-hackclub-red mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card
            className={`transition-all duration-1000 delay-400 hover:shadow-xl hover:shadow-hackclub-red/10 border-border/50 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join the Club</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-hackclub-red" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="focus:ring-hackclub-red focus:border-hackclub-red"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-hackclub-red" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="focus:ring-hackclub-red focus:border-hackclub-red"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-hackclub-red" />
                    Primary Interest
                  </Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger className="focus:ring-hackclub-red focus:border-hackclub-red">
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {interests.map((interest) => (
                        <SelectItem key={interest} value={interest}>
                          {interest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about yourself (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your background, goals, or what you hope to achieve with HackClubSBS..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="focus:ring-hackclub-red focus:border-hackclub-red resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-hackclub-red hover:bg-hackclub-red/90 text-white py-3 text-lg font-semibold hover:scale-105 transition-all duration-200"
                  disabled={isLoading || !formData.name || !formData.email || !formData.interest}
                >
                  {isLoading ? "Joining..." : "Join HackClubSBS"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
