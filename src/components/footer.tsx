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
          const companyLocation: [number, number] = [-6.71777, 39.23451] // Mbezi Beach, Dar es Salaam coordinates

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
    <footer className="w-full bg-gray-100 py-8 px-4 md:px-8 lg:px-12">
      {/* Top bar with social links and language selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="https://twitter.com/smartinno" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:underline flex items-center">
            Twitter <span className="mx-2">{">"}</span>
          </Link>
          <Link href="https://instagram.com/smartinno" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:underline flex items-center">
            Instagram <span className="mx-2">{">"}</span>
          </Link>
          <Link href="https://youtube.com/smartinno" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:underline">
            Youtube
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-4 mr-0 sm:mr-6 mb-2 sm:mb-0">
            <Link href="#" className="text-sm font-medium text-gray-700">
              En
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700">
              Sp
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700">
              Fr
            </Link>
          </div>
          <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
            Get Started
            <span className="ml-2 bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 12H18M18 12L12 6M18 12L12 18"
                  stroke="white"
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
          <p className="text-gray-600 max-w-xs mb-4">
            We&apos;re dedicated to providing innovative software solutions to transform businesses through cutting-edge technology.
          </p>

          {/* Location info */}
          <div className="flex items-center mb-3 text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">MA 2 Seabreeze Complex, Kilongawima Road, Mbezi Beach-Kinondoni, Dar es Salaam, Tanzania</span>
          </div>

          {/* Map container */}
          <div
            ref={mapRef}
            className="w-full h-[150px] sm:h-[180px] rounded-lg overflow-hidden border border-gray-300 shadow-sm z-0"
            aria-label="Company location map"
          ></div>
        </div>

        {/* Three columns that stack on mobile */}
        {[
          {
            number: "02",
            title: "Company",
            links: [
              { text: "About Us", href: "/about" },
              { text: "Projects", href: "/projects" },
              { text: "Events", href: "/events" },
              { text: "Careers", href: "/career" },
              { text: "Contact", href: "/contact" }
            ]
          },
          {
            number: "03",
            title: "Services",
            links: [
              { text: "Software Development", href: "/services/software-development" },
              { text: "Cloud Solutions", href: "/services/cloud-solutions" },
              { text: "Digital Transformation", href: "/services/digital-transformation" },
              { text: "IT Consulting", href: "/services/it-consulting" }
            ]
          },
          {
            number: "04",
            title: "Resources",
            links: [
              { text: "Blog", href: "/blog" },
              { text: "Documentation", href: "/docs" },
              { text: "Support", href: "/support" },
              { text: "Privacy Policy", href: "/privacy-policy" },
              { text: "Terms of Service", href: "/terms-of-service" }
            ]
          }
        ].map((section, i) => (
          <div key={i} className={i > 0 ? "hidden sm:block lg:block" : ""}>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="text-gray-600 hover:underline">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar with copyright and legal links */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-300">
        <div className="text-gray-500 text-sm mb-4 sm:mb-0">© 2024 SMARTiNNO. All rights reserved.</div>
        <div className="flex gap-4 sm:gap-8">
          <Link href="/contact" className="text-gray-500 text-sm hover:underline">
            Contact Us
          </Link>
          <Link href="/career/apply" className="text-gray-500 text-sm hover:underline">
            Apply Now
          </Link>
        </div>
      </div>
    </footer>
  )
}

