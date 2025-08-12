"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Wifi, Car, Utensils, Dumbbell, Waves, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TopContactBar from "@/components/top-contact-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { hotelData, type Hotel } from "@/lib/hotel-data" // Import hotelData and Hotel type

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

export default function HotelsPage() {
  const hotels: Hotel[] = Object.values(hotelData) // Directly use the imported hotelData

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
      case "free wifi":
        return Wifi
      case "parking":
      case "valet parking":
      case "car":
      case "airport transfer":
      case "boat transfers":
        return Car
      case "restaurant":
      case "dining":
      case "royal dining":
      case "organic dining":
      case "multiple restaurants":
      case "heritage restaurant":
      case "waterfront restaurant":
      case "24/7 room service":
        return Utensils
      case "gym":
      case "fitness":
      case "fitness center":
      case "wellness center":
      case "yoga pavilion":
        return Dumbbell
      case "spa":
      case "wellness":
      case "spa & wellness":
      case "royal spa":
      case "ayurvedic spa":
        return Waves
      default:
        return Star
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Our Hotels" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">OUR HOTELS</h1>
          <p className="text-xl text-[#cda769] mb-8">Luxury accommodations across India's finest destinations</p>
          <p className="text-lg leading-relaxed">
            Discover our collection of heritage palaces, luxury resorts, and premium city hotels
          </p>
        </motion.div>
      </section>
      {/* Hotels Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">FEATURED PROPERTIES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each property offers a unique blend of luxury, heritage, and modern amenities
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {hotels.map((hotel) => (
              <motion.div key={hotel.id} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl">
                  {/* Image Gallery */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={hotel.images[0] || "/placeholder.svg?height=400&width=600"}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-[#790f11] font-medium text-sm">{hotel.rating}</span>
                    </div>
                    {/* Price Badge */}
                    <div className="absolute bottom-4 right-4 bg-[#790f11]/90 backdrop-blur-sm text-[#cda769] rounded-full px-4 py-2 font-bold">
                      From {hotel.price}
                    </div>
                    {/* Location */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{hotel.location}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#790f11] mb-3">{hotel.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
                    </div>
                    {/* Amenities */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[#790f11] mb-4">Amenities</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {hotel.amenities.map((amenity, idx) => {
                          const IconComponent = getAmenityIcon(amenity.name)
                          return (
                            <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                              <IconComponent className="w-5 h-5 text-[#790f11]" />
                              <span className="text-gray-700 font-medium">{amenity.name}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Link href={`/hotels/${hotel.id}`} className="flex-1">
                        <Button className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-3 hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300">
                          VIEW DETAILS
                        </Button>
                      </Link>
                      <Link href={`/hotels/${hotel.id}`}>
                        <Button
                          variant="outline"
                          className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] px-8 py-3 hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300 bg-transparent"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          BOOK NOW
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
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#790f11] to-[#5a0b0d] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">READY TO EXPERIENCE LUXURY?</h2>
            <p className="text-xl text-[#cda769] mb-12 leading-relaxed">
              Book your stay at any of our magnificent properties and create memories that last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/hotels">
                <Button className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300">
                  BOOK YOUR STAY
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#cda769] text-[#cda769] hover:bg-[#cda769] hover:text-[#790f11] px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300 bg-transparent"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
