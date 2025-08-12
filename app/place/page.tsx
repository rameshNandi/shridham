"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Thermometer } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { destinations } from "@/lib/data"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}
const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
}
const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}
const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
}

export default function PlacePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=500&width=800" alt="Scenic Destinations" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">PLACES</h1>
            <p className="text-xl md:text-2xl text-[#cda769] font-light">A REALM OF ETHEREAL BEAUTY</p>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Discover magnificent destinations across India where luxury meets heritage, and every moment becomes an
            unforgettable memory
          </motion.p>
        </motion.div>
        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 bg-[#cda769] rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-6 h-6 bg-[#cda769]/50 rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </section>
      {/* Destination Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#790f11] ">FEATURED DESTINATIONS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each destination tells a story of grandeur, culture, and natural beauty waiting to be discovered
            </p>
          </motion.div>
          <div className="space-y-32">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* Image Section */}
                <motion.div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative group`}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      width={800}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                    {/* Floating Stats - Removed hotel count */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#790f11] flex items-center">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            {destination.rating}
                          </div>
                          <div className="text-xs text-gray-600">Rating</div>
                        </div>
                      </div>
                    </div>
                    {/* Weather Badge */}
                    <div className="absolute bottom-6 left-6 bg-[#790f11]/90 backdrop-blur-sm text-[#cda769] rounded-full px-4 py-2 flex items-center space-x-2">
                      <Thermometer className="w-4 h-4" />
                      <span className="font-medium">{destination.weather}</span>
                    </div>
                  </div>
                </motion.div>
                {/* Content Section */}
                <motion.div
                  className={`${index % 2 === 1 ? "lg:col-start-1" : ""} space-y-8`}
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-[#790f11] rounded-full flex items-center justify-center">
                        <destination.icon className="w-8 h-8 text-[#cda769]" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-[#790f11] mb-2">{destination.name}</h3>
                        <p className="text-lg text-[#cda769] font-medium">{destination.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{destination.description}</p>
                    {/* Highlights */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-[#790f11] mb-4">Scenic Highlights</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {destination.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-[#790f11]/5 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-[#cda769] rounded-full" />
                            <span className="text-gray-700 font-medium">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 mt-8">
                      <Button
                        asChild
                        className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-8 py-3 hover:shadow-lg hover:shadow-[#790f10]/20 transition-all duration-300"
                      >
                        <Link href={`/place/${destination.id}`}>VIEW DETAILS</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] px-8 py-3 hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300 bg-transparent"
                      >
                        <Link href="#">EXPLORE MORE</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
