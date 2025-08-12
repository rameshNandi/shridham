import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Validate the form data
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify connection configuration
    await transporter.verify()

    // Email options
    const mailOptions = {
      from: `"Shridham Hotels Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to yourself or use CONTACT_EMAIL env var
      replyTo: formData.email,
      subject: `New Contact Form Submission: ${formData.subject || 'No Subject'}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Subject: ${formData.subject || 'Not provided'}
        
        Message:
        ${formData.message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}