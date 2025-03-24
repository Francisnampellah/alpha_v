"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CategoryPill } from "@/components/category-pill"

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
    <div className="text-4xl md:text-5xl font-bold text-white">
      <span ref={countRef}>{count}</span>
      {suffix}
    </div>
  )
}

type NavLinkProps = {
  href: string
  label: string
  isActive?: boolean
}

const NavLink = ({ href, label, isActive = false }: NavLinkProps) => (
  <Link
    href={href}
    className={`${isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black"} transition-colors relative group`}
    aria-label={`Navigate to ${label}`}
  >
    {label}
    {isActive ? (
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
    ) : (
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
    )}
  </Link>
)

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
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Set active link based on current path
    const path = window.location.pathname
    setActiveLink(path)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks: NavLinkProps[] = [
    { href: "/about", label: "About", isActive: activeLink === "/about" },
    { href: "/services", label: "Services", isActive: activeLink === "/services" },
    { href: "/projects", label: "Projects", isActive: activeLink === "/projects" },
    { href: "/events", label: "Events", isActive: activeLink === "/events" },
    { href: "/products", label: "Products", isActive: activeLink === "/products" },
  ]

  return (
    <section className="">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <CompanyLogo />
            <span className="font-semibold text-black">SMARTiNNO</span>
          </div>

          <nav className="flex flex-wrap gap-4 sm:gap-8" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="/events" className="text-black font-semibold transition-colors">
              Events
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-0">
        <div className="relative mx-auto my-0 overflow-hidden h-[70vh] sm:h-[80vh]">
          <Image
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural tractor spraying crops in a field"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* Top section with category pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 w-full sm:w-auto mt-16 sm:mt-24"
            >
              <CategoryPill label="Farm Tech" />
              <CategoryPill label="Innovation" />
              <CategoryPill label="Seamless Integration" />
            </motion.div>

            {/* Middle section with stats */}
            <div className="flex flex-col sm:flex-row items-end justify-between gap-4 sm:gap-0 my-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-4 sm:mx-8"
              >
                <CountingNumber targetNumber={320} suffix="k" />
                <p className="text-lg sm:text-xl font-thin text-white">Satisfied Customers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-full sm:max-w-md"
              >
                <p className="text-base sm:text-xl text-white">
                  We're dedicated to providing farmers, businesses, and communities with innovative solutions.
                </p>
              </motion.div>
            </div>

            {/* Company branding section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center sm:justify-end mb-8"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300">
                    <CompanyLogo className="h-1.5 w-1.5" />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white">SMARTiNNO</h1>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">ENGINEERING LTD</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

