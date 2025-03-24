"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Calendar, Pause, Users, Trophy, ArrowRight, MapPin, Clock } from "lucide-react"

export default function OurEvents() {
  const [activeTab, setActiveTab] = useState("conferences")
  const [isPaused, setIsPaused] = useState(false)
  const [fadeState, setFadeState] = useState("fade-in")
  const intervalRef = useRef(null)
  const ROTATION_INTERVAL = 5000 // 5 seconds per tab

  // Tab content data with images
  const tabContent = {
    conferences: {
      title: "Industry-leading conferences bringing together experts and innovators",
      description:
        "Join thousands of professionals at our flagship events featuring keynote speakers, panel discussions, and cutting-edge presentations.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Conference with audience",
      location: "San Francisco, CA",
      date: "June 15-18, 2024",
      attendees: "2,500+",
      featured: true,
      upcomingEvents: [
        { name: "Tech Summit 2024", date: "June 15-18", location: "San Francisco" },
        { name: "Innovation Conference", date: "August 22-24", location: "New York" },
        { name: "Global Leadership Forum", date: "October 5-7", location: "London" },
      ],
    },
    workshops: {
      title: "Hands-on workshops designed to provide practical skills and knowledge",
      description:
        "Immersive learning experiences led by industry experts where you'll develop new skills through practical exercises and real-world applications.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Workshop with participants",
      location: "Multiple Locations",
      date: "Year-round",
      attendees: "30-50 per session",
      featured: false,
      upcomingEvents: [
        { name: "UX Design Masterclass", date: "May 12", location: "Chicago" },
        { name: "Data Science Bootcamp", date: "July 8-12", location: "Austin" },
        { name: "Leadership Skills Workshop", date: "September 3", location: "Seattle" },
      ],
    },
    networking: {
      title: "Exclusive networking events connecting industry leaders and innovators",
      description:
        "Build valuable professional relationships in a relaxed atmosphere designed to facilitate meaningful connections and collaborations.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Networking event",
      location: "Various Major Cities",
      date: "Monthly",
      attendees: "100-200 per event",
      featured: false,
      upcomingEvents: [
        { name: "Executive Mixer", date: "April 28", location: "Boston" },
        { name: "Industry Connect", date: "May 15", location: "Miami" },
        { name: "Founders Meetup", date: "June 7", location: "Los Angeles" },
      ],
    },
    webinars: {
      title: "On-demand and live webinars featuring thought leaders and experts",
      description:
        "Access cutting-edge insights from the comfort of your home or office with our interactive online sessions and on-demand content library.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Virtual webinar session",
      location: "Online",
      date: "Weekly",
      attendees: "500+ per session",
      featured: false,
      upcomingEvents: [
        { name: "Future of AI", date: "April 18", location: "Online" },
        { name: "Sustainable Business Practices", date: "May 2", location: "Online" },
        { name: "Digital Transformation Strategies", date: "May 23", location: "Online" },
      ],
    },
  }

  // Navigation items
  const navItems = [
    { id: "conferences", label: "Conferences" },
    { id: "workshops", label: "Workshops" },
    { id: "networking", label: "Networking" },
    { id: "webinars", label: "Webinars" },
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
    <section className="h-fit pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white font-sans rounded-3xl shadow-xl flex flex-col">
      {/* Header Section - 10vh */}
      <div className="h-[10vh] flex items-center border-b border-gray-200">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
          03
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">Our Events</h2>
          <p className="text-gray-600 text-sm">Connect, learn, and grow with industry leaders</p>
        </div>
        <div className="ml-auto">
          <button
            onClick={togglePause}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-4 w-4 text-green-700" /> : <Pause className="h-4 w-4 text-green-700" />}
          </button>
        </div>
      </div>

      {/* Navigation Tabs - 8vh */}
      <div className="h-[8vh] flex flex-col justify-center">
        <nav className="flex items-center mb-2">
          <div className="flex gap-2 w-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`whitespace-nowrap transition-all duration-300 px-5 py-2 rounded-lg text-sm ${
                  activeTab === item.id
                    ? `font-medium bg-green-600 text-white shadow-md`
                    : "text-green-700 bg-green-100 hover:bg-green-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all bg-green-600"
            style={{
              width: isPaused ? "30%" : "100%",
              transition: isPaused ? "none" : `width ${ROTATION_INTERVAL}ms linear`,
            }}
          ></div>
        </div>
      </div>

      {/* Main Content Area - Remaining height */}
      <div className="flex flex-1 flex-col lg:flex-row gap-4">
        {/* Left Column - Featured Event Card */}
        <div
          className={`lg:w-1/2 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
            fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          }`}
        >
          {/* Fixed height image container */}
          <div className="relative w-full">
            {/* Image with fixed dimensions */}
            <img
              src={currentTab.image || "/placeholder.svg"}
              alt={currentTab.imageAlt}
              className="object-cover w-full"
              style={{
                maxWidth: "100%",
                objectPosition: "center",
              }}
              width={800}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {currentTab.location}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {currentTab.date}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {currentTab.attendees}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-1 line-clamp-1">{currentTab.title}</h2>
              <p className="text-white/80 text-sm mb-3 line-clamp-2">{currentTab.description}</p>
              <button className="bg-white text-green-700 px-4 py-1.5 rounded-lg flex items-center gap-1 hover:bg-green-50 transition-colors shadow-lg font-medium text-sm">
                Register Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Upcoming Events and Stats */}
        <div className="lg:w-1/2 flex flex-col flex-1">
          {/* Upcoming Events - Limited to 2 events */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">
                Upcoming {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h3>
              <a href="#" className="text-green-700 flex items-center gap-1 hover:underline text-sm">
                View all <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-500 h-[30vh] lg:h-auto ${
                fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{ maxHeight: "250px" }}
            >
              {/* Only show first 2 events to fit without scrolling */}
              {currentTab.upcomingEvents.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                  style={{ transitionDelay: `${index * 100}ms`, maxHeight: "100%" }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800 text-base line-clamp-1">{event.name}</h4>
                    <span className="bg-green-100 rounded-full p-1.5 flex-shrink-0">
                      <Calendar className="h-3 w-3 text-green-700" />
                    </span>
                  </div>
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <button className="w-full mt-1 bg-green-600 hover:bg-green-700 text-white py-1.5 rounded-lg transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section - Fixed at bottom */}
          <div
            className={`grid grid-cols-2 gap-3 transition-all duration-500 h-[15vh] lg:h-auto ${
              fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
            style={{ maxHeight: "120px" }}
          >
            <div className="bg-gray-100 rounded-xl p-3 flex flex-col justify-between border border-gray-200">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium text-gray-800">Annual Events</span>
                <div className="bg-green-500 rounded-full p-1.5">
                  <Calendar className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="mt-1">
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-gray-600 text-xs">Across 20 countries</div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-3 flex flex-col justify-between border border-gray-200">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-medium text-gray-800">Satisfaction</span>
                <div className="bg-green-600 rounded-full p-1.5">
                  <Trophy className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="mt-1">
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-gray-600 text-xs">Would recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

