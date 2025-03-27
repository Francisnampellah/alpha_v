"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { Beaker, Eye, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

// Accordion component
const Accordion = ({
  icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-left font-medium text-gray-900"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="mr-3 text-gray-500">{icon}</div>
          <span>{title}</span>
        </div>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  )
}

// Logo component
const LogoItem = ({
  icon,
  name,
}: {
  icon: React.ReactNode
  name: string
}) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">{icon}</div>
      <div className="font-medium text-gray-900">{name}</div>
    </div>
  )
}

// Chemical industry icons
const ChemicalIcons = {
  Molecule: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
      <circle cx="7" cy="17" r="3" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="3" strokeWidth="1.5" />
      <line x1="12" y1="10" x2="7" y2="14" strokeWidth="1.5" />
      <line x1="12" y1="10" x2="17" y2="14" strokeWidth="1.5" />
    </svg>
  ),
  Flask: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M9,3 L15,3 L15,9 L19,18 C19.5,19.5 18.5,21 17,21 L7,21 C5.5,21 4.5,19.5 5,18 L9,9 L9,3 Z"
        strokeWidth="1.5"
      />
      <line x1="9" y1="3" x2="15" y2="3" strokeWidth="1.5" />
      <path d="M8,14 L16,14" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Atom: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
  ),
  Dropper: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M7,21 L17,21 C18.1,21 19,20.1 19,19 L19,13 L5,13 L5,19 C5,20.1 5.9,21 7,21 Z" strokeWidth="1.5" />
      <path d="M5,13 L10,3 C10.4,2.4 11.6,2.4 12,3 L19,13" strokeWidth="1.5" />
      <line x1="12" y1="8" x2="12" y2="16" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  ),
  Safety: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        d="M12,3 L20,7 L20,12 C20,16.4183 16.4183,20 12,20 C7.58172,20 4,16.4183 4,12 L4,7 L12,3 Z"
        strokeWidth="1.5"
      />
      <path d="M9,12 L11,14 L15,10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

// Partner logos
const partnerLogos = [
  { name: "ChemTech Industries", icon: ChemicalIcons.Molecule },
  { name: "PharmaLab Solutions", icon: ChemicalIcons.Flask },
  { name: "EcoSynth Materials", icon: ChemicalIcons.Atom },
  { name: "BioProcess Systems", icon: ChemicalIcons.Dropper },
  { name: "SafetyFirst Chemicals", icon: ChemicalIcons.Safety },
]

export default function AboutUs() {
  const slides = [
    {
      title: "State-of-the-Art Laboratory",
      description: "Our advanced research facilities enable us to develop cutting-edge chemical solutions.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=3270&auto=format&fit=crop",
      position: "top-right",
      copyright: "©2023 Synthrix",
    },
    {
      title: "Sustainable Manufacturing",
      description: "Our eco-friendly production processes minimize environmental impact while maximizing efficiency.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=3174&auto=format&fit=crop",
      position: "top-right",
      copyright: "©2023 Synthrix",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const router = useRouter()

  // Optimized slide change with useCallback
  const goToSlide = useCallback(
    (index: number) => {
      if (currentSlide === index) return

      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 500)
      }, 300)
    },
    [currentSlide],
  )

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length
      goToSlide(nextSlide)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, goToSlide, isAutoPlaying, slides.length])

  return (
    <section
      className="px-4 sm:px-6 lg:px-12 py-16 font-sans bg-white text-black"
      aria-labelledby="about-synthrix-heading"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 border-b border-gray-200 pb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-12 text-lg text-gray-400 font-bold mr-4">01</div>
            <div>
              <h2 id="about-synthrix-heading" className="text-2xl font-bold">
                About Synthrix
              </h2>
              <p className="text-sm text-gray-600">Pioneering chemical supply excellence since 2005.</p>
            </div>
          </div>
          <button
            className="bg-black hover:bg-gray-800 transition-colors text-white px-6 py-3 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            aria-label="Read more about Synthrix"
            onClick={() => router.push("/about")}
          >
            Read More
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Stats and Accordions */}
          <div className="lg:col-span-4 space-y-10">
            {/* Stats with improved typography and animation */}
            <div className="mb-8" data-aos="fade-up">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 animate-in fade-in duration-700">
                <span className="inline-block animate-in slide-in-from-bottom-4 duration-1000">5K</span>
                <sup className="text-3xl text-gray-800">+</sup>
              </h2>
              <p className="text-xl text-gray-600 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">
                Clients worldwide
              </p>
            </div>

            {/* Accordion section */}
            <div className="space-y-4 mt-10">
              <Accordion icon={<Eye className="h-5 w-5" />} title="Mission" defaultOpen={true}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To provide high-quality, innovative chemical solutions that enhance our clients' operations while
                  maintaining the highest standards of safety and environmental responsibility.
                </p>
              </Accordion>

              <Accordion icon={<Beaker className="h-5 w-5" />} title="Vision">
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the global leader in chemical supply solutions, recognized for our commitment to quality,
                  innovation, and sustainable practices that drive industry advancement.
                </p>
              </Accordion>

              <Accordion icon={<Sparkles className="h-5 w-5" />} title="Values">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Quality, Safety, Innovation, Sustainability, and Customer Focus are the core principles that guide our
                  approach to delivering exceptional chemical supply solutions.
                </p>
              </Accordion>
            </div>
          </div>

          {/* Right Column - Headline and Image Slider */}
          <div className="lg:col-span-8 space-y-8">
            {/* Headline with improved typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 animate-in slide-in-from-right duration-700">
              Delivering premium chemical solutions with uncompromising quality and reliability.
            </h1>

            {/* Image Slider */}
            <div
              className="relative h-80 sm:h-96 rounded-lg overflow-hidden mt-8 shadow-xl"
              aria-roledescription="carousel"
              aria-label="Chemical facilities showcase"
            >
              <div className="absolute top-4 right-4 z-10 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full p-1.5">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isAutoPlaying ? "bg-white/90 text-black" : "bg-transparent text-white hover:bg-white/20",
                  )}
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  title={isAutoPlaying ? "Pause" : "Play"}
                >
                  {isAutoPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-in-out",
                    index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
                  )}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${slides.length}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-between">
                    <div
                      className={cn(
                        "self-end transition-all duration-500",
                        isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0",
                      )}
                    >
                      <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                      <p className="text-sm mt-1 max-w-xs text-white/90">{slide.description}</p>
                    </div>
                    <div className="self-start text-sm text-white/80">{slide.copyright}</div>
                  </div>
                </div>
              ))}

              {/* Slide navigation arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                  className="bg-black/30 hover:bg-black/50 transition-colors text-white h-10 w-10 flex items-center justify-center rounded-r-lg backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                  className="bg-black/30 hover:bg-black/50 transition-colors text-white h-10 w-10 flex items-center justify-center rounded-l-lg backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full p-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50",
                      index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/80",
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentSlide ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="mt-16 pt-8 border-t border-gray-200 max-w-full">
        <div className="flex overflow-x-auto scrollbar-hide md:overflow-visible pb-4 md:pb-0 gap-4 md:gap-8 md:flex-wrap md:justify-between">
          {partnerLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <LogoItem icon={logo.icon} name={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

