"use client"
import { motion } from "framer-motion"
import { Users, Calendar, MapPin, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TopContactBar from "@/components/top-contact-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

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

export default function VenuesPage() {
  const venues = [
    {
      title: "Grand Ballroom",
      description: "Elegant ballroom perfect for weddings and grand celebrations with crystal chandeliers",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "500 Guests",
      location: "Mumbai Palace",
      category: "Wedding Venue",
      features: ["Crystal Chandeliers", "Dance Floor", "Stage", "Audio/Visual"],
    },
    {
      title: "Royal Courtyard",
      description: "Open-air courtyard with traditional architecture ideal for cultural events",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "300 Guests",
      location: "Rajasthan Palace",
      category: "Cultural Events",
      features: ["Traditional Decor", "Garden Setting", "Cultural Stage", "Royal Ambiance"],
    },
    {
      title: "Conference Hall",
      description: "State-of-the-art conference facilities for corporate meetings and business events",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "200 Guests",
      location: "Delhi Heritage",
      category: "Corporate",
      features: ["Modern AV Equipment", "High-Speed WiFi", "Catering Service", "Business Center"],
    },
    {
      title: "Beachside Pavilion",
      description: "Stunning beachfront venue with ocean views perfect for intimate gatherings",
      image: "/placeholder.svg?height=400&width=600",
      capacity: "150 Guests",
      location: "Goa Resort",
      category: "Beach Wedding",
      features: ["Ocean Views", "Sunset Setting", "Beach Access", "Tropical Decor"],
    },
  ]

  const venueTypes = [
    {
      icon: Users,
      title: "Wedding Venues",
      description: "Magnificent spaces for your dream wedding celebration",
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Professional venues for meetings and conferences",
    },
    {
      icon: Star,
      title: "Social Gatherings",
      description: "Elegant spaces for parties and celebrations",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Event Venues" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">VENUES</h1>
          <p className="text-xl text-[#cda769] mb-8">Magnificent Spaces for Memorable Events</p>
          <p className="text-lg leading-relaxed">
            Create unforgettable memories in our stunning venues, perfect for weddings, corporate events, and
            celebrations
          </p>
        </motion.div>
      </section>

      {/* Venue Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">EVENT CATEGORIES</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we have the perfect venue for every occasion
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {venueTypes.map((type, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#790f11] rounded-full flex items-center justify-center mx-auto mb-6">
                      <type.icon className="w-8 h-8 text-[#cda769]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#790f11] mb-4">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">SIGNATURE VENUES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our collection of breathtaking venues, each designed to create magical moments
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {venues.map((venue, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={venue.image || "/placeholder.svg"}
                      alt={venue.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-[#790f11] text-[#cda769] border-0">
                      {venue.category}
                    </Badge>

                    {/* Capacity */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-[#790f11] font-medium text-sm flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {venue.capacity}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{venue.location}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#790f11] mb-3">{venue.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{venue.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#790f11] mb-3">Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {venue.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#cda769] rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold flex-1">
                        BOOK VENUE
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent"
                      >
                        VIEW DETAILS
                      </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">PLAN YOUR PERFECT EVENT</h2>
            <p className="text-xl text-[#cda769] mb-12 leading-relaxed">
              Let our expert event planners help you create an unforgettable celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300">
                BOOK CONSULTATION
              </Button>
              <Button
                variant="outline"
                className="border-[#cda769] text-[#cda769] hover:bg-[#cda769] hover:text-[#790f11] px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300 bg-transparent"
              >
                VIEW PACKAGES
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
