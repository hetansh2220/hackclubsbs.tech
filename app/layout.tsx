import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Figtree } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

// Figtree
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "HackClubSBS",
  description:
    "Join HackClubSBS, a vibrant student coding community focused on learning, building, and innovating together.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${figtree.style.fontFamily};
  --font-sans: ${figtree.variable};
  --font-mono: ${jetbrainsMono.variable};
}
        `}</style>
      </head>
      <body
        className={`${figtree.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
