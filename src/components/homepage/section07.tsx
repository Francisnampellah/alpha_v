"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Play, Plus, Settings, Pause } from "lucide-react"

export default function SectionCarousel() {
  const [activeTab, setActiveTab] = useState("custom-software")
  const [isPaused, setIsPaused] = useState(false)
  const [fadeState, setFadeState] = useState("fade-in")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ROTATION_INTERVAL = 5000 // 5 seconds per tab

  // Tab content data
  const tabContent = {
    "custom-software": {
      title: "Custom Software Solutions",
      description: "Bespoke software tailored to meet the unique needs of businesses, ensuring efficiency and scalability.",
      image:
        "https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#4CAF50",
    },
    fintech: {
      title: "FinTech Innovation",
      description: "Advanced financial technology solutions enhancing accessibility, security, and efficiency.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#2196F3",
    },
    agribusiness: {
      title: "Agribusiness Enhancement",
      description: "Smart solutions for farm management, supply chain optimization, and market access.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#e6e338",
    },
  }

  const navItems = [
    { id: "custom-software", label: "Custom Software" },
    { id: "fintech", label: "FinTech" },
    { id: "agribusiness", label: "Agribusiness" },
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
    <div
      className="px-4 md:px-16 py-8 bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center mb-8 md:mb-16 border-gray-700 border-b pb-6">
        <div className="w-16 text-lg text-gray-400 font-bold">05</div>
        <div className="flex-1">
          <h2 className="text-xl text-white font-bold">SmartINNO Services</h2>
          <p className="text-sm text-gray-300">Driving innovation through technology.</p>
        </div>
        <button
          className="mt-4 md:mt-0 bg-[#e6e338] text-black px-6 py-3 rounded-full hover:bg-[#d6d328] transition-colors"
          style={{ backgroundColor: tabContent[activeTab as keyof typeof tabContent].color }}
        >
          Learn More
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div
            className="rounded-full w-16 h-16 flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: tabContent[activeTab as keyof typeof tabContent].color }}
          >
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold transition-all duration-300">
            {tabContent[activeTab as keyof typeof tabContent].title}
          </h2>
        </div>

        <div className="flex items-center">
          <button
            onClick={togglePause}
            className="p-2 rounded-full hover:bg-gray-800 text-gray-300 transition-colors"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
          </button>
          <button className="ml-1 p-2 rounded-full hover:bg-gray-800 text-gray-300 transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-800 mb-6 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${isPaused ? "pause-animation" : ""}`}
          style={{
            backgroundColor: tabContent[activeTab as keyof typeof tabContent].color,
            animation: isPaused ? "none" : `progressAnimation ${ROTATION_INTERVAL}ms linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        ></div>
      </div>

      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`px-4 py-2 rounded-full backdrop-blur-sm text-white border transition-all duration-300 ${
                activeTab === item.id ? "border-white bg-black/70" : "border-white/20 bg-black/50 hover:bg-black/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-4">
          <span className="text-white text-sm">©2025 NewTech</span>
          <button
            className="rounded-full h-12 w-12 flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: tabContent[activeTab as keyof typeof tabContent].color }}
          >
            <Settings className="h-6 w-6 text-black" />
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="rounded-full h-16 w-16 bg-white/30 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center transition-all duration-300">
            <Play className="h-8 w-8 text-white" fill="white" />
          </button>
        </div>

        <div className={`transition-opacity duration-500 ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}>
          <p className="absolute bottom-16 left-8 z-10 text-white text-xl md:text-2xl font-medium max-w-md bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            {tabContent[activeTab as keyof typeof tabContent].description}
          </p>

          <Image
            src={tabContent[activeTab as keyof typeof tabContent].image || "/placeholder.svg"}
            alt="Agricultural scene"
            width={1200}
            height={600}
            className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700"
            style={{
              transform: fadeState === "fade-in" ? "scale(1)" : "scale(1.05)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

