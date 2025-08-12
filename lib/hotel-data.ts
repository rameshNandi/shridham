import type React from "react"
import { Wifi, Car, Coffee, Utensils, Dumbbell, Waves } from "lucide-react"

// Define types for our hotel data
export type Amenity = {
  icon: React.ComponentType<{ className?: string }>
  name: string
  description: string
}

export type Hotel = {
  id: string
  name: string
  description: string
  fullDescription: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  location: string
  address: string
  phone: string
  email: string
  images: string[]
  amenities: Amenity[]
  highlights: string[]
  coordinates: { lat: number; lng: number }
}

export type HotelData = {
  [key: string]: Hotel
}

// Mock hotel data with proper typing
export const hotelData: HotelData = {
  "mumbai-palace": {
    id: "mumbai-palace",
    name: "Shridham Palace Mumbai",
    description: "Experience royal luxury in the heart of Mumbai at our flagship heritage property.",
    fullDescription:
      "Nestled in the bustling metropolis of Mumbai, Shridham Palace Mumbai stands as a testament to royal grandeur and contemporary luxury. Our heritage property features 150 elegantly appointed rooms and suites, each designed to reflect the rich cultural heritage of Maharashtra while providing modern comfort and convenience. The hotel boasts multiple dining venues, a world-class spa, fitness center, and business facilities, making it perfect for both leisure and business travelers.",
    price: "₹1,000",
    originalPrice: "₹15,000",
    rating: 4.8,
    reviews: 324,
    location: "Colaba, Mumbai, Maharashtra",
    address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001",
    phone: "+91 22 6665 0808",
    email: "mumbai@shridham.com",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi", description: "High-speed internet throughout the property" },
      { icon: Car, name: "Valet Parking", description: "Complimentary valet parking service" },
      { icon: Coffee, name: "24/7 Room Service", description: "Round-the-clock dining service" },
      { icon: Utensils, name: "Multiple Restaurants", description: "5 dining venues with diverse cuisines" },
      { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym facilities" },
      { icon: Waves, name: "Spa & Wellness", description: "Full-service spa with traditional treatments" },
    ],
    highlights: [
      "Heritage architecture with modern amenities",
      "Prime location in South Mumbai",
      "Award-winning restaurants",
      "Rooftop infinity pool",
      "Business center and meeting rooms",
      "Concierge services",
    ],
    coordinates: { lat: 18.922, lng: 72.8347 },
  },


  "rajasthan-palace": {
    id: "rajasthan-palace",
    name: "Shridham Heritage Rajasthan",
    description: "Step into a fairy tale at our magnificent palace hotel in Rajasthan.",
    fullDescription:
      "Located in the heart of Rajasthan's royal landscape, Shridham Heritage Rajasthan is a meticulously restored 18th-century palace that offers guests an authentic royal experience. With 80 luxurious rooms and suites, each uniquely decorated with period furniture and modern amenities, this property is a perfect blend of history and comfort. The hotel features traditional Rajasthani architecture, beautiful courtyards, and stunning views of the surrounding desert landscape.",
    price: "₹18,000",
    originalPrice: "₹22,000",
    rating: 4.9,
    reviews: 256,
    location: "Jaipur, Rajasthan",
    address: "City Palace Road, Jaipur, Rajasthan 302002",
    phone: "+91 141 2385 700",
    email: "rajasthan@shridham.com",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi", description: "Complimentary high-speed internet" },
      { icon: Car, name: "Airport Transfer", description: "Luxury car service to/from airport" },
      { icon: Coffee, name: "Royal Dining", description: "Traditional Rajasthani cuisine" },
      { icon: Utensils, name: "Heritage Restaurant", description: "Dining in royal ambiance" },
      { icon: Dumbbell, name: "Yoga Pavilion", description: "Traditional yoga and meditation" },
      { icon: Waves, name: "Royal Spa", description: "Ayurvedic treatments and therapies" },
    ],
    highlights: [
      "Authentic 18th-century palace architecture",
      "Traditional Rajasthani cultural performances",
      "Desert safari and camel rides",
      "Royal courtyards and gardens",
      "Heritage walks and palace tours",
      "Traditional craft workshops",
    ],
    coordinates: { lat: 26.9124, lng: 75.7873 },
  },


  "kerala-resort": {
    id: "kerala-resort",
    name: "Shridham Backwater Resort Kerala",
    description: "Discover tranquility at our luxury backwater resort in Kerala.",
    fullDescription:
      "Nestled along the pristine backwaters of Kerala, Shridham Backwater Resort offers guests a unique opportunity to experience the natural beauty and cultural richness of God's Own Country. Our eco-luxury resort features 60 beautifully designed villas and suites, each with private balconies overlooking the backwaters. The property is designed to blend seamlessly with the natural environment while providing world-class amenities and services.",
    price: "₹14,000",
    originalPrice: "₹17,000",
    rating: 4.7,
    reviews: 189,
    location: "Alleppey, Kerala",
    address: "Backwater Road, Alleppey, Kerala 688001",
    phone: "+91 477 2251 900",
    email: "kerala@shridham.com",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      { icon: Wifi, name: "Free WiFi", description: "High-speed internet in all areas" },
      { icon: Car, name: "Boat Transfers", description: "Traditional houseboat transfers" },
      { icon: Coffee, name: "Organic Dining", description: "Farm-to-table Kerala cuisine" },
      { icon: Utensils, name: "Waterfront Restaurant", description: "Dining with backwater views" },
      { icon: Dumbbell, name: "Wellness Center", description: "Yoga and fitness facilities" },
      { icon: Waves, name: "Ayurvedic Spa", description: "Authentic Kerala Ayurvedic treatments" },
    ],
    highlights: [
      "Private backwater access",
      "Traditional houseboat experiences",
      "Organic spice garden tours",
      "Ayurvedic wellness programs",
      "Bird watching and nature walks",
      "Cultural performances and cooking classes",
    ],
    coordinates: { lat: 9.4981, lng: 76.3388 },
  },
}
