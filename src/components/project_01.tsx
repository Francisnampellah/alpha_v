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



export default function Project_01Card() {
  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-[calc(100%-80px)] flex flex-col gap-5"
    >
      {/* Top Content Section */}
      <motion.div 
        variants={itemVariants}
        className="w-full flex flex-col md:flex-row gap-5"
      >
        {/* Project Identity */}
        <motion.div
          className="bg-white rounded-2xl p-6 md:w-1/3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#007AFF] rounded-full mb-6 flex items-center justify-center"
          >
            <span className="text-white font-medium text-lg">Urban</span>
          </motion.div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 mb-4">
            {currentProjectData.mainProduct}
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="bg-white rounded-2xl p-6 md:w-2/3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">{currentProjectData.description}</p>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <p className="text-gray-900 font-medium text-sm md:text-base mb-2">Key Features</p>
              <div className="space-y-2">
                {currentProjectData.leftSideText.slice(0, 3).map((text, index) => (
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
            <div>
              <p className="text-gray-900 font-medium text-sm md:text-base mb-2">Additional Benefits</p>
              <div className="space-y-2">
                {currentProjectData.leftSideText.slice(3).map((text, index) => (
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
              <div className="mt-4">
                <p className="text-gray-900 font-medium text-sm md:text-base mb-2">Est. Time</p>
                <div>
                  {currentProjectData.estTime.split("\n").map((line, index) => (
                    <p key={index} className="text-gray-500 text-xs md:text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gallery */}

    </motion.div>
  )
}

