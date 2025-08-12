  "use client"
  import { useState, useRef } from "react"
  import type React from "react"
  import { useReactToPrint } from "react-to-print"
  import { motion } from "framer-motion"
  import { MapPin, Users, Check, Mail } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"
  import { Checkbox } from "@/components/ui/checkbox"
  import { useToast } from "@/components/ui/use-toast"
  import Navbar from "@/components/navbar"
  import Footer from "@/components/footer"

  export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isProcessingConfirmation, setIsProcessingConfirmation] = useState(false)
    const [bookingId, setBookingId] = useState("")
    const [formData, setFormData] = useState({
      location: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      rooms: "",
      timeSlot: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      specialRequests: "",
      newsletter: false,
    })
    const { toast } = useToast()
    const printRef = useRef<HTMLDivElement>(null)

    const steps = [
      { number: 1, title: "Select Details", icon: MapPin },
      { number: 2, title: "Guest Information", icon: Users },
      { number: 3, title: "Confirmation", icon: Check },
    ]

    const handleInputChange = (field: string, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const validateStep1 = () => {
      if (!formData.location) {
        toast({
          title: "Validation Error",
          description: "Please select a location",
          variant: "destructive",
        })
        return false
      }
      if (!formData.checkIn) {
        toast({
          title: "Validation Error",
          description: "Please select check-in date",
          variant: "destructive",
        })
        return false
      }
      if (!formData.checkOut) {
        toast({
          title: "Validation Error",
          description: "Please select check-out date",
          variant: "destructive",
        })
        return false
      }
      return true
    }

    const validateStep2 = () => {
      if (!formData.firstName) {
        toast({
          title: "Validation Error",
          description: "Please enter your first name",
          variant: "destructive",
        })
        return false
      }
      if (!formData.lastName) {
        toast({
          title: "Validation Error",
          description: "Please enter your last name",
          variant: "destructive",
        })
        return false
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast({
          title: "Validation Error",
          description: "Please enter a valid email address",
          variant: "destructive",
        })
        return false
      }
      if (!formData.phone) {
        toast({
          title: "Validation Error",
          description: "Please enter your phone number",
          variant: "destructive",
        })
        return false
      }
      return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      try {
        if (!validateStep1() || !validateStep2()) {
          setIsSubmitting(false)
          return
        }

        const response = await fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.message || `HTTP error! Status: ${response.status}`)
        }
        if (!result.success) {
          throw new Error(result.message || "Booking was not successful")
        }

        setBookingId(result.bookingId)
        setCurrentStep(3)
        toast({
          title: "Booking Confirmed!",
          description: `Your booking ID: ${result.bookingId}`,
        })
      } catch (error) {
        console.error("Booking error:", error)
        toast({
          title: "Booking Error",
          description: error instanceof Error ? error.message : "An unknown error occurred",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }

    const handlePrint = useReactToPrint({
      contentRef: printRef,
      pageStyle: `
        @page {
          size: A4;
          margin: 1cm;
        }
        @media print {
          body {
            padding: 20px;
          }
        }
      `,
      documentTitle: `Shridham-Hotels-Booking-${bookingId}`,
      onBeforeGetContent: () => {
        return new Promise((resolve, reject) => {
          // Give React a moment to update the DOM with the latest state (bookingId, formData)
          setTimeout(() => {
            if (!printRef.current) {
              toast({
                title: "Print Error",
                description: "Print content reference not found. Please try again.",
                variant: "destructive",
              })
              return reject(new Error("No content available for printing"))
            }
            // Ensure bookingId is available before attempting to print content that relies on it
            if (!bookingId) {
              toast({
                title: "Print Error",
                description: "Booking ID not yet available for PDF generation. Please try again.",
                variant: "destructive",
              })
              return reject(new Error("Booking ID not available"))
            }
            resolve(null) // Resolve the promise
          }, 100) // A small delay (e.g., 100ms)
        })
      },
      onPrintError: (error) => {
        console.error("Print error:", error)
        toast({
          title: "Print Error",
          description: `Failed to generate PDF: ${error instanceof Error ? error.message : "An unknown error occurred"}`,
          variant: "destructive",
        })
      },
    })

    const downloadPDF = () => {
      handlePrint()
    }

    const sendEmail = async () => {
      try {
        const response = await fetch("/api/send-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            bookingId,
            ...formData,
          }),
        })
        const result = await response.json()

        if (!response.ok) throw new Error(result.message || "Failed to send email")

        toast({
          title: "Email Sent!",
          description: "Confirmation has been sent to your email",
        })
      } catch (error) {
        console.error("Email error:", error)
        toast({
          title: "Email Error",
          description: error instanceof Error ? error.message : "Failed to send email",
          variant: "destructive",
        })
        throw error
      }
    }

    const handleEmailAndDownload = async () => {
      setIsProcessingConfirmation(true)
      try {
        await sendEmail() // Send email first
        downloadPDF() // Then trigger PDF download
        toast({
          title: "Confirmation Actions Complete!",
          description: "Email sent and PDF download initiated.",
        })
      } catch (error) {
        console.error("Combined action error:", error)
        toast({
          title: "Action Error",
          description: "An error occurred during confirmation actions.",
          variant: "destructive",
        })
      } finally {
        setIsProcessingConfirmation(false)
      }
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-4">Book Your Stay</h1>
              <p className="text-lg text-gray-600">Experience luxury and comfort at Shridham Hotels</p>
            </motion.div>

            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        currentStep >= step.number
                          ? "bg-[#790f11] border-[#790f11] text-white"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="ml-3 hidden md:block">
                      <p
                        className={`text-sm font-medium ${
                          currentStep >= step.number ? "text-[#790f11]" : "text-gray-400"
                        }`}
                      >
                        Step {step.number}
                      </p>
                      <p className={`text-xs ${currentStep >= step.number ? "text-gray-700" : "text-gray-400"}`}>
                        {step.title}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 ml-8 ${currentStep > step.number ? "bg-[#790f11]" : "bg-gray-300"}`} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-[#790f11] text-white">
                  <CardTitle className="text-2xl font-bold text-center">
                    {currentStep === 1 && "Select Your Preferences"}
                    {currentStep === 2 && "Guest Information"}
                    {currentStep === 3 && "Booking Confirmed"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-[#790f11] font-medium">
                              Location <span className="text-red-500">*</span>
                            </Label>
                            <Select
                              value={formData.location}
                              onValueChange={(value) => handleInputChange("location", value)}
                            >
                              <SelectTrigger className="border-[#790f11]/20 focus:border-[#790f11]">
                                <SelectValue placeholder="Select Location" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="goa">Goa</SelectItem>
                                <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                <SelectItem value="kerala">Kerala</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeSlot" className="text-[#790f11] font-medium">
                              Preferred Time Slot
                            </Label>
                            <Select
                              value={formData.timeSlot}
                              onValueChange={(value) => handleInputChange("timeSlot", value)}
                            >
                              <SelectTrigger className="border-[#790f11]/20 focus:border-[#790f11]">
                                <SelectValue placeholder="Select Time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (6:00 AM - 12:00 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12:00 PM - 6:00 PM)</SelectItem>
                                <SelectItem value="evening">Evening (6:00 PM - 12:00 AM)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="checkIn" className="text-[#790f11] font-medium">
                              Check-in Date <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="checkIn"
                              type="date"
                              value={formData.checkIn}
                              onChange={(e) => handleInputChange("checkIn", e.target.value)}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="checkOut" className="text-[#790f11] font-medium">
                              Check-out Date <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="checkOut"
                              type="date"
                              value={formData.checkOut}
                              onChange={(e) => handleInputChange("checkOut", e.target.value)}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="guests" className="text-[#790f11] font-medium">
                              Number of Guests
                            </Label>
                            <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                              <SelectTrigger className="border-[#790f11]/20 focus:border-[#790f11]">
                                <SelectValue placeholder="Select Guests" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Guest</SelectItem>
                                <SelectItem value="2">2 Guests</SelectItem>
                                <SelectItem value="3">3 Guests</SelectItem>
                                <SelectItem value="4">4 Guests</SelectItem>
                                <SelectItem value="5+">5+ Guests</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rooms" className="text-[#790f11] font-medium">
                              Number of Rooms
                            </Label>
                            <Select value={formData.rooms} onValueChange={(value) => handleInputChange("rooms", value)}>
                              <SelectTrigger className="border-[#790f11]/20 focus:border-[#790f11]">
                                <SelectValue placeholder="Select Rooms" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Room</SelectItem>
                                <SelectItem value="2">2 Rooms</SelectItem>
                                <SelectItem value="3">3 Rooms</SelectItem>
                                <SelectItem value="4+">4+ Rooms</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button
                            type="button"
                            onClick={() => {
                              if (validateStep1()) {
                                setCurrentStep(2)
                              }
                            }}
                            className="bg-[#790f11] hover:bg-[#5a0b0d] text-white px-8 py-3"
                          >
                            Continue
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-[#790f11] font-medium">
                              First Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-[#790f11] font-medium">
                              Last Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your last name"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-[#790f11] font-medium">
                              Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-[#790f11] font-medium">
                              Phone Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialRequests" className="text-[#790f11] font-medium">
                            Special Requests
                          </Label>
                          <Textarea
                            id="specialRequests"
                            value={formData.specialRequests}
                            onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                            className="border-[#790f11]/20 focus:border-[#790f11]"
                            placeholder="Any special requests or requirements..."
                            rows={4}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                          />
                          <Label htmlFor="newsletter" className="text-sm text-gray-600">
                            Subscribe to our newsletter for exclusive offers and updates
                          </Label>
                        </div>
                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setCurrentStep(1)}
                            className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white px-8 py-3"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-8 py-3"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Processing..." : "Confirm Booking"}
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        className="text-center space-y-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#790f11] mb-2">Booking Confirmed!</h3>
                          <p className="text-gray-600 mb-6">
                            Thank you for choosing Shridham Hotels. Your booking has been confirmed.
                          </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 text-left max-w-md mx-auto">
                          <h4 className="font-semibold text-[#790f11] mb-4">Booking Summary</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Booking ID:</span>
                              <span className="font-medium">{bookingId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Location:</span>
                              <span className="font-medium capitalize">{formData.location}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Check-in:</span>
                              <span className="font-medium">{formData.checkIn}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Check-out:</span>
                              <span className="font-medium">{formData.checkOut}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Guests:</span>
                              <span className="font-medium">{formData.guests}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Rooms:</span>
                              <span className="font-medium">{formData.rooms}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Guest Name:</span>
                              <span className="font-medium">
                                {formData.firstName} {formData.lastName}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Button
                            onClick={handleEmailAndDownload}
                            className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-8 py-3 w-full"
                            disabled={isProcessingConfirmation}
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            {isProcessingConfirmation ? "Processing..." : "Email & Download Confirmation"}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white px-8 py-3 w-full bg-transparent"
                            onClick={() => (window.location.href = "/")}
                          >
                            Return to Home
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <Footer />

        {/* This div is always mounted but visually hidden, used by react-to-print for PDF generation */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          <div ref={printRef} className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#790f11]">Shridham Hotels</h1>
              <p className="text-lg">Booking Confirmation</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p>
                    <strong>Booking ID:</strong> {bookingId}
                  </p>
                  <p>
                    <strong>Guest Name:</strong> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Location:</strong> {formData.location}
                  </p>
                  <p>
                    <strong>Check-in:</strong> {formData.checkIn}
                  </p>
                  <p>
                    <strong>Check-out:</strong> {formData.checkOut}
                  </p>
                  <p>
                    <strong>Guests:</strong> {formData.guests}
                  </p>
                  <p>
                    <strong>Rooms:</strong> {formData.rooms}
                  </p>
                </div>
              </div>
            </div>
            {formData.specialRequests && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Special Requests</h2>
                <p>{formData.specialRequests}</p>
              </div>
            )}
            <div className="mt-8 text-sm text-gray-600">
              <p>Thank you for choosing Shridham Hotels</p>
              <p>For any queries, please contact: reservations@shridham.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
