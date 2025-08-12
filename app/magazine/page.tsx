"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, BookOpen, Camera, Utensils, Compass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function MagazinePage() {
  const featuredArticles = [
    {
      title: "The Royal Heritage of Rajasthan",
      excerpt: "Discover the magnificent palaces and rich cultural traditions that define India's royal state",
      image: "/placeholder.svg?height=400&width=600",
      category: "Heritage",
      author: "Priya Sharma",
      date: "December 15, 2024",
      readTime: "8 min read",
    },
    {
      title: "Culinary Secrets of Indian Royalty",
      excerpt: "Explore the ancient recipes and cooking techniques passed down through generations of royal chefs",
      image: "/placeholder.svg?height=400&width=600",
      category: "Culinary",
      author: "Chef Rajesh Kumar",
      date: "December 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Wellness Traditions of Ancient India",
      excerpt: "Journey through time-tested healing practices that form the foundation of modern wellness",
      image: "/placeholder.svg?height=400&width=600",
      category: "Wellness",
      author: "Dr. Anita Patel",
      date: "December 5, 2024",
      readTime: "10 min read",
    },
  ]

  const recentArticles = [
    {
      title: "Photography Guide: Capturing India's Golden Hour",
      excerpt: "Professional tips for photographing India's most beautiful moments",
      image: "/placeholder.svg?height=300&width=400",
      category: "Photography",
      date: "November 30, 2024",
      readTime: "5 min read",
    },
    {
      title: "The Art of Indian Hospitality",
      excerpt: "Understanding the philosophy behind India's legendary hospitality traditions",
      image: "/placeholder.svg?height=300&width=400",
      category: "Culture",
      date: "November 25, 2024",
      readTime: "7 min read",
    },
    {
      title: "Sustainable Luxury: Our Green Initiatives",
      excerpt: "How Shridham Hotels is leading the way in sustainable luxury hospitality",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sustainability",
      date: "November 20, 2024",
      readTime: "6 min read",
    },
    {
      title: "Festival Celebrations Across India",
      excerpt: "Experience the vibrant colors and traditions of India's diverse festivals",
      image: "/placeholder.svg?height=300&width=400",
      category: "Culture",
      date: "November 15, 2024",
      readTime: "9 min read",
    },
    {
      title: "Architectural Marvels of Indian Palaces",
      excerpt: "Exploring the intricate designs and engineering of India's palace architecture",
      image: "/placeholder.svg?height=300&width=400",
      category: "Architecture",
      date: "November 10, 2024",
      readTime: "8 min read",
    },
    {
      title: "Spice Routes and Culinary Heritage",
      excerpt: "Tracing the historical spice trade routes that shaped Indian cuisine",
      image: "/placeholder.svg?height=300&width=400",
      category: "Culinary",
      date: "November 5, 2024",
      readTime: "7 min read",
    },
  ]

  const categories = [
    { name: "Heritage", icon: BookOpen, count: 12 },
    { name: "Culinary", icon: Utensils, count: 8 },
    { name: "Culture", icon: Compass, count: 15 },
    { name: "Photography", icon: Camera, count: 6 },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-28">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Shridham Magazine" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#790f11]/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">SHRIDHAM MAGAZINE</h1>
          <p className="text-xl text-[#cda769] mb-8">Stories of Heritage, Culture & Luxury</p>
          <p className="text-lg leading-relaxed">
            Discover the rich tapestry of Indian culture, heritage, and luxury through our curated stories and insights
          </p>
        </motion.div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-6">FEATURED STORIES</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive deep into India's rich heritage and discover the stories behind our luxury experiences
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredArticles.map((article, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-[#790f11] text-[#cda769] border-0">
                      {article.category}
                    </Badge>

                    {/* Read Time */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-[#790f11] font-medium text-sm">{article.readTime}</span>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#790f11] mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1 leading-relaxed line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="border-[#790f11] text-[#790f11] hover:bg-[#790f11] hover:text-[#cda769] bg-transparent w-full group"
                    >
                      READ MORE
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories & Recent Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#790f11] mb-6">Categories</h3>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[#790f11]/5 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-5 h-5 text-[#790f11]" />
                          <span className="font-medium text-gray-700">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="bg-[#cda769]/20 text-[#790f11]">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg rounded-2xl mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#790f11] mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Subscribe to receive our latest stories and exclusive content
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#790f11]"
                    />
                    <Button className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold">
                      SUBSCRIBE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Articles */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#790f11] mb-8">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 rounded-2xl h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <Badge className="absolute top-3 left-3 bg-[#790f11] text-[#cda769] border-0 text-xs">
                          {article.category}
                        </Badge>
                      </div>

                      <CardContent className="p-4 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-[#790f11] mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-gray-600 mb-3 flex-1 text-sm leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                          <span>{article.readTime}</span>
                        </div>

                        <Button variant="ghost" className="text-[#790f11] hover:text-[#cda769] p-0 justify-start group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-8 py-3">
                  LOAD MORE ARTICLES
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#790f11] to-[#5a0b0d] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">SHARE YOUR STORY</h2>
            <p className="text-xl text-[#cda769] mb-12 leading-relaxed">
              Have an experience or story to share? We'd love to feature your journey with Shridham
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300">
                SUBMIT STORY
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#cda769] text-[#cda769] hover:bg-[#cda769] hover:text-[#790f11] px-12 py-4 text-lg hover:shadow-xl hover:shadow-[#cda769]/20 transition-all duration-300 bg-transparent"
                >
                  CONTACT EDITOR
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
