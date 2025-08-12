"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ScrollingTopbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#790f11] text-[#cda769] py-2 overflow-hidden">
      <motion.div
        className="flex items-center space-x-8 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span className="font-medium">+91 1800-111-825</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span className="font-medium">reservations@shridham.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span className="font-medium">Luxury Hotels Across India</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span className="font-medium">24/7 Concierge Service</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span className="font-medium">Experience Royal Hospitality</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span className="font-medium">Mumbai • Rajasthan • Kerala • Goa</span>
        </div>
      </motion.div>
    </div>
  )
}
