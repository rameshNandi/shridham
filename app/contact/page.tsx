"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const cardHover = {
  scale: 1.03,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  transition: { 
    type: "spring",
    stiffness: 300,
    damping: 10
  }
}

const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { type: "spring", stiffness: 400 }
}

const textHover = {
  x: 5,
  color: "#790f11",
  transition: { type: "spring" as const, stiffness: 300 }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all required fields
    if (!formData.name.trim()) {
      setError("Name is required")
      return
    }
    
    if (!formData.email.trim()) {
      setError("Email is required")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      return
    }

    if (!formData.message.trim()) {
      setError("Message is required")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject || "General Inquiry"
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.message || 
          result.error || 
          "Failed to send message. Server responded with status: " + response.status
        )
      }

      // Reset form on successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsSubmitted(true)
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Submission error:", error)
      setError(
        error instanceof Error 
          ? error.message 
          : "An unexpected error occurred. Please try again later."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Shridham Hotels Corporate Office", "Mumbai, Maharashtra 400001", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Reservations: +91 1800-111-825", "Customer Service: +91 22-6601-1825", "Corporate: +91 22-6601-1800"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["reservations@shridham.com", "info@shridham.com", "corporate@shridham.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Hotel" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            CONTACT US
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-[#cda769] mb-6 md:mb-8"
            whileHover={{ scale: 1.01 }}
          >
            Get in touch with our luxury hospitality experts
          </motion.p>
          <motion.p 
            className="text-base md:text-lg leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            We're here to assist you with reservations, inquiries, and creating unforgettable experiences
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}

      {/* <section className="py-12 md:py-20 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11] mb-3 md:mb-4">GET IN TOUCH</h2>
            <p className="text-base md:text-lg text-gray-600">Multiple ways to reach our dedicated team</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={cardHover}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden">
                  <CardHeader className="pb-4 pt-8">
                    <motion.div 
                      className="w-14 h-14 bg-[#790f11] rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={iconHover}
                    >
                      <info.icon className="w-6 h-6 text-[#cda769]" />
                    </motion.div>
                    <CardTitle className="text-lg md:text-xl font-bold text-[#790f11] text-center">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-4 pb-6">
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <motion.p 
                          key={idx} 
                          className="text-sm md:text-base text-gray-600 leading-relaxed text-center hover:text-[#790f11] cursor-default"
                          whileHover={textHover}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form and Map */}
      <section className="py-12 md:py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                <CardHeader className="bg-[#790f11] text-white text-center py-6 md:py-8">
                  <CardTitle className="text-xl md:text-2xl font-bold text-[#cda769]">CARE@SHRIDHAM</CardTitle>
                  <p className="text-white/80 text-sm md:text-base">We value your feedback and are here to help</p>
                </CardHeader>

                <CardContent className="p-6 md:p-8 flex-grow">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-8 h-full flex flex-col items-center justify-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <CheckCircle className="w-14 h-14 md:w-16 md:h-16 text-green-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#790f11] mb-3 md:mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                      <motion.button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-4 py-2 rounded-md text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 h-full">
                      {error && (
                        <motion.div
                          className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 md:mb-6"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                            <p className="text-red-700 text-sm md:text-base">{error}</p>
                          </div>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1 md:space-y-2">
                          <Label htmlFor="name" className="text-[#790f11] font-medium text-sm md:text-base">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="border-gray-300 focus:border-[#790f11] hover:border-[#790f11]/40 text-sm md:text-base"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="space-y-1 md:space-y-2">
                          <Label htmlFor="email" className="text-[#790f11] font-medium text-sm md:text-base">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="border-gray-300 focus:border-[#790f11] hover:border-[#790f11]/40 text-sm md:text-base"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1 md:space-y-2">
                          <Label htmlFor="phone" className="text-[#790f11] font-medium text-sm md:text-base">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="border-gray-300 focus:border-[#790f11] hover:border-[#790f11]/40 text-sm md:text-base"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div className="space-y-1 md:space-y-2">
                          <Label htmlFor="subject" className="text-[#790f11] font-medium text-sm md:text-base">
                            Subject *
                          </Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => handleInputChange("subject", value)}
                          >
                            <SelectTrigger className="border-gray-300 focus:border-[#790f11] hover:border-[#790f11]/40 text-sm md:text-base">
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="reservation" className="text-sm md:text-base">Reservation Inquiry</SelectItem>
                              <SelectItem value="feedback" className="text-sm md:text-base">Feedback</SelectItem>
                              <SelectItem value="complaint" className="text-sm md:text-base">Complaint</SelectItem>
                              <SelectItem value="corporate" className="text-sm md:text-base">Corporate Inquiry</SelectItem>
                              <SelectItem value="other" className="text-sm md:text-base">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-1 md:space-y-2">
                        <Label htmlFor="message" className="text-[#790f11] font-medium text-sm md:text-base">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="border-gray-300 focus:border-[#790f11] hover:border-[#790f11]/40 min-h-[120px] text-sm md:text-base"
                          placeholder="Please share your thoughts with us. Ensuring your contentment is at the forefront of our commitment."
                          required
                        />
                      </div>

                      <motion.div
                        className="pt-2"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-2 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#cda769] border-t-transparent rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                              SUBMIT MESSAGE
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="space-y-6 md:space-y-8 h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#790f11] mb-3 md:mb-4">Find Us</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Visit our corporate office or any of our luxury properties across India. We're always ready to welcome
                  you with our signature hospitality.
                </p>
              </div>

              {/* Google Map Embed */}
              <motion.div 
                className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200"
                whileHover={{ scale: 1.01 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.864277096073!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b5b2b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#790f11]/10 hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              {/* Additional Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <Card className="border border-gray-200 shadow-sm rounded-lg">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#790f11] mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-[#790f11] text-sm md:text-base mb-1">Corporate Office</h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          Shridham Tower, 123 Business District,<br />
                          Mumbai, Maharashtra 400001, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 shadow-sm rounded-lg">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#790f11] mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-[#790f11] text-sm md:text-base mb-1">Support Hours</h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          Monday - Sunday<br />
                          8:00 AM - 10:00 PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}