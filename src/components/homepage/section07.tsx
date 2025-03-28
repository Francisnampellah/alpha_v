"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Play, Pause } from "lucide-react"

export default function ChemicalSolutionsCarousel() {
  const [activeTab, setActiveTab] = useState("industrial")
  const [isPaused, setIsPaused] = useState(false)
  const [fadeState, setFadeState] = useState("fade-in")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ROTATION_INTERVAL = 5000 // 5 seconds per tab

  // Tab content data
  const tabContent = {
    industrial: {
      title: "Smart Manufacturing",
      description:
        "Advanced IoT solutions and automation systems for modern manufacturing processes, ensuring efficiency and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=3270&auto=format&fit=crop",
      color: "#ffffff", // blue-500
    },
    pharmaceutical: {
      title: "Digital Healthcare",
      description: "Innovative healthcare solutions including telemedicine platforms, patient monitoring systems, and medical data analytics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3270&auto=format&fit=crop",
      color: "#ffffff", // emerald-500
    },
    agricultural: {
      title: "Smart Agriculture",
      description: "AI-powered farming solutions with precision agriculture, crop monitoring, and automated irrigation systems.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=3270&auto=format&fit=crop",
      color: "#ffffff", // amber-500
    },
    research: {
      title: "R&D Innovation",
      description: "Cutting-edge research tools and platforms for scientific discovery, data analysis, and technological advancement.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop",
      color: "#ffffff", // violet-500
    },
  }

  const navItems = [
    { id: "industrial", label: "Manufacturing" },
    { id: "pharmaceutical", label: "Healthcare" },
    { id: "agricultural", label: "Agriculture" },
    { id: "research", label: "R&D" },
  ]

  // Function to change tab with animation
  const changeTab = (tabId: string) => {
    // Start fade out animation
    setFadeState("fade-out")

    // After fade out completes, change tab and fade in
    setTimeout(() => {
      setActiveTab(tabId)
      setFadeState("fade-in")
    }, 300) // Match this with the CSS transition duration
  }

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    changeTab(tabId)
    // Reset the timer when user manually changes tab
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused) {
      startRotation()
    }
  }

  // Start the rotation timer
  const startRotation = () => {
    intervalRef.current = setInterval(() => {
      const currentIndex = navItems.findIndex((item) => item.id === activeTab)
      const nextIndex = (currentIndex + 1) % navItems.length
      changeTab(navItems[nextIndex].id)
    }, ROTATION_INTERVAL)
  }

  // Toggle pause/play
  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false)
      startRotation()
    } else {
      setIsPaused(true)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }

  // Initialize and clean up the interval
  useEffect(() => {
    if (!isPaused) {
      startRotation()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  return (
    <div className="flex flex-col w-full">
      {/* Top Section - Chemical Solutions */}
      <div
        className="bg-[#2353aa] text-white p-8 md:p-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <p className="text-sm text-blue-400 font-medium">4 INNOVATION AREAS</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Smart Solutions,
          <br />
          Digital Future
        </h2>

        <div className="h-px bg-gray-700 mb-8"></div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-3 mb-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                activeTab === item.id ? "bg-white text-[#2353aa]" : "bg-[#1a4382] text-white hover:bg-[#232a5c]"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="ml-auto flex items-center">
            <button
              onClick={togglePause}
              className="p-2 rounded-full hover:bg-[#1a4382] text-white transition-colors"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-[#1a4382] mb-6 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300`}
            style={{
              backgroundColor: tabContent[activeTab as keyof typeof tabContent].color,
              animation: isPaused ? "none" : `progressAnimation ${ROTATION_INTERVAL}ms linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
              width: isPaused ? "100%" : "100%",
            }}
          ></div>
        </div>

        {/* Content Area */}
        <div className="relative rounded-xl overflow-hidden">
          <div className={`transition-opacity duration-500 ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: tabContent[activeTab as keyof typeof tabContent].color }}
                  >
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8">
                    {tabContent[activeTab as keyof typeof tabContent].description}
                  </p>
                </div>

                <button
                  className="self-start rounded-full px-6 py-3 flex items-center transition-colors text-black font-medium"
                  style={{ backgroundColor: tabContent[activeTab as keyof typeof tabContent].color }}
                >
                  <span className="mr-2">Explore Solutions</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden h-[300px]">
                <Image
                  src={tabContent[activeTab as keyof typeof tabContent].image || "/placeholder.svg"}
                  alt={tabContent[activeTab as keyof typeof tabContent].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: fadeState === "fade-in" ? "scale(1)" : "scale(1.05)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#1a4382] rounded-xl p-4 mt-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[#1a4382]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#1a4382]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#1a4382]"></div>
            </div>
            <p className="text-sm">
              Trusted by <span className="font-semibold">Tech Innovators</span> worldwide
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center transition-colors">
            <span className="mr-2">View All Solutions</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Section - Benefits */}
      {/* <div className="bg-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500 font-medium">BENEFITS YOU'LL GAIN</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xs">
            Unlock
            <br />
            Exclusive
            <br />
            Advantages
          </h2>

          <div className="flex-1">
            <div className="h-px bg-gray-300 mb-8"></div>
            <p className="text-gray-600 max-w-md">
              Our specialized chemical solutions deliver exceptional performance, consistency, and value across multiple
              industries, backed by our commitment to quality and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#2353aa] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Superior Quality</h3>
            <p className="text-sm text-gray-300 mb-8">
              Rigorously tested formulations that meet or exceed industry standards.
            </p>
            <div className="h-24 bg-gradient-to-r from-blue-900 to-transparent rounded-lg"></div>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Technical Support</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M9,3 L15,3 L15,9 L19,18 C19.5,19.5 18.5,21 17,21 L7,21 C5.5,21 4.5,19.5 5,18 L9,9 L9,3 Z"
                    strokeWidth="1.5"
                  />
                  <line x1="9" y1="3" x2="15" y2="3" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Expert guidance from our team of chemical specialists for optimal results.
            </p>
          </div>

          <div className="bg-[#2353aa] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Custom Formulations</h3>
            <p className="text-sm text-gray-300 mb-8">
              Tailored solutions designed to meet your specific requirements.
            </p>
            <div className="h-24 bg-gradient-to-r from-blue-900 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

