"use client"

import { motion } from "framer-motion"

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


export default function Project_02Card() {
  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-[calc(100%-80px)] overflow-y-auto"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-2xl p-6 mb-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#007AFF] rounded-full flex items-center justify-center shrink-0"
          >
            <span className="text-white font-medium text-lg">Urban</span>
          </motion.div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900">
              {currentProjectData.mainProduct}
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-1">{currentProjectData.workerInfo}</p>
          </div>
        </div>
      </motion.div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Main Description Card - Spans 2 columns */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-2"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h3 className="text-gray-900 font-medium text-lg mb-3">Project Overview</h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">{currentProjectData.description}</p>
          
          <div className="mt-4 flex items-center">
            <div className="bg-blue-50 text-[#007AFF] px-3 py-1 rounded-full text-xs font-medium">
              {currentProjectData.estTime.split("\n")[0]}
            </div>
            <div className="bg-blue-50 text-[#007AFF] px-3 py-1 rounded-full text-xs font-medium ml-2">
              {currentProjectData.estTime.split("\n")[1]}
            </div>
          </div>
        </motion.div>

        {/* Features Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h3 className="text-gray-900 font-medium text-lg mb-3">Key Features</h3>
          <div className="space-y-3">
            {currentProjectData.leftSideText.map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#007AFF] rounded-full"></div>
                <p className="text-gray-600 text-xs md:text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </motion.div>
  )
}

