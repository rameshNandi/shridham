"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Waves, Flower, Heart, Leaf, Clock, MapPin } from "lucide-react"
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

export default function WellnessPage() {
  const [wellnessData, setWellnessData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWellnessData()
  }, [])

  const fetchWellnessData = async () => {
    try {
      const response = await fetch("/api/images?section=wellness")
      const data = await response.json()
      if (data.success) {
        setWellnessData(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.error("Error fetching wellness data:", error)
      setLoading(false)
    }
  }

  const wellnessServices = [
    {
      title: "Ayurvedic Spa",
      description: "Traditional Indian healing therapies using ancient Ayurvedic principles and natural herbs",
      image: "/placeholder.svg?height=400&width=600",
      duration: "60-120 minutes",
      location: "Kerala Resort",
      category: "Traditional Healing",
    },
    {
      title: "Royal Rejuvenation",
      description: "Luxurious spa treatments inspired by royal beauty rituals of Indian maharajas",
      image: "/placeholder.svg?height=400&width=600",
      duration: "90-150 minutes",
      location: "Rajasthan Palace",
      category: "Luxury Spa",
    },
    {
      title: "Meditation Garden",
      description: "Peaceful meditation sessions in serene garden settings with expert guidance",
      image: "/placeholder.svg?height=400&width=600",
      duration: "30-60 minutes",
      location: "Mumbai Palace",
      category: "Mindfulness",
    },
    {
      title: "Yoga Pavilion",
      description: "Traditional yoga practices in beautiful outdoor pavilions with certified instructors",
      image: "/placeholder.svg?height=400&width=600",
      duration: "45-90 minutes",
      location: "Goa Resort",
      category: "Yoga & Fitness",
    },
  ]

  const wellnessPhilosophy = [
    {
      icon: Waves,
      title: "Holistic Healing",
      description: "Complete wellness approach addressing mind, body, and spirit",
    },
    {
      icon: Flower,
      title: "Natural Therapies",
      description: "Organic treatments using pure, natural ingredients and herbs",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Customized wellness programs tailored to individual needs",
    },
    {
      icon: Leaf,
      title: "Ancient Wisdom",
      description: "Time-tested practices rooted in traditional Indian healing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Wellness & Spa" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">WELLNESS</h1>
          <p className="text-xl text-[#cda769] mb-8">Rejuvenation & Ancient Healing</p>
          <p className="text-lg leading-relaxed">
            Discover the art of wellness through traditional Indian healing practices and luxury spa experiences
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">WELLNESS PHILOSOPHY</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our wellness approach combines ancient Indian healing traditions with modern luxury, creating
              transformative experiences that restore balance and harmony to your life.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {wellnessPhilosophy.map((philosophy, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#790f11] rounded-full flex items-center justify-center mx-auto mb-6">
                      <philosophy.icon className="w-8 h-8 text-[#cda769]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#790f11] mb-3">{philosophy.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{philosophy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wellness Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">SIGNATURE TREATMENTS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience our curated collection of wellness treatments designed to rejuvenate and restore
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {wellnessServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-[#790f11] text-[#cda769] border-0">
                      {service.category}
                    </Badge>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{service.location}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#790f11] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{service.description}</p>

                    <div className="flex items-center space-x-2 mb-6 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold flex-1">
                        BOOK TREATMENT
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent"
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wellness Journey */}
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
              <h2 className="text-4xl font-bold text-[#790f11] mb-6">YOUR WELLNESS JOURNEY</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Begin your transformative wellness journey with our expert therapists and ancient healing practices.
                Each treatment is carefully designed to restore your natural balance and inner peace.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#cda769] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#790f11] mb-2">Personal Consultation</h4>
                    <p className="text-gray-600">Detailed assessment to understand your wellness needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#cda769] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#790f11] mb-2">Customized Treatment</h4>
                    <p className="text-gray-600">Personalized therapy plan tailored to your requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#cda769] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#790f11] mb-2">Holistic Experience</h4>
                    <p className="text-gray-600">Complete wellness journey for mind, body, and spirit</p>
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
                alt="Wellness Journey"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">BEGIN YOUR WELLNESS JOURNEY</h2>
            <p className="text-xl text-[#cda769] mb-12 leading-relaxed">
              Discover the transformative power of ancient healing and modern luxury
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300">
                BOOK CONSULTATION
              </Button>
              <Button
                variant="outline"
                className="border-[#cda769] text-[#cda769] hover:bg-[#cda769] hover:text-[#790f11] px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300 bg-transparent"
              >
                VIEW TREATMENTS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
