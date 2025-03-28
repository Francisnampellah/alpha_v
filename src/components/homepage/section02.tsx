"use client"
import {Accordion} from '@/components/accordions-item'
import { Beaker, Eye, Sparkles } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import {LogoItem} from '@/components/logo'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

// Improved SVG icons with consistent styling
const DefaultIcons = {
  RotaShow: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  ),
  Waves: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="M8,12 C9,10 10,14 12,12 C14,10 15,14 16,12" strokeWidth="1.5" />
    </svg>
  ),
  Travelers: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M12,7 C14.21,7 16,8.79 16,11 C16,13.21 14.21,15 12,15 C9.79,15 8,13.21 8,11 C8,8.79 9.79,7 12,7 Z" strokeWidth="1.5" />
      <path d="M8,17 L16,17 L16,18 C16,19.1 15.1,20 14,20 L10,20 C8.9,20 8,19.1 8,18 L8,17 Z" strokeWidth="1.5" />
      <path d="M12,2 L12,5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Goldlines: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <line x1="8" y1="8" x2="8" y2="16" strokeWidth="1.5" />
      <line x1="12" y1="8" x2="12" y2="16" strokeWidth="1.5" />
      <line x1="16" y1="8" x2="16" y2="16" strokeWidth="1.5" />
    </svg>
  ),
  Velocity: (
    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="M8,12 L16,12" strokeWidth="1.5" />
      <path d="M12,8 L12,16" strokeWidth="1.5" />
    </svg>
  )
};

// Default logos with consistent naming and structure
const defaultLogos = [
  { name: 'Tech Conference', icon: DefaultIcons.RotaShow },
  { name: 'FinTech Summit', icon: DefaultIcons.Waves },
  { name: 'AI Innovations', icon: DefaultIcons.Travelers },
  { name: 'Cloud Solutions', icon: DefaultIcons.Goldlines },
  { name: 'Cybersecurity', icon: DefaultIcons.Velocity }
];

export default function Section02() {

  const slides = [
    {
      title: "Tech Conference 2023",
      description: "Exploring the latest trends in AI and software development.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "top-right",
      copyright: "©2023 SmartINNO",
    },
    {
      title: "FinTech Summit",
      description: "Innovations in financial technology and digital payments.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "top-right",
      copyright: "©2023 SmartINNO",
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Optimized slide change with useCallback
  const goToSlide = useCallback((index: number) => {
    if (currentSlide === index) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 300);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, goToSlide, isAutoPlaying, slides.length]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">


        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <p className="text-sm text-blue-400 font-medium"> ABOUT SMARTiNNO</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Tech Innovations,
          <br />
          Meaningful Connections
        </h2>

        <div className="h-px bg-gray-300 mb-8"></div>
        {/* <SectionHeader
          number="01"
          title="About SMARTiNNO"
          subtitle="Just the board, the streets, & your trick."
          showButton={true}
          buttonText="Read More"
          buttonOnClick={() => router.push('/about')}
        /> */}
        
        {/* Main Content - Improved grid layout for better responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Stats and Accordions */}
          <div className="lg:col-span-4 space-y-10">
            {/* Stats with improved typography and animation */}
            <div className="mb-8" data-aos="fade-up">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 animate-in fade-in duration-700">
                <span className="inline-block animate-in slide-in-from-bottom-4 duration-1000">50K</span>
                <sup className="text-3xl text-gray-800">+</sup>
              </h2>
              <p className="text-xl text-gray-600 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-300">
                Farms supported
              </p>
            </div>

            {/* Accordion section with consistent spacing */}
            <div className="space-y-4 mt-10">
              <Accordion icon={<Eye className="h-5 w-5" />} title="Mission" defaultOpen={true}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To empower organizations with intelligent, scalable, and cost-effective technology solutions that drive efficiency, productivity, and growth.
                </p>
              </Accordion>

              <Accordion icon={<Beaker className="h-5 w-5" />} title="Vision">
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the leading technology solutions provider in Africa, driving digital transformation and business automation for a smarter and more connected future.
                </p>
              </Accordion>

              <Accordion icon={<Sparkles className="h-5 w-5" />} title="Values">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Innovation, Integrity, Customer Focus, Excellence, and Collaboration are the core principles guiding our approach to delivering impactful solutions.
                </p>
              </Accordion>
            </div>
          </div>

          {/* Right Column - Headline and Image Slider */}
          <div className="lg:col-span-8 space-y-8">
            {/* Headline with improved typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 animate-in slide-in-from-right duration-700">
              Join us at the forefront of technology innovation and transformation.
            </h1>

            {/* Image Slider - Enhanced with better accessibility and controls */}
            <div 
              className="relative h-80 sm:h-96 rounded-lg overflow-hidden mt-8 shadow-xl" 
              aria-roledescription="carousel"
              aria-label="Farm technology showcase"
            >
              <div className="absolute top-4 right-4 z-10 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full p-1.5">
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isAutoPlaying ? "bg-white/90 text-black" : "bg-transparent text-white hover:bg-white/20"
                  )}
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  title={isAutoPlaying ? "Pause" : "Play"}
                >
                  {isAutoPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>

              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-in-out",
                    index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${slides.length}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-between">
                    <div className={cn(
                      "self-end transition-all duration-500",
                      isTransitioning 
                        ? "opacity-0 transform translate-y-4" 
                        : "opacity-100 transform translate-y-0"
                    )}>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
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
                      index === currentSlide 
                        ? "bg-white" 
                        : "bg-white/50 hover:bg-white/80"
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

      {/* Logo Section - Improved with responsive scrolling on small screens */}
      <div className="mt-16 pt-8 border-t border-gray-200 max-w-full">
        <div className="flex overflow-x-auto scrollbar-hide md:overflow-visible pb-4 md:pb-0 gap-4 md:gap-8 md:flex-wrap md:justify-between">
          {defaultLogos.map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="flex-shrink-0 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <LogoItem
                icon={logo.icon}
                name={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

