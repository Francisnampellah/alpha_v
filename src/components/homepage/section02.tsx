"use client"
import {Accordion} from '@/components/accordions-item'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Beaker, Eye, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import {LogoItem} from '@/components/logo'
import TechCard from '../CardWIthText'



const DefaultIcons = {
  RotaShow: (
    <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  Waves: (
    <svg className="h-10 w-10 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z" 
      stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M8,12 C9,10 10,14 12,12 C14,10 15,14 16,12" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  Travelers: (
    <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,7 C14.21,7 16,8.79 16,11 C16,13.21 14.21,15 12,15 C9.79,15 8,13.21 8,11 C8,8.79 9.79,7 12,7 Z" fill="currentColor" />
      <path d="M8,17 L16,17 L16,18 C16,19.1 15.1,20 14,20 L10,20 C8.9,20 8,19.1 8,18 L8,17 Z" fill="currentColor" />
      <path d="M12,2 L12,5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Goldlines: (
    <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="8" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Velocity: null // No icon for Velocity
};

// Default logos that match the image
const defaultLogos = [
  { name: 'RotaShow', icon: DefaultIcons.RotaShow },
  { name: 'waves', icon: DefaultIcons.Waves },
  { name: 'RotaShow', icon: DefaultIcons.RotaShow },
  { name: 'travelers.', icon: DefaultIcons.Travelers },
  { name: 'goldlines', icon: DefaultIcons.Goldlines },
  { name: 'velocity', badgeText: '9' }
];



export default function Section_02() {
    const slides = [
        {
          title: "Farm Technology",
          description: "Advanced machinery for modern agriculture",
          image:
            "https://images.unsplash.com/photo-1726137570036-cc7e8b1b58c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NjR8fFRFQ0hOT0xPR1l8ZW58MHx8MHx8fDA%3D",
          position: "top-right",
          copyright: "©2025 NewTech",
        }
      ]
    
      const [currentSlide, setCurrentSlide] = useState(0)
      const [isTransitioning, setIsTransitioning] = useState(false)
    
      useEffect(() => {
        const interval = setInterval(() => {
          // Start transition
          setIsTransitioning(true)
    
          // Change slide after text fades out
          setTimeout(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
          }, 500)
    
          // End transition after new slide is in place
          setTimeout(() => {
            setIsTransitioning(false)
          }, 1000)
        }, 5000) // Change slide every 5 seconds
    
        return () => clearInterval(interval)
      }, [slides.length])

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
      <Accordion icon={<Eye className="h-6 w-6" />} title="Mission" defaultOpen={true}>
        <p className="text-gray-600">
          Our research has identified key challenges in modern agriculture, including soil degradation, inconsistent
          crop quality, and inefficient resource utilization.
        </p>
      </Accordion>

      <Accordion icon={<Beaker className="h-6 w-6" />} title="Vision">
        <p className="text-gray-600 mb-4">
          We provide scientifically formulated soil amendments and premium seeds that are tailored to specific soil
          conditions and climate zones.
        </p>

      </Accordion>

      <Accordion icon={<Sparkles className="h-6 w-6" />} title="Values">
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
            <div className="relative h-80">
            {/* Text Overlay - Separate from images for independent transitions */}
            {/* <div
              className={`absolute inset-0 z-10 flex flex-col justify-between p-6 transition-opacity duration-500 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <div className="self-end">
                <h3 className="text-xl font-bold">{slides[currentSlide].title}</h3>
                <p className="text-sm mt-1 max-w-xs">{slides[currentSlide].description}</p>
              </div>
              <div className="self-start text-sm text-black">{slides[currentSlide].copyright}</div>
            </div> */}

            {/* Image Container */}
            <div className="relative overflow-auto rounded-lg h-full">
              {slides.map((slide, index) => (
              <TechCard key={index} image={slide.image} title={slide.title} description={slide.description}/>
              ))}
            </div>


            </div>

        </div>
      </div>
      <div className="mt-24 w-full pt-8 border-t border-gray-200 flex flex-wrap">
      <div className={`flex flex-row overflow-x-auto w-full items-center justify-between gap-8`}>
          {defaultLogos.map((logo, index) => (
            <LogoItem
              key={`${logo.name}-${index}`}
              icon={logo.icon}
              name={logo.name}
              badgeText={logo.badgeText}
            />
          ))}
        </div>
</div>
    </div>
    )
  }

