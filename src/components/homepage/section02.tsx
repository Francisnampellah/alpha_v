import {Accordion} from '@/components/accordions-item'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Beaker, Eye, Sparkles } from 'lucide-react'

export default function Section_02() {
    return (
      <div className="mx-12 text-black px-4 sm:px-6 lg:px-8 py-12 font-sans">
        {/* Header Section */}
        <div className="flex items-center mb-16 border-gray-200 border-b pb-6">
          <div className="w-16 text-lg text-gray-400 font-bold">01</div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">@Etitud</h2>
            <p className="text-sm">Just the board, the streets, & your trick.</p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full">Cultivating Excellence</button>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-12">
          {/* Left Column - Stats and Icons */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            {/* Stats */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold">
                50K<sup>+</sup>
              </h2>
              <p className="text-lg md:text-xl">Farms supported</p>
            </div>
  
            {/* Problem Section */}
            <div className="space-y-2 mt-16 md:mt-28">
      <Accordion icon={<Eye className="h-6 w-6" />} title="Problem" defaultOpen={true}>
        <p className="text-gray-600">
          Our research has identified key challenges in modern agriculture, including soil degradation, inconsistent
          crop quality, and inefficient resource utilization.
        </p>
      </Accordion>

      <Accordion icon={<Beaker className="h-6 w-6" />} title="Solution">
        <p className="text-gray-600 mb-4">
          We provide scientifically formulated soil amendments and premium seeds that are tailored to specific soil
          conditions and climate zones.
        </p>

      </Accordion>

      <Accordion icon={<Sparkles className="h-6 w-6" />} title="Technology">
        <p className="text-gray-600 mb-4">
          Leveraging cutting-edge agricultural technology to optimize farming operations and increase productivity.
        </p>

      </Accordion>
    </div>
          </div>
  
          {/* Right Column - Headline and Images */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              From seeds and fertilizers to advanced farming tech, we're here to support your journey in every step.
            </h1>
  
            {/* Farm Technology Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-22%20at%2016.29.28-VgcSmbPkOXEBXHuOcz6QCKsShoBW0w.png"
                  alt="Aerial view of farming machinery in field"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <h3 className="text-xl font-bold">
                    Farm
                    <br />
                    Technology
                  </h3>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Green field with crop rows"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 text-sm text-black">
                  ©2025
                  <br />
                  NewTech
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer with Logos */}
        <div className="mt-24 pt-8 border-t">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="font-light">RotaShow</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-light">waves</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="font-light">RotaShow</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="font-light">travelers.</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="font-light">goldlines</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-light">velocity</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

