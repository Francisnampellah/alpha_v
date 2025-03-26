"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Footer() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Dynamically import Leaflet to avoid SSR issues
      import("leaflet").then((L) => {
        // Make sure the map container exists and hasn't been initialized
        if (mapRef.current && !mapInstanceRef.current) {
          // Load Leaflet CSS
          if (!document.querySelector('link[href*="leaflet.css"]')) {
            const link = document.createElement("link")
            link.rel = "stylesheet"
            link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            link.crossOrigin = ""
            document.head.appendChild(link)
          }

          // Example coordinates (replace with actual company location)
          const companyLocation: [number, number] = [51.505, -0.09] // London coordinates as example

          // Initialize map
          const map = L.map(mapRef.current).setView(companyLocation, 13)

          // Add OpenStreetMap tiles
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)

          // Add marker for company location
          L.marker(companyLocation).addTo(map).bindPopup("SMARTiNNO ENG ltd.").openPopup()

          // Store map instance to avoid re-initialization
          mapInstanceRef.current = map

          // Ensure map renders correctly by triggering a resize after initialization
          setTimeout(() => {
            map.invalidateSize()
          }, 100)
        }
      })
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <footer className="w-full bg-white py-8 px-4 md:px-8 lg:px-12">
      {/* Top bar with social links and language selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="#" className="text-sm font-medium hover:underline flex items-center">
            Twitter <span className="mx-2">{">"}</span>
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline flex items-center">
            Instagram <span className="mx-2">{">"}</span>
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Youtube
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-4 mr-0 sm:mr-6 mb-2 sm:mb-0">
            <Link href="#" className="text-sm font-medium">
              En
            </Link>
            <Link href="#" className="text-sm font-medium">
              Sp
            </Link>
            <Link href="#" className="text-sm font-medium">
              Fr
            </Link>
          </div>
          <Link href="#" className="bg-black text-white px-4 py-2 rounded-full flex items-center">
            Get Started
            <span className="ml-2 bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 12H18M18 12L12 6M18 12L12 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company info with map */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-black flex items-center justify-center mr-2">
              <div className="w-4 h-4 bg-white"></div>
            </div>
            <span className="font-bold text-lg">SMARTiNNO ENG ltd.</span>
          </div>
          <p className="text-gray-700 max-w-xs mb-4">
            Were dedicated to providing farmers, businesses, and communities with the best agricultural products.
          </p>

          {/* Location info */}
          <div className="flex items-center mb-3 text-gray-700">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">123 Agriculture Way, London, UK</span>
          </div>

          {/* Map container */}
          <div
            ref={mapRef}
            className="w-full h-[150px] sm:h-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-sm"
            aria-label="Company location map"
          ></div>
        </div>

        {/* Three columns that stack on mobile */}
        {[1, 2, 3].map((i) => (
          <div key={i} className={i > 1 ? "hidden sm:block lg:block" : ""}>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-700 hover:underline">
                  Problem
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:underline">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:underline">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:underline">
                  Product
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar with copyright and legal links */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-200">
        <div className="text-gray-400 text-sm mb-4 sm:mb-0">2025@etitud.com</div>
        <div className="flex gap-4 sm:gap-8">
          <Link href="#" className="text-gray-400 text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 text-sm hover:underline">
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  )
}

