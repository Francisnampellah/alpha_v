"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Filter, Search, ArrowRight, ChevronDown } from "lucide-react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation/Navigation"

// Note: We'll create our own CategoryPill component inline to match the styling
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

// Mock project data - in a real app this would come from a database or API
const projects = [
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    description: "Advanced irrigation solution for optimal water usage in farming",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Irrigation", "Automation", "Water Conservation"],
  },
  {
    id: "soil-monitoring",
    title: "Soil Health Monitoring",
    description: "Real-time soil health analytics for improved crop yield",
    image:
      "https://images.unsplash.com/photo-1621149545341-7562da785e80?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Soil Analysis", "IoT", "Data Science"],
  },
  {
    id: "drone-mapping",
    title: "Agricultural Drone Mapping",
    description: "Precision mapping and monitoring of agricultural fields",
    image:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Aerial Imaging", "Precision Farming", "Automation"],
  },
  {
    id: "crop-analytics",
    title: "Crop Health Analytics",
    description: "AI-powered crop health monitoring and prediction system",
    image:
      "https://images.unsplash.com/photo-1601026909629-bad5e1148817?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["AI", "Machine Learning", "Crop Management"],
  },
  {
    id: "harvest-automation",
    title: "Harvest Automation System",
    description: "Robotic harvesting solution for improved efficiency",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Robotics", "Automation", "Efficiency"],
  },
  {
    id: "livestock-tracking",
    title: "Livestock Tracking & Management",
    description: "IoT-based livestock health monitoring and management system",
    image:
      "https://images.unsplash.com/photo-1605605859948-89a8f8960f5f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Livestock", "IoT", "Health Monitoring"],
  },
]

// Get all unique categories from projects
const allCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort()

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.categories.some((category) => category.toLowerCase() === selectedCategory.toLowerCase()),
        ),
      )
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 gap-4 sm:gap-0">
          <Navigation />
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative pt-16 sm:pt-0">
        <div className="relative mx-auto my-0 overflow-hidden h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural innovations and technology"
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
              <CategoryPill label="Innovation" />
              <CategoryPill label="Agriculture" />
              <CategoryPill label="Technology" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Our Projects</h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Exploring cutting-edge agricultural innovations to transform farming
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Filter and Counter Section */}
      <div className="px-6 sm:px-8 mt-16 mb-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold relative inline-block">
              All Projects
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-gray-600 mt-2">{filteredProjects.length} projects</p>
          </motion.div>

          <motion.div
            className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Filter projects by category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {allCategories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6 sm:px-8 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.slice(0, 2).map((category, catIdx) => (
                        <span
                          key={catIdx}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                      {project.categories.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          +{project.categories.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 group-hover:text-black transition-colors duration-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>View Project</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our innovative solutions can help transform your agricultural operations
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

