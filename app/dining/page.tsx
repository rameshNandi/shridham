"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TopContactBar from "@/components/top-contact-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { diningExperiences, specialties } from "@/lib/menu-data" // Updated import path

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function DiningPage() {
  const [loading, setLoading] = useState(true)

  // Simulate data fetching
  useEffect(() => {
    // In a real application, you would fetch data here.
    // For now, we just set loading to false after a short delay.
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500) // Simulate network delay
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <TopContactBar />
        <Navbar />
        <div className="pt-32 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#790f11] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#790f11] font-medium">Loading Dining Experiences...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Dining Experience" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">DINING</h1>
          <p className="text-xl text-[#cda769] mb-8">Culinary Excellence & Royal Gastronomy</p>
          <p className="text-lg leading-relaxed">
            Embark on a gastronomic journey through India's rich culinary heritage with our world-class restaurants
          </p>
        </motion.div>
      </section>
      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">CULINARY ARTISTRY</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our restaurants offer an extraordinary culinary journey, blending traditional Indian flavors with
              contemporary techniques. Each dish is crafted with the finest ingredients and presented with royal
              elegance.
            </p>
          </motion.div>
          {/* Specialties */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {specialties.map((specialty, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#790f11] rounded-full flex items-center justify-center mx-auto mb-6">
                      <specialty.icon className="w-8 h-8 text-[#cda769]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#790f11] mb-4">{specialty.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Dining Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">SIGNATURE RESTAURANTS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our collection of award-winning restaurants, each offering a unique dining experience
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {diningExperiences.map((restaurant, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-[#790f11] font-medium text-sm">{restaurant.rating}</span>
                    </div>
                    {/* Cuisine Badge */}
                    <Badge className="absolute top-4 left-4 bg-[#790f11] text-[#cda769] border-0">
                      {restaurant.cuisine}
                    </Badge>
                    {/* Location */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{restaurant.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#790f11] mb-3">{restaurant.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{restaurant.description}</p>
                    <div className="flex items-center space-x-2 mb-6 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.timing}</span>
                    </div>
                    <div className="flex space-x-3">
                      {/* <Link href="/dining/reserve-table" passHref legacyBehavior>
                        <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold flex-1">
                          RESERVE TABLE
                        </Button>
                      </Link> */}
                      <Link href="/dining/view-menu" passHref legacyBehavior>
                        <Button
                          variant="outline"
                          className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent"
                        >
                          VIEW MENU
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
