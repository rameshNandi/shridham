"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { MapPin, Star, Thermometer, Compass, ChevronLeft, ChevronRight, Wifi, ParkingSquare, Utensils, SpadeIcon as Spa, ShowerHeadIcon as SwimmingPool, Dumbbell } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { destinations } from "@/lib/data"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function PlaceDetailPage() {
  const params = useParams()
  const id = params.id as string

  const destination = destinations.find((dest) => dest.id.toString() === id)

  if (!destination) {
    return <div className="min-h-screen flex items-center justify-center">Destination not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${destination.color}/60 to-transparent`} />
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">{destination.name}</h1>
            <p className="text-xl md:text-2xl text-[#cda769] font-light">{destination.subtitle}</p>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 mr-2 fill-current" />
              <span>Average Rating {destination.rating}/5</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Destination Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-[#790f11] mb-6">About {destination.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{destination.description}</p>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#790f11] mb-6">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0">
                        <Compass className="w-4 h-4 text-[#cda769]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{highlight}</h4>
                        <p className="text-gray-600 text-sm">Must-visit attraction in {destination.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Features Section - Added here */}
              {destination.keyFeatures && destination.keyFeatures.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#790f11] mb-6">Key Features & Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-[#cda769]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{feature.name}</h4>
                          <p className="text-gray-600 text-sm">Available at our properties</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Section with Swiper */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#790f11] mb-6">Gallery</h3>
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="rounded-xl shadow-lg"
                  >
                    {destination.gallery.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-96 w-full">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${destination.name} Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 cursor-pointer">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </div>
                  <div className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 cursor-pointer">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              {/* Map Section - Moved to appear first in the right column */}
              {destination.mapEmbedUrl && (
                <div className="mb-12 relative z-10">
                  <h3 className="text-2xl font-bold text-[#790f11] mb-6">Location Map</h3>
                  <div className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src={destination.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${destination.name}`}
                      aria-label={`Location of ${destination.name} on Google Maps`}
                    ></iframe>
                  </div>
                  <p className="mt-4 text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#790f11]" />
                    {destination.location.address}
                  </p>
                </div>
              )}
              <Card className="sticky top-8 border-0 shadow-xl rounded-2xl overflow-hidden z-20">
                <CardHeader className="bg-[#790f11] text-white">
                  <CardTitle className="flex items-center">
                    Destination Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#790f11]/10 rounded-full flex items-center justify-center">
                        <Thermometer className="w-5 h-5 text-[#790f11]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Temperature</p>
                        <p className="font-bold">{destination.weather}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#790f11]/10 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-[#790f11] fill-current" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Rating</p>
                        <p className="font-bold">{destination.rating}/5</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
