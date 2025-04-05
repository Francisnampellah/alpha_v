"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Star,
  Plus,
  Home,
  Mail,
  Calendar,
  Image,
  Music,
  Settings,
  ArrowRight,
  Check,
  Menu,
  X,
} from "lucide-react"

export default function MacWebpageDisplay() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4 overflow-hidden">
      <div className="flex flex-col items-center gap-4 sm:gap-8">
        {/* Mac Screen */}
        <div className="relative w-full">
          {/* Mac Frame */}
          <div className="bg-[#e0e0e0] rounded-[20px] p-2 sm:p-4 shadow-xl max-w-[900px] w-full">
            {/* Screen Bezel */}
            <div className="bg-[#1a1a1a] rounded-[10px] p-2 sm:p-3 shadow-inner">
              {/* Menu Bar */}
              <div className="bg-[#f5f5f7] h-6 flex items-center px-2 rounded-t-md">
                <div className="flex gap-1.5 items-center mr-2 sm:mr-4">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center text-[8px] sm:text-[10px] text-gray-600 gap-2 sm:gap-4">
                    <span>Finder</span>
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[10px] text-gray-600">
                  <span>100%</span>
                  <span>Mon 9:41 AM</span>
                </div>
              </div>

              {/* Browser Chrome */}
              <div className="bg-[#f5f5f7] border-b border-gray-300">
                <div className="flex items-center h-8 px-2 sm:px-3 gap-2 sm:gap-3">
                  <div className="flex gap-1 sm:gap-2">
                    <ChevronLeft size={12} className="text-gray-400" />
                    <ChevronRight size={12} className="text-gray-400" />
                  </div>
                  <div className="flex-1 flex items-center bg-[#e9e9e9] rounded-md h-5 px-2">
                    <div className="flex items-center gap-1.5 w-full">
                      <Search size={10} className="text-gray-500" />
                      <span className="text-[8px] sm:text-[10px] text-gray-500 truncate">https://innovate.design</span>
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <RefreshCw size={12} className="text-gray-500" />
                    <Star size={12} className="text-gray-500" />
                    <Plus size={12} className="text-gray-500" />
                  </div>
                </div>
                <div className="flex px-2 sm:px-3 text-[8px] sm:text-[10px] overflow-x-auto">
                  <div className="px-2 sm:px-3 py-1 border-b-2 border-#3798b8 text-#3798b8 whitespace-nowrap">Home</div>
                  <div className="px-2 sm:px-3 py-1 text-gray-500 whitespace-nowrap">Features</div>
                  <div className="px-2 sm:px-3 py-1 text-gray-500 whitespace-nowrap">Pricing</div>
                  <div className="px-2 sm:px-3 py-1 text-gray-500 whitespace-nowrap">About</div>
                  <div className="px-2 sm:px-3 py-1 text-gray-500 whitespace-nowrap">Contact</div>
                </div>
              </div>

              {/* Webpage Content */}
              <div className="bg-white h-[400px] sm:h-[500px] overflow-y-auto">
                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="bg-white w-64 h-full p-4">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-lg">Menu</h2>
                        <button onClick={toggleMenu}>
                          <X size={20} />
                        </button>
                      </div>
                      <ul className="space-y-4">
                        <li className="font-medium">Home</li>
                        <li className="text-gray-600">Features</li>
                        <li className="text-gray-600">Pricing</li>
                        <li className="text-gray-600">About</li>
                        <li className="text-gray-600">Contact</li>
                        <li className="mt-6">
                          <button className="bg-[#296880] text-white px-4 py-2 rounded-md w-full">Get Started</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Header */}
                <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
                  <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#296880] rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg">I</span>
                      </div>
                      <span className="font-bold text-base sm:text-lg">Innovate</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-6">
                      <a href="#" className="text-sm font-medium">
                        Home
                      </a>
                      <a href="#" className="text-sm text-gray-600">
                        Features
                      </a>
                      <a href="#" className="text-sm text-gray-600">
                        Pricing
                      </a>
                      <a href="#" className="text-sm text-gray-600">
                        About
                      </a>
                      <a href="#" className="text-sm text-gray-600">
                        Contact
                      </a>
                    </div>
                    <div className="hidden lg:block">
                      <button className="bg-[#296880] text-white px-4 py-2 rounded-md text-sm">Get Started</button>
                    </div>
                    <button className="lg:hidden" onClick={toggleMenu}>
                      <Menu size={20} />
                    </button>
                  </div>
                </header>

                {/* Hero Section */}
                <section className="py-8 sm:py-12 px-2 sm:px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-8">
                      <div className="lg:w-1/2 space-y-3 sm:space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                          Design and build your next big idea
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600">
                          Our platform provides all the tools you need to bring your vision to life, from concept to
                          launch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                          <button className="bg-[#296880] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium">
                            Start Free Trial
                          </button>
                          <button className="border border-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-gray-700">
                            Learn More
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
                          <Check size={16} className="text-green-500" />
                          <span>No credit card required</span>
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="bg-white rounded-xl shadow-lg p-2 border border-gray-200">
                          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                            <Image size={48} className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="py-8 sm:py-16 px-2 sm:px-4">
                  <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-8 sm:mb-12">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Powerful Features</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Everything you need to create, manage, and scale your projects efficiently.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                      {[
                        {
                          icon: <Home className="text-[#296880]" />,
                          title: "Intuitive Dashboard",
                          description: "Get a complete overview of your projects and tasks at a glance.",
                        },
                        {
                          icon: <RefreshCw className="text-[#296880]" />,
                          title: "Real-time Collaboration",
                          description: "Work together with your team in real-time, no matter where they are.",
                        },
                        {
                          icon: <Settings className="text-[#296880]" />,
                          title: "Customizable Workflows",
                          description: "Create workflows that match your team's unique processes and needs.",
                        },
                        {
                          icon: <Calendar className="text-[#296880]" />,
                          title: "Smart Scheduling",
                          description: "Automatically schedule tasks based on priorities and team availability.",
                        },
                        {
                          icon: <Image className="text-[#296880]" />,
                          title: "Asset Management",
                          description: "Organize and access all your project assets in one centralized location.",
                        },
                        {
                          icon: <Mail className="text-[#296880]" />,
                          title: "Integrated Messaging",
                          description: "Communicate with your team without leaving the platform.",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                        >
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                          <a href="#" className="text-[#296880] flex items-center gap-1 mt-4 text-sm font-medium">
                            Learn more <ArrowRight size={14} />
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section className="py-8 sm:py-16 px-2 sm:px-4 bg-gray-50">
                  <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-8 sm:mb-12">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">What Our Customers Say</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Dont just take our word for it. Heres what people are saying about our platform.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                      {[
                        {
                          quote: "This platform has completely transformed how our team collaborates on projects.",
                          name: "Sarah Johnson",
                          title: "Product Manager, TechCorp",
                        },
                        {
                          quote:
                            "The intuitive interface and powerful features make this a must-have for any serious team.",
                          name: "Michael Chen",
                          title: "CTO, StartupX",
                        },
                        {
                          quote: "We've seen a 40% increase in productivity since implementing this solution.",
                          name: "Emily Rodriguez",
                          title: "Operations Director, GrowthCo",
                        },
                      ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="py-8 sm:py-16 px-2 sm:px-4 bg-[#296880] text-white">
                  <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8">
                      <div className="lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to get started?</h2>
                        <p className="text-blue-100 text-sm sm:text-base">
                          Join thousands of teams that use our platform to build amazing products.
                        </p>
                      </div>
                      <div>
                        <button className="bg-white text-[#296880] px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium">
                          Start Your Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="py-8 sm:py-12 px-2 sm:px-4 bg-gray-900 text-white">
                  <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-[#296880] rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-lg">I</span>
                          </div>
                          <span className="font-bold text-lg">Innovate</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Building the tools that help teams work better together.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li>Features</li>
                          <li>Pricing</li>
                          <li>Integrations</li>
                          <li>Changelog</li>
                          <li>Roadmap</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li>Documentation</li>
                          <li>Guides</li>
                          <li>Support</li>
                          <li>API Reference</li>
                          <li>Community</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li>About</li>
                          <li>Blog</li>
                          <li><a href="/career">Careers</a></li>
                          <li>Press</li>
                          <li>Contact</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                      <p className="text-xs sm:text-sm text-gray-500">© 2023 Innovate, Inc. All rights reserved.</p>
                      <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>

            {/* Mac Stand */}
            <div className="h-3 sm:h-4 bg-gradient-to-b from-[#e0e0e0] to-[#c0c0c0] rounded-b-lg mx-auto w-1/3"></div>
            <div className="h-1 bg-[#a0a0a0] rounded-b-lg mx-auto w-2/5"></div>
          </div>

          {/* Reflection */}
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-3 sm:h-4 bg-black opacity-10 blur-md rounded-full"></div>
        </div>

        {/* Description Note */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200 max-w-2xl">
          <h2 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">Mac Screen Display</h2>
          <p className="text-sm sm:text-base text-gray-700">
            This mockup shows a modern website displayed on a Mac screen. The design includes realistic Mac UI elements
            such as the menu bar, window controls (red, yellow, green buttons), and browser chrome. The webpage itself
            features a responsive design with a navigation header, hero section, features grid, testimonials, and
            footer.
          </p>
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <h3 className="font-medium mb-2">Design Specifications:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700">
              <li>Screen dimensions: 900px width (responsive)</li>
              <li>16:9 aspect ratio for the display area</li>
              <li>Includes Mac-style bezel and stand</li>
              <li>Browser chrome mimics Safari/Chrome interface</li>
              <li>Fully responsive webpage design that adapts to different screen sizes</li>
              <li>Interactive elements with hover effects and mobile menu functionality</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mac Dock (Optional) */}
      <div className="mt-4 sm:mt-8 flex justify-center">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white border-opacity-30 flex gap-2 sm:gap-3">
          {[
            <Home key="home" className="text-#3798b8" />,
            <Mail key="mail" className="text-green-500" />,
            <Calendar key="calendar" className="text-red-500" />,
            <Image key="image" className="text-purple-500" />,
            <Music key="music" className="text-pink-500" />,
            <Settings key="setting" className="text-gray-500" />,
          ].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg flex items-center justify-center shadow-sm"
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

