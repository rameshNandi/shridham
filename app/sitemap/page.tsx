"use client"

import { motion } from "framer-motion"
import { Home, MapPin, Building, Gift, Camera, Phone, Calendar, Compass } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
      staggerChildren: 0.1,
    },
  },
}

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Login / Join", href: "/login" },
      ],
    },
    {
      title: "Destinations & Hotels",
      icon: MapPin,
      links: [
        { name: "Places", href: "/place" },
        { name: "Hotels", href: "/hotels" },
        { name: "Mumbai Properties", href: "/hotels?location=mumbai" },
        { name: "Rajasthan Palaces", href: "/hotels?location=rajasthan" },
        { name: "Kerala Resorts", href: "/hotels?location=kerala" },
        { name: "Goa Properties", href: "/hotels?location=goa" },
      ],
    },
    {
      title: "Experiences & Services",
      icon: Compass,
      links: [
        { name: "Experiences", href: "/experiences" },
        { name: "Dining", href: "/dining" },
        { name: "Wellness & Spa", href: "/wellness" },
        { name: "Venues & Events", href: "/venues" },
        { name: "Photography Tours", href: "/experiences?category=photography" },
        { name: "Cultural Experiences", href: "/experiences?category=cultural" },
      ],
    },
    {
      title: "Offers & Bookings",
      icon: Gift,
      links: [
        { name: "Latest Offers", href: "/offers" },
        { name: "Member Rates", href: "/offers?type=member" },
        { name: "Book a Stay", href: "/booking" },
        { name: "Group Bookings", href: "/booking?type=group" },
        { name: "Wedding Packages", href: "/venues?category=wedding" },
      ],
    },
    {
      title: "Gallery & Media",
      icon: Camera,
      links: [
        { name: "Photo Gallery", href: "/gallery" },
        { name: "Hotel Photos", href: "/gallery?category=hotels" },
        { name: "Restaurant Gallery", href: "/gallery?category=restaurants" },
        { name: "Spa & Wellness", href: "/gallery?category=amenities" },
        { name: "Event Venues", href: "/gallery?category=events" },
        { name: "Shridham Magazine", href: "/magazine" },
      ],
    },
    {
      title: "Information & Support",
      icon: Phone,
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ]

  const quickLinks = [
    { name: "Make a Reservation", href: "/booking", icon: Calendar },
    { name: "View Our Hotels", href: "/hotels", icon: Building },
    { name: "Explore Destinations", href: "/place", icon: MapPin },
    { name: "Latest Offers", href: "/offers", icon: Gift },
    { name: "Contact Us", href: "/contact", icon: Phone },
    { name: "Photo Gallery", href: "/gallery", icon: Camera },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#790f11] to-[#5a0b0d] text-white mt-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">SITEMAP</h1>
            <p className="text-xl text-[#cda769] mb-8">Navigate Our Complete Website Structure</p>
            <p className="text-lg leading-relaxed">
              Find all pages and sections of the Shridham Hotels website organized for easy navigation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#790f11] mb-4">QUICK ACCESS</h2>
            <p className="text-gray-600">Most popular pages and services</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {quickLinks.map((link, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={link.href}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#790f11] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5a0b0d] transition-colors">
                        <link.icon className="w-8 h-8 text-[#cda769]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#790f11] group-hover:text-[#5a0b0d] transition-colors">
                        {link.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Complete Sitemap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#790f11] mb-4">COMPLETE SITE STRUCTURE</h2>
            <p className="text-lg text-gray-600">All pages and sections organized by category</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {siteStructure.map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#790f11] rounded-full flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-[#cda769]" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#790f11]">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="block text-gray-600 hover:text-[#790f11] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#790f11] mb-6">Need Help Finding Something?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  If you can't find what you're looking for in our sitemap, please don't hesitate to contact our team.
                  We're here to help you navigate our website and find the information you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-8 py-3 rounded-lg transition-colors">
                      CONTACT SUPPORT
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] font-semibold px-8 py-3 rounded-lg transition-colors bg-transparent">
                      BACK TO HOME
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
