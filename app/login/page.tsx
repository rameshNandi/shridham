"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, Phone, Crown, Gift, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: "", password: "", remember: false })
  const [joinForm, setJoinForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsletter: true,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login:", loginForm)
  }

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Join:", joinForm)
  }

  const memberBenefits = [
    {
      icon: Crown,
      title: "Exclusive Member Rates",
      description: "Access to special pricing and member-only deals",
    },
    {
      icon: Gift,
      title: "NeuCoins Rewards",
      description: "Earn and redeem points for stays and experiences",
    },
    {
      icon: Star,
      title: "Priority Services",
      description: "Fast-track check-in and personalized service",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#790f11] mb-4">Welcome to Shridham</h1>
            <p className="text-lg text-gray-600">Join our exclusive membership program for luxury experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Login/Join Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-[#790f11] text-white text-center py-8">
                  <Image
                    src="/images/shridham-logo.png"
                    alt="Shridham"
                    width={60}
                    height={60}
                    className="mx-auto mb-4"
                  />
                  <CardTitle className="text-2xl font-bold text-[#cda769]">NEUPASS MEMBERSHIP</CardTitle>
                  <p className="text-white/80">Your gateway to luxury experiences</p>
                </CardHeader>

                <CardContent className="p-8">
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger
                        value="login"
                        className="data-[state=active]:bg-[#790f11] data-[state=active]:text-[#cda769]"
                      >
                        Login
                      </TabsTrigger>
                      <TabsTrigger
                        value="join"
                        className="data-[state=active]:bg-[#790f11] data-[state=active]:text-[#cda769]"
                      >
                        Join Now
                      </TabsTrigger>
                    </TabsList>

                    {/* Login Tab */}
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#790f11] font-medium">
                            Email Address
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="email"
                              type="email"
                              value={loginForm.email}
                              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                              className="pl-10 border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-[#790f11] font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              value={loginForm.password}
                              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                              className="pl-10 pr-10 border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your password"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#790f11]"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="remember"
                              checked={loginForm.remember}
                              onCheckedChange={(checked) =>
                                setLoginForm({ ...loginForm, remember: checked as boolean })
                              }
                            />
                            <Label htmlFor="remember" className="text-sm text-gray-600">
                              Remember me
                            </Label>
                          </div>
                          <Button variant="link" className="text-[#790f11] hover:text-[#cda769] p-0">
                            Forgot Password?
                          </Button>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-3 text-lg hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                        >
                          LOGIN
                        </Button>
                      </form>
                    </TabsContent>

                    {/* Join Tab */}
                    <TabsContent value="join">
                      <form onSubmit={handleJoin} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-[#790f11] font-medium">
                              First Name
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                id="firstName"
                                value={joinForm.firstName}
                                onChange={(e) => setJoinForm({ ...joinForm, firstName: e.target.value })}
                                className="pl-10 border-[#790f11]/20 focus:border-[#790f11]"
                                placeholder="First name"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-[#790f11] font-medium">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              value={joinForm.lastName}
                              onChange={(e) => setJoinForm({ ...joinForm, lastName: e.target.value })}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Last name"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="joinEmail" className="text-[#790f11] font-medium">
                            Email Address
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="joinEmail"
                              type="email"
                              value={joinForm.email}
                              onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                              className="pl-10 border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#790f11] font-medium">
                            Phone Number
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="phone"
                              type="tel"
                              value={joinForm.phone}
                              onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
                              className="pl-10 border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="joinPassword" className="text-[#790f11] font-medium">
                              Password
                            </Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                              <Input
                                id="joinPassword"
                                type="password"
                                value={joinForm.password}
                                onChange={(e) => setJoinForm({ ...joinForm, password: e.target.value })}
                                className="pl-10 border-[#790f11]/20 focus:border-[#790f11]"
                                placeholder="Create password"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-[#790f11] font-medium">
                              Confirm Password
                            </Label>
                            <Input
                              id="confirmPassword"
                              type="password"
                              value={joinForm.confirmPassword}
                              onChange={(e) => setJoinForm({ ...joinForm, confirmPassword: e.target.value })}
                              className="border-[#790f11]/20 focus:border-[#790f11]"
                              placeholder="Confirm password"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={joinForm.newsletter}
                            onCheckedChange={(checked) => setJoinForm({ ...joinForm, newsletter: checked as boolean })}
                          />
                          <Label htmlFor="newsletter" className="text-sm text-gray-600">
                            Subscribe to our newsletter for exclusive offers and updates
                          </Label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#790f11] hover:bg-[#5a0b0d] text-[#cda769] font-semibold py-3 text-lg hover:shadow-lg hover:shadow-[#790f11]/20 transition-all duration-300"
                        >
                          JOIN NEUPASS
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[#790f11] mb-4">NEUPASS Benefits</h2>
                <p className="text-gray-600 leading-relaxed">
                  Join our exclusive membership program and unlock a world of luxury experiences, special rates, and
                  personalized services.
                </p>
              </div>

              <div className="space-y-6">
                {memberBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#790f11] rounded-full flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-[#cda769]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#790f11] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                className="bg-gradient-to-br from-[#790f11] to-[#5a0b0d] text-white p-8 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Crown className="w-16 h-16 text-[#cda769] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Experience Luxury?</h3>
                <p className="text-white/80 mb-6">
                  Join thousands of satisfied members who enjoy exclusive benefits and unforgettable experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#cda769] hover:bg-[#b8954d] text-[#790f11] font-semibold px-8">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#790f11] bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
