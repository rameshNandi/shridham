"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import TopContactBar from "@/components/top-contact-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Import cuisineSections and types from lib file
import { cuisineSections } from "@/lib/menu-data"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
}

export default function PhotoMenuPage() {
  const [activeSection, setActiveSection] = useState("starters")
  const [selectedItem, setSelectedItem] = useState<null | number>(null)

  const currentSection = cuisineSections.find((section) => section.id === activeSection)

  // Get the Icon component from the current section
  const IconComponent = currentSection?.icon

  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-[#790f11]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">OUR CULINARY JOURNEY</h1>
          <p className="text-xl text-[#cda769] mb-8">A Visual Feast of Flavors</p>
        </motion.div>
      </section>
      {/* Cuisine Navigation */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {cuisineSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  setSelectedItem(null)
                }}
                className={`flex items-center px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  activeSection === section.id
                    ? "border-[#790f11] text-[#790f11]"
                    : "border-transparent text-gray-500 hover:text-[#790f11]"
                }`}
              >
                {/* Render the icon component here */}
                {section.icon && <section.icon className="w-5 h-5 mr-2" />}
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* Menu Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {selectedItem === null ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentSection?.items.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedItem(index)}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="flex items-center mb-8 text-[#790f11] hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to {currentSection?.title}
              </button>
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl mb-8">
                <Image
                  src={currentSection?.items[selectedItem].image || "/placeholder.svg"}
                  alt={currentSection?.items[selectedItem].name || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#790f11] mb-2">{currentSection?.items[selectedItem].name}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {currentSection?.items[selectedItem].description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
