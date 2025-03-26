"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

type NavLinkProps = {
  href: string
  label: string
  isActive?: boolean
  textColor?: string
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

export default function Navigation() {
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
    { href: "/products", label: "Products", isActive: activeLink === "/products" },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 text-black" 
            : "bg-gradient-to-b from-black/50 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <CompanyLogo className={scrolled ? "bg-black" : "bg-white"} />
            <span className={`font-semibold ${scrolled ? "text-black" : "text-white"}`}>SMARTiNNO</span>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`}
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
                textColor={scrolled ? "text-black" : "text-white"}
              />
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-sm ${
            mobileMenuOpen ? "max-h-screen opacity-100 py-4 shadow-md" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.href} onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 last:border-b-0">
                <NavLink 
                  href={link.href} 
                  label={link.label}
                  isActive={link.isActive}
                  textColor="text-black"
                />
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
} 