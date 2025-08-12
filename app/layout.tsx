import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollingTopbar from "@/components/scrolling-topbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shridham Hotels - Luxury Heritage Hotels Across India",
  description:
    "Experience royal hospitality at Shridham's luxury heritage hotels across India. Discover palatial accommodations, world-class amenities, and unforgettable experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollingTopbar />
        <div className="pt-10">{children}</div>
      </body>
    </html>
  )
}
