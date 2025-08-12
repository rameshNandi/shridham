"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, User, Calendar, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [

    { name: "Place", href: "/place" },
    { name: "Hotel", href: "/hotels" },
    // { name: "Offers", href: "/offers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const moreItems = [
        { name: "Gallery", href: "/gallery" },
    { name: "Dining", href: "/dining" },
    // { name: "Wellness", href: "/wellness" },
    // { name: "Venues", href: "/venues" },
    { name: "Experiences", href: "/experiences" },
    // { name: "Taj Magazine", href: "/magazine" },
    // { name: "Sitemap", href: "/sitemap" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/shridham-logo.png"
                alt="Shridham Hotel"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className={`text-2xl font-bold ${isScrolled ? "text-[#790f11]" : "text-white"}`}>SHRIDHAM</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#790f11]"
                    initial={{ width: 0, boxShadow: "0 0 0px rgba(121, 15, 17, 0)" }}
                    whileHover={{
                      width: "100%",
                      boxShadow: "0 0 8px rgba(121, 15, 17, 0.8), 0 0 16px rgba(121, 15, 17, 0.4)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      boxShadow: { duration: 0.3 },
                    }}
                  />
                </Link>
              ))}

              {/* More Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`font-medium transition-all duration-300 relative group flex items-center space-x-1 ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown className="w-4 h-4" />
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#790f11]"
                      initial={{ width: 0, boxShadow: "0 0 0px rgba(121, 15, 17, 0)" }}
                      whileHover={{
                        width: "100%",
                        boxShadow: "0 0 8px rgba(121, 15, 17, 0.8), 0 0 16px rgba(121, 15, 17, 0.4)",
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        boxShadow: { duration: 0.3 },
                      }}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-[#cda769]  shadow-lg">
                  {moreItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="text-gray-700 hover:text-[#790f11] cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* <Link href="/login">
                <Button
                  variant="ghost"
                  className={`${isScrolled ? "text-gray-700 hover:text-[#790f11]" : "text-white hover:text-[#cda769]"}`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Login / Join
                </Button>
              </Link> */}
              <Link href="/booking">
                <Button className="bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold px-6 hover:shadow-lg hover:shadow-[#cda769]/20 transition-all duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Stay
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-[#790f11] text-white border-none">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-6 border-b border-white/20">
                    <Image
                      src="/images/shridham-logo.png"
                      alt="Shridham Hotel"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <span className="text-xl font-bold text-[#cda769]">SHRIDHAM</span>
                  </div>

                  <div className="flex-1 py-8">
                    <div className="space-y-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-lg font-medium hover:text-[#cda769] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}

                      <div className="border-t border-white/20 pt-6">
                        <h4 className="text-[#cda769] font-semibold mb-4">More</h4>
                        {moreItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-base font-medium hover:text-[#cda769] transition-colors mb-3"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pb-6">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      {/* <Button
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-[#790f11] bg-transparent"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Login / Join
                      </Button> */}
                    </Link>
                    <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book a Stay
                      </Button>
                    </Link>
                  </div> 
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
