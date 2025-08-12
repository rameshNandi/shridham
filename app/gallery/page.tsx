"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Grid3X3, Grid2X2, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Import galleryImages and GalleryImage type from lib file
import { galleryImages, type GalleryImage } from "@/lib/gallery-data"

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

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [gridView, setGridView] = useState("masonry")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  // Modal state
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentModalIndex, setCurrentModalIndex] = useState(0)
  const [visibleThumbnails, setVisibleThumbnails] = useState<GalleryImage[]>([])

  // Fetch gallery images (using imported data)
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800))
        setImages(galleryImages) // Use imported galleryImages
        setFilteredImages(galleryImages) // Use imported galleryImages
        setLoading(false)
      } catch (error) {
        console.error("Error fetching gallery images:", error)
        setLoading(false)
      }
    }
    fetchGalleryImages()
  }, [])

  // Filter images based on category and search term
  useEffect(() => {
    let filtered = images
    if (selectedCategory !== "all") {
      filtered = filtered.filter((img) => img.category.toLowerCase() === selectedCategory.toLowerCase())
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
    setFilteredImages(filtered)
  }, [selectedCategory, searchTerm, images])

  // Update visible thumbnails when modal opens or index changes
  useEffect(() => {
    if (selectedImage) {
      updateVisibleThumbnails(currentModalIndex)
    }
  }, [currentModalIndex, filteredImages])

  // Get 5 thumbnails (current + next 4, with circular logic)
  const updateVisibleThumbnails = (currentIndex: number) => {
    const totalImages = filteredImages.length
    const thumbnails = []

    // Always include the current image first
    thumbnails.push(filteredImages[currentIndex])

    // Add the next 4 images (with circular array logic)
    for (let i = 1; i <= 4; i++) {
      const nextIndex = (currentIndex + i) % totalImages
      thumbnails.push(filteredImages[nextIndex])
    }

    setVisibleThumbnails(thumbnails)
  }

  // Modal functions
  const openModal = (image: GalleryImage) => {
    const currentIndex = filteredImages.findIndex((img) => img.id === image.id)
    setCurrentModalIndex(currentIndex)
    setSelectedImage(image)
    updateVisibleThumbnails(currentIndex)
  }
  const closeModal = () => {
    setSelectedImage(null)
  }
  const nextImage = () => {
    const nextIndex = (currentModalIndex + 1) % filteredImages.length
    setCurrentModalIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }
  const prevImage = () => {
    const prevIndex = (currentModalIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentModalIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }
  const handleThumbnailClick = (img: GalleryImage) => {
    const newIndex = filteredImages.findIndex((image) => image.id === img.id)
    setCurrentModalIndex(newIndex)
    setSelectedImage(img)
  }

  const categories = ["all", "hotels", "restaurants", "suites", "amenities", "destinations", "events"]

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#790f11] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#790f11] font-medium">Loading Gallery...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">GALLERY</h1>
          <p className="text-xl text-[#cda769] mb-8">Discover the beauty and elegance of Shridham Hotels</p>
        </motion.div>
      </section>
      {/* Enhanced Search and Filters */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div
                className={`flex items-center border rounded-lg transition-all duration-300 ${
                  isSearchFocused ? "border-[#790f11] ring-2 ring-[#790f11]/50" : "border-gray-300"
                }`}
              >
                <Search
                  className={`ml-3 h-5 w-5 transition-colors duration-300 ${
                    isSearchFocused ? "text-[#790f11]" : "text-gray-400"
                  }`}
                />
                <Input
                  type="text"
                  placeholder="Search photos by title or location..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-3 pr-10 py-6"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 text-gray-400 hover:text-[#790f11] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="py-6 px-4">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="hover:bg-[#790f11]/10 focus:bg-[#790f11]/10">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex justify-end space-x-2">
              <Button
                variant={gridView === "grid" ? "default" : "outline"}
                onClick={() => setGridView("grid")}
                className="flex items-center py-6"
              >
                <Grid2X2 className="w-5 h-5 mr-2" />
                Grid
              </Button>
              <Button
                variant={gridView === "masonry" ? "default" : "outline"}
                onClick={() => setGridView("masonry")}
                className="flex items-center py-6"
              >
                <Grid3X3 className="w-5 h-5 mr-2" />
                Masonry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredImages.length > 0 ? (
            <motion.div
              className={`${
                gridView === "masonry"
                  ? "columns-1 md:columns-2 lg:columns-3 gap-6"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              }`}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className={`${gridView === "masonry" ? "break-inside-avoid mb-6" : ""} group cursor-pointer`}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-[#cda769] text-sm mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {image.location}
                      </p>
                      {image.description && <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#790f11]/90 backdrop-blur-sm text-[#cda769] px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-[#790f11] mb-2">No Images Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
      {/* Image Modal with 5 Thumbnails */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "90vh" }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#790f11]/80 hover:bg-[#790f11] text-[#cda769] rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#790f11]/80 hover:bg-[#790f11] text-[#cda769] rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              {/* Main Image */}
              <div className="relative w-full" style={{ height: "60vh" }}>
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Image Details */}
              <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#790f11] mb-1">{selectedImage.title}</h3>
                    <p className="text-[#cda769] flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedImage.location}
                    </p>
                  </div>
                  <div className="bg-[#790f11]/10 text-[#790f11] px-4 py-2 rounded-full text-sm font-medium self-start md:self-center">
                    {selectedImage.category}
                  </div>
                </div>
                {selectedImage.description && <p className="text-gray-600 mb-4">{selectedImage.description}</p>}
                {/* 5 Thumbnails Navigation */}
                <div className="flex justify-center space-x-4 py-2">
                  {visibleThumbnails.map((img) => (
                    <div
                      key={img.id}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
                        img.id === selectedImage.id
                          ? "ring-2 ring-[#790f11] ring-offset-2 scale-110"
                          : "hover:ring-2 hover:ring-[#cda769] hover:ring-offset-2 hover:scale-105"
                      }`}
                      onClick={() => handleThumbnailClick(img)}
                    >
                      <Image
                        src={img.url || "/placeholder.svg"}
                        alt={img.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}
