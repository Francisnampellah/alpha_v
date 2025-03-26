"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CategoryPill } from "@/components/category-pill"
import Navigation from "../navigation/Navigation"

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

// We're keeping CompanyLogo here since it's also used in the hero content
const CompanyLogo = ({ className = "h-2 w-2" }: { className?: string }) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-1">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className={`${className} rounded-sm bg-black`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      />
    ))}
  </div>
)

export default function HeroBanner() {
  return (
    <section className="">
      {/* Navigation */}
      <Navigation />

      {/* Hero Banner */}
      <div className="relative pt-16 md:pt-0">
        <div className="relative mx-auto my-0 overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural tractor spraying crops in a field"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-bottom"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* Top section with category pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 w-full mt-12 sm:mt-16 md:mt-24"
            >
              <CategoryPill label="Farm Tech" />
              <CategoryPill label="Innovation" />
              <CategoryPill label="Seamless Integration" />
            </motion.div>

            {/* Middle section with stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-4 my-6 sm:my-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-0 sm:mx-4 md:mx-8"
              >
                <CountingNumber targetNumber={320} suffix="k" />
                <p className="text-base sm:text-lg md:text-xl font-thin text-white">Satisfied Customers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-full sm:max-w-md"
              >
                <p className="text-sm sm:text-base md:text-xl text-white">
                  Were dedicated to providing farmers, businesses, and communities with innovative solutions.
                </p>
              </motion.div>
            </div>

            {/* Company branding section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center sm:justify-end mb-4 sm:mb-8"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-yellow-300">
                    <CompanyLogo className="h-1.5 w-1.5" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">SMARTiNNO</h1>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">ENGINEERING LTD</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

