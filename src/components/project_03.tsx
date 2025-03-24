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


export default function Project_03Card() {
  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="h-[calc(100%-80px)] flex flex-col gap-5"
    >
      {/* Project header with title and circular logo */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
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
          <p className="text-gray-500 text-sm md:text-base mt-1">{currentProjectData.description}</p>
        </div>
      </motion.div>

      {/* Timeline layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-grow">
        {/* Left side - Timeline */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <h3 className="text-gray-900 font-medium text-base mb-6">Project Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-100"></div>
            
            {/* Timeline steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative pl-9"
              >
                <div className="absolute left-0 top-0 w-5 h-5 bg-[#007AFF] rounded-full"></div>
                <h4 className="text-gray-900 font-medium text-sm">Planning Phase</h4>
                <p className="text-gray-500 text-xs mt-1">Initial assessments and development of project plan</p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative pl-9"
              >
                <div className="absolute left-0 top-0 w-5 h-5 bg-[#007AFF] rounded-full"></div>
                <h4 className="text-gray-900 font-medium text-sm">Design & Prototyping</h4>
                <p className="text-gray-500 text-xs mt-1">Develop design blueprints and initial prototypes</p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative pl-9"
              >
                <div className="absolute left-0 top-0 w-5 h-5 bg-[#007AFF] rounded-full"></div>
                <h4 className="text-gray-900 font-medium text-sm">Installation</h4>
                <p className="text-gray-500 text-xs mt-1">Site preparation and system installation</p>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative pl-9"
              >
                <div className="absolute left-0 top-0 w-5 h-5 bg-[#007AFF] rounded-full"></div>
                <h4 className="text-gray-900 font-medium text-sm">Training & Launch</h4>
                <p className="text-gray-500 text-xs mt-1">Staff training and official system launch</p>
              </motion.div>
              
              {/* Timeline footer */}
              <div className="pt-2">
                <p className="text-gray-900 font-medium text-sm">Est. Time</p>
                {currentProjectData.estTime.split("\n").map((line, index) => (
                  <p key={index} className="text-gray-500 text-xs">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right side - Content */}
        <div className="md:col-span-8 grid grid-rows-2 gap-5">
          {/* Key features section */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-gray-900 font-medium text-base mb-4">Key Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {currentProjectData.leftSideText.map((text, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-50 rounded-xl p-4"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="w-8 h-8 bg-[#007AFF] rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-medium text-xs">{index + 1}</span>
                  </div>
                  <p className="text-gray-800 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Project image */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Urban farming implementation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-medium text-lg">{currentProjectData.mainProduct}</h3>
                <p className="text-white/80 text-sm">{currentProjectData.workerInfo}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

