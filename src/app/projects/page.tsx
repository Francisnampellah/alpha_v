"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Filter, Search, ArrowRight, ChevronDown } from "lucide-react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation/Navigation"
import SectionContainer from "@/components/SectionContainer"

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
    id: "project-management",
    title: "Project Management & Asset Management Tool",
    description: "Streamlined project workflows and asset tracking solution for enhanced operational efficiency",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    categories: ["Project Management", "Asset Management", "Workflow Automation"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Campaign Platform",
    description: "Targeted marketing solution connecting businesses with remote buyers in the diaspora",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2670&auto=format&fit=crop",
    categories: ["Digital Marketing", "Diaspora", "Market Reach"],
  },
  {
    id: "property-management",
    title: "Property Development & Management Solution",
    description: "Comprehensive platform enabling remote property owners to manage their assets effectively",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2670&auto=format&fit=crop",
    categories: ["Real Estate", "Property Management", "Remote Management"],
  },
  {
    id: "saccos-vicoba",
    title: "SACCOS & VICOBA Management Application",
    description: "Digital solution for managing savings and credit cooperative societies and village community banks",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2670&auto=format&fit=crop",
    categories: ["Financial Services", "Banking", "Community Finance"],
  },
  {
    id: "finance-banking",
    title: "Finance Management & Banking App",
    description: "Modern banking application enhancing financial management experiences for users",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
    categories: ["FinTech", "Banking", "Digital Finance"],
  },
  {
    id: "system-integration",
    title: "System Integration & API Connector",
    description: "Seamless integration solutions and API connectors for enhanced system interoperability",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    categories: ["System Integration", "API Development", "Interoperability"],
  },
]

// Get all unique categories from projects
const allCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort()

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [searchQuery, setSearchQuery] = useState("")
  console.log(scrolled)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (selectedCategory === "all" && searchQuery === "") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) => {
          const matchesCategory = selectedCategory === "all" || 
            project.categories.some(category => 
              category.toLowerCase() === selectedCategory.toLowerCase()
            )
          
          const matchesSearch = searchQuery === "" || 
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
          
          return matchesCategory && matchesSearch
        })
      )
    }
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Shorter for inner pages */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop"
            alt="SmartInno Engineering - Technology Innovation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" showCTA={true} ctaText="Contact Us" ctaLink="/contact" />

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(70vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              <CategoryPill label="Innovation" />
              <CategoryPill label="Technology" />
              <CategoryPill label="Digital Solutions" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Discover our portfolio of innovative solutions transforming businesses across Tanzania and beyond
            </motion.p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <SectionContainer
        sectionNumber="01"
        title="Projects Portfolio"
        subtitle="Discover our innovative solutions"
      >
        {/* Filter and Search Controls */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-#3798b8 focus:border-transparent"
            />
          </div>

          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <select
              className="pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-#3798b8 focus:border-transparent"
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
        </div>

        {/* Projects Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredProjects.length} projects found</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
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
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">View Project</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#296880] transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </SectionContainer>

      {/* Project Categories Section */}
      <SectionContainer
        sectionNumber="02"
        title="Project Categories"
        subtitle="Explore our solutions by specialty area"
        bgColor="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Financial Solutions",
              count: projects.filter(p => p.categories.includes("Financial Services") || p.categories.includes("Banking")).length,
              icon: "💰",
              description: "Innovative financial technology solutions for banking and management"
            },
            {
              title: "Property Management",
              count: projects.filter(p => p.categories.includes("Real Estate") || p.categories.includes("Property Management")).length,
              icon: "🏢",
              description: "Digital solutions for property development and management"
            },
            {
              title: "System Integration",
              count: projects.filter(p => p.categories.includes("System Integration")).length,
              icon: "🔄",
              description: "Seamless system integration and API development solutions"
            },
            {
              title: "Digital Marketing",
              count: projects.filter(p => p.categories.includes("Digital Marketing")).length,
              icon: "📱",
              description: "Targeted marketing solutions for global reach"
            },
            {
              title: "Community Finance",
              count: projects.filter(p => p.categories.includes("Community Finance")).length,
              icon: "🤝",
              description: "Solutions for community-based financial institutions"
            },
            {
              title: "Workflow Automation",
              count: projects.filter(p => p.categories.includes("Workflow Automation")).length,
              icon: "⚡",
              description: "Automated solutions for enhanced operational efficiency"
            }
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-700 mb-3">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#296880]">{category.count} projects</span>
                <button
                  onClick={() => {
                    setSelectedCategory(category.title.split(" ")[0]);
                    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-medium text-gray-900 hover:text-[#296880] transition-colors flex items-center gap-1"
                >
                  <span>View all</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-[#296880] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our innovative solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#296880] hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

