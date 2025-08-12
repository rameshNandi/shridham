"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, MapPin, Utensils, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import TopContactBar from "@/components/top-contact-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Import restaurants data from lib file
import { restaurants } from "@/lib/dining-data"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
}

export default function ReserveTablePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    restaurant: "",
    specialRequests: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Reservation submitted:", formData)
    alert("Your table reservation has been submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-[#790f11]">
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RESERVE A TABLE</h1>
          <p className="text-lg text-[#cda769]">Secure your dining experience with us</p>
        </motion.div>
      </section>
      {/* Reservation Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-[#790f11] text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Utensils className="w-6 h-6" />
                  Table Reservation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) => setFormData({ ...formData, guests: value })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "person" : "people"}
                            </SelectItem>
                          ))}
                          <SelectItem value="9+">9+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant</label>
                      <Select
                        value={formData.restaurant}
                        onValueChange={(value) => setFormData({ ...formData, restaurant: value })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select restaurant" />
                        </SelectTrigger>
                        <SelectContent>
                          {restaurants.map((restaurant) => (
                            <SelectItem key={restaurant} value={restaurant}>
                              {restaurant}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                    <Textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Dietary restrictions, allergies, celebrations, etc."
                      rows={4}
                    />
                  </div>
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-6 text-lg"
                    >
                      CONFIRM RESERVATION
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[#790f11] mb-4">Need Assistance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our concierge team is available to help with reservations and special arrangements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </Button>
              <Button
                variant="outline"
                className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white bg-transparent"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Visit Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
// lib/dining-data.ts