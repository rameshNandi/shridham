import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const data = await request.json()
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Room Enquiry: ${data.roomType}`,
      html: `
        <h1>New Room Enquiry</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Room Type:</strong> ${data.roomType}</p>
        <p><strong>Check-in:</strong> ${data.checkIn}</p>
        <p><strong>Check-out:</strong> ${data.checkOut}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Special Requests:</strong> ${data.requests || "None"}</p>
        <hr>
        <p>This email was sent from the room enquiry form on Shridham Hotels website.</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully!",
    })
  } catch (error) {
    console.error("Error sending enquiry:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit enquiry. Please try again later.",
      },
      { status: 500 },
    )
  }
}
