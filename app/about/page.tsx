"use client"

import { motion } from "framer-motion"
import { Search, Play, ChevronLeft, ChevronRight, Calendar, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState, useEffect, useRef } from "react"

// Define types for your data
type ImageType = {
  id: number
  url: string
  alt: string
  category: string
}

type VideoType = {
  id: number
  thumbnail: string
  title: string
  description: string
  duration: string
  url: string
}

type CategoryType = {
  title: string
  description: string
  category: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function AboutPage() {
  const [images, setImages] = useState<ImageType[]>([])
  const [videos, setVideos] = useState<VideoType[]>([])
  const [activeShridhamnessImage, setActiveShridhamnessImage] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const shridhamnessImages = [
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
  ]

  const categories: CategoryType[] = [
    {
      title: "PALACES",
      description: "Royal heritage properties",
      category: "palace"
    },
    {
      title: "HOTELS",
      description: "Luxury urban experiences",
      category: "hotel"
    },
    {
      title: "RESORTS",
      description: "Destination getaways",
      category: "resort"
    },
    {
      title: "SAFARIS",
      description: "Wildlife adventures",
      category: "safari"
    },
  ]

  useEffect(() => {
    // Simulate API fetch for images
    const fetchImages = async () => {
      const mockImages: ImageType[] = [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Luxury hotel lobby",
          category: "hotel"
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Palace exterior",
          category: "palace"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
          alt: "Resort pool",
          category: "resort"
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1582719471380-cd82f17d6c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Safari experience",
          category: "safari"
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
          alt: "Hotel room",
          category: "hotel"
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Resort beach",
          category: "resort"
        }
      ]
      setImages(mockImages)
    }

    // Simulate API fetch for videos
    const fetchVideos = async () => {
      const mockVideos: VideoType[] = [
        {
          id: 1,
          thumbnail: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
          title: "Our Heritage Story",
          description: "The journey of Shridham from its inception",
          duration: "3:45",
          url: "https://www.youtube.com/embed/9No-FiEInLA?autoplay=1"
        },
        {
          id: 2,
          thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Royal Hospitality",
          description: "Experience our world-class service",
          duration: "2:30",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        },
        {
          id: 3,
          thumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Heritage Architecture",
          description: "Discover our iconic buildings",
          duration: "3:15",
          url: "https://www.youtube.com/embed/9No-FiEInLA?autoplay=1"
        },
        {
          id: 4,
          thumbnail: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
          title: "Culinary Excellence",
          description: "Our award-winning restaurants",
          duration: "2:45",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        }
      ]
      setVideos(mockVideos)
    }

    fetchImages()
    fetchVideos()

    // Auto-rotate Shridhamness images
    const interval = setInterval(() => {
      setActiveShridhamnessImage(prev => (prev + 1) % shridhamnessImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getCategoryImage = (category: string) => {
    const categoryImages = images.filter(img => img.category === category.toLowerCase())
    return categoryImages.length > 0 ? categoryImages[0].url : "/placeholder.svg"
  }

  const handleVideoPlay = (video: VideoType) => {
    setSelectedVideo(video)
    setShowVideoModal(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Shridham Heritage Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ABOUT US
          </motion.h1>
        </motion.div>
      </section>

      {/* Guardian of Grandeur Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-2xl sm:text-4xl md:text-6xl font-light text-gray-800 mb-4 sm:mb-6 tracking-wide" variants={fadeInUp}>
              THE UNPARALLELED
            </motion.h2>
            <motion.h3
              className="text-xl sm:text-3xl md:text-5xl font-bold text-[#790f11] mb-8 sm:mb-12 tracking-wide"
              variants={fadeInUp}
            >
              GUARDIAN OF GRANDEUR
            </motion.h3>
            <motion.p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" variants={fadeInUp}>
              For over a century, Shridham has been synonymous with unparalleled luxury and exceptional hospitality. We
              create experiences that are unrivaled in elegance and forge unforgettable memories that last a lifetime.
              Each property in our collection represents the pinnacle of Indian hospitality, where tradition meets
              contemporary sophistication.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Split Vision Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[600px]">
        {/* Left - Monumental Vision */}
        <motion.div
          className="bg-white p-8 sm:p-12 lg:p-16 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="text-xs sm:text-sm text-[#cda769] font-medium mb-3 sm:mb-4 tracking-wider">
              FOUNDER VISION • About Shridham Hotel
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#790f11] mb-6 sm:mb-8 leading-tight">
              A MONUMENTAL
              <br />
              VISION
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              In December 1903, a visionary hotelier laid down the foundations of what would become India's most
              distinguished hospitality brand. Jamsetji Tata's dream was to create a hotel that would rival the finest
              establishments in the world, and thus began the legacy of unparalleled luxury and service excellence.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Today, Shridham continues this tradition of excellence, creating spaces where every guest experiences the
              warmth of Indian hospitality combined with world-class luxury.
            </p>
          </div>
        </motion.div>

        {/* Right - Shridhamness with image carousel */}
        <motion.div
          className="bg-[#790f11] text-white p-0 flex items-center relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full">
            {/* Image Carousel */}
            <div className="absolute inset-0 overflow-hidden">
              {shridhamnessImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeShridhamnessImage === index ? 1 : 0,
                    transition: { duration: 1 }
                  }}
                >
                  <Image
                    src={img}
                    alt="Shridhamness philosophy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#790f11]/70" />
                </motion.div>
              ))}
            </div>

            {/* Text Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 h-full flex items-center">
              <div>
                <div className="text-xs sm:text-sm text-[#cda769] font-medium mb-3 sm:mb-4 tracking-wider">OUR PHILOSOPHY</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">"SHRIDHAMNESS"</h3>
                <p className="leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  More than just a word, 'Shridhamness' embodies our commitment to creating extraordinary experiences. It
                  represents the essence of Indian hospitality - warm, intuitive, and deeply personal.
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                  Every interaction, every service, every moment is infused with this philosophy, ensuring that our guests
                  don't just stay with us, they become part of our extended family.
                </p>

                {/* Carousel Indicators */}
                <div className="flex mt-6 sm:mt-8 space-x-2">
                  {shridhamnessImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${activeShridhamnessImage === index ? 'bg-[#cda769] sm:w-6' : 'bg-white/50'}`}
                      onClick={() => setActiveShridhamnessImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Video Section */}
      <section className="bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">OUR STORY</h2>
            <p className="text-base sm:text-lg text-[#cda769] max-w-3xl mx-auto">
              Watch the journey of Shridham Hotels - from vision to reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Video Player */}
            <motion.div
              className="relative aspect-video bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => handleVideoPlay(videos[0])}
            >
              <Image
                src={videos[0]?.thumbnail || "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"}
                alt="Shridham Heritage Video"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-14 h-14 sm:w-20 sm:h-20 bg-[#790f11]/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#790f11] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 sm:w-8 sm:h-8 text-[#cda769] ml-0.5 sm:ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="text-white text-xs sm:text-sm">
                    <span className="text-[#cda769]">{videos[0]?.title || "Heritage Story"}</span> • {videos[0]?.duration || "3:45"}
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#cda769] rounded-full" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Video Information */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">A Century of Excellence</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#cda769] font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#cda769] mb-1 sm:mb-2 text-sm sm:text-base">The Foundation (1903)</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Jamsetji Tata's vision of world-class hospitality became reality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#cda769] font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#cda769] mb-1 sm:mb-2 text-sm sm:text-base">Growth & Heritage</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Expanding across India while preserving traditional values</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#790f11] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-[#cda769] font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#cda769] mb-1 sm:mb-2 text-sm sm:text-base">Modern Luxury</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Combining contemporary amenities with timeless elegance</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                  onClick={() => handleVideoPlay(videos[0])}
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  WATCH FULL STORY
                </Button>
                <Button 
                  className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                  onClick={() => {
                    document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  VIEW TIMELINE
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Additional Videos */}
          <motion.div
            className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {videos.slice(1).map((video, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => handleVideoPlay(video)}>
                <div className="relative aspect-video bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/60 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">{video.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{video.description || "Experience the luxury of Shridham"}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button 
              className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-[#cda769] z-10 transition-colors duration-200"
              onClick={closeVideoModal}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            <iframe
              ref={videoRef}
              src={selectedVideo.url}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
          </div>
        </div>
      )}

      {/* Timeline Section */}
      <section id="timeline-section" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#790f11] mb-3 sm:mb-4">OUR TIMELINE</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              The journey of Shridham through the decades
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-0.5 sm:w-1 h-full bg-[#cda769] transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 sm:space-y-16">
              {[
                {
                  year: "1903",
                  title: "Foundation",
                  description: "Shridham founded by visionary hotelier Jamsetji Tata"
                },
                {
                  year: "1920s",
                  title: "First Expansion",
                  description: "Opened properties in three major Indian cities"
                },
                {
                  year: "1947",
                  title: "Post-Independence Era",
                  description: "Became a symbol of India's hospitality heritage"
                },
                {
                  year: "1980s",
                  title: "Global Recognition",
                  description: "First international awards for service excellence"
                },
                {
                  year: "2000",
                  title: "Modernization",
                  description: "Complete renovation while preserving heritage"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                    <div className={`w-1/2 px-4 sm:px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#790f11]">{item.year}</h3>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                    </div>
                    <div className="w-1/2 flex justify-center">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#790f11] border-2 sm:border-4 border-[#cda769]"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Legend Section */}
      <section className="bg-[#1a1a1a] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-wide">A GLOBAL LEGEND</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              By sharing architectural landmarks with an unmistakable aura of signature grace and warmth, Shridham's
              growing collection of hotels, palaces, safaris and resorts has expanded to greeting guests around the
              world.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div key={index} className="group cursor-pointer" variants={fadeInUp}>
                <div className="relative aspect-[3/4] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={getCategoryImage(category.category)}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{category.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}