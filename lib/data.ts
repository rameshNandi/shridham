import { Building, Mountain, Waves, TreePine, TypeIcon as type, type LucideIcon, Wifi, ParkingSquare, Utensils, SpadeIcon as Spa, ShowerHeadIcon as SwimmingPool, Dumbbell } from 'lucide-react'

export interface Destination {
  id: number
  name: string
  subtitle: string
  description: string
  highlights: string[]
  image: string
  gallery: string[]
  icon: LucideIcon
  weather: string
  rating: number
  location: {
    lat: number
    lng: number
    address: string
  }
  mapEmbedUrl: string
  color: string
  keyFeatures: { name: string; icon: LucideIcon }[] // Added keyFeatures with name and icon
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Mumbai",
    subtitle: "The City of Dreams",
    description:
      "Where commerce meets culture in India's financial capital. Experience luxury amidst the bustling metropolis with our premium locations overlooking the Arabian Sea.",
    highlights: ["Gateway of India", "Marine Drive", "Colaba District", "Art Deco Architecture"],
    image: "/place/pic1.jpg",
    gallery: [
      "/place/gallery/mumbai1.jpg",
      "/place/gallery/mumbai2.jpg",
      "/place/gallery/mumbai3.jpg",
      "/place/gallery/mumbai4.jpg",
      "/place/gallery/mumbai5.jpg",
      "/place/gallery/mumbai6.jpg",
    ],
    icon: Building,
    weather: "25°C",
    rating: 4.8,
    location: {
      lat: 19.076,
      lng: 72.8777,
      address: "Mumbai, Maharashtra, India",
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4535.165925432532!2d88.40440377599784!3d22.51460563509206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027365dde961a9%3A0x7afe1ae2d35ed1f1!2sMerlin%20Niyasa!5e1!3m2!1sen!2sin!4v1746729310872!5m2!1sen!2sin",
    color: "from-[#790f11] to-[#5a0b0d]",
    keyFeatures: [
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "24/7 Concierge", icon: Building },
      { name: "Fine Dining", icon: Utensils },
      { name: "Spa & Wellness", icon: Spa },
      { name: "Valet Parking", icon: ParkingSquare },
    ],
  },
  {
    id: 2,
    name: "Rajasthan",
    subtitle: "Land of Kings",
    description:
      "Step into a world of royal grandeur and desert mystique. Our palace hotels offer an authentic taste of maharaja lifestyle with modern luxury amenities.",
    highlights: ["City Palace", "Amber Fort", "Thar Desert", "Rajasthani Culture"],
    image: "/place/pic2.jpg",
    gallery: [
      "/place/gallery/rajasthan1.jpg",
      "/place/gallery/rajasthan2.jpg",
      "/place/gallery/rajasthan3.jpg",
      "/place/gallery/rajasthan4.jpg",
      "/place/gallery/rajasthan5.jpg",
      "/place/gallery/rajasthan6.jpg",
    ],
    icon: Mountain,
    weather: "22°C",
    rating: 4.9,
    location: {
      lat: 26.9124,
      lng: 75.7873,
      address: "Jaipur, Rajasthan, India",
    },
    mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Jaipur,+Rajasthan,+India",
    color: "from-[#790f11] to-[#cda769]",
    keyFeatures: [
      { name: "Heritage Stays", icon: Building },
      { name: "Cultural Shows", icon: Utensils },
      { name: "Desert Safaris", icon: Mountain },
      { name: "Traditional Cuisine", icon: Utensils },
      { name: "Swimming Pool", icon: SwimmingPool },
    ],
  },
  {
    id: 3,
    name: "Kerala",
    subtitle: "God's Own Country",
    description:
      "Discover tranquil backwaters and lush tropical landscapes. Our Kerala properties offer rejuvenating experiences with traditional Ayurvedic treatments and spice garden tours.",
    highlights: ["Backwaters", "Spice Plantations", "Hill Stations", "Ayurvedic Spa"],
    image: "/place/pic3.webp",
    gallery: [
      "/place/gallery/kerala1.jpg",
      "/place/gallery/kerala2.jpg",
      "/place/gallery/kerala3.jpg",
      "/place/gallery/kerala4.jpg",
      "/place/gallery/kerala5.jpg",
      "/place/gallery/kerala6.jpg",
    ],
    icon: TreePine,
    weather: "28°C",
    rating: 4.7,
    location: {
      lat: 10.8505,
      lng: 76.2711,
      address: "Kochi, Kerala, India",
    },
    mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Kochi,+Kerala,+India",
    color: "from-[#790f11] to-[#4a0f0f]",
    keyFeatures: [
      { name: "Ayurvedic Treatments", icon: Spa },
      { name: "Houseboat Stays", icon: Waves },
      { name: "Spice Garden Tours", icon: TreePine },
      { name: "Yoga & Meditation", icon: Dumbbell },
      { name: "Riverside Dining", icon: Utensils },
    ],
  },
  {
    id: 4,
    name: "Goa",
    subtitle: "Pearl of the Orient",
    description:
      "Pristine beaches meet Portuguese heritage in this coastal paradise. Enjoy beachfront luxury with world-class dining and water sports activities.",
    highlights: ["Pristine Beaches", "Portuguese Heritage", "Water Sports", "Beach Resorts"],
    image: "/place/pic4.webp",
    gallery: [
      "/place/gallery/goa1.jpg",
      "/place/gallery/goa2.jpg",
      "/place/gallery/goa3.jpg",
      "/place/gallery/goa4.jpg",
      "/place/gallery/goa5.jpg",
      "/place/gallery/goa6.jpg",
    ],
    icon: Waves,
    weather: "30°C",
    rating: 4.6,
    location: {
      lat: 15.2993,
      lng: 74.124,
      address: "Panaji, Goa, India",
    },
    mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Panaji,+Goa,+India",
    color: "from-[#790f11] to-[#8b1538]",
    keyFeatures: [
      { name: "Beachfront Access", icon: Waves },
      { name: "Water Sports", icon: SwimmingPool },
      { name: "Nightlife & Bars", icon: Utensils },
      { name: "Casino Access", icon: Building },
      { name: "Scooter Rentals", icon: ParkingSquare },
    ],
  },
]
