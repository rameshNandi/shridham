"use client"

import type React from "react"

import { useState, use as reactUse } from "react"
import { MapPin, Star, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

import { hotelData } from "@/lib/hotel-data"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface HotelPageProps {
  params: Promise<{
    id: string
  }>
}

export default function HotelDetailPage({ params }: HotelPageProps) {
  const { id } = reactUse(params)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    specialRequests: "",
  })

  const hotel = hotelData[id as keyof typeof hotelData]

  if (!hotel) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-[#790f11]">Hotel not found</h1>
          <Link href="/hotels">
            <Button className="mt-4 bg-[#790f11] text-[#cda769]">Back to Hotels</Button>
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length)
  }
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)
  }

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    const fullBookingData = {
      ...bookingData,
      hotelId: hotel.id,
      hotelName: hotel.name,
      price: hotel.price,
      timestamp: new Date().toISOString(),
    }
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullBookingData),
      })
      if (response.ok) {
        alert("Booking confirmed! You will receive a confirmation email shortly.")
        setShowBookingForm(false)
        setBookingData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "2",
          rooms: "1",
          specialRequests: "",
        })
      } else {
        alert("Booking failed. Please try again.")
      }
    } catch (error) {
      console.error("Booking error:", error)
      alert("Booking failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Made responsive */}
      <section className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={hotel.images[currentImageIndex] || "/placeholder.svg"}
          alt={hotel.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#790f11]/60 to-transparent" />
        
        {/* Navigation Arrows - Adjusted for mobile */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">{hotel.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  <span className="font-medium text-sm sm:text-base">{hotel.rating}</span>
                  <span className="text-[#cda769] text-sm sm:text-base">({hotel.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base">{hotel.location}</span>
                </div>
              </div>
              <p className="text-sm sm:text-lg max-w-2xl mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none">{hotel.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#cda769]">
                  {hotel.price}
                  <span className="text-sm sm:text-lg text-white/80 line-through ml-2">{hotel.originalPrice}</span>
                  <span className="text-xs sm:text-sm text-white/80 block">per night</span>
                </div>
                {/* <Button
                  onClick={() => setShowBookingForm(true)}
                  className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                >
                  BOOK NOW
                </Button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel Details - Made responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#790f11] mb-4 sm:mb-6">ABOUT THE HOTEL</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">{hotel.fullDescription}</p>
                
                {/* Amenities - Responsive grid */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#790f11] mb-4 sm:mb-6">AMENITIES & SERVICES</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {hotel.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-[#790f11]/5 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#cda769]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#790f11] text-sm sm:text-base mb-1">{amenity.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">{amenity.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Highlights - Responsive */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#790f11] mb-4 sm:mb-6">HOTEL HIGHLIGHTS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {hotel.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#cda769] rounded-full" />
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Photo Gallery - Responsive */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#790f11] mb-4 sm:mb-6">PHOTO GALLERY</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {hotel.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg cursor-pointer group"
                      onClick={() => setShowGallery(true)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${hotel.name} ${index + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-20 sm:h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => setShowGallery(true)}
                  variant="outline"
                  className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent text-sm sm:text-base"
                >
                  VIEW ALL PHOTOS
                </Button>
              </motion.div>
            </div>
            
            {/* Sidebar - Made sticky and responsive */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-20 sm:top-24 space-y-6 sm:space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Booking Card */}
                <Card className="border-0 shadow-lg sm:shadow-2xl rounded-xl sm:rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-2xl sm:text-3xl font-bold text-[#790f11] mb-1 sm:mb-2">
                        {hotel.price}
                        <span className="text-sm sm:text-lg text-gray-500 line-through ml-2">{hotel.originalPrice}</span>
                      </div>
                      <p className="text-gray-600 text-sm">per night</p>
                    </div>
                    <Button
                      onClick={() => setShowBookingForm(true)}
                      className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-2 sm:py-3 mb-3 sm:mb-4 text-sm sm:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                    >
                      BOOK NOW
                    </Button>
                    <div className="text-center text-xs sm:text-sm text-gray-600">Free cancellation • No booking fees</div>
                  </CardContent>
                </Card>
                
                {/* Contact Info */}
                <Card className="border-0 shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#790f11] mb-3 sm:mb-4">CONTACT INFORMATION</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#790f11] mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm sm:text-base">{hotel.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#790f11]" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm sm:text-base">{hotel.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#790f11]" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm sm:text-base">{hotel.email}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Map Placeholder */}
                <Card className="border-0 shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#790f11] mb-3 sm:mb-4">LOCATION</h3>
                    <div className="aspect-video bg-gradient-to-br from-[#790f11]/10 to-[#cda769]/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#790f11] mx-auto mb-1 sm:mb-2" />
                        <p className="text-[#790f11] font-medium text-sm sm:text-base">Interactive Map</p>
                        <p className="text-gray-600 text-xs sm:text-sm">{hotel.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal - Responsive */}
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-[#cda769] transition-colors duration-300"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <Image
                src={hotel.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${hotel.name} Gallery`}
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2 overflow-x-auto py-2">
              {hotel.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-12 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    index === currentImageIndex ? "border-[#cda769]" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal - Responsive */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#790f11]">BOOK YOUR STAY</h2>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-[#790f11] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                <h3 className="font-bold text-[#790f11] text-sm sm:text-base mb-1 sm:mb-2">{hotel.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">{hotel.location}</p>
                <div className="text-xl sm:text-2xl font-bold text-[#790f11]">
                  {hotel.price} <span className="text-xs sm:text-sm text-gray-600">per night</span>
                </div>
              </div>
              <form onSubmit={handleBooking} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[#790f11] font-medium text-sm sm:text-base">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={bookingData.firstName}
                      onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={bookingData.lastName}
                      onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="email" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="checkIn" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Check-in Date
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Check-out Date
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="guests" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rooms" className="text-[#790f11] font-medium text-sm sm:text-base">
                      Number of Rooms
                    </Label>
                    <Input
                      id="rooms"
                      type="number"
                      min="1"
                      max="5"
                      value={bookingData.rooms}
                      onChange={(e) => setBookingData({ ...bookingData, rooms: e.target.value })}
                      className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="specialRequests" className="text-[#790f11] font-medium text-sm sm:text-base">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                    className="border-[#790f11]/20 focus:border-[#790f11] text-sm sm:text-base"
                    rows={3}
                    placeholder="Any special requests or preferences..."
                  />
                </div>
                <div className="flex space-x-3 sm:space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent text-sm sm:text-base"
                  >
                    CANCEL
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                  >
                    CONFIRM BOOKING
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}