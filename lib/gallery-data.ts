// Define type for gallery images
export interface GalleryImage {
  id: number
  title: string
  category: string
  location: string
  url: string
  description?: string
}

// Mock API data for gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Luxury Suite Interior",
    category: "suites",
    location: "Shridham Palace Mumbai",
    url: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Elegant suite with modern amenities and stunning city views",
  },
  {
    id: 2,
    title: "Infinity Pool",
    category: "amenities",
    location: "Shridham Backwater Resort Kerala",
    url: "https://images.unsplash.com/photo-1551710021-9715a0b6b1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our signature infinity pool overlooking the backwaters",
  },
  {
    id: 3,
    title: "Fine Dining Restaurant",
    category: "restaurants",
    location: "Shridham Heritage Rajasthan",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Gourmet dining experience with authentic local flavors",
  },
  {
    id: 4,
    title: "Spa & Wellness Center",
    category: "amenities",
    location: "Shridham Palace Mumbai",
    url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Rejuvenate with our traditional Ayurvedic treatments",
  },
  {
    id: 5,
    title: "Royal Suite Bedroom",
    category: "suites",
    location: "Shridham Heritage Rajasthan",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Opulent bedroom with handcrafted furniture and silk drapes",
  },
  {
    id: 6,
    title: "Beachfront Sunset",
    category: "destinations",
    location: "Shridham Beach Resort Goa",
    url: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Breathtaking sunset views from our private beach",
  },
  {
    id: 7,
    title: "Wedding Venue",
    category: "events",
    location: "Shridham Palace Mumbai",
    url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Magical wedding celebrations in our grand ballroom",
  },
  {
    id: 8,
    title: "Lobby Lounge",
    category: "hotels",
    location: "Shridham Capital Delhi",
    url: "https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sophisticated lobby with contemporary Indian design",
  },
  {
    id: 9,
    title: "Backwater View",
    category: "destinations",
    location: "Shridham Backwater Resort Kerala",
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Serene views of Kerala's famous backwaters",
  },
  {
    id: 10,
    title: "Executive Meeting Room",
    category: "events",
    location: "Shridham Capital Delhi",
    url: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art facilities for business meetings",
  },
  {
    id: 11,
    title: "Heritage Courtyard",
    category: "hotels",
    location: "Shridham Heritage Rajasthan",
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Beautifully restored 18th century courtyard",
  },
  {
    id: 12,
    title: "Poolside Cabana",
    category: "amenities",
    location: "Shridham Beach Resort Goa",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Private cabanas for ultimate relaxation by the pool",
  },
]
