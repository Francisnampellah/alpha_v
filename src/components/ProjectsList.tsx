"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Project, projects } from "@/lib/projectsData"
import { Clock, Users, ArrowRight, Sparkles } from "lucide-react"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
}

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))]
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Sparkles className="h-5 w-5 text-#3798b8" />
            </span>
            <h2 className="text-sm font-semibold text-[#296880] tracking-wide uppercase">Our Portfolio</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Innovative Solutions
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our innovative solutions designed to address real-world challenges and create sustainable impact across various sectors.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${
                selectedCategory === category
                  ? "bg-[#007AFF] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-r from-#3798b8 to-indigo-600 flex items-center justify-center relative">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="backdrop-blur-sm bg-black/30 p-6 rounded-xl">
                      <div className="text-white text-2xl font-bold">
                        {project.title.substring(0, 2)}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock className="h-4 w-4 mr-1 text-#3798b8" />
                      <span>{project.estTime}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Users className="h-4 w-4 mr-1 text-#3798b8" />
                      <span>Impact Potential</span>
                    </div>
                  </div>
                  
                  <Link href={`/project/projectdetail/${project.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2.5 bg-[#007AFF] text-white text-sm font-medium rounded-xl transition-colors hover:bg-blue-700 flex items-center justify-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 