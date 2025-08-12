// "use client"

// import type React from "react"
// import { use as reactUse } from "react"

// import type { ReactElement } from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { CheckCircle, Calendar, MapPin, Star, Hotel, CreditCard } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import dynamic from "next/dynamic" // Import dynamic for client-side rendering

// // Import exclusiveOfferData and types from lib file
// import { exclusiveOfferData } from "@/lib/exclusive-offer-data"

// // Dynamically import the ClientMap component to ensure it's only rendered on the client
// const ClientMapWithNoSSR = dynamic(() => import("@/components/client-map"), {
//   ssr: false,
//   loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>,
// })

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
//   name: string
//   email: string
//   phone: string
//   checkIn: string
//   checkOut: string
//   guests: number
//   specialRequests: string
// }

// export default function ExclusiveOfferDetailPage({ params }: { params: { id: string } }): ReactElement {
//   const { id } = reactUse(params)
//   const [showBookingForm, setShowBookingForm] = useState(false)
//   const [selectedHotel, setSelectedHotel] = useState("")
//   const [bookingData, setBookingData] = useState<BookingData>({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     guests: 2,
//     specialRequests: "",
//   })

//   const offer = exclusiveOfferData[id as keyof typeof exclusiveOfferData]

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

//   const handleBookingSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!selectedHotel) {
//       alert("Please select a hotel first")
//       return
//     }

//     const hotel = offer.relatedHotels.find((h) => h.id === selectedHotel)
//     const bookingDetails = {
//       ...bookingData,
//       offerId: offer.id,
//       offerTitle: offer.title,
//       hotelId: selectedHotel,
//       hotelName: hotel?.name,
//       totalPrice: calculateTotalPrice(),
//     }

//     try {
//       // In a real app, you would send this to your backend
//       console.log("Booking submitted:", bookingDetails)
//       alert("Booking successful! Confirmation sent to your email.")
//       setShowBookingForm(false)
//       // Reset form
//       setBookingData({
//         name: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         guests: 2,
//         specialRequests: "",
//       })
//     } catch (error) {
//       console.error("Booking error:", error)
//       alert("Booking failed. Please try again.")
//     }
//   }

//   const calculateTotalPrice = () => {
//     if (!selectedHotel || !bookingData.checkIn || !bookingData.checkOut) return 0
//     const hotel = offer.relatedHotels.find((h) => h.id === selectedHotel)
//     if (!hotel) return 0

//     const price = Number.parseInt(hotel.price.replace(/[^0-9]/g, ""))
//     const checkInDate = new Date(bookingData.checkIn)
//     const checkOutDate = new Date(bookingData.checkOut)

//     // Ensure checkOutDate is after checkInDate
//     if (checkOutDate <= checkInDate) {
//       return price // Assume at least one night if dates are invalid or same
//     }

//     const days = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
//     return price * days
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       {/* Hero Section with Parallax Effect */}
//       <motion.section
//         className="relative h-[70vh]  overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div
//           className="absolute inset-0"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" priority />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-r from-[#790f11]/80 to-transparent" />

//         <div className="absolute inset-0 flex items-center">
//           <div className="max-w-7xl mx-auto px-4 text-white">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <Badge className="bg-[#cda769] text-[#790f11] border-0 mb-4 text-lg">Exclusive Offer</Badge>
//               <h1 className="text-5xl md:text-6xl font-bold mb-4">{offer.title}</h1>
//               <p className="text-2xl text-[#cda769] mb-6">{offer.subtitle}</p>
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
//                 <Button
//                   className="bg-[#790f11] hover:bg-[#5a0b0d] text-white text-lg px-8 py-6"
//                   onClick={() => setShowBookingForm(true)}
//                 >
//                   BOOK NOW
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

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

//                 {/* Benefits with Staggered Animation */}
//                 <h3 className="text-2xl font-bold text-[#790f11] mb-6 flex items-center">
//                   <CheckCircle className="mr-2 text-[#cda769]" /> WHAT'S INCLUDED
//                 </h3>
//                 <motion.div
//                   className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
//                   variants={staggerContainer}
//                   initial="initial"
//                   whileInView="animate"
//                   viewport={{ once: true }}
//                 >
//                   {offer.benefits.map((benefit, index) => (
//                     <motion.div
//                       key={index}
//                       variants={fadeInUp}
//                       className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-[#f8f4eb] transition-colors"
//                     >
//                       <CheckCircle className="w-5 h-5 text-[#cda769] flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700">{benefit}</span>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Package Inclusions */}
//                 <h3 className="text-2xl font-bold text-[#790f11] mb-6 flex items-center">
//                   <Hotel className="mr-2 text-[#cda769]" /> PACKAGE INCLUSIONS
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
//                   {offer.inclusions.map((inclusion, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-[#f8f4eb] transition-colors"
//                     >
//                       <CheckCircle className="w-5 h-5 text-[#cda769] flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700">{inclusion}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Terms & Conditions */}
//                 <h3 className="text-2xl font-bold text-[#790f11] mb-6 flex items-center">
//                   <CreditCard className="mr-2 text-[#cda769]" /> TERMS & CONDITIONS
//                 </h3>
//                 <ul className="space-y-3 mb-12">
//                   {offer.terms.map((term, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-[#f8f4eb] transition-colors"
//                     >
//                       <span className="text-[#790f11]">•</span>
//                       <span className="text-gray-600">{term}</span>
//                     </motion.li>
//                   ))}
//                 </ul>

//                 {/* Validity */}
//                 <div className="flex items-center space-x-2 mb-12 p-4 bg-gray-50 rounded-xl">
//                   <Calendar className="w-5 h-5 text-[#790f11]" />
//                   <span className="text-gray-600 font-medium">Validity: {offer.validity}</span>
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
//                 <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
//                   <h3 className="text-xl font-bold text-[#790f11] mb-6 flex items-center">
//                     <MapPin className="mr-2 text-[#cda769]" /> AVAILABLE AT
//                   </h3>

//                   <div className="space-y-6 mb-8">
//                     {offer.relatedHotels.map((hotel) => (
//                       <motion.div
//                         key={hotel.id}
//                         whileHover={{ scale: 1.02 }}
//                         className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm cursor-pointer border transition-all ${
//                           selectedHotel === hotel.id ? "border-[#790f11]" : "border-transparent hover:border-[#cda769]"
//                         }`}
//                         onClick={() => setSelectedHotel(hotel.id)}
//                       >
//                         <div className="relative w-20 h-20 flex-shrink-0">
//                           <Image
//                             src={hotel.image || "/placeholder.svg"}
//                             alt={hotel.name}
//                             fill
//                             className="object-cover rounded-lg"
//                           />
//                           {selectedHotel === hotel.id && (
//                             <div className="absolute inset-0 bg-[#790f11]/30 rounded-lg border-2 border-[#790f11]"></div>
//                           )}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-800">{hotel.name}</h4>
//                           <div className="flex items-center space-x-2 mt-1">
//                             <span className="text-[#790f11] font-bold">{hotel.price}</span>
//                             <span className="text-gray-500 text-sm">/ night</span>
//                           </div>
//                           <div className="flex items-center mt-1">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`w-4 h-4 ${
//                                   i < Math.floor(hotel.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
//                                 }`}
//                               />
//                             ))}
//                             <span className="text-gray-600 ml-1 text-sm">{hotel.rating}</span>
//                           </div>
//                           <div className="flex items-center mt-1 text-sm text-gray-500">
//                             <MapPin className="w-3 h-3 mr-1" />
//                             <span>{hotel.address.split(",")[0]}</span>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Mini Map */}
//                   <div className="h-64 rounded-lg overflow-hidden mb-6 border border-gray-200">
//                     <ClientMapWithNoSSR
//                       center={offer.relatedHotels[0].location}
//                       zoom={5}
//                       hotels={offer.relatedHotels}
//                     />
//                   </div>

//                   <Button
//                     className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-white py-6 text-lg"
//                     onClick={() => setShowBookingForm(true)}
//                     disabled={!selectedHotel}
//                   >
//                     {selectedHotel ? "BOOK NOW" : "SELECT A HOTEL"}
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
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-bold text-[#790f11]">BOOK YOUR STAY</h3>
//               <button onClick={() => setShowBookingForm(false)} className="text-gray-500 hover:text-[#790f11]">
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleBookingSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.name}
//                     onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.email}
//                     onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Phone</label>
//                   <input
//                     type="tel"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.phone}
//                     onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Guests</label>
//                   <select
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.guests}
//                     onChange={(e) => setBookingData({ ...bookingData, guests: Number.parseInt(e.target.value) })}
//                   >
//                     {[1, 2, 3, 4, 5, 6].map((num) => (
//                       <option key={num} value={num}>
//                         {num} {num === 1 ? "guest" : "guests"}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Check-in Date</label>
//                   <input
//                     type="date"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.checkIn}
//                     onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
//                     min={new Date().toISOString().split("T")[0]}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Check-out Date</label>
//                   <input
//                     type="date"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                     value={bookingData.checkOut}
//                     onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
//                     min={bookingData.checkIn || new Date().toISOString().split("T")[0]}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Selected Hotel</label>
//                 <div className="p-4 bg-gray-50 rounded-lg">
//                   {selectedHotel ? (
//                     <>
//                       <div className="font-semibold text-[#790f11]">
//                         {offer.relatedHotels.find((h) => h.id === selectedHotel)?.name}
//                       </div>
//                       <div className="text-gray-600 mt-1">
//                         {offer.relatedHotels.find((h) => h.id === selectedHotel)?.address}
//                       </div>
//                     </>
//                   ) : (
//                     <div className="text-gray-500">No hotel selected</div>
//                   )}
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Special Requests</label>
//                 <textarea
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#790f11]"
//                   rows={3}
//                   value={bookingData.specialRequests}
//                   onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
//                   placeholder="Any special requirements or preferences..."
//                 />
//               </div>
//               {selectedHotel && bookingData.checkIn && bookingData.checkOut && (
//                 <div className="mb-6 p-4 bg-[#f8f4eb] rounded-lg">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="font-medium">Total for your stay:</span>
//                     <span className="text-xl font-bold text-[#790f11]">₹{calculateTotalPrice().toLocaleString()}</span>
//                   </div>
//                   <div className="text-sm text-gray-600">Includes all taxes and fees</div>
//                 </div>
//               )}
//               <div className="flex space-x-4">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   className="flex-1 border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-white py-6 bg-transparent"
//                   onClick={() => setShowBookingForm(false)}
//                 >
//                   CANCEL
//                 </Button>
//                 <Button
//                   type="submit"
//                   className="flex-1 bg-[#790f11] hover:bg-[#5a0b0d] text-white py-6"
//                   disabled={!selectedHotel}
//                 >
//                   CONFIRM BOOKING
//                 </Button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   )
// }
