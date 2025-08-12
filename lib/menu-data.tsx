import type React from "react"
import { Salad, Dessert, Wine, Utensils, Coffee } from "lucide-react"

// Define types for dining experiences
export type DiningExperience = {
  title: string
  description: string
  image: string
  cuisine: string
  timing: string
  location: string
  rating: number
}

// Define types for specialties
export type Specialty = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export const diningExperiences: DiningExperience[] = [
  {
    title: "Royal Dining Hall",
    description: "Experience regal cuisine in an opulent setting with traditional Indian delicacies",
    image: "/placeholder.svg?height=400&width=600",
    cuisine: "Indian Royal",
    timing: "7:00 PM - 11:00 PM",
    location: "Mumbai Palace",
    rating: 4.9,
  },
  {
    title: "Rooftop Restaurant",
    description: "Fine dining under the stars with panoramic city views and international cuisine",
    image: "/placeholder.svg?height=400&width=600",
    cuisine: "International",
    timing: "6:00 PM - 12:00 AM",
    location: "Delhi Heritage",
    rating: 4.8,
  },
  {
    title: "Spice Garden",
    description: "Authentic regional flavors in a beautiful garden setting with live cooking stations",
    image: "/placeholder.svg?height=400&width=600",
    cuisine: "Regional Indian",
    timing: "12:00 PM - 3:00 PM, 7:00 PM - 10:30 PM",
    location: "Rajasthan Palace",
    rating: 4.7,
  },
  {
    title: "Coastal Breeze",
    description: "Fresh seafood and coastal delicacies with ocean views and beach ambiance",
    image: "/placeholder.svg?height=400&width=600",
    cuisine: "Coastal",
    timing: "11:00 AM - 11:00 PM",
    location: "Goa Resort",
    rating: 4.6,
  },
]

export const specialties: Specialty[] = [
  {
    icon: Utensils,
    title: "Royal Thali",
    description: "Traditional multi-course meal served on silver platters",
  },
  {
    icon: Wine,
    title: "Wine Pairing",
    description: "Curated wine selection to complement your dining experience",
  },
  {
    icon: Coffee,
    title: "High Tea",
    description: "Elegant afternoon tea service with premium teas and delicacies",
  },
]

// Mock API data for cuisine sections (from your second code block)
export interface MenuItem {
  name: string
  description: string
  image: string
}

export interface CuisineSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: MenuItem[]
}

export const cuisineSections: CuisineSection[] = [
  {
    id: "starters",
    title: "Starters",
    icon: Salad,
    items: [
      {
        name: "Royal Platter",
        description: "Assorted kebabs and tikkas",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Paneer Tikka",
        description: "Cottage cheese marinated in spices",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Murgh Malai Kebab",
        description: "Creamy chicken kebabs",
        image: "/placeholder.svg?height=800&width=800",
      },
    ],
  },
  {
    id: "mains",
    title: "Main Course",
    icon: Utensils,
    items: [
      {
        name: "Butter Chicken",
        description: "Classic Punjabi delicacy",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Biryani",
        description: "Fragrant rice with choice of meat",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Dal Makhani",
        description: "Black lentils simmered overnight",
        image: "/placeholder.svg?height=800&width=800",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    icon: Dessert,
    items: [
      {
        name: "Gulab Jamun",
        description: "Deep fried milk balls in syrup",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Rasmalai",
        description: "Cottage cheese in sweetened milk",
        image: "/placeholder.svg?height=800&width=800",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    icon: Wine,
    items: [
      {
        name: "Mango Lassi",
        description: "Sweet yogurt mango drink",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "Masala Chai",
        description: "Spiced Indian tea",
        image: "/placeholder.svg?height=800&width=800",
      },
      {
        name: "King's Cocktail",
        description: "Special house blend",
        image: "/placeholder.svg?height=800&width=800",
      },
    ],
  },
]
