import { type NextRequest, NextResponse } from "next/server"

// Mock gallery data - In production, this would come from a database
const galleryImages = [
  {
    id: 1,
    title: "Royal Suite Mumbai",
    category: "suites",
    location: "Mumbai",
    url: "/placeholder.svg?height=400&width=300",
    description: "Luxurious royal suite with panoramic city views",
  },
  {
    id: 2,
    title: "Heritage Restaurant",
    category: "restaurants",
    location: "Rajasthan",
    url: "/placeholder.svg?height=500&width=300",
    description: "Traditional dining experience with royal ambiance",
  },
  {
    id: 3,
    title: "Infinity Pool",
    category: "amenities",
    location: "Goa",
    url: "/placeholder.svg?height=300&width=300",
    description: "Stunning infinity pool overlooking the Arabian Sea",
  },
  {
    id: 4,
    title: "Spa Wellness Center",
    category: "amenities",
    location: "Kerala",
    url: "/placeholder.svg?height=450&width=300",
    description: "Rejuvenating spa treatments in a serene tropical setting",
  },
  {
    id: 5,
    title: "Grand Ballroom",
    category: "events",
    location: "Delhi",
    url: "/placeholder.svg?height=350&width=300",
    description: "Elegant ballroom perfect for weddings and celebrations",
  },
  {
    id: 6,
    title: "Palace Exterior",
    category: "hotels",
    location: "Udaipur",
    url: "/placeholder.svg?height=400&width=300",
    description: "Majestic palace hotel with traditional Rajasthani architecture",
  },
  {
    id: 7,
    title: "Rooftop Dining",
    category: "restaurants",
    location: "Mumbai",
    url: "/placeholder.svg?height=380&width=300",
    description: "Fine dining under the stars with city skyline views",
  },
  {
    id: 8,
    title: "Beach Resort",
    category: "destinations",
    location: "Goa",
    url: "/placeholder.svg?height=320&width=300",
    description: "Pristine beachfront resort with golden sand beaches",
  },
  {
    id: 9,
    title: "Presidential Suite",
    category: "suites",
    location: "Mumbai",
    url: "/placeholder.svg?height=420&width=300",
    description: "Ultimate luxury suite with private butler service",
  },
  {
    id: 10,
    title: "Garden Courtyard",
    category: "amenities",
    location: "Jaipur",
    url: "/placeholder.svg?height=360&width=300",
    description: "Peaceful garden courtyard with traditional fountains",
  },
  {
    id: 11,
    title: "Conference Hall",
    category: "events",
    location: "Bangalore",
    url: "/placeholder.svg?height=340&width=300",
    description: "State-of-the-art conference facilities for business events",
  },
  {
    id: 12,
    title: "Heritage Lobby",
    category: "hotels",
    location: "Kolkata",
    url: "/placeholder.svg?height=480&width=300",
    description: "Grand lobby showcasing colonial architecture and modern luxury",
  },
  {
    id: 13,
    title: "Ayurvedic Spa",
    category: "amenities",
    location: "Kerala",
    url: "/placeholder.svg?height=390&width=300",
    description: "Traditional Ayurvedic treatments in a tranquil setting",
  },
  {
    id: 14,
    title: "Sunset Terrace",
    category: "restaurants",
    location: "Rajasthan",
    url: "/placeholder.svg?height=410&width=300",
    description: "Romantic terrace dining with spectacular desert sunsets",
  },
  {
    id: 15,
    title: "Lake View Suite",
    category: "suites",
    location: "Udaipur",
    url: "/placeholder.svg?height=370&width=300",
    description: "Luxurious suite overlooking the serene Lake Pichola",
  },
  {
    id: 16,
    title: "Cultural Performance",
    category: "events",
    location: "Rajasthan",
    url: "/placeholder.svg?height=330&width=300",
    description: "Traditional Rajasthani cultural performances and entertainment",
  },
  {
    id: 17,
    title: "Himalayan Resort",
    category: "destinations",
    location: "Kashmir",
    url: "/placeholder.svg?height=440&width=300",
    description: "Mountain resort with breathtaking Himalayan views",
  },
  {
    id: 18,
    title: "Wine Cellar",
    category: "restaurants",
    location: "Mumbai",
    url: "/placeholder.svg?height=350&width=300",
    description: "Exclusive wine cellar with rare vintage collections",
  },
  {
    id: 19,
    title: "Fitness Center",
    category: "amenities",
    location: "Delhi",
    url: "/placeholder.svg?height=320&width=300",
    description: "Modern fitness center with personal training services",
  },
  {
    id: 20,
    title: "Wedding Pavilion",
    category: "events",
    location: "Jaipur",
    url: "/placeholder.svg?height=460&width=300",
    description: "Elegant outdoor pavilion for dream weddings",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")
    const category = searchParams.get("category")

    let filteredImages = galleryImages

    // Filter by category if specified
    if (category && category !== "all") {
      filteredImages = galleryImages.filter((img) => img.category.toLowerCase() === category.toLowerCase())
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedImages = filteredImages.slice(startIndex, endIndex)

    return NextResponse.json({
      success: true,
      images: paginatedImages,
      totalImages: filteredImages.length,
      currentPage: page,
      totalPages: Math.ceil(filteredImages.length / limit),
      hasMore: endIndex < filteredImages.length,
    })
  } catch (error) {
    console.error("Gallery API Error:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch gallery images" }, { status: 500 })
  }
}
