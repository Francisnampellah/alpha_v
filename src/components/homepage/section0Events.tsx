"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Calendar, Pause, Users, Trophy, ArrowRight, MapPin, Clock } from "lucide-react"

// Define types for tab content and events
type EventInfo = {
  name: string
  date: string
  location: string
}

type TabContent = {
  title: string
  description: string
  image: string
  imageAlt: string
  location: string
  date: string
  attendees: string
  featured: boolean
  upcomingEvents: EventInfo[]
}

type TabContentMap = {
  [key: string]: TabContent
}

type NavItem = {
  id: string
  label: string
}

export default function OurEvents() {
  const [activeTab, setActiveTab] = useState("conferences")
  const [isPaused, setIsPaused] = useState(false)
  const [fadeState, setFadeState] = useState("fade-in")
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ROTATION_INTERVAL = 5000 // 5 seconds per tab

  // Tab content data with images
  const tabContent: TabContentMap = {
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
  const navItems: NavItem[] = [
    { id: "conferences", label: "Conferences" },
    { id: "workshops", label: "Workshops" },
    { id: "networking", label: "Networking" },
    { id: "webinars", label: "Webinars" },
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
  const currentTab = tabContent[activeTab]

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white font-sans">
      {/* Header Section - Reduced padding */}
      <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
        <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-green-100 text-sm sm:text-base font-bold text-green-700">
          03
        </div>
        <div className="ml-3 sm:ml-4">
          <h2 className="text-base sm:text-xl font-bold text-gray-900">Our Events</h2>
          <p className="text-gray-600 text-xs sm:text-sm">Connect, learn, and grow</p>
        </div>
        <div className="ml-auto">
          <button
            onClick={togglePause}
            className="p-2 bg-green-100 hover:bg-green-200 transition-colors"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-4 w-4 text-green-700" /> : <Pause className="h-4 w-4 text-green-700" />}
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-4">
        <nav className="mb-2 overflow-x-auto pb-1 -mx-4 px-4 flex">
          <div className="flex gap-2 w-full min-w-max border-b border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`whitespace-nowrap transition-all duration-300 px-4 py-2 text-xs ${
                  activeTab === item.id
                    ? `font-medium text-green-700 border-b-2 border-green-700`
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Progress bar */}
        <div className="w-full h-0.5 bg-gray-200 overflow-hidden">
          <div
            className="h-full transition-all bg-green-600"
            style={{
              width: isPaused ? "30%" : "100%",
              transition: isPaused ? "none" : `width ${ROTATION_INTERVAL}ms linear`,
            }}
          ></div>
        </div>
      </div>

      {/* Main Content Area - Reduced vertical spacing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column - Featured Event */}
        <div className={`lg:col-span-7 transition-all duration-500 ${
          fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
        }`}>
          {/* Image - Reduced aspect ratio */}
          <div className="relative w-full aspect-[16/9] mb-4">
            <img
              src={currentTab.image || "/placeholder.svg"}
              alt={currentTab.imageAlt}
              className="object-cover w-full h-full"
              loading="lazy"
              width={800}
              height={450}
            />
          </div>
          
          {/* Event info - Reduced spacing */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-green-700" />
                {currentTab.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-green-700" />
                {currentTab.date}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3 text-green-700" />
                {currentTab.attendees}
              </span>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900">{currentTab.title}</h2>
            <p className="text-sm text-gray-600">{currentTab.description}</p>
            
            <button className="inline-flex items-center gap-1 text-green-700 border-b-2 border-green-700 pb-1 text-sm font-medium transition-colors hover:text-green-800">
              Register Now
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Right Column - Upcoming Events and Stats */}
        <div className="lg:col-span-5">
          {/* Upcoming Events - Condensed */}
          <div className="mb-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
              <h3 className="text-base font-bold text-gray-900">
                Upcoming {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h3>
              <a href="#" className="text-green-700 flex items-center gap-1 hover:text-green-800 text-xs">
                View all <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div
              className={`space-y-4 transition-all duration-500 ${
                fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
            >
              {currentTab.upcomingEvents.map((event: EventInfo, index: number) => (
                <div
                  key={index}
                  className="transition-all duration-300 pb-3 border-b border-gray-100"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-gray-800">{event.name}</h4>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-gray-600 text-xs">
                      <Clock className="h-3 w-3 mr-1 text-green-700" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="h-3 w-3 mr-1 text-green-700" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-green-700 text-xs flex items-center transition-colors hover:text-green-800 ml-auto w-max"
                  >
                    Learn More <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section - Compact */}
          <div
            className={`transition-all duration-500 ${
              fadeState === "fade-in" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-base font-bold text-gray-900 mb-3">Event Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-green-700" />
                    <span className="text-xs font-medium text-gray-700">Annual Events</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600 text-xs">Across 20 countries</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-green-700" />
                    <span className="text-xs font-medium text-gray-700">Satisfaction</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600 text-xs">Would recommend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}