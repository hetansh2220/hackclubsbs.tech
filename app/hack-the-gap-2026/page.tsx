"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

function ImageWithSkeleton({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shimmer" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

type Category = "all" | "opening" | "judging" | "prizes" | "final"

interface Photo {
  src: string
  alt: string
  category: Category
}

const photos: Photo[] = [
  // Opening Ceremony
  { src: "/hack-the-gap-2026/PXL_20260130_042643797.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/PXL_20260130_043424010.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/PXL_20260130_043446535.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/PXL_20260130_043450760.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/PXL_20260130_044815018.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_095408.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_095508.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_095557.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_095604.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_095610.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_095746.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_100209.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_20260130_100943.jpg", alt: "Hack The Gap 2026", category: "opening" },
  { src: "/hack-the-gap-2026/IMG_0885.JPG", alt: "Hack The Gap 2026", category: "opening" },

  // Judging Rounds
  { src: "/hack-the-gap-2026/IMG_0904.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0907.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0911.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0916.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0921.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0925.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0931.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0941.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0949.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0950.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0951.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0956.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0966.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0972.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0975.JPG", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_112031.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_112149.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_114049.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_114319.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_114336.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_114930.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_114934.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_115216.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_115337.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_132318.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_161742.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_20260130_165616.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/PXL_20260130_055034513.jpg", alt: "Hack The Gap 2026", category: "judging" },
  { src: "/hack-the-gap-2026/IMG_0981.JPG", alt: "Hack The Gap 2026", category: "judging" },

  // Prize Distribution
  { src: "/hack-the-gap-2026/PXL_20260130_122931784.jpg", alt: "Hack The Gap 2026", category: "prizes" },
  { src: "/hack-the-gap-2026/PXL_20260130_123047155.jpg", alt: "Hack The Gap 2026", category: "prizes" },
  { src: "/hack-the-gap-2026/PXL_20260130_123159643.jpg", alt: "Hack The Gap 2026", category: "prizes" },
  { src: "/hack-the-gap-2026/PXL_20260130_123332344.jpg", alt: "Hack The Gap 2026", category: "prizes" },
  { src: "/hack-the-gap-2026/PXL_20260130_123433786.jpg", alt: "Hack The Gap 2026", category: "prizes" },
  { src: "/hack-the-gap-2026/PXL_20260130_123537650.jpg", alt: "Hack The Gap 2026", category: "prizes" },

  // Final Group Photo
  { src: "/hack-the-gap-2026/PXL_20260130_124937356.jpg", alt: "Hack The Gap 2026", category: "final" },
]

const categories = [
  { id: "all" as Category, label: "All Photos", count: photos.length },
  { id: "opening" as Category, label: "Opening Ceremony", count: photos.filter(p => p.category === "opening").length },
  { id: "judging" as Category, label: "Judging Rounds", count: photos.filter(p => p.category === "judging").length },
  { id: "prizes" as Category, label: "Prize Distribution", count: photos.filter(p => p.category === "prizes").length },
  { id: "final" as Category, label: "Final Photo", count: photos.filter(p => p.category === "final").length },
]

export default function HackTheGap2026Page() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const filteredPhotos = selectedCategory === "all"
    ? photos
    : photos.filter(p => p.category === selectedCategory)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (e.key === "Escape") {
        setSelectedIndex(null)
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length)
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length)
      }
    }

    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedIndex, filteredPhotos.length])

  const nextImage = () => {
    setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length)
  }

  const prevImage = () => {
    setSelectedIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      <div className="relative overflow-hidden bg-gradient-to-b from-hackclub-red/10 via-background to-background">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-hackclub-red/10 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">

          <Link
            href="/#hack-the-gap"
            className={`inline-flex items-center gap-2 text-muted-foreground hover:text-hackclub-red transition-colors mb-8 group ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            } transition-all duration-500`}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>


          <div className={`transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="inline-flex items-center gap-2 bg-hackclub-red/10 border border-hackclub-red/20 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-hackclub-red" />
              <span className="text-sm font-semibold text-hackclub-red">Inter-College Hackathon</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-hackclub-red via-red-500 to-orange-500 bg-clip-text text-transparent">
                Hack The Gap
              </span>{" "}
              <span className="text-foreground">2026</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8">
              An inter-college hackathon bringing together innovators to bridge gaps in technology.
              Two tracks: Software and Open Innovation/Hardware, with 6 winning teams.
            </p>


            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5 text-hackclub-red" />
                <span>January 30, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-hackclub-red" />
                <span>Shanti Business School</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-hackclub-red" />
                <span>50+ Participants</span>
              </div>
            </div>

            {/* Winner Categories */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2">
                <Code className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Software Track: 1st, 2nd, 3rd</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2">
                <Lightbulb className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Open Innovation/Hardware: 1st, 2nd, 3rd</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-hackclub-red text-white shadow-lg shadow-hackclub-red/25"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === cat.id
                  ? "bg-white/20"
                  : "bg-background"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-hackclub-red/10 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${photo.category === "final" ? "sm:col-span-2 lg:col-span-3" : ""}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
              onClick={() => setSelectedIndex(index)}
            >
              <div className={`relative overflow-hidden ${
                photo.category === "final" ? "h-[300px] sm:h-[400px]" : "h-[250px] sm:h-[300px]"
              }`}>
                <ImageWithSkeleton
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  photo.category === "opening" ? "bg-purple-500/90 text-white" :
                  photo.category === "judging" ? "bg-blue-500/90 text-white" :
                  photo.category === "prizes" ? "bg-yellow-500/90 text-black" :
                  "bg-hackclub-red/90 text-white"
                } opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0`}>
                  {photo.category === "opening" && "Opening Ceremony"}
                  {photo.category === "judging" && "Judging Round"}
                  {photo.category === "prizes" && "Prize Distribution"}
                  {photo.category === "final" && "Final Photo"}
                </div>


                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-medium">{photo.alt}</p>
                </div>


                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-hackclub-red rounded-tr-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:text-hackclub-red hover:bg-white/10 transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-6 w-6" />
            </Button>


            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:text-hackclub-red hover:bg-white/10 transition-colors h-12 w-12"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:text-hackclub-red hover:bg-white/10 transition-colors h-12 w-12"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative max-w-6xl max-h-[85vh]">
              <ImageWithSkeleton
                src={filteredPhotos[selectedIndex].src}
                alt={filteredPhotos[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Caption */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white/90 text-base font-medium">{filteredPhotos[selectedIndex].alt}</p>
                <p className="text-white/50 text-sm mt-1">{selectedIndex + 1} / {filteredPhotos.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
