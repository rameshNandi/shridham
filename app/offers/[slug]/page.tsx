// "use client"

// import type React from "react"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { CheckCircle, Calendar } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Navbar from "@/components/navbar"
// import { offerData } from "@/lib/offer-data"

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8 },
// }

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// interface BookingData {
//   firstName: string
//   lastName: string
//   email: string
//   phone: string
//   checkIn: string
//   checkOut: string
//   guests: string
//   rooms: string
//   specialRequests: string
// }

// interface OfferDetailPageProps {
//   params: {
//     slug: string
//   }
// }

// export default function OfferDetailPage({ params }: OfferDetailPageProps) {
//   const [showBookingForm, setShowBookingForm] = useState(false)
//   const [selectedHotel, setSelectedHotel] = useState<string>("")
//   const [bookingData, setBookingData] = useState<BookingData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     guests: "2",
//     rooms: "1",
//     specialRequests: "",
//   })

//   const offer = offerData[params.slug as keyof typeof offerData]

//   if (!offer) {
//     return (
//       <div className="min-h-screen bg-white">
//         <Navbar />
//         <div className="pt-32 text-center">
//           <h1 className="text-2xl font-bold text-[#790f11]">Offer not found</h1>
//           <Link href="/offers">
//             <Button className="mt-4 bg-[#790f11] text-[#cda769]">Back to Offers</Button>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const handleBooking = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!selectedHotel) {
//       alert("Please select a hotel first.")
//       return
//     }

//     const fullBookingData = {
//       ...bookingData,
//       hotelId: selectedHotel,
//       offerId: offer.id,
//       offerTitle: offer.title,
//       timestamp: new Date().toISOString(),
//     }

//     try {
//       const response = await fetch("/api/booking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(fullBookingData),
//       })

//       if (response.ok) {
//         alert("Booking confirmed! You will receive a confirmation email shortly.")
//         setShowBookingForm(false)
//         setBookingData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           checkIn: "",
//           checkOut: "",
//           guests: "2",
//           rooms: "1",
//           specialRequests: "",
//         })
//       } else {
//         alert("Booking failed. Please try again.")
//       }
//     } catch (error) {
//       console.error("Booking error:", error)
//       alert("Booking failed. Please try again.")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       {/* Hero Section */}
//       <section className="relative h-96 mt-8">
//         <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#790f11]/70 to-transparent" />

//         <div className="absolute inset-0 flex items-center">
//           <div className="max-w-7xl mx-auto px-4 text-white">
//             <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//               <Badge className={`${offer.color} text-white border-0 mb-4`}>{offer.badge}</Badge>
//               <h1 className="text-5xl md:text-6xl font-bold mb-4">{offer.title}</h1>
//               <p className="text-2xl text-[#cda769] mb-6">{offer.subtitle}</p>
//               <p className="text-lg max-w-2xl">{offer.description}</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Offer Details */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Main Content */}
//             <div className="lg:col-span-2">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h2 className="text-3xl font-bold text-[#790f11] mb-6">OFFER DETAILS</h2>
//                 <p className="text-lg text-gray-600 leading-relaxed mb-8">{offer.fullDescription}</p>

//                 {/* Benefits */}
//                 <h3 className="text-2xl font-bold text-[#790f11] mb-6">WHAT'S INCLUDED</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
//                   {offer.benefits.map((benefit, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       <CheckCircle className="w-5 h-5 text-[#cda769] flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700">{benefit}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Package Inclusions */}
//                 <h3 className="text-2xl font-bold text-[#790f11] mb-6">PACKAGE INCLUSIONS</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
//                   {offer.inclusions.map((inclusion, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       <CheckCircle className="w-5 h-5 text-[#cda769] flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700">{inclusion}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Terms & Conditions */}
//                 <h3 className="text-2xl font-bold text-[#790f11] mb-6">TERMS & CONDITIONS</h3>
//                 <ul className="space-y-3 mb-12">
//                   {offer.terms.map((term, index) => (
//                     <motion.li
//                       key={index}
//                       className="flex items-start space-x-3"
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       <span className="text-[#790f11]">•</span>
//                       <span className="text-gray-600">{term}</span>
//                     </motion.li>
//                   ))}
//                 </ul>

//                 {/* Validity */}
//                 <div className="flex items-center space-x-2 mb-12">
//                   <Calendar className="w-5 h-5 text-[#790f11]" />
//                   <span className="text-gray-600">Validity: {offer.validity}</span>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <motion.div
//                 className="sticky top-24"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
//                   <h3 className="text-xl font-bold text-[#790f11] mb-6">AVAILABLE AT</h3>

//                   <div className="space-y-6 mb-8">
//                     {offer.relatedHotels.map((hotel) => (
//                       <div key={hotel.id} className="flex items-center space-x-4">
//                         <Image
//                           src={hotel.image || "/placeholder.svg"}
//                           alt={hotel.name}
//                           width={80}
//                           height={80}
//                           className="w-20 h-20 object-cover rounded-lg"
//                         />
//                         <div>
//                           <h4 className="font-semibold text-gray-800">{hotel.name}</h4>
//                           <div className="flex items-center space-x-2">
//                             <span className="text-[#790f11] font-bold">{hotel.price}</span>
//                             <span className="text-gray-500">/ night</span>
//                           </div>
//                           <div className="flex items-center mt-1">
//                             <span className="text-yellow-500">★</span>
//                             <span className="text-gray-600 ml-1">{hotel.rating}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <Button
//                     className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-white py-6 text-lg"
//                     onClick={() => setShowBookingForm(true)}
//                   >
//                     BOOK NOW
//                   </Button>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Booking Form Modal */}
//       {showBookingForm && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <motion.div
//             className="bg-white rounded-xl max-w-2xl w-full p-6"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//           >
//             <h3 className="text-2xl font-bold text-[#790f11] mb-6">BOOK YOUR STAY</h3>

//             <form onSubmit={handleBooking}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2">First Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.firstName}
//                     onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Last Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.lastName}
//                     onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.email}
//                     onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Phone</label>
//                   <input
//                     type="tel"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.phone}
//                     onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Check-in Date</label>
//                   <input
//                     type="date"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.checkIn}
//                     onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Check-out Date</label>
//                   <input
//                     type="date"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.checkOut}
//                     onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Guests</label>
//                   <select
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.guests}
//                     onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
//                   >
//                     {[1, 2, 3, 4, 5, 6].map((num) => (
//                       <option key={num} value={num.toString()}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Rooms</label>
//                   <select
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.rooms}
//                     onChange={(e) => setBookingData({ ...bookingData, rooms: e.target.value })}
//                   >
//                     {[1, 2, 3, 4].map((num) => (
//                       <option key={num} value={num.toString()}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Select Hotel</label>
//                 <div className="space-y-3">
//                   {offer.relatedHotels.map((hotel) => (
//                     <div key={hotel.id} className="flex items-center">
//                       <input
//                         type="radio"
//                         id={hotel.id}
//                         name="hotel"
//                         className="mr-3"
//                         checked={selectedHotel === hotel.id}
//                         onChange={() => setSelectedHotel(hotel.id)}
//                       />
//                       <label htmlFor={hotel.id} className="flex-1">
//                         <div className="flex justify-between items-center">
//                           <span>{hotel.name}</span>
//                           <span className="text-[#790f11] font-bold">{hotel.price}</span>
//                         </div>
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Special Requests</label>
//                 <textarea
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                   rows={3}
//                   value={bookingData.specialRequests}
//                   onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   className="flex-1 border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white bg-transparent"
//                   onClick={() => setShowBookingForm(false)}
//                 >
//                   CANCEL
//                 </Button>
//                 <Button type="submit" className="flex-1 bg-[#790f11] hover:bg-[#5a0b0d] text-white">
//                   CONFIRM BOOKING
//                 </Button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   )
// }