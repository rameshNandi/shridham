"use client"

import { motion } from "framer-motion"
import { Camera, Compass, Crown, Utensils, Waves, Mountain, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Royal Heritage Walk",
      description: "Guided tours through historic palaces and monuments with expert historians",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3-4 hours",
      location: "Rajasthan",
      category: "Cultural",
      highlights: ["Palace Tours", "Historical Stories", "Photography", "Traditional Tea"],
    },
    {
      title: "Culinary Masterclass",
      description: "Learn authentic Indian cooking techniques from our master chefs",
      image: "/placeholder.svg?height=400&width=600",
      duration: "2-3 hours",
      location: "All Properties",
      category: "Culinary",
      highlights: ["Hands-on Cooking", "Recipe Cards", "Market Visit", "Chef Interaction"],
    },
    {
      title: "Sunset Desert Safari",
      description: "Camel safari through golden dunes with traditional entertainment",
      image: "/placeholder.svg?height=400&width=600",
      duration: "4-5 hours",
      location: "Rajasthan",
      category: "Adventure",
      highlights: ["Camel Ride", "Desert Camp", "Folk Dance", "Dinner Under Stars"],
    },
    {
      title: "Backwater Cruise",
      description: "Serene houseboat journey through Kerala's pristine backwaters",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Full Day",
      location: "Kerala",
      category: "Nature",
      highlights: ["Houseboat Stay", "Local Villages", "Bird Watching", "Traditional Meals"],
    },
    {
      title: "Wellness Retreat",
      description: "Holistic wellness program combining yoga, meditation, and Ayurveda",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3-7 days",
      location: "All Properties",
      category: "Wellness",
      highlights: ["Daily Yoga", "Meditation", "Spa Treatments", "Healthy Cuisine"],
    },
    {
      title: "Photography Expedition",
      description: "Capture stunning landscapes and cultural moments with professional guidance",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Half/Full Day",
      location: "All Properties",
      category: "Photography",
      highlights: ["Professional Guide", "Best Locations", "Technique Tips", "Photo Editing"],
    },
  ]

  const experienceCategories = [
    {
      icon: Crown,
      title: "Cultural Heritage",
      description: "Immerse in India's rich history and traditions",
    },
    {
      icon: Utensils,
      title: "Culinary Adventures",
      description: "Discover authentic flavors and cooking techniques",
    },
    {
      icon: Waves,
      title: "Wellness Journeys",
      description: "Rejuvenate with ancient healing practices",
    },
    {
      icon: Mountain,
      title: "Nature Expeditions",
      description: "Explore breathtaking landscapes and wildlife",
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture memories with expert guidance",
    },
    {
      icon: Compass,
      title: "Adventure Activities",
      description: "Thrilling experiences for the adventurous soul",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Unique Experiences" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">EXPERIENCES</h1>
          <p className="text-xl text-[#cda769] mb-8">Curated Adventures & Cultural Immersion</p>
          <p className="text-lg leading-relaxed">
            Discover India's rich heritage through carefully crafted experiences that create lasting memories
          </p>
        </motion.div>
      </section>

      {/* Experience Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">EXPERIENCE CATEGORIES</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From cultural immersion to adventure activities, discover experiences that connect you with India's soul
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experienceCategories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#790f11] rounded-full flex items-center justify-center mx-auto mb-6">
                      <category.icon className="w-8 h-8 text-[#cda769]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#790f11] mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">SIGNATURE EXPERIENCES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Handcrafted experiences that showcase the best of Indian culture, cuisine, and natural beauty
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-[#790f11] text-[#cda769] border-0">
                      {experience.category}
                    </Badge>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#790f11] mb-2">{experience.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1 text-sm leading-relaxed">{experience.description}</p>

                    <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#790f11] mb-2">Highlights</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {experience.highlights.map((highlight, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-[#cda769] rounded-full mr-2" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold flex-1 text-sm py-2">
                        BOOK NOW
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent text-sm py-2"
                      >
                        DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#790f11] mb-6">CRAFTING MEMORIES</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every experience is thoughtfully designed to connect you with India's authentic culture, natural beauty,
                and timeless traditions. Our expert guides ensure each moment becomes a cherished memory.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#cda769] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#790f11] mb-2">Personalized Planning</h4>
                    <p className="text-gray-600">Customized experiences based on your interests and preferences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#cda769] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#790f11] mb-2">Expert Guidance</h4>
                    <p className="text-gray-600">Professional guides with deep local knowledge and cultural insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#cda769] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#790f11] mb-2">Authentic Encounters</h4>
                    <p className="text-gray-600">Genuine interactions with local communities and artisans</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Experience Journey"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
    