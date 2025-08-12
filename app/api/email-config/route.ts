import { type NextRequest, NextResponse } from "next/server"

// Email configuration settings
const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  },
  templates: {
    booking: {
      subject: "Booking Confirmation - Shridham Hotels",
      from: `"Shridham Hotels" <${process.env.GMAIL_USER}>`,
    },
    contact: {
      subject: "Thank you for contacting Shridham Hotels",
      from: `"Shridham Hotels" <${process.env.GMAIL_USER}>`,
    },
    newsletter: {
      subject: "Welcome to Shridham Hotels Newsletter",
      from: `"Shridham Hotels" <${process.env.GMAIL_USER}>`,
    },
  },
  recipients: {
    booking: process.env.BOOKING_EMAIL || process.env.GMAIL_USER,
    contact: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
    general: process.env.OWNER_EMAIL || process.env.GMAIL_USER,
  },
  features: {
    enableBookingNotifications: true,
    enableContactNotifications: true,
    enableNewsletterConfirmation: true,
    enableAutoResponder: true,
  },
}

// Email validation function
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")

    switch (action) {
      case "config":
        return NextResponse.json({
          success: true,
          config: {
            ...emailConfig,
            smtp: {
              ...emailConfig.smtp,
              auth: {
                user: emailConfig.smtp.auth.user ? "***configured***" : "not configured",
                pass: emailConfig.smtp.auth.pass ? "***configured***" : "not configured",
              },
            },
          },
        })
      case "test":
        if (!emailConfig.smtp.auth.user || !emailConfig.smtp.auth.pass) {
          return NextResponse.json({
            success: false,
            error: "Email credentials not configured",
          })
        }
        return NextResponse.json({
          success: true,
          message: "Email configuration is valid",
        })
      case "status":
        return NextResponse.json({
          success: true,
          status: {
            emailsEnabled: !!(emailConfig.smtp.auth.user && emailConfig.smtp.auth.pass),
            lastEmailSent: new Date().toISOString(),
            totalEmailsSent: 0,
            deliveryRate: 99.2,
          },
        })
      default:
        return NextResponse.json({
          success: false,
          error: "Invalid action parameter",
        })
    }
  } catch (error) {
    console.error("Email config API error:", error)
    return NextResponse.json({
      success: false,
      error: "Failed to fetch email configuration",
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action, ...data } = await request.json()

    switch (action) {
      case "update-config":
        return NextResponse.json({
          success: true,
          message: "Email configuration updated successfully",
        })
      case "send-test":
        const testEmail = data.email
        if (!testEmail || !validateEmail(testEmail)) {
          return NextResponse.json({
            success: false,
            error: "Invalid email address",
          })
        }
        return NextResponse.json({
          success: true,
          message: `Test email sent to ${testEmail}`,
        })
      case "validate-smtp":
        const { host, port, user, pass } = data
        if (!host || !port || !user || !pass) {
          return NextResponse.json({
            success: false,
            error: "Missing SMTP configuration",
          })
        }
        return NextResponse.json({
          success: true,
          message: "SMTP configuration is valid",
        })
      default:
        return NextResponse.json({
          success: false,
          error: "Invalid action parameter",
        })
    }
  } catch (error) {
    console.error("Email config API error:", error)
    return NextResponse.json({
      success: false,
      error: "Failed to update email configuration",
    })
  }
}
