"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, Calendar } from "lucide-react"

export default function OurEvents() {
  const router = useRouter()

  return (
    <div className="flex flex-col w-full">
      {/* Top Section - Upcoming Events */}
      <div className="bg-[#0a0f36] text-white p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <p className="text-sm text-blue-400 font-medium">4 UPCOMING EVENTS</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Industry Insights,
          <br />
          Valuable Connections
        </h2>

        <div className="h-px bg-gray-700 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1a2150] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 mb-1">01.</p>
              <div className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded">MAY 15</div>
            </div>
            <h3 className="font-semibold text-lg mb-4">ChemTech Summit</h3>
            <p className="text-sm text-gray-300">
              Join industry leaders to explore the latest innovations in chemical technology.
            </p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 mb-1">02.</p>
              <div className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded">JUN 22</div>
            </div>
            <h3 className="font-semibold text-lg mb-4">Sustainability Forum</h3>
            <p className="text-sm text-gray-300">
              Discover sustainable practices and eco-friendly solutions for the chemical industry.
            </p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 mb-1">03.</p>
              <div className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded">JUL 10</div>
            </div>
            <h3 className="font-semibold text-lg mb-4">Product Showcase</h3>
            <p className="text-sm text-gray-300">
              Experience our latest chemical solutions with live demonstrations and expert insights.
            </p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-400 mb-1">04.</p>
              <div className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded">AUG 05</div>
            </div>
            <h3 className="font-semibold text-lg mb-4">Industry Workshop</h3>
            <p className="text-sm text-gray-300">
              Hands-on training sessions on optimizing chemical processes for maximum efficiency.
            </p>
          </div>
        </div>

        <div className="bg-[#1a2150] rounded-xl p-4 mt-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[#1a2150]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#1a2150]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#1a2150]"></div>
            </div>
            <p className="text-sm">
              Join <span className="font-semibold">500+ Industry Professionals</span> at our events
            </p>
          </div>
          <button
            onClick={() => router.push("/events")}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center transition-colors"
          >
            <span className="mr-2">Register Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Section - Event Benefits */}
      <div className="bg-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500 font-medium">WHY ATTEND OUR EVENTS</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xs">
            Expand Your
            <br />
            Knowledge &<br />
            Network
          </h2>

          <div className="flex-1">
            <div className="h-px bg-gray-300 mb-8"></div>
            <p className="text-gray-600 max-w-md">
              Our events bring together industry experts, innovative technologies, and forward-thinking professionals to
              create valuable learning and networking opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Expert Speakers</h3>
            <p className="text-sm text-gray-300 mb-8">
              Learn from industry leaders and renowned experts sharing cutting-edge insights.
            </p>
            <div className="h-24 bg-gradient-to-r from-blue-900 to-transparent rounded-lg"></div>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Networking Opportunities</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
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

          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Hands-on Demonstrations</h3>
            <p className="text-sm text-gray-300 mb-8">
              Experience our products and technologies through interactive demonstrations.
            </p>
            <div className="h-24 bg-gradient-to-r from-blue-900 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div
            className="overflow-hidden rounded-xl h-64 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop')",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">Previous Conference</h3>
              <p className="text-white/80 text-sm">ChemTech Summit 2023 with over 300 attendees</p>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-xl h-64 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=3269&auto=format&fit=crop')",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white font-semibold text-lg">Workshop Sessions</h3>
              <p className="text-white/80 text-sm">Interactive learning experiences led by industry experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white p-8 md:p-12">
        <div className="bg-[#0a0f36] text-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Stay Updated on Our Events</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our events calendar to receive notifications about upcoming webinars, conferences, and
                workshops.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 font-medium transition-colors">
                Subscribe to Calendar
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <div className="w-24 h-24 rounded-full bg-[#1a2150] flex items-center justify-center">
                <Calendar className="w-12 h-12 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

