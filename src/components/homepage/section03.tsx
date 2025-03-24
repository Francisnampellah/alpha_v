"use client"

import { useState, useEffect, useRef } from "react"
import { BarChart2, Play, Grid, Pause, Leaf, Cpu, Sprout } from "lucide-react"

export default function Section03() {
  const [activeTab, setActiveTab] = useState("farm-tech")
  const [isPaused, setIsPaused] = useState(false)
  const [fadeState, setFadeState] = useState("fade-in")
  const intervalRef = useRef(null)
  const ROTATION_INTERVAL = 5000 // 5 seconds per tab

  // Tab content data with images
  const tabContent = {
    "crop-solutions": {
      title: "Advanced crop solutions for modern agriculture and sustainable farming practices.",
      image:
        "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "Advanced crop solutions in action",
      imageDescription: "Precision agriculture technology",
      stats: [
        {
          title: "Yield",
          icon: <BarChart2 className="h-5 w-5" />,
          chart: true,
          color: "bg-blue-100/70",
          iconBg: "bg-blue-500",
          textColor: "text-blue-900",
        },
        {
          title: "Productivity",
          value: "250%",
          icon: <Sprout className="h-5 w-5 text-white" />,
          color: "bg-blue-200/70",
          iconBg: "bg-blue-600",
          textColor: "text-blue-900",
        },
      ],
    },
    "farm-tech": {
      title:
        "Whether you're a small farm or a large-scale operation, we're here to help you grow smarter, faster, and more sustainably.",
      image:
        "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Farm technology integration",
      imageDescription: "Smart farming systems",
      stats: [
        {
          title: "Growth",
          icon: <BarChart2 className="h-5 w-5" />,
          chart: true,
          color: "bg-green-100/70",
          iconBg: "bg-green-500",
          textColor: "text-green-900",
        },
        {
          title: "Efficiency",
          value: "300%",
          icon: <Cpu className="h-5 w-5 text-white" />,
          color: "bg-green-200/70",
          iconBg: "bg-green-600",
          textColor: "text-green-900",
        },
      ],
    },
    sustainable: {
      title: "Eco-friendly farming solutions that reduce environmental impact while maximizing productivity.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Sustainable farming practices",
      imageDescription: "Eco-friendly agriculture",
      stats: [
        {
          title: "Reduction",
          icon: <BarChart2 className="h-5 w-5" />,
          chart: true,
          color: "bg-teal-100/70",
          iconBg: "bg-teal-500",
          textColor: "text-teal-900",
        },
        {
          title: "Sustainability",
          value: "180%",
          icon: <Leaf className="h-5 w-5 text-white" />,
          color: "bg-teal-200/70",
          iconBg: "bg-teal-600",
          textColor: "text-teal-900",
        },
      ],
    },
    development: {
      title: "Continuous innovation and development to keep your farm at the cutting edge of agricultural technology.",
      image:
        "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
      imageAlt: "Agricultural technology development",
      imageDescription: "Research and innovation",
      stats: [
        {
          title: "Innovation",
          icon: <BarChart2 className="h-5 w-5" />,
          chart: true,
          color: "bg-purple-100/70",
          iconBg: "bg-purple-500",
          textColor: "text-purple-900",
        },
        {
          title: "Progress",
          value: "420%",
          icon: <Grid className="h-5 w-5 text-white" />,
          color: "bg-purple-200/70",
          iconBg: "bg-purple-600",
          textColor: "text-purple-900",
        },
      ],
    },
  }

  // Navigation items
  const navItems = [
    { id: "crop-solutions", label: "Crop Solutions" },
    { id: "farm-tech", label: "Farm Tech" },
    { id: "sustainable", label: "Sustainable" },
    { id: "development", label: "Development" },
  ]

  // Function to change tab with animation
  const changeTab = (tabId) => {
    // Start fade out animation
    setFadeState("fade-out")

    // After fade out completes, change tab and fade in
    setTimeout(() => {
      setActiveTab(tabId)
      setFadeState("fade-in")
    }, 300) // Match this with the CSS transition duration
  }

  // Handle tab click
  const handleTabClick = (tabId) => {
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
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      const currentIndex = navItems.findIndex((item) => item.id === activeTab)
      const nextIndex = (currentIndex + 1) % navItems.length
      changeTab(navItems[nextIndex].id)
    }, ROTATION_INTERVAL)
  }

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused((prevState) => {
      if (prevState) {
        // If currently paused, start rotation
        setTimeout(() => startRotation(), 0)
        return false
      } else {
        // If currently playing, clear interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        return true
      }
    })
  }

  // Initialize and clean up the interval
  useEffect(() => {
    // Start rotation if not paused
    if (!isPaused) {
      startRotation()
    }

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPaused])

  // Restart rotation when activeTab changes (to ensure proper timing)
  useEffect(() => {
    if (!isPaused) {
      startRotation()
    }
  }, [activeTab])

  // Get current tab content
  const currentTab = tabContent[activeTab]

  return (
    <section className="max-w-7xl my-8 mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white font-sans rounded-3xl shadow-xl">
      <div className="flex items-center mb-12 border-b border-blue-400/30 pb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
          02
        </div>
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-blue-700">Our Technology</h2>
          <p className="text-blue-600 mt-1">Innovative solutions for modern agriculture</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Image and Stats with animation */}
        <div
          className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
            fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="">
            <img
              src={currentTab.image || "/placeholder.svg"}
              alt={currentTab.imageAlt}
              className="object-cover w-full h-96"
            />
          </div>

          {/* Top buttons */}
          <div className="absolute top-6 right-6 flex flex-wrap gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-md">
              Agri-Business
            </span>
            <span className="bg-white/90 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-md">
              Support
            </span>
          </div>

          {/* Image description */}
          <div className="absolute bottom-24 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
            <p className="text-blue-800 font-medium">{currentTab.imageDescription}</p>
          </div>

        </div>

        {/* Right Column - Content */}
        <div
          className="flex flex-col justify-between"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false)
            startRotation()
          }}
        >
          {/* Top navigation */}
          <div className="mb-8 relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-blue-700">Explore our solutions</h3>
              <button
                onClick={togglePause}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isPaused ? <Play className="h-4 w-4 text-blue-700" /> : <Pause className="h-4 w-4 text-blue-700" />}
              </button>
            </div>

            <nav className="flex items-center mb-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-lg text-sm ${
                      activeTab === item.id
                        ? `font-medium bg-blue-100 text-blue-700`
                        : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Progress bar */}
            <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-full transition-all bg-blue-500"
                style={{
                  width: isPaused ? "30%" : "100%",
                  transition: isPaused ? "none" : `width ${ROTATION_INTERVAL}ms linear`,
                }}
              ></div>
            </div>
          </div>

          {/* Main content with animation */}
          <div
            className={`flex-grow flex flex-col justify-center mb-8 transition-opacity duration-500 ${
              fadeState === "fade-in" ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6 text-blue-700">{currentTab.title}</h2>

            <div className="mt-6">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-lg font-medium">
                Get Started
                <span className="bg-blue-100 rounded-md p-1">
                  <Grid className="h-5 w-5 text-blue-700" />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom stats with animation */}
        </div>
      </div>
    </section>
  )
}

