"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const quickLinks = [
    { name: "Hotels", href: "/hotels" },
    { name: "Destinations", href: "/destinations" },
    { name: "Offers", href: "/offers" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-[#790f11] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/images/shridham-logo.png"
                alt="Shridham Hotel"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-[#cda769]">SHRIDHAM</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Experience the epitome of luxury and royal hospitality where tradition meets modern elegance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-[#cda769] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#cda769] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#cda769] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#cda769] transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-[#cda769]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-[#cda769] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-[#cda769]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#cda769] mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  Shridham Hotels Corporate Office
                  <br />
                  Mumbai, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#cda769]" />
                <p className="text-white/80">+91 1800-111-825</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#cda769]" />
                <p className="text-white/80">reservations@shridham.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
   <div className="border-t border-white/20">
  <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="flex flex-col md:flex-row justify-center items-center">
      <p className="text-white/60 text-sm text-center">
        © 2024 Shridham Hotels. All rights reserved.
      </p>
    </div>
  </div>
</div>

    </footer>
  )
}