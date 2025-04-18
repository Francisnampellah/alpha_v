"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { Event } from "@/controllers/eventController"

export default function OurEvents() {
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/v1/events')
        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }
        const data = await response.json()
        setEvents(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Format date to more readable format
  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short'
    }).toUpperCase()
  }

  console.log("evenTO",events)

  // Get upcoming events (next 4)
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4)

  if (loading) {
    return (
      <div className="flex flex-col w-full">
        <div className="bg-blue-50 text-gray-800 p-8 md:p-12">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9db0eb]"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col w-full">
        <div className="bg-blue-50 text-gray-800 p-8 md:p-12">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#9db0eb] hover:bg-[#296880] text-white rounded-full px-4 py-2 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }



  return (
    <div className="flex flex-col w-full">
      {/* Top Section - Upcoming Events */}
      <div className="bg-blue-50 text-gray-800 p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#9db0eb]"></div>
          <p className="text-sm text-[#9db0eb] font-medium">{upcomingEvents.length} UPCOMING EVENTS</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Tech Innovations,
          <br />
          Meaningful Connections
        </h2>

        <div className="h-px bg-blue-100 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl cursor-pointer hover:bg-blue-50/50 transition-colors overflow-hidden border border-blue-100 shadow-sm"
              onClick={() => router.push(`/events/${event.id}`)}
            >
              {/* Event Image */}
              <div className="relative h-48 w-full">
                <img
                  src={event.imageUrl || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop"}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-gray-500 mb-1">{(index + 1).toString().padStart(2, '0')}.</p>
                  <div className="bg-[#9db0eb]/10 text-[#9db0eb] text-xs font-medium px-2 py-1 rounded">
                    {formatDate(event.date)}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-4 mt-6 flex justify-between items-center border border-blue-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white"></div>
            </div>
            <p className="text-sm text-gray-600">
              Join <span className="font-semibold">500+ Tech Professionals</span> at our events
            </p>
          </div>
          <button
            onClick={() => router.push("/events")}
            className="bg-[#9db0eb] hover:bg-[#296880] text-white rounded-full px-4 py-2 flex items-center transition-colors"
          >
            <span className="mr-2">View All Events</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Section - Event Benefits */}
      <div className="bg-blue-50/50 p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#9db0eb]"></div>
          <p className="text-sm text-[#9db0eb] font-medium">WHY ATTEND OUR EVENTS</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xs text-gray-800">
            Expand Your
            <br />
            Knowledge &<br />
            Network
          </h2>

          <div className="flex-1">
            <div className="h-px bg-blue-100 mb-8"></div>
            <p className="text-gray-600 max-w-md">
              Our events bring together tech experts, innovative technologies, and forward-thinking professionals to
              create valuable learning and networking opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Expert Speakers</h3>
            <p className="text-sm text-gray-600 mb-8">
              Learn from tech leaders and renowned experts sharing cutting-edge insights.
            </p>
            <div className="h-24 bg-gradient-to-r from-[#9db0eb] to-transparent rounded-lg"></div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Networking Opportunities</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
                  <path
                    d="M4,21 L4,17 C4,14.2386 6.23858,12 9,12 L15,12 C17.7614,12 20,14.2386 20,17 L20,21"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Connect with peers, potential partners, and clients in a collaborative environment.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Hands-on Demonstrations</h3>
            <p className="text-sm text-gray-600 mb-8">
              Experience our products and technologies through interactive demonstrations.
            </p>
            <div className="h-24 bg-gradient-to-r from-[#9db0eb] to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div
            className="overflow-hidden rounded-xl h-64 bg-cover bg-center shadow-sm"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1559223669-d7bb31d71f26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">Previous Conference</h3>
              <p className="text-white/80 text-sm">AI & Robotics Summit 2023 with over 300 attendees</p>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-xl h-64 bg-cover bg-center shadow-sm"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1559223669-d7bb31d71f26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">Workshop Sessions</h3>
              <p className="text-white/80 text-sm">Interactive learning experiences led by tech experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-blue-50 p-8 md:p-12">
        <div className="bg-white text-gray-800 p-8 rounded-xl border border-blue-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Stay Updated on Our Events</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our events calendar to receive notifications about upcoming webinars, conferences, and
                workshops.
              </p>
              <button 
                onClick={() => {
                  // Add to Google Calendar
                  const event = {
                    text: 'SmartInno Events Calendar',
                    dates: '2024/01/01',
                    details: 'Stay updated with all SmartInno events and conferences',
                    location: 'Online'
                  }
                  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`
                  window.open(url, '_blank')
                }}
                className="bg-[#9db0eb] hover:bg-[#296880] text-white rounded-full px-6 py-3 font-medium transition-colors"
              >
                Subscribe to Calendar
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <div className="w-24 h-24 rounded-full bg-[#9db0eb] flex items-center justify-center">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

