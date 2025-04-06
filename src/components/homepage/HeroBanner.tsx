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
            src="/small.jpg"
            alt="Modern engineering and technology workspace"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover md:hidden"
          />
          <Image
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern engineering and technology workspace"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover hidden md:block"
          />
        </div>
      </div>

      {/* Navigation */}
      <Navigation variant="homepage" showCTA={true} ctaText="Get Started" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-24">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            <p className="text-xs sm:text-sm text-blue-400 font-medium tracking-[0.2em] uppercase">Welcome to SmartInno</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-[1.1] tracking-tight drop-shadow-lg"
          >
            Innovate and
            <br />
            Optimize
            <br />
            Through Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-white max-w-xl mb-4 leading-relaxed font-light drop-shadow-md"
          >
            Leading pioneer in Tanzania, delivering transformative innovation and cutting-edge solutions for software automation and seamless integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6"
          >
            <button 
              onClick={() => router.push('/services')}
              className="group bg-white/20 hover:bg-white/30 text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium flex items-center justify-center transition-all duration-500 backdrop-blur-sm hover:backdrop-blur-md shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">Explore Our Solutions</span>
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => router.push('/about')}
              className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-500 backdrop-blur-sm hover:backdrop-blur-md shadow-md hover:shadow-lg"
            >
              Learn About SmartInno
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl"
          >
            <div className="text-center sm:text-left">
              <CountingNumber targetNumber={8} suffix="+" />
              <p className="text-xs sm:text-sm text-white/90 font-light mt-1 drop-shadow-md">Core Services</p>
            </div>
            <div className="text-center sm:text-left">
              <CountingNumber targetNumber={300} suffix="+" />
              <p className="text-xs sm:text-sm text-white/90 font-light mt-1 drop-shadow-md">Projects Delivered</p>
            </div>
            <div className="text-center sm:text-left">
              <CountingNumber targetNumber={2} />
              <p className="text-xs sm:text-sm text-white/90 font-light mt-1 drop-shadow-md">Global Presence</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={scrollToContent}
      >
        <p className="text-white/80 text-xs mb-1 tracking-wider drop-shadow-md">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/80 drop-shadow-md" />
        </motion.div>
      </motion.div>
    </div>
  )
}

