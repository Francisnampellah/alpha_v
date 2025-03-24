"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight, Info, MapPin, Calendar, Clock, Tag } from 'lucide-react'
import { motion } from "framer-motion"

// Sample data for demonstration
const project = {
  id: "smart-city",
  title: "Smart City Infrastructure",
  description: "A comprehensive urban development project focused on sustainable technology integration.",
  status: "In Progress",
  image: "/placeholder.svg?height=800&width=1200",
  categories: ["Urban Development", "IoT", "Sustainability"],
  fullDescription: "This project aims to transform urban living through smart technology integration. By implementing IoT sensors, renewable energy solutions, and data-driven infrastructure management, we're creating a more efficient and sustainable urban environment.\n\nThe Smart City project includes traffic optimization systems, smart lighting, waste management solutions, and public Wi-Fi networks. All systems are interconnected through a central management platform that provides real-time analytics and control capabilities.\n\nOur approach prioritizes sustainability, accessibility, and scalability to ensure long-term benefits for all city residents.",
  specs: [
    { name: "Client", value: "Metropolitan Development Authority" },
    { name: "Timeline", value: "2023 - 2025" },
    { name: "Location", value: "Central Business District" },
    { name: "Budget", value: "$12.5M" },
    { name: "Team Size", value: "24 specialists" },
    { name: "Technologies", value: "IoT, AI, Renewable Energy" }
  ],
  gallery: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600"
  ]
}

const projects = [
  {
    id: "smart-city",
    title: "Smart City Infrastructure",
    description: "A comprehensive urban development project focused on sustainable technology integration.",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Urban Development", "IoT", "Sustainability"]
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Grid",
    description: "Implementation of a city-wide renewable energy distribution network.",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Sustainability", "Energy", "Infrastructure"]
  },
  {
    id: "traffic-management",
    title: "Intelligent Traffic System",
    description: "AI-powered traffic management solution for urban congestion reduction.",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Urban Development", "AI", "Transportation"]
  },
  {
    id: "waste-management",
    title: "Smart Waste Management",
    description: "IoT-based waste collection and recycling optimization system.",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["IoT", "Sustainability", "Urban Development"]
  }
]

const CategoryPill = ({ label }: { label: string }) => {
  return (
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
    >
      {label}
    </motion.span>
  )
}

export default function ProjectDetail() {
  const [statusColor, setStatusColor] = useState("bg-blue-500 text-white")
  const [scrolled, setScrolled] = useState(false)
  
  // Set status color based on project status
  useEffect(() => {
    switch(project.status.toLowerCase()) {
      case "completed":
        setStatusColor("bg-green-500 text-white")
        break
      case "in progress":
        setStatusColor("bg-blue-500 text-white")
        break
      case "planning":
        setStatusColor("bg-amber-500 text-white")
        break
      default:
        setStatusColor("bg-gray-500 text-white")
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [project.status])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="h-2 w-2 rounded-sm bg-black"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                />
              ))}
            </div>
            <span className="font-semibold text-black">SMARTiNNO</span>
          </div>
          
          <nav className="flex flex-wrap gap-4 sm:gap-8" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="text-black font-semibold transition-colors relative">
              Projects
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Project Hero */}
      <div className="relative pt-16 sm:pt-0">
        <div className="relative mx-auto my-0 overflow-hidden h-[70vh] sm:h-[80vh]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 w-full sm:w-auto mt-16 sm:mt-24"
            >
              {project.categories.map((category, idx) => (
                <CategoryPill key={idx} label={category} />
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${statusColor}`}>
                  {project.status}
                </span>
                <Link 
                  href="/projects" 
                  className="text-white hover:text-gray-200 flex items-center gap-1.5 group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span className="text-sm font-medium">Back to Projects</span>
                </Link>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="px-4 sm:px-8 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left column - Description */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 relative inline-block">
                About This Project
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500"></span>
              </h2>
              <div className="prose max-w-none">
                {project.fullDescription.split('\n').map((paragraph, idx) => (
                  <motion.p 
                    key={idx} 
                    className="mb-6 text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
            
            {/* Gallery */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 relative inline-block">
                Project Gallery
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500"></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.gallery.map((image, idx) => (
                  <motion.div 
                    key={idx} 
                    className="aspect-square relative rounded-xl overflow-hidden shadow-md group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} gallery image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Info className="text-white w-8 h-8" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Specs */}
          <div>
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8 sticky top-24 border border-gray-100 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-8 relative inline-block">
                Project Specifications
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500"></span>
              </h2>
              <div className="space-y-6">
                {project.specs.map((spec, idx) => (
                  <motion.div 
                    key={idx} 
                    className="border-b border-gray-200 pb-4 flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  >
                    {idx === 0 && <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />}
                    {idx === 1 && <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />}
                    {idx === 2 && <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />}
                    {idx === 3 && <Clock className="w-5 h-5 text-gray-400 mt-0.5" />}
                    {idx === 4 && <Tag className="w-5 h-5 text-gray-400 mt-0.5" />}
                    {idx === 5 && <Info className="w-5 h-5 text-gray-400 mt-0.5" />}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{spec.name}</div>
                      <div className="text-gray-900 font-medium">{spec.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-lg px-6 py-4 flex items-center justify-center gap-2 transition-colors group"
                >
                  <span className="font-medium">Request More Information</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Related Projects */}
        <div className="mt-24 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold relative inline-block">
              Related Projects
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500"></span>
            </h2>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-black flex items-center gap-2 group"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id && p.categories.some(c => project.categories.includes(c)))
              .slice(0, 3)
              .map((relatedProject, idx) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={`/projects/${relatedProject.id}`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedProject.categories.slice(0, 2).map((category, catIdx) => (
                            <span key={catIdx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 line-clamp-2 group-hover:text-black transition-colors duration-300">
                        {relatedProject.description}
                      </p>
                      <div className="mt-4 flex items-center text-blue-600 font-medium">
                        <span>View Project</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="grid grid-cols-2 grid-rows-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-sm bg-white"></div>
                  ))}
                </div>
                <span className="font-semibold text-white">SMARTiNNO</span>
              </div>
              <p className="text-gray-400 mb-6">
                Innovative solutions for smart urban development and sustainable infrastructure projects.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Urban Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Infrastructure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustainability Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IoT Implementation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p className="mb-3">123 Innovation Street</p>
                <p className="mb-3">Smartville, SV 12345</p>
                <p className="mb-3">Email: info@smartinno.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p>© 2024 SMARTiNNO. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
