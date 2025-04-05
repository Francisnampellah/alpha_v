"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

type DropdownItem = {
  href: string
  label: string
}

type NavLinkProps = {
  href?: string
  label: string
  isActive?: boolean
  textColor?: string
  dropdownItems?: DropdownItem[]
}

type NavigationProps = {
  variant?: "transparent" | "solid" | "homepage"
  showCTA?: boolean
  ctaText?: string
  ctaLink?: string
}

const NavLink = ({ href, label, isActive = false, textColor = "text-black" }: NavLinkProps) => {
  if (!href) return null;
  
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

const DropdownNavLink = ({ label, dropdownItems, textColor = "text-black" }: Omit<NavLinkProps, 'href' | 'isActive'>) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const textClass = textColor === "text-white" ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        className={`${textClass} transition-colors flex items-center gap-1`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            {dropdownItems?.map((item) => (
              <Link
                key={`dropdown-${item.href}`}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const CompanyLogo = ({ useDark = false }: {  useDark?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${useDark ? 'bg-black' : 'bg-white'}`}>
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={useDark ? 'text-white' : 'text-black'}
      >
        <path 
          d="M12 2L2 7L12 12L22 7L12 2Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2 17L12 22L22 17" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2 12L12 17L22 12" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="relative">
      <span className={`text-xl font-light tracking-wider ${useDark ? "text-black" : "text-white"} relative z-10`}>
        SMARTiNNO
      </span>
      <span className={`absolute inset-0 text-xl font-light tracking-wider ${useDark ? "text-black" : "text-white blur-[1px]"} `}>
        SMARTiNNO
      </span>
      <span className={`absolute inset-0 text-xl  tracking-wider ${useDark ? "text-black " : "text-white blur-[2px]"} `}>
        SMARTiNNO
      </span>
    </div>
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
    { 
      label: "Solutions",
      dropdownItems: [
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/events", label: "Events" },
        { href: "/technology", label: "Technology" }
      ]
    },
    { href: "/career", label: "Career", isActive: activeLink === "/career" },
    { href: "/privacy", label: "Privacy", isActive: activeLink === "/privacy" },
  ]

  // Determine header styles based on variant and scroll state
  let headerStyle = ""
  let textColor = "text-black"

  if (variant === "transparent" || variant === "homepage") {
    if (scrolled) {
      headerStyle = "bg-white/95 backdrop-blur-md shadow-sm py-4"
      textColor = "text-black"
    } else {
      headerStyle = variant === "homepage" 
        ? "bg-transparent sm:bg-transparent bg-black/20 backdrop-blur-sm py-6" 
        : "bg-gradient-to-b from-black/30 to-transparent py-6"
      textColor = "text-white"
    }
  } else {
    headerStyle = "bg-white shadow-sm py-4"
    textColor = "text-black"
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStyle}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <CompanyLogo useDark={scrolled || variant === "solid"} />
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-6">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                link.dropdownItems ? (
                  <DropdownNavLink 
                    key={`nav-${link.label}`}
                    label={link.label}
                    dropdownItems={link.dropdownItems}
                    textColor={textColor}
                  />
                ) : (
                  <NavLink 
                    key={`nav-${link.href}`}
                    href={link.href} 
                    label={link.label}
                    isActive={link.isActive}
                    textColor={textColor}
                  />
                )
              ))}
            </nav>

            {/* CTA Button */}
            {showCTA && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:block"
              >
                <Link 
                  href={ctaLink}
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2.5 text-sm transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden z-50 transition-all duration-500 ease-in-out overflow-hidden bg-white shadow-lg ${
            mobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={`mobile-${link.label}`} className="py-3 border-b border-gray-100 last:border-b-0">
                {link.dropdownItems ? (
                  <div>
                    <div className="font-medium text-gray-800 mb-2">{link.label}</div>
                    <div className="pl-4 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={`mobile-dropdown-${item.href}`}
                          href={item.href}
                          className="block text-gray-600 hover:text-gray-900"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink 
                    href={link.href} 
                    label={link.label}
                    isActive={link.isActive}
                    textColor="text-gray-800"
                  />
                )}
              </div>
            ))}
            {showCTA && (
              <div className="pt-4">
                <Link 
                  href={ctaLink}
                  className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2.5 text-sm transition-all duration-300 flex items-center justify-center w-full"
                >
                  <span className="mr-2">{ctaText}</span>
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