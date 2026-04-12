"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

function getOptimizedUrl(src: string, size: "thumb" | "full" = "thumb") {
  const transforms = size === "thumb"
    ? "f_auto,q_auto,w_600,c_limit"
    : "f_auto,q_auto,w_1400,c_limit"
  return src.replace("/image/upload/", `/image/upload/${transforms}/`)
}

function ImageWithSkeleton({ src, alt, className, size = "thumb" }: { src: string; alt: string; className?: string; size?: "thumb" | "full" }) {
  const [isLoading, setIsLoading] = useState(true)
  const optimizedSrc = getOptimizedUrl(src, size)

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </div>
  )
}

function LightboxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [hdLoaded, setHdLoaded] = useState(false)
  const thumbSrc = getOptimizedUrl(src, "thumb")
  const hdSrc = getOptimizedUrl(src, "full")

  return (
    <div className="relative">
      <img
        src={thumbSrc}
        alt={alt}
        className={`${className} ${hdLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
      />
      <img
        src={hdSrc}
        alt={alt}
        className={`${className} absolute inset-0 ${hdLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        onLoad={() => setHdLoaded(true)}
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

const CLOUDINARY_BASE = "https://res.cloudinary.com/dr2qmyios/image/upload/hack-the-gap-2026"

const photos: Photo[] = [
  // Opening Ceremony
  { src: `${CLOUDINARY_BASE}/PXL_20260130_042643797.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_043424010.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_043446535.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_043450760.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_044815018.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_095408.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_095508.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_095557.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_095604.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_095610.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_095746.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_100209.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_100943.jpg`, alt: "Hack The Gap 2026", category: "opening" },
  { src: `${CLOUDINARY_BASE}/IMG_0885.jpg`, alt: "Hack The Gap 2026", category: "opening" },

  // Judging Rounds
  { src: `${CLOUDINARY_BASE}/IMG_0904.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0907.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0911.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0916.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0921.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0925.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0931.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0941.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0949.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0950.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0951.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0956.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0966.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0972.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0975.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_112031.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_112149.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_114049.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_114319.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_114336.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_114930.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_114934.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_115216.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_115337.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_132318.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_161742.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_20260130_165616.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_055034513.jpg`, alt: "Hack The Gap 2026", category: "judging" },
  { src: `${CLOUDINARY_BASE}/IMG_0981.jpg`, alt: "Hack The Gap 2026", category: "judging" },

  // Prize Distribution
  { src: `${CLOUDINARY_BASE}/PXL_20260130_122931784.jpg`, alt: "Hack The Gap 2026", category: "prizes" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_123047155.jpg`, alt: "Hack The Gap 2026", category: "prizes" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_123159643.jpg`, alt: "Hack The Gap 2026", category: "prizes" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_123332344.jpg`, alt: "Hack The Gap 2026", category: "prizes" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_123433786.jpg`, alt: "Hack The Gap 2026", category: "prizes" },
  { src: `${CLOUDINARY_BASE}/PXL_20260130_123537650.jpg`, alt: "Hack The Gap 2026", category: "prizes" },

  // Final Group Photo
  { src: `${CLOUDINARY_BASE}/PXL_20260130_124937356.jpg`, alt: "Hack The Gap 2026", category: "final" },
]

const categories = [
  { id: "all" as Category, label: "All", count: photos.length },
  { id: "opening" as Category, label: "Opening", count: photos.filter(p => p.category === "opening").length },
  { id: "judging" as Category, label: "Judging", count: photos.filter(p => p.category === "judging").length },
  { id: "prizes" as Category, label: "Prizes", count: photos.filter(p => p.category === "prizes").length },
  { id: "final" as Category, label: "Final", count: photos.filter(p => p.category === "final").length },
]

const categoryColors: Record<Category, string> = {
  all: "bg-hackclub-red",
  opening: "bg-purple-600",
  judging: "bg-blue-600",
  prizes: "bg-hackclub-yellow text-hackclub-dark",
  final: "bg-hackclub-red",
}

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
      if (e.key === "Escape") setSelectedIndex(null)
      else if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length)
      else if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length)
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

  useEffect(() => {
    if (selectedIndex === null) return
    const preload = (index: number) => {
      const img = new Image()
      img.src = getOptimizedUrl(filteredPhotos[index].src, "full")
    }
    preload((selectedIndex + 1) % filteredPhotos.length)
    preload((selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length)
  }, [selectedIndex, filteredPhotos])

  return (
    <main className="min-h-screen bg-background grain">
      {/* ═══ HERO HEADER ═══ */}
      <div className="relative overflow-hidden border-b-3 border-hackclub-red">
        {/* Diagonal stripes corner */}
        <div className="absolute top-0 right-0 w-40 h-40 diagonal-stripes opacity-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 diagonal-stripes opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#hack-the-gap"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-hackclub-red transition-colors mb-10 group text-sm font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </motion.div>

          {/* Title area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Sticker badge */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="sticker text-[10px]">
                <Trophy className="w-3 h-3 inline mr-1" />
                Inter-College Hackathon
              </span>
              <span className="sticker sticker-yellow text-[10px] rotate-2">
                6 Winners
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
              Hack The Gap{" "}
              <span className="text-hackclub-red italic">2026</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed mb-8">
              An inter-college hackathon bringing together innovators to bridge gaps in technology.
              Two tracks — Software and Open Innovation/Hardware.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: Calendar, text: "January 30, 2026" },
                { icon: MapPin, text: "Shanti Business School" },
                { icon: Users, text: "50+ Participants" },
              ].map((stat) => (
                <div key={stat.text} className="flex items-center gap-2 text-sm">
                  <stat.icon className="w-4 h-4 text-hackclub-red" />
                  <span className="font-medium">{stat.text}</span>
                </div>
              ))}
            </div>

            {/* Track badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 border-2 border-blue-500 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Code className="w-3.5 h-3.5 text-blue-500" />
                <span>Software Track: 1st, 2nd, 3rd</span>
              </div>
              <div className="inline-flex items-center gap-2 border-2 border-green-500 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5 text-green-500" />
                <span>Open Innovation: 1st, 2nd, 3rd</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══ GALLERY ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filters — zine tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-hackclub-red text-white border-hackclub-red shadow-[3px_3px_0_var(--foreground)] -translate-x-0.5 -translate-y-0.5"
                  : "border-foreground/20 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
              <span className={`ml-2 text-[10px] ${
                selectedCategory === cat.id ? "text-white/70" : "text-muted-foreground/50"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
              className={`group relative cursor-pointer border-2 border-transparent hover:border-hackclub-red transition-all duration-200 overflow-hidden ${
                photo.category === "final" ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className={`relative overflow-hidden ${
                photo.category === "final" ? "h-[300px] sm:h-[400px]" : "h-[250px] sm:h-[280px]"
              }`}>
                <ImageWithSkeleton
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category label */}
                <div className={`absolute top-3 left-3 ${categoryColors[photo.category]} text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-2 group-hover:translate-y-0`}>
                  {photo.category === "opening" && "Opening"}
                  {photo.category === "judging" && "Judging"}
                  {photo.category === "prizes" && "Prizes"}
                  {photo.category === "final" && "Final Photo"}
                </div>

                {/* Corner marks on hover */}
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-hackclub-red opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-hackclub-red opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                {/* Photo number */}
                <div className="absolute bottom-3 right-3 text-white/60 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 text-white hover:bg-hackclub-red hover:text-white flex items-center justify-center transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev */}
              <button
                className="absolute left-4 z-10 w-12 h-12 bg-white/10 text-white hover:bg-hackclub-red flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length)
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next */}
              <button
                className="absolute right-4 z-10 w-12 h-12 bg-white/10 text-white hover:bg-hackclub-red flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev! + 1) % filteredPhotos.length)
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <motion.div
                key={filteredPhotos[selectedIndex].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-6xl max-h-[85vh]"
              >
                <LightboxImage
                  src={filteredPhotos[selectedIndex].src}
                  alt={filteredPhotos[selectedIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />

                {/* Caption bar */}
                <div className="absolute -bottom-14 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-4">
                    <span className="text-white/40 text-xs font-mono">
                      {selectedIndex + 1} / {filteredPhotos.length}
                    </span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-white/60 text-xs font-mono uppercase tracking-wider">
                      {filteredPhotos[selectedIndex].category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
