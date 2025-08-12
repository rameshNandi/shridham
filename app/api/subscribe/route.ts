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
      subject: 'New Newsletter Subscription',
      html: `
        <h1>New Newsletter Subscription</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
        <hr>
        <p>This email was sent from the newsletter subscription form on Shridham Hotels website.</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    // Also send confirmation to subscriber
    const confirmationMail = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: 'Thank you for subscribing to Shridham Hotels',
      html: `
        <h1>Thank you for subscribing!</h1>
        <p>You've been successfully subscribed to our newsletter.</p>
        <p>We'll keep you updated with our latest offers, news, and events.</p>
        <hr>
        <p>If you didn't request this subscription, please ignore this email.</p>
      `,
    }

    await transporter.sendMail(confirmationMail)

    return NextResponse.json({ 
      success: true,
      message: 'Subscription successful!' 
    })
  } catch (error) {
    console.error('Error processing subscription:', error)
    return NextResponse.json({ 
      success: false,
      message: 'Failed to subscribe. Please try again later.' 
    }, { status: 500 })
  }
}