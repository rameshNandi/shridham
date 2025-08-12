import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Validate required fields
    if (!bookingData.location) {
      return NextResponse.json({ success: false, message: "Please select a location" }, { status: 400 })
    }
    if (!bookingData.checkIn || !bookingData.checkOut) {
      return NextResponse.json(
        { success: false, message: "Please select check-in and check-out dates" },
        { status: 400 },
      )
    }
    if (!bookingData.firstName || !bookingData.lastName) {
      return NextResponse.json({ success: false, message: "Please provide your full name" }, { status: 400 })
    }
    if (!bookingData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }
    if (!bookingData.phone) {
      return NextResponse.json({ success: false, message: "Please provide your phone number" }, { status: 400 })
    }

    // Generate booking ID
    const bookingId = `BOOK-${Math.random().toString(36).substring(2, 10).toUpperCase()}`

    // In a real application, you would save to database here
    // For demo purposes, we'll just simulate a successful booking
    return NextResponse.json({
      success: true,
      message: "Booking successful",
      bookingId,
      data: bookingData,
    })
  } catch (error) {
    console.error("Booking API Error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    )
  }
}
