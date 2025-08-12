import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
      subject: `New Quotation Request: ${data.eventType}`,
      html: `
        <h1>New Quotation Request</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event Type:</strong> ${data.eventType}</p>
        <p><strong>Event Date:</strong> ${data.eventDate}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Venue:</strong> ${data.venue}</p>
        <p><strong>Requirements:</strong> ${data.requirements}</p>
        <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
        <hr>
        <p>This email was sent from the quotation request form on Shridham Hotels website.</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true,
      message: 'Quotation request submitted successfully!' 
    })
  } catch (error) {
    console.error('Error sending quotation request:', error)
    return NextResponse.json({ 
      success: false,
      message: 'Failed to submit request. Please try again later.' 
    }, { status: 500 })
  }
}