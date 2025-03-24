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
        image: "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
        imageAlt: "Advanced crop solutions in action",
        imageDescription: "Precision agriculture technology",
        stats: [
          {
            title: "Yield",
            icon: <BarChart2 className="h-5 w-5" />,
            chart: true,
            color: "bg-blue-50",
            iconBg: "bg-blue-400",
            textColor: "text-gray-800"
          },
          {
            title: "Productivity",
            value: "250%",
            icon: <Sprout className="h-5 w-5 text-white" />,
            color: "bg-blue-100",
            iconBg: "bg-blue-600",
            textColor: "text-gray-800"
          },
        ],
      },
      "farm-tech": {
        title:
          "Whether you're a small farm or a large-scale operation, we're here to help you grow smarter, faster, and more sustainably.",
        image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Farm technology integration",
        imageDescription: "Smart farming systems",
        stats: [
          {
            title: "Growth",
            icon: <BarChart2 className="h-5 w-5" />,
            chart: true,
            color: "bg-green-50",
            iconBg: "bg-green-400",
            textColor: "text-gray-800"
          },
          {
            title: "Efficiency",
            value: "300%",
            icon: <Cpu className="h-5 w-5 text-white" />,
            color: "bg-green-100",
            iconBg: "bg-green-600",
            textColor: "text-gray-800"
          },
        ],
      },
      "sustainable": {
        title: "Eco-friendly farming solutions that reduce environmental impact while maximizing productivity.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Sustainable farming practices",
        imageDescription: "Eco-friendly agriculture",
        stats: [
          {
            title: "Reduction",
            icon: <BarChart2 className="h-5 w-5" />,
            chart: true,
            color: "bg-teal-50",
            iconBg: "bg-teal-400",
            textColor: "text-gray-800"
          },
          {
            title: "Sustainability",
            value: "180%",
            icon: <Leaf className="h-5 w-5 text-white" />,
            color: "bg-teal-100",
            iconBg: "bg-teal-600",
            textColor: "text-gray-800"
          },
        ],
      },
      "development": {
        title: "Continuous innovation and development to keep your farm at the cutting edge of agricultural technology.",
        image: "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
        imageAlt: "Agricultural technology development",
        imageDescription: "Research and innovation",
        stats: [
          {
            title: "Innovation",
            icon: <BarChart2 className="h-5 w-5" />,
            chart: true,
            color: "bg-indigo-50",
            iconBg: "bg-indigo-400",
            textColor: "text-gray-800"
          },
          {
            title: "Progress",
            value: "420%",
            icon: <Grid className="h-5 w-5 text-white" />,
            color: "bg-indigo-100",
            iconBg: "bg-indigo-600",
            textColor: "text-gray-800"
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
      setIsPaused(prevState => {
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
      <div className="m-8 md:m-8 p-8 rounded-xl bg-white font-sans shadow-lg">
              <div className="flex items-center mb-16 border-gray-200 border-b pb-6">
          <div className="w-16 text-lg text-gray-400 font-bold">02</div>
          <div className="flex-1">
            <h2 className="text-xl text-black font-bold">Our Technology</h2>
            <p className="text-sm text-black">Just the board, the streets, & your trick.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Left Column - Image and Stats with animation */}
          <div 
            className={`relative rounded-3xl overflow-hidden bg-slate-100 transition-opacity duration-500 ${
              fadeState === "fade-in" ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="aspect-[4/3] w-full h-[600px]">
              <img
                src={currentTab.image}
                alt={currentTab.imageAlt}
                className="object-fill"
              />
            </div>
  
            {/* Top buttons */}
            <div className="absolute top-6 right-6 flex flex-wrap gap-2">
              <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Agri-Business
              </button>
              <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Support
              </button>
            </div>
  
            {/* Image description */}
            <div className="absolute bottom-24 md:bottom-32 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
              <p className="text-gray-800 font-medium">{currentTab.imageDescription}</p>
            </div>
  
            {/* Stats box */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 w-auto md:w-48 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-4xl md:text-6xl font-bold text-gray-900">
                  86<span className="text-xl md:text-3xl">%</span>
                </span>
                <div className={`${currentTab.stats[0].iconBg} rounded-full p-2 ml-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 font-medium mt-1">Increase in Yields</p>
            </div>
          </div>
  
          {/* Right Column - Content */}
          <div
            className="flex flex-col justify-between py-4 md:py-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false)
              startRotation()
            }}
          >
            {/* Top navigation */}
            <div className="mb-4 md:mb-8 relative">
              <nav className="flex justify-between items-center">
                <div className="flex justify-around w-full items-center space-x-2 md:space-x-8 overflow-x-auto pb-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTabClick(item.id)}
                      className={`whitespace-nowrap transition-all duration-300 px-3 py-1 md:px-6 md:py-2 rounded-full ${
                        activeTab === item.id
                          ? `font-medium border-2 border-${currentTab.stats[0].iconBg.replace('bg-', '')} text-gray-800`
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Pause/Play button */}
                {/* <button
                  onClick={togglePause}
                  className="hidden md:block p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-2"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </button> */}
              </nav>

              {/* Progress bar */}
              {/* <div className="w-full h-1 bg-gray-100 mt-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${currentTab.stats[0].iconBg}`}
                  style={{
                    width: isPaused ? "30%" : "100%",
                    transition: isPaused ? "none" : `width ${ROTATION_INTERVAL}ms linear`,
                  }}
                ></div>
              </div> */}
            </div>

            {/* Main content with animation */}
            <div
              className={`flex-grow flex flex-col justify-center mb-4 md:mb-8 transition-opacity duration-500 ${
                fadeState === "fade-in" ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight mb-8 text-gray-900">
                {currentTab.title}
              </h2>

              <div className="flex justify-center">
                <button className={`${currentTab.stats[1].iconBg} text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md font-medium`}>
                  Get Started
                  <span className="bg-white rounded-md p-1">
                    <Grid className={`h-5 w-5 text-${currentTab.stats[1].iconBg.replace('bg-', '')}`} />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom stats with animation */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-200 p-4 md:p-6 transition-all duration-500 ${
                fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
            >
              {currentTab.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.color} rounded-xl p-4 md:p-6 flex ${stat.chart ? "items-center justify-between" : "flex-col justify-between"} transition-all duration-300 shadow-sm`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className={`text-lg md:text-xl font-medium ${stat.textColor}`}>{stat.title}</span>
                    <div className={`${stat.iconBg} rounded-full p-2`}>{stat.icon}</div>
                  </div>

                  {stat.chart ? (
                    <div className="flex items-end h-12 md:h-16 space-x-1 ml-4">
                      {[40, 70, 30, 90, 50, 80, 60, 100, 20, 75, 45, 65].map((height, i) => (
                        <div
                          key={i}
                          className="w-1 md:w-2 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${height}%`,
                            backgroundColor: i < 9 ? `var(--${stat.iconBg.replace('bg-', '')})` : '#e5e7eb',
                            transitionDelay: `${i * 50}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div className={`text-base md:text-lg ${stat.textColor}`}>up to</div>
                      <div className={`text-4xl md:text-7xl font-bold text-gray-900`}>{stat.value}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}