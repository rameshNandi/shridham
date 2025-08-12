import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Type definition for booking data
interface BookingData {
  location: string
  checkIn: string
  checkOut: string
  guests: string
  rooms: string
  timeSlot: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests?: string
  newsletter: boolean
  bookingId: string
}

// Email template for the client
const generateClientEmailTemplate = (bookingData: BookingData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Booking Confirmation - Shridham Hotels</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #790f11; color: white; padding: 30px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; color: #cda769; }
            .content { padding: 30px; background: #f9f9f9; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .footer { background: #790f11; color: white; padding: 20px; text-align: center; }
            .gold { color: #cda769; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">SHRIDHAM</div>
                <h1>Booking Confirmation</h1>
                <p>Thank you for choosing Shridham Hotels</p>
            </div>
            <div class="content">
                <h2>Dear ${bookingData.firstName} ${bookingData.lastName},</h2>
                <p>We are delighted to confirm your reservation at Shridham Hotels. Your booking details are as follows:</p>
                <div class="booking-details">
                    <h3 class="gold">Booking Details</h3>
                    <div class="detail-row">
                        <span><strong>Booking ID:</strong></span>
                        <span>${bookingData.bookingId}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Location:</strong></span>
                        <span>${bookingData.location}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Check-in Date:</strong></span>
                        <span>${bookingData.checkIn}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Check-out Date:</strong></span>
                        <span>${bookingData.checkOut}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Number of Guests:</strong></span>
                        <span>${bookingData.guests}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Number of Rooms:</strong></span>
                        <span>${bookingData.rooms}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Preferred Time Slot:</strong></span>
                        <span>${bookingData.timeSlot}</span>
                    </div>
                </div>
                ${
                  bookingData.specialRequests
                    ? `
                <div class="booking-details">
                    <h3 class="gold">Special Requests</h3>
                    <p>${bookingData.specialRequests}</p>
                </div>
                `
                    : ""
                }
                <p>We look forward to welcoming you and providing you with an exceptional luxury experience.</p>
                <p>Should you have any questions or need to modify your reservation, please contact us at <strong>reservations@shridham.com</strong> or call <strong>+91 1800-111-825</strong>.</p>
            </div>
            <div class="footer">
                <p>Experience the epitome of luxury and royal hospitality</p>
                <p>Shridham Hotels | www.shridham.com</p>
            </div>
        </div>
    </body>
    </html>
  `
}

// Email template for the owner
const generateOwnerEmailTemplate = (bookingData: BookingData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Booking Alert - Shridham Hotels</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #790f11; color: white; padding: 30px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; color: #cda769; }
            .content { padding: 30px; background: #f9f9f9; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .alert { background: #cda769; color: #790f11; padding: 15px; border-radius: 8px; margin: 20px 0; font-weight: bold; }
            .gold { color: #cda769; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">SHRIDHAM</div>
                <h1>New Booking Alert</h1>
            </div>
            <div class="content">
                <div class="alert">
                    🔔 New booking received! Please review and process accordingly.
                </div>
                <div class="booking-details">
                    <h3 class="gold">Guest Information</h3>
                    <div class="detail-row">
                        <span><strong>Name:</strong></span>
                        <span>${bookingData.firstName} ${bookingData.lastName}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Email:</strong></span>
                        <span>${bookingData.email}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Phone:</strong></span>
                        <span>${bookingData.phone}</span>
                    </div>
                </div>
                <div class="booking-details">
                    <h3 class="gold">Booking Details</h3>
                    <div class="detail-row">
                        <span><strong>Booking ID:</strong></span>
                        <span>${bookingData.bookingId}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Location:</strong></span>
                        <span>${bookingData.location}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Check-in Date:</strong></span>
                        <span>${bookingData.checkIn}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Check-out Date:</strong></span>
                        <span>${bookingData.checkOut}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Number of Guests:</strong></span>
                        <span>${bookingData.guests}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Number of Rooms:</strong></span>
                        <span>${bookingData.rooms}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Preferred Time Slot:</strong></span>
                        <span>${bookingData.timeSlot}</span>
                    </div>
                    <div class="detail-row">
                        <span><strong>Newsletter Subscription:</strong></span>
                        <span>${bookingData.newsletter ? "Yes" : "No"}</span>
                    </div>
                </div>
                ${
                  bookingData.specialRequests
                    ? `
                <div class="booking-details">
                    <h3 class="gold">Special Requests</h3>
                    <p>${bookingData.specialRequests}</p>
                </div>
                `
                    : ""
                }
                <p><strong>Booking submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
        </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json()

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.",
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send confirmation email to the client
    const clientEmailHtml = generateClientEmailTemplate(bookingData)
    await transporter.sendMail({
      from: `"Shridham Hotels" <${process.env.GMAIL_USER}>`,
      to: bookingData.email,
      subject: `Booking Confirmation #${bookingData.bookingId}`,
      html: clientEmailHtml,
    })

    // Send notification email to the hotel owner
    const ownerEmail = process.env.OWNER_EMAIL || process.env.GMAIL_USER // Use a specific owner email or the sender's email
    const ownerEmailHtml = generateOwnerEmailTemplate(bookingData) // Declare the variable before using it
    await transporter.sendMail({
      from: `"Shridham Hotels" <${process.env.GMAIL_USER}>`,
      to: ownerEmail,
      subject: `New Booking Received: #${bookingData.bookingId} - ${bookingData.firstName} ${bookingData.lastName}`,
      html: ownerEmailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Confirmation emails sent successfully",
    })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, message: "Failed to send confirmation email" }, { status: 500 })
  }
}
