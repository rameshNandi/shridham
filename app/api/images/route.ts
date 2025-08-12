import { type NextRequest, NextResponse } from "next/server"

// Mock image data - In production, this would come from a database
const imageDatabase = {
  gallery: [
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
    // Add more gallery images...
  ],
  hotels: [
    {
      id: 1,
      name: "Shridham Palace Mumbai",
      location: "Mumbai",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=500&width=700",
      ],
      description: "Luxury hotel in the heart of Mumbai",
      amenities: ["Spa", "Pool", "Restaurant", "Gym"],
      rating: 4.8,
      price: "₹15,000",
    },
    {
      id: 2,
      name: "Shridham Heritage Rajasthan",
      location: "Rajasthan",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=500&width=700",
      ],
      description: "Royal palace hotel with traditional architecture",
      amenities: ["Heritage Tours", "Cultural Shows", "Royal Dining", "Spa"],
      rating: 4.9,
      price: "₹20,000",
    },
    // Add more hotels...
  ],
  dining: [
    {
      id: 1,
      title: "Royal Dining Hall",
      image: "/placeholder.svg?height=400&width=600",
      description: "Experience royal cuisine in an elegant setting",
    },
    // Add more dining images...
  ],
  wellness: [
    {
      id: 1,
      title: "Luxury Spa",
      image: "/placeholder.svg?height=400&width=600",
      description: "Rejuvenating spa treatments",
    },
    // Add more wellness images...
  ],
  venues: [
    {
      id: 1,
      title: "Grand Ballroom",
      image: "/placeholder.svg?height=400&width=600",
      description: "Perfect for weddings and events",
    },
    // Add more venue images...
  ],
  experiences: [
    {
      id: 1,
      title: "Cultural Experience",
      image: "/placeholder.svg?height=400&width=600",
      description: "Immerse in local culture",
    },
    // Add more experience images...
  ],
  home: [
    {
      id: 1,
      title: "Hero Image 1",
      image: "/placeholder.svg?height=1080&width=1920",
      description: "Luxury hotel exterior",
    },
    {
      id: 2,
      title: "Hero Image 2",
      image: "/placeholder.svg?height=1080&width=1920",
      description: "Royal suite interior",
    },
    {
      id: 3,
      title: "Hero Image 3",
      image: "/placeholder.svg?height=1080&width=1920",
      description: "Spa and wellness center",
    },
    // Add more home carousel images...
  ],
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const section = searchParams.get("section") || "gallery"
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    const sectionData = imageDatabase[section as keyof typeof imageDatabase] || []

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedData = sectionData.slice(startIndex, endIndex)

    return NextResponse.json({
      success: true,
      data: paginatedData,
      total: sectionData.length,
      currentPage: page,
      totalPages: Math.ceil(sectionData.length / limit),
      hasMore: endIndex < sectionData.length,
    })
  } catch (error) {
    console.error("Images API Error:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch images" }, { status: 500 })
  }
}
