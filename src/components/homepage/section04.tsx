"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Project01Card from "../project_01"
import Project_02Card from "../project_02"
import Project_03Card from "../project_03"
import Project_04Card from "../project_04"


export default function Section_04() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Our Product",
      sectionNumber: "01",
      mainProduct: "Premium SEEDZ",
      description: "High-yield, disease-resistant seeds designed for maximum productivity and climate adaptability.",
      leftSideText: ["Specialty &", "Climate-Resilient", "Varieties"],
      estTime: "©2025\nNew Tech",
      workerInfo: "Effected more than 100k",
      footerNumber: "01",
      footerText: "It's late-night street sessions",
    },
    {
      id: 2,
      title: "Green Initiative",
      sectionNumber: "02",
      mainProduct: "EcoFarm Systems",
      description:
        "Sustainable farming solutions that reduce water usage and carbon footprint while maximizing crop yields.",
      leftSideText: ["Eco-friendly &", "Sustainable", "Agriculture"],
      estTime: "©2025\nGreen Tech",
      workerInfo: "Supporting over 50k farmers",
      footerNumber: "02",
      footerText: "Creating a sustainable future",
    },
    {
      id: 3,
      title: "Urban Farming",
      sectionNumber: "03",
      mainProduct: "VerticalGrow",
      description:
        "Revolutionary vertical farming technology for urban environments, producing fresh food with minimal space requirements.",
      leftSideText: ["Urban &", "Space-Efficient", "Agriculture"],
      estTime: "©2025\nUrban Solutions",
      workerInfo: "Deployed in 75+ cities",
      footerNumber: "03",
      footerText: "Bringing farms to cities",
    },
    {
      id: 4,
      title: "AI Analytics",
      sectionNumber: "04",
      mainProduct: "CropIntelligence",
      description:
        "AI-powered analytics platform that monitors crop health, predicts yields, and provides actionable insights for farmers.",
      leftSideText: ["Smart &", "Data-Driven", "Farming"],
      estTime: "©2025\nAI Tech",
      workerInfo: "Used by 30k+ farmers",
      footerNumber: "04",
      footerText: "The future of precision agriculture",
    },
  ]

  const currentProjectData = projects[currentProject]

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  // Render different layouts based on project index
  const renderProjectContent = () => {
    switch (currentProject) {
      case 0:
        return (
            <Project01Card/>
        )

      case 1:
        return (
            <Project_02Card/>
        )

      case 2:
        return (
            <Project_03Card/>
        )

      case 3:
        return (
            <Project_04Card/>
        )

      default:
        return null
    }
  }

  return (
    <div className="h-screen flex m-8 rounded-xl flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-6 md:p-8 border-gray-200 border-b">
        <div className="w-16 text-lg text-gray-400 font-bold">04</div>
        <div className="flex-1">
          <h2 className="text-xl text-black font-bold">Our Projects</h2>
          <p className="text-sm text-black">Just the board, the streets, & your trick.</p>
        </div>
      </div>

      {/* Main content - Using flex-grow to take available space */}
      <div className="h-[calc(100vh-132px)] flex flex-col p-6 md:p-8 lg:p-10">
        {/* Project header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <motion.h1
              key={`title-${currentProjectData.title}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-3xl md:text-4xl lg:text-5xl text-black font-bold"
            >
              {currentProjectData.title}
            </motion.h1>
          </div>
          <div className="bg-black rounded-full p-2 md:p-3 shadow-lg">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-yellow-300 rounded-sm"></div>
          </div>
        </div>

        {/* Project content - Takes remaining space */}
        <div className="h-[calc(100%-80px)] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-full"
            >
              {renderProjectContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer with progress */}
        <div className="h-[60px] mt-auto pt-2">
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-4">
              <motion.span
                key={`footer-${currentProjectData.footerNumber}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                {currentProjectData.footerNumber}
              </motion.span>
              <span className="text-gray-400 text-lg md:text-xl lg:text-2xl">/04</span>
            </div>

            <button
              onClick={handleNextProject}
              className="bg-black text-white rounded-full px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 text-xs md:text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors shadow-md flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>

            <motion.p
              key={`footer-text-${currentProject}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 text-xs md:text-sm lg:text-base hidden md:block"
            >
              {currentProjectData.footerText}
            </motion.p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
            <motion.div
              className="bg-black rounded-full h-full"
              initial={{ width: `${(currentProject / projects.length) * 100}%` }}
              animate={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

