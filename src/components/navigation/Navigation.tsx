"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type NavLinkProps = {
  href: string
  label: string
  isActive?: boolean
  textColor?: string
}

type NavigationProps = {
  variant?: "transparent" | "solid" | "homepage"
  showCTA?: boolean
  ctaText?: string
  ctaLink?: string
}

const NavLink = ({ href, label, isActive = false, textColor = "text-black" }: NavLinkProps) => {
  const textClass = isActive
    ? `${textColor} font-semibold`
    : textColor === "text-white"
      ? "text-gray-200 hover:text-white"
      : "text-gray-700 hover:text-black";

  const underlineClass = textColor === "text-white" ? "bg-white" : "bg-black";

  return (
    <Link
      href={href}
      className={`${textClass} transition-colors relative group block`}
      aria-label={`Navigate to ${label}`}
    >
      {label}
      {isActive ? (
        <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${underlineClass}`}></span>
      ) : (
        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineClass} transition-all duration-300 group-hover:w-full`}></span>
      )}
    </Link>
  );
};

const CompanyLogo = ({ className = "h-2 w-2", useDark = false }: { className?: string, useDark?: boolean }) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-1">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className={`${className} rounded-sm ${useDark ? "bg-black" : "bg-white"}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      />
    ))}
  </div>
)

export default function Navigation({ 
  variant = "transparent", 
  showCTA = false,
  ctaText = "Get Started", 
  ctaLink = "#" 
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    { href: "/", label: "Home", isActive: activeLink === "/" },
    { href: "/about", label: "About", isActive: activeLink === "/about" },
    { href: "/services", label: "Services", isActive: activeLink === "/services" },
    { href: "/projects", label: "Projects", isActive: activeLink === "/projects" },
    { href: "/events", label: "Events", isActive: activeLink === "/events" },
  ]

  // Determine header styles based on variant and scroll state
  let headerStyle = ""
  // let logoColor = ""
  let textColor = "text-black"

  if (variant === "transparent" || variant === "homepage") {
    if (scrolled) {
      headerStyle = "bg-white/90 backdrop-blur-md shadow-sm py-3"
      // logoColor = "bg-black"
      textColor = "text-black"
    } else {
      headerStyle = variant === "homepage" 
        ? "bg-transparent sm:bg-transparent bg-[#0a0f36]/80 backdrop-blur-sm py-4" 
        : "bg-gradient-to-b from-black/50 to-transparent py-4"
      // logoColor = "bg-white"
      textColor = "text-white"
    }
  } else {
    // Solid variant
    headerStyle = "bg-white shadow-sm py-3"
    // logoColor = "bg-black"
    textColor = "text-black"
  }

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <CompanyLogo className="h-2 w-2" useDark={scrolled || variant === "solid"} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${textColor === "text-white" ? "text-white" : "text-black"}`}>SMARTINNO</h1>
              <p className="text-xs text-blue-300">ENGINEERING LIMITED</p>
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden flex items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${textColor === "text-white" ? "text-white" : "text-gray-800"}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.href}
                  href={link.href} 
                  label={link.label}
                  isActive={link.isActive}
                  textColor={textColor}
                />
              ))}
            </nav>

            {/* CTA Button (conditionally rendered) */}
            {showCTA && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:block"
              >
                <Link 
                  href={ctaLink}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 text-sm transition-colors flex items-center"
                >
                  <span className="mr-1">{ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#0a0f36] shadow-md ${
            mobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.href} onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-blue-900/30 last:border-b-0">
                <NavLink 
                  href={link.href} 
                  label={link.label}
                  isActive={link.isActive}
                  textColor={link.isActive ? "text-blue-300" : "text-sky-100"}
                />
              </div>
            ))}
            {showCTA && (
              <div className="pt-4">
                <Link 
                  href={ctaLink}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 text-sm transition-colors flex items-center justify-center w-full"
                >
                  <span className="mr-1">{ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  )
} 