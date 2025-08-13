"use client"

import { motion } from "framer-motion"
import { Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { exclusiveOfferData, type ExclusiveOffer } from "@/lib/exclusive-offer-data"

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

export default function OffersPage() {
  const exclusiveOffers: ExclusiveOffer[] = Object.values(exclusiveOfferData)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Offers & Promotions" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">OFFERS</h1>
          <h2 className="text-3xl md:text-4xl font-light text-[#cda769] mb-8">& PROMOTIONS</h2>
          <p className="text-xl leading-relaxed">
            Discover exclusive packages and special rates designed to enhance your luxury experience
          </p>
        </motion.div>
      </section>
      {/* Exclusive Offers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#cda769] mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#790f11]">EXCLUSIVE OFFERS</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specially curated packages for unforgettable experiences and exceptional value
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {exclusiveOffers.map((offer, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Validity: {offer.validity}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#790f11] mb-3">{offer.title}</h3>
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{offer.description}</p>
                    <div className="flex space-x-3">
                      <Link href={`/offers/exclusive/${offer.id}`}>
                        <Button
                          variant="outline"
                          className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white bg-transparent"
                        >
                          KNOW MORE
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-white font-semibold px-8 py-3 text-lg">
            LOAD MORE
          </Button> */}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
