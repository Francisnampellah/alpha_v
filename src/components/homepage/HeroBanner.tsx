"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Navigation from "@/components/navigation/Navigation"
import { useRouter } from "next/navigation"

// Create our own CountingNumber component
const CountingNumber = ({ targetNumber, suffix = "" }: { targetNumber: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const duration = 2000 // 2 seconds animation
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const easeOutQuad = (t: number) => t * (2 - t)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      const currentCount = Math.round(targetNumber * progress)

      if (frame === totalFrames) {
        clearInterval(counter)
      }

      setCount(currentCount)
    }, frameDuration)

    return () => clearInterval(counter)
  }, [targetNumber])

  return (
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      <span ref={countRef}>{count}</span>
      {suffix}
    </div>
  )
}

// Company Logo component
// const CompanyLogo = ({ className = "h-2 w-2" }: { className?: string }) => (
//   <div className="grid grid-cols-2 grid-rows-2 gap-1">
//     {[...Array(4)].map((_, i) => (
//       <motion.div
//         key={i}
//         className={`${className} rounded-sm bg-white`}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3, delay: i * 0.1 }}
//       />
//     ))}
//   </div>
// )

export default function WelcomeHeroBanner() {
  const router = useRouter()
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern engineering and technology workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/40"></div>
      </div>

      {/* Navigation */}
      <Navigation variant="homepage" showCTA={true} ctaText="Get Started" />

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <p className="text-sm text-blue-400 font-medium tracking-wider">WELCOME TO SMARTINNO ENGINEERING</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Empowering Businesses Through Innovation & Technology
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-sky-100 sm:text-gray-300 mb-6 sm:mb-8 max-w-2xl font-medium"
          >
            A dynamic, multidisciplinary engineering firm specializing in agile software development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button 
              onClick={() => router.push('/services')}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-medium flex items-center justify-center transition-colors shadow-md"
            >
              <span className="mr-2">Explore Our Services</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => router.push('/about')}
              className="bg-indigo-900/30 hover:bg-indigo-900/50 text-sky-100 border border-sky-200/30 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-medium transition-colors"
            >
              Learn About SmartInno
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
          >
            <div>
              <CountingNumber targetNumber={7} suffix="+" />
              <p className="text-xs sm:text-sm text-blue-100 sm:text-gray-300 font-medium">Industries Served</p>
            </div>
            <div>
              <CountingNumber targetNumber={100} suffix="+" />
              <p className="text-xs sm:text-sm text-cyan-100 sm:text-gray-300 font-medium">Projects Delivered</p>
            </div>
            <div>
              <CountingNumber targetNumber={2} />
              <p className="text-xs sm:text-sm text-indigo-100 sm:text-gray-300 font-medium">Global Offices</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={scrollToContent}
      >
        <p className="text-white text-sm mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

