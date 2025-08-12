// Define types for our offer data
export type Offer = {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  validity: string
  memberOnly: boolean
  image: string
  images: string[]
  benefits: string[]
  inclusions: string[]
  terms: string[]
  relatedHotels: {
    id: string
    name: string
    image: string
    price: string
    rating: number
  }[]
  badge: string
  color: string
}

export type OfferData = {
  [key: string]: Offer
}

// Mock offer data
export const offerData: OfferData = {
  "suite-surprises": {
    id: "suite-surprises",
    title: "Suite Surprises - Member Only",
    subtitle: "Exclusive Member Benefits",
    description:
      "Indulge in a stay that goes beyond the ordinary. Our experience includes complimentary room upgrades and personalized extravagance with our exclusive member-only package.",
    fullDescription:
      "Experience the pinnacle of luxury with our Suite Surprises package, exclusively designed for our valued NeuPass members. This extraordinary offer transforms your stay into an unforgettable journey of indulgence, featuring complimentary suite upgrades, personalized butler service, and exclusive access to our premium amenities. From the moment you arrive, every detail is crafted to exceed your expectations and create memories that last a lifetime.",
    validity: "Round the Year",
    memberOnly: true,
    image: "/offer/pic1.png",
    images: [
      "/offer/pic1.png",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    benefits: [
      "Complimentary suite upgrade (subject to availability)",
      "Personalized butler service",
      "Welcome amenities and fresh flowers",
      "Priority restaurant reservations",
      "Exclusive access to member lounge",
      "Late check-out until 4 PM",
      "Complimentary spa consultation",
      "Airport transfer in luxury vehicle",
    ],
    inclusions: [
      "Luxury suite accommodation",
      "Daily breakfast for two",
      "Welcome drink on arrival",
      "Turndown service with chocolates",
      "Access to all hotel facilities",
      "Concierge services",
    ],
    terms: [
      "Valid for NeuPass members only",
      "Advance booking required",
      "Subject to availability",
      "Cannot be combined with other offers",
      "Blackout dates may apply",
      "Minimum 2 nights stay required",
    ],
    relatedHotels: [
      {
        id: "mumbai-palace",
        name: "Shridham Palace Mumbai",
        image: "/offer/hotel-related-1.png",
        price: "₹12,000",
        rating: 4.8,
      },
      {
        id: "rajasthan-palace",
        name: "Shridham Heritage Rajasthan",
        image: "/offer/hotel-related-2.png",
        price: "₹18,000",
        rating: 4.9,
      },
    ],
    badge: "Member Exclusive",
    color: "bg-[#cda769]",
  },
  "breakfast-inclusive": {
    id: "breakfast-inclusive",
    title: "Breakfast Inclusive Rate",
    subtitle: "Start Your Day Right",
    description:
      "Wake up to a symphony of flavours with our delicious breakfast spread. Savour local and global delicacies that will make your morning memorable.",
    fullDescription:
      "Begin each day of your stay with our sumptuous breakfast experience, featuring an extensive selection of local and international cuisines. Our expert chefs prepare fresh, high-quality dishes using the finest ingredients, ensuring every morning starts with culinary excellence. From traditional Indian delicacies to continental favorites, our breakfast spread caters to every palate and dietary preference.",
    validity: "Round the Year",
    memberOnly: false,
    image: "/offer/pic2.png",
    images: [
      "/offer/pic2.png",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    benefits: [
      "Daily breakfast for all guests",
      "Extensive buffet selection",
      "Fresh local and seasonal ingredients",
      "Vegetarian and vegan options",
      "Special dietary accommodations",
      "Room service breakfast available",
      "Early breakfast for early departures",
      "Kids menu available",
    ],
    inclusions: [
      "Accommodation in selected room category",
      "Daily breakfast buffet",
      "Access to all hotel facilities",
      "WiFi throughout the property",
      "Welcome drink on arrival",
      "Concierge services",
    ],
    terms: [
      "Breakfast included for all registered guests",
      "Advance booking recommended",
      "Subject to availability",
      "Cannot be combined with other meal plans",
      "Breakfast timing: 6:30 AM - 10:30 AM",
      "Room service breakfast available 24/7",
    ],
    relatedHotels: [
      {
        id: "kerala-resort",
        name: "Shridham Backwater Resort Kerala",
        image: "/offer/hotel-related-3.png",
        price: "₹14,000",
        rating: 4.7,
      },
      {
        id: "mumbai-palace",
        name: "Shridham Palace Mumbai",
        image: "/offer/hotel-related-1.png",
        price: "₹12,000",
        rating: 4.8,
      },
    ],
    badge: "Best Value",
    color: "bg-green-600",
  },
  "new-beginnings": {
    id: "new-beginnings",
    title: "New Beginnings",
    subtitle: "Discover Our Newest Properties",
    description:
      "Indulge the explorer in you and set out to discover our newest hotels and most exquisite experiences. Enjoy exclusive 20% savings on your stay.",
    fullDescription:
      "Embark on a journey of discovery with our New Beginnings package, designed to introduce you to our latest luxury properties and experiences. This exclusive offer provides significant savings while you explore our newest destinations, featuring state-of-the-art amenities, innovative dining concepts, and unique local experiences that showcase the best of each location.",
    validity: "No Restrictions",
    memberOnly: false,
    image: "/offer/pic3.png",
    images: [
      "/offer/pic3.png",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    benefits: [
      "20% discount on room rates",
      "Complimentary breakfast for two",
      "Welcome amenities in room",
      "Priority check-in and check-out",
      "Access to newest facilities",
      "Exclusive property tours",
      "Local experience recommendations",
      "Flexible cancellation policy",
    ],
    inclusions: [
      "Discounted accommodation",
      "Daily breakfast buffet",
      "Welcome drink and amenities",
      "Access to all hotel facilities",
      "WiFi throughout the property",
      "Concierge services",
    ],
    terms: [
      "Valid at participating new properties only",
      "Advance booking required",
      "Subject to availability",
      "Minimum 2 nights stay required",
      "Cannot be combined with other offers",
      "Valid for new bookings only",
    ],
    relatedHotels: [
      {
        id: "rajasthan-palace",
        name: "Shridham Heritage Rajasthan",
        image: "/offer/hotel-related-2.png",
        price: "₹18,000",
        rating: 4.9,
      },
      {
        id: "kerala-resort",
        name: "Shridham Backwater Resort Kerala",
        image: "/offer/hotel-related-3.png",
        price: "₹14,000",
        rating: 4.7,
      },
    ],
    badge: "Limited Time",
    color: "bg-red-600",
  },
}
