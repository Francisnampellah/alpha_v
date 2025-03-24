"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const sampleProjectData = {
    mainProduct: "Urban Farming Initiative",
    description:
      "A revolutionary approach to urban agriculture that maximizes space utilization while minimizing resource consumption. Our vertical farming solutions bring sustainable food production directly to urban centers.",
    leftSideText: [
      "Space-efficient design",
      "90% less water usage",
      "Year-round growing cycle",
      "Reduced carbon footprint",
      "No pesticides needed",
    ],
    estTime: "4-6 months\nPhased implementation",
    workerInfo: "Creates jobs for 80+ urban farmers and provides fresh produce to local communities",
  }
// Define types for the project data
interface ProjectData {
  mainProduct: string
  description: string
  leftSideText: string[]
  estTime: string
  workerInfo: string
}

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


export default function Project_04Card() {
  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData
  const [activeTab, setActiveTab] = useState<string>("overview")

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "gallery", label: "Gallery" },
    { id: "timeline", label: "Timeline" },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-[calc(100%-80px)] flex flex-col"
    >
      {/* Project Header with Logo */}



      {/* Tab Navigation */}
      <motion.div variants={itemVariants} className="flex mb-5 overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`px-4 py-2 mr-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id 
                ? "bg-[#007AFF] text-white" 
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-grow"
      >
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="h-full flex flex-col">
            <p className="text-gray-500 text-sm md:text-base mb-6">{currentProjectData.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <h4 className="text-gray-900 font-medium text-sm mb-3">Project Impact</h4>
                <p className="text-gray-700 text-sm">{currentProjectData.workerInfo}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5">
                <h4 className="text-gray-900 font-medium text-sm mb-3">Timeline</h4>
                {currentProjectData.estTime.split("\n").map((line, index) => (
                  <p key={index} className="text-gray-700 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="mt-auto">
              <img
                src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Urban farming overview"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="h-full">
            <h3 className="text-gray-900 font-medium text-lg mb-6">Key Features & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentProjectData.leftSideText.map((text, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="w-10 h-10 bg-[#007AFF] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                  <h4 className="text-gray-900 font-medium text-base mb-2">Feature {index + 1}</h4>
                  <p className="text-gray-600 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="h-full">
            <h3 className="text-gray-900 font-medium text-lg mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden md:col-span-2 h-48 md:h-64"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Main project view"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden h-36"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project detail 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden h-36"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project detail 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === "timeline" && (
          <div className="h-full">
            <h3 className="text-gray-900 font-medium text-lg mb-6">Project Timeline</h3>
            <div className="relative pl-8 border-l-2 border-blue-100 ml-6">
              {/* Timeline steps */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 bg-[#007AFF] rounded-full"></div>
                  <h4 className="text-gray-900 font-medium mb-2">Planning & Design</h4>
                  <p className="text-gray-600 text-sm">Initial assessment and creating design blueprints</p>
                  <div className="text-xs text-gray-400 mt-1">1-2 months</div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 bg-[#007AFF] rounded-full"></div>
                  <h4 className="text-gray-900 font-medium mb-2">Construction</h4>
                  <p className="text-gray-600 text-sm">Building the infrastructure and vertical farming systems</p>
                  <div className="text-xs text-gray-400 mt-1">1-2 months</div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 bg-[#007AFF] rounded-full"></div>
                  <h4 className="text-gray-900 font-medium mb-2">Implementation</h4>
                  <p className="text-gray-600 text-sm">Setting up systems and preparing for operation</p>
                  <div className="text-xs text-gray-400 mt-1">2-3 weeks</div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 bg-[#007AFF] rounded-full"></div>
                  <h4 className="text-gray-900 font-medium mb-2">Training & Launch</h4>
                  <p className="text-gray-600 text-sm">Training staff and launching operations</p>
                  <div className="text-xs text-gray-400 mt-1">2-3 weeks</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

