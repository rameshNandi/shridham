"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Star, Calendar, ChevronLeft, ChevronRight, Crown, Gift } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ExclusivelyForYou from "@/components/ExclusivelyForYou"
import GoogleReviewSlider from '@/components/GoogleReviewSlider';


import { ClientLogos } from "@/components/client-logos"

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

const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSearch = () => {
    const query = searchQuery.toLowerCase()

    // Route based on search keywords
    if (query.includes("mumbai") || query.includes("palace")) {
      window.location.href = "/destinations/mumbai"
    } else if (query.includes("rajasthan") || query.includes("jaipur")) {
      window.location.href = "/destinations/rajasthan"
    } else if (query.includes("kerala") || query.includes("backwater")) {
      window.location.href = "/destinations/kerala"
    } else if (query.includes("goa") || query.includes("beach")) {
      window.location.href = "/destinations/goa"
    } else if (query.includes("hotel") || query.includes("stay")) {
      window.location.href = "/hotels"
    } else if (query.includes("offer") || query.includes("deal")) {
      window.location.href = "/offers"
    } else if (query.includes("spa") || query.includes("wellness")) {
      window.location.href = "/wellness"
    } else if (query.includes("dining") || query.includes("restaurant")) {
      window.location.href = "/dining"
    } else {
      window.location.href = "/destinations"
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // const destinations = [
  //   {
  //     name: "Mumbai",
  //     description: "The commercial capital where luxury meets tradition",
  //     image:
  //       "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //     hotels: 3,
  //     rating: 4.8,
  //     href: "/destinations/mumbai",
  //   },
  //   {
  //     name: "Rajasthan",
  //     description: "Royal palaces and desert luxury experiences",
  //     image:
  //       "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //     hotels: 5,
  //     rating: 4.9,
  //     href: "/destinations/rajasthan",
  //   },
  //   {
  //     name: "Kerala",
  //     description: "Backwater serenity and tropical paradise",
  //     image:
  //       "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //     hotels: 2,
  //     rating: 4.7,
  //     href: "/destinations/kerala",
  //   },
  //   {
  //     name: "Goa",
  //     description: "Beach luxury and Portuguese heritage",
  //     image:
  //       "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //     hotels: 4,
  //     rating: 4.6,
  //     href: "/destinations/goa",
  //   },
  // ]

  const offers = [
    {
      title: "Suite Surprises - Member Only",
      description:
        "Indulge in a stay that goes beyond the ordinary. Our experience includes complimentary room ",
      validity: "Round the Year",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Member Exclusive",
      color: "bg-[#cda769]",
      href: "/offers/suite-surprises",
    },
    {
      title: "Breakfast Inclusive Rate",
      description:
        "Wake up to a symphony of flavours with our delicious breakfast spread. Savour local and global delicacies...",
      validity: "Round the Year",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Best Value",
      color: "bg-green-600",
      href: "/offers/breakfast-inclusive",
    },
    {
      title: "New Beginnings",
      description:
        "Indulge the explorer in you and set out to discover our newest hotels and most exquisite experiences...",
      validity: "No Restrictions",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Limited Time",
      color: "bg-red-600",
      href: "/offers/new-beginnings",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Hero ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#790f11]/60 to-transparent" />
        </div>

        {/* Navigation Arrows - Desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Navigation Arrows - Mobile */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-2 bottom-20 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="md:hidden absolute right-2 bottom-20 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#cda769]" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 tracking-wider">SHRIDHAM</h1>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl text-[#cda769] font-light mb-4 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                A REALM OF ETHEREAL BEAUTY
              </motion.p>
              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-12 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                Experience the epitome of luxury and royal hospitality across India's most magnificent destinations
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <Link href="/place">
                  <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg hover:shadow-xl hover:shadow-[#790f11]/30 transition-all duration-300">
                    EXPLORE
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      {/* <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#790f11] mb-2 md:mb-4">FIND YOUR PERFECT STAY</h2>
              <p className="text-gray-600 text-sm md:text-base">Discover luxury accommodations tailored to your preferences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-[#790f11] mb-1 md:mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                  <Input
                    placeholder="Destination, hotel, or experience..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 md:pl-10 border-[#790f11]/20 focus:border-[#790f11] text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#790f11] mb-1 md:mb-2">Location</label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="border-[#790f11]/20 focus:border-[#790f11] text-sm md:text-base">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="goa">Goa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#790f11] mb-1 md:mb-2">Check-in</label>
                <Input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border-[#790f11]/20 focus:border-[#790f11] text-sm md:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#790f11] mb-1 md:mb-2">Check-out</label>
                <Input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border-[#790f11]/20 focus:border-[#790f11] text-sm md:text-base"
                />
              </div>

              <div className="flex items-end">
                <Button
                  onClick={handleSearch}
                  className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-2 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                >
                  SEARCH
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

     

      {/* Latest Offers */}
      <section className="py-12 md:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      className="text-center mb-8 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-4 md:mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11]">LATEST OFFERS</h2>
      </div>
      <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
        Exclusive packages and special rates designed to enhance your luxury experience
      </p>
    </motion.div>

    {/* Rest of the code remains the same */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {offers.map((offer, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <Card className="overflow-hidden group hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 border-0 rounded-xl md:rounded-2xl h-full">
            <div className="relative overflow-hidden">
              <Image
                src={offer.image || "/placeholder.svg"}
                alt={offer.title}
                width={400}
                height={250}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div
                className={`absolute top-3 left-3 ${offer.color} text-white px-2 py-1 text-xs md:text-sm rounded-full font-medium`}
              >
                {offer.badge}
              </div>
              <div className="absolute bottom-3 left-3 text-white">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Validity: {offer.validity}</span>
                </div>
              </div>
            </div>
            <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-[#790f11] mb-2 md:mb-3">{offer.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 flex-1 leading-relaxed">{offer.description}</p>
              <div className="flex space-x-2 md:space-x-3">
                <Link href={offer.href} className="flex-1">
                  <Button className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-2 text-sm md:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
        </section>

 {/* Featured Destinations */}
      <ExclusivelyForYou />

      {/* Welcome Section */}
<section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
      {/* Text Content Section - Full width on mobile, left on desktop */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center lg:items-start">
          {/* Heading - Always comes first */}
          <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
            <Crown className="w-6 h-6 md:w-8 md:h-8 text-[#cda769] mr-2 md:mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11]">WELCOME TO SHRIDHAM</h2>
          </div>

          {/* Image - Only shown on mobile (below lg) */}
          <div className="lg:hidden w-full relative mt-4 mb-6 order-2">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Hotel Interior"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#790f11]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl md:rounded-2xl shadow-lg p-3 md:p-4">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#790f11]">25+</div>
                <div className="text-xs md:text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-3 lg:order-2">
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-2xl">
              Experience the epitome of luxury and royal hospitality at Shridham Hotels. Our heritage properties
              across India offer guests an authentic taste of royal grandeur combined with modern amenities and
              world-class service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 w-full max-w-2xl">
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 bg-[#cda769] rounded-full mt-1 md:mt-2"></div>
                <div>
                  <h4 className="font-bold text-[#790f11] text-sm md:text-base mb-1">Heritage Properties</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Authentic palaces and heritage buildings</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 bg-[#cda769] rounded-full mt-1 md:mt-2"></div>
                <div>
                  <h4 className="font-bold text-[#790f11] text-sm md:text-base mb-1">Royal Hospitality</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Personalized service fit for royalty</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 bg-[#cda769] rounded-full mt-1 md:mt-2"></div>
                <div>
                  <h4 className="font-bold text-[#790f11] text-sm md:text-base mb-1">Luxury Amenities</h4>
                  <p className="text-gray-600 text-xs md:text-sm">World-class facilities and services</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="w-2 h-2 bg-[#cda769] rounded-full mt-1 md:mt-2"></div>
                <div>
                  <h4 className="font-bold text-[#790f11] text-sm md:text-base mb-1">Cultural Experiences</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Authentic local culture and traditions</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="w-full lg:w-auto order-4">
              <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300 w-full lg:w-auto">
                DISCOVER OUR STORY
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Image Section - Only shown on desktop (lg and above) */}
      <motion.div
        className="hidden lg:block w-full lg:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Luxury Hotel Interior"
            width={600}
            height={400}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#790f11]/20 to-transparent" />
        </div>
      </motion.div>
    </div>
  </div>
</section>


 <ClientLogos /> 

      <GoogleReviewSlider />
      
  
      <Footer />
    </div>
  )
}