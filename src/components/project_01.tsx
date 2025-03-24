"use client"

import { motion } from "framer-motion"


const sampleProjectData = {
    mainProduct: "Sustainable Agriculture Initiative",
    description:
      "A comprehensive approach to farming that aims to reduce environmental impact while maintaining productivity and increasing economic viability for farmers.",
    leftSideText: ["Eco-friendly", "Sustainable", "Community-driven", "Innovative"],
    estTime: "6-8 months\nPhased implementation",
    workerInfo: "Supports 120+ local farmers with training and resources",
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

interface ProjectCardProps {
  projectData?: ProjectData
}

export default function Project01Card({ projectData }: ProjectCardProps) {
  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-12 gap-5 h-full">
      {/* Left column - Main content */}
      <motion.div
        variants={itemVariants}
        className="col-span-12 md:col-span-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 mb-3 md:mb-5">
            {currentProjectData.mainProduct}
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 md:mb-7">
            {currentProjectData.description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {currentProjectData.leftSideText.map((text, index) => (
              <span
                key={index}
                className="bg-gray-100 px-4 py-1.5 rounded-full text-gray-500 font-medium text-xs md:text-sm"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-2 gap-5">
          <motion.div whileHover={{ y: -2 }} className="bg-gray-50 p-4 md:p-5 rounded-xl">
            <p className="text-gray-900 font-medium text-sm md:text-base">Est. Time</p>
            <div className="mt-2 md:mt-3">
              {currentProjectData.estTime.split("\n").map((line, index) => (
                <p key={index} className="text-gray-500 text-xs md:text-sm">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="bg-gray-50 p-4 md:p-5 rounded-xl">
            <p className="text-gray-900 font-medium text-sm md:text-base">Worker Impact</p>
            <p className="text-gray-500 mt-2 md:mt-3 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right column - Image showcase */}
      <motion.div variants={itemVariants} className="col-span-12 md:col-span-5 grid grid-rows-2 gap-5">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-48 md:h-auto relative"
        >
          <img
            src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sustainable farming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#34C759] rounded-full flex items-center justify-center">
              <span className="text-white font-medium">Eco</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex flex-col justify-center"
          >
            <p className="text-gray-700 font-medium text-xs md:text-sm">Sustainable farming practices in action</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

