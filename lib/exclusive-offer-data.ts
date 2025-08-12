// Define types for our exclusive offer data
export type ExclusiveOffer = {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  validity: string
  image: string
  benefits: string[]
  inclusions: string[]
  terms: string[]
  relatedHotels: {
    id: string
    name: string
    image: string
    price: string
    rating: number
    location: [number, number]
    address: string
  }[]
}

export type ExclusiveOfferData = {
  [key: string]: ExclusiveOffer
}

// Mock exclusive offer data with coordinates
export const exclusiveOfferData: ExclusiveOfferData = {
  "stay-longer": {
    id: "stay-longer",
    title: "Stay a Bit Longer - Room Only",
    subtitle: "Extended Stay Special",
    description: "Extend your stay with our special long-stay package.",
    fullDescription:
      "Our Stay a Bit Longer package is designed for guests who wish to enjoy an extended vacation or business trip. This offer provides significant discounts for longer stays, giving you more value for your money while enjoying all the comforts of our luxury accommodations.",
    validity: "Round the Year",
    image: "/placeholder.svg?height=300&width=400",
    benefits: [
      "Discounted rates for stays of 7+ nights",
      "Complimentary room upgrade (subject to availability)",
      "Weekly housekeeping service",
      "Access to all hotel facilities",
      "Flexible check-in/check-out times",
    ],
    inclusions: [
      "Luxury accommodation",
      "Weekly linen change",
      "Welcome amenities",
      "Access to fitness center",
      "Daily newspaper",
    ],
    terms: [
      "Minimum 7 nights stay required",
      "Advance booking required",
      "Subject to availability",
      "Cannot be combined with other offers",
      "Non-refundable after booking",
    ],
    relatedHotels: [
      {
        id: "mumbai-palace",
        name: "Shridham Palace Mumbai",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹12,000",
        rating: 4.8,
        location: [19.076, 72.8777],
        address: "123 Marine Drive, Mumbai 400020",
      },
      {
        id: "kerala-resort",
        name: "Shridham Backwater Resort Kerala",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹14,000",
        rating: 4.7,
        location: [9.9312, 76.2673],
        address: "Backwaters Road, Alleppey, Kerala 688013",
      },
    ],
  },
  "soulful-abodes": {
    id: "soulful-abodes",
    title: "Soulful Abodes",
    subtitle: "Wellness Retreat Package",
    description: "Discover a sense of peace with our exclusive spa package.",
    fullDescription:
      "The Soulful Abodes package is designed for those seeking relaxation and rejuvenation. This wellness retreat includes spa treatments, yoga sessions, and specially curated healthy meals to help you unwind and reconnect with yourself in our serene luxury properties.",
    validity: "Round the Year",
    image: "/placeholder.svg?height=300&width=400",
    benefits: [
      "Daily spa treatment (60 minutes)",
      "Morning yoga sessions",
      "Healthy breakfast options",
      "Complimentary access to steam room",
      "Personalized wellness consultation",
    ],
    inclusions: [
      "3 nights luxury accommodation",
      "Daily breakfast",
      "3 spa treatments",
      "Welcome wellness kit",
      "Access to all hotel facilities",
    ],
    terms: [
      "Minimum 3 nights stay required",
      "Advance booking required",
      "Subject to availability",
      "Cannot be combined with other offers",
      "Non-refundable after booking",
    ],
    relatedHotels: [
      {
        id: "rajasthan-palace",
        name: "Shridham Heritage Rajasthan",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹18,000",
        rating: 4.9,
        location: [26.9124, 75.7873],
        address: "Heritage Road, Jaipur, Rajasthan 302001",
      },
      {
        id: "goa-resort",
        name: "Shridham Beach Resort Goa",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹16,000",
        rating: 4.6,
        location: [15.2993, 74.124],
        address: "Beach Road, North Goa, Goa 403516",
      },
    ],
  },
  "dream-drive": {
    id: "dream-drive",
    title: "Dream Drive, Discover Delight (B&B)",
    subtitle: "Road Trip Package",
    description: "Drive away to enjoy the company of your loved ones and spend quality time together.",
    fullDescription:
      "The Dream Drive package is perfect for those who love road trips and want to explore multiple destinations in comfort. This package includes accommodations at our partner properties along popular driving routes, with breakfast included at each stop.",
    validity: "Round the Year",
    image: "/placeholder.svg?height=300&width=400",
    benefits: [
      "Breakfast included at all stops",
      "Customized route planning",
      "24/7 roadside assistance",
      "Discounted rates at partner properties",
      "Flexible booking options",
    ],
    inclusions: [
      "Accommodation at partner properties",
      "Daily breakfast for two",
      "Welcome drink at each property",
      "Route map and guide",
      "Concierge services",
    ],
    terms: [
      "Minimum 3 properties required",
      "Advance booking required",
      "Subject to availability",
      "Cannot be combined with other offers",
      "Valid for new bookings only",
    ],
    relatedHotels: [
      {
        id: "bangalore-hotel",
        name: "Shridham Garden Bangalore",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹11,000",
        rating: 4.5,
        location: [12.9716, 77.5946],
        address: "Garden Road, Bangalore, Karnataka 560001",
      },
      {
        id: "hyderabad-resort",
        name: "Shridham Pearl Hyderabad",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹13,000",
        rating: 4.4,
        location: [17.385, 78.4867],
        address: "Pearl Road, Hyderabad, Telangana 500001",
      },
    ],
  },
  "long-stay-breakfast": {
    id: "long-stay-breakfast",
    title: "Stay a Bit Longer - Breakfast Inclusive",
    subtitle: "Extended Stay with Breakfast",
    description: "Embark on an unforgettable journey with our exclusive long package.",
    fullDescription:
      "Our Stay a Bit Longer - Breakfast Inclusive package combines the benefits of our extended stay offer with the convenience of daily breakfast. Perfect for guests who want to enjoy a leisurely vacation without worrying about morning meals.",
    validity: "Round the Year",
    image: "/placeholder.svg?height=300&width=400",
    benefits: [
      "Daily breakfast for two",
      "Discounted rates for stays of 7+ nights",
      "Complimentary room upgrade (subject to availability)",
      "Weekly housekeeping service",
      "Access to all hotel facilities",
    ],
    inclusions: [
      "Luxury accommodation",
      "Daily breakfast buffet",
      "Weekly linen change",
      "Welcome amenities",
      "Access to fitness center",
    ],
    terms: [
      "Minimum 7 nights stay required",
      "Advance booking required",
      "Subject to availability",
      "Cannot be combined with other offers",
      "Non-refundable after booking",
    ],
    relatedHotels: [
      {
        id: "delhi-hotel",
        name: "Shridham Capital Delhi",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹15,000",
        rating: 4.7,
        location: [28.6139, 77.209],
        address: "Capital Road, New Delhi 110001",
      },
      {
        id: "chennai-resort",
        name: "Shridham Marina Chennai",
        image: "/placeholder.svg?height=150&width=200",
        price: "₹12,500",
        rating: 4.3,
        location: [13.0827, 80.2707],
        address: "Marina Beach Road, Chennai, Tamil Nadu 600001",
      },
    ],
  },
}
