"use client"

import { useState, useEffect, useRef } from "react"
import { BarChart2, Play, Grid, Pause, Leaf, Cpu, Sprout, ArrowRight } from "lucide-react"

export default function Section03() {
  const [activeTab, setActiveTab] = useState<string>("farm-tech")
  const [isPaused, setIsPaused] = useState(false)
  const [fadeState, setFadeState] = useState("fade-in")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
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
  const currentTab = tabContent[activeTab as keyof typeof tabContent]

  return (
    <section className="w-full py-10 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center">

          <div>
            <h2 className="text-2xl font-bold text-white">Our Technology</h2>
            <p className="text-blue-200 text-sm mt-1">Innovative solutions for modern agriculture</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div 
          className="flex flex-wrap border-b border-blue-400/30" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false)
            startRotation()
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`relative py-2 px-6 text-sm transition-all duration-300 ${
                activeTab === item.id
                  ? "text-white font-medium"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></span>
              )}
            </button>
          ))}
          <button
            onClick={togglePause}
            className="ml-auto p-2 rounded-full transition-colors text-blue-100 hover:text-white"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center transition-opacity duration-500 ${
            fadeState === "fade-in" ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Content Column */}
          <div className="lg:col-span-5 lg:pr-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white leading-tight">
                {currentTab.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 my-3">
                <span className="inline-flex items-center px-3 py-0.5 border border-blue-400/30 text-xs font-medium text-white bg-blue-500/30 rounded-full">
                  Agri-Business
                </span>
                <span className="inline-flex items-center px-3 py-0.5 border border-blue-400/30 text-xs font-medium text-white bg-blue-500/30 rounded-full">
                  Support
                </span>
              </div>
              
              <a href="#" className="inline-flex items-center text-blue-100 text-sm font-medium hover:text-white transition-colors group">
                Learn more 
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-video overflow-hidden max-h-[250px]">
              <img
                src={currentTab.image}
                alt={currentTab.imageAlt}
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 text-sm">
              <p className="font-medium">{currentTab.imageDescription}</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {currentTab.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="py-2 px-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center"
                >
                  <div className="bg-blue-500/50 p-1.5 rounded-md mr-2">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium">{stat.title}</p>
                    {stat.value && <p className="text-base font-bold">{stat.value}</p>}
                    {stat.chart && (
                      <div className="w-12 h-2 bg-blue-500/20 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-blue-200 w-4/5"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

