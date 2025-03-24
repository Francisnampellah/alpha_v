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

interface UrbanProjectCardProps {
  projectData?: ProjectData
}

export default function Project_03Card() {
  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-full grid grid-cols-1 md:grid-cols-12 gap-5"
    >
      {/* Left sidebar */}
      <motion.div
        variants={itemVariants}
        className="col-span-1 md:col-span-3 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between"
      >
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#007AFF] rounded-full mb-6 flex items-center justify-center"
          >
            <span className="text-white font-medium text-lg">Urban</span>
          </motion.div>

          <p className="text-gray-900 font-medium text-sm md:text-base mb-4">Key Features</p>

          <div className="space-y-3 md:space-y-4">
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
        </div>

        <motion.div
          className="mt-6"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <p className="text-gray-900 font-medium text-sm md:text-base mb-2">Est. Time</p>
          <div className="mt-1">
            {currentProjectData.estTime.split("\n").map((line, index) => (
              <p key={index} className="text-gray-500 text-xs md:text-sm">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-9 grid grid-rows-5 gap-5">
        {/* Top row - Main description */}
        <motion.div
          className="row-span-2 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 mb-4">
            {currentProjectData.mainProduct}
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">{currentProjectData.description}</p>
          <p className="text-gray-400 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
        </motion.div>

        {/* Bottom rows - Image gallery */}
        <div className="row-span-3 grid grid-cols-2 gap-5">
          <motion.div
            className="col-span-2 md:col-span-1 row-span-2 bg-gray-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vertical farming tower"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Urban farm solution 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Urban farm solution 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

