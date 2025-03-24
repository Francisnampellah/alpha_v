"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Section_04() {
  const [currentProject, setCurrentProject] = useState(0);
  
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
      footerText: "It's late-night street sessions"
    },
    {
      id: 2,
      title: "Green Initiative",
      sectionNumber: "02",
      mainProduct: "EcoFarm Systems",
      description: "Sustainable farming solutions that reduce water usage and carbon footprint while maximizing crop yields.",
      leftSideText: ["Eco-friendly &", "Sustainable", "Agriculture"],
      estTime: "©2025\nGreen Tech",
      workerInfo: "Supporting over 50k farmers",
      footerNumber: "02",
      footerText: "Creating a sustainable future"
    },
    {
      id: 3,
      title: "Urban Farming",
      sectionNumber: "03",
      mainProduct: "VerticalGrow",
      description: "Revolutionary vertical farming technology for urban environments, producing fresh food with minimal space requirements.",
      leftSideText: ["Urban &", "Space-Efficient", "Agriculture"],
      estTime: "©2025\nUrban Solutions",
      workerInfo: "Deployed in 75+ cities",
      footerNumber: "03",
      footerText: "Bringing farms to cities"
    },
    {
      id: 4,
      title: "AI Analytics",
      sectionNumber: "04",
      mainProduct: "CropIntelligence",
      description: "AI-powered analytics platform that monitors crop health, predicts yields, and provides actionable insights for farmers.",
      leftSideText: ["Smart &", "Data-Driven", "Farming"],
      estTime: "©2025\nAI Tech",
      workerInfo: "Used by 30k+ farmers",
      footerNumber: "04",
      footerText: "The future of precision agriculture"
    }
  ];

  const currentProjectData = projects[currentProject];
  
  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Progress calculation
  const progress = ((currentProject + 1) / projects.length) * 100;

  return (
    <>
    <div className="flex items-center mb-16 p-8 border-gray-200 border-b mx-16">
          <div className="w-16 text-lg text-gray-400 font-bold">04</div>
          <div className="flex-1">
            <h2 className="text-xl text-black font-bold">Our Projects </h2>
            <p className="text-sm text-black">Just the board, the streets, & your trick.</p>
          </div>
        </div>
    <div className="h-screen flex flex-col mx-24 bg-gray-50 overflow-hidden">
      {/* Header */}
      
  

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          {/* <motion.span 
            key={`section-${currentProjectData.sectionNumber}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-600 text-lg font-medium"
          >
            {currentProjectData.sectionNumber}
          </motion.span> */}
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
      
      {/* Main Content - Flex grow to take available space */}
      <div className="flex-grow"> 
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full"
          >
            {currentProject === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
                {/* Left side */}
                <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex flex-col justify-center md:w-1/3">
                    {currentProjectData.leftSideText.map((text, index) => (
                      <p key={index} className="text-gray-700 font-medium text-base md:text-lg lg:text-xl">{text}</p>
                    ))}
                  </div>

                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:w-2/3 h-40 md:h-64 lg:h-80">
                    <img 
                      src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Wheat field" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Right side */}
                <motion.div variants={itemVariants} className="flex flex-col justify-between p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <div className="flex gap-4 md:gap-6 justify-between w-full mb-4 md:mb-6">
                    <div>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">{currentProjectData.mainProduct}</h2>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {currentProjectData.description}
                      </p>
                    </div>

                    <div className="mt-2">
                      <div className="w-24 h-20 md:w-32 md:h-24 lg:w-40 lg:h-32 bg-yellow-100 rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                          alt="Aerial view of farming" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-4 grid grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-gray-700 font-semibold text-sm md:text-base">Est. Time</p>
                      <div className="mt-1 md:mt-3">
                        {currentProjectData.estTime.split('\n').map((line, index) => (
                          <p key={index} className="text-gray-700 text-xs md:text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg md:rounded-xl relative">
                      <div className="flex items-start justify-between">
                        <div className="w-full flex gap-2" >
                          <div className="overflow-hidden rounded-lg shadow-md h-16 md:h-24 lg:h-32">
                            <img 
                              src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Wheat field close-up" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="w-1/3">
                          <p className="text-gray-700 font-semibold text-sm md:text-base">Worker</p>
                          <p className="text-gray-700 mt-1 md:mt-3 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {currentProject === 1 && (
              <div className="grid grid-cols-1 gap-4 md:gap-6 h-full">
                {/* Top row */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-6 h-3/5">
                  <div className="md:w-1/3 p-4 md:p-6 bg-yellow-50 rounded-xl md:rounded-2xl shadow-lg">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">{currentProjectData.mainProduct}</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2 md:mb-4">
                      {currentProjectData.description}
                    </p>
                    <div className="flex flex-col mt-2 md:mt-4">
                      {currentProjectData.leftSideText.map((text, index) => (
                        <p key={index} className="text-gray-700 font-medium text-sm md:text-base lg:text-lg">{text}</p>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3 rounded-xl md:rounded-2xl overflow-hidden shadow-xl h-40 md:h-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Sustainable farming" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Bottom row */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-2/5">
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl shadow-md">
                    <p className="text-gray-700 font-semibold text-sm md:text-base">Est. Time</p>
                    <div className="mt-1 md:mt-2">
                      {currentProjectData.estTime.split('\n').map((line, index) => (
                        <p key={index} className="text-gray-700 text-xs md:text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl shadow-md">
                    <p className="text-gray-700 font-semibold text-sm md:text-base">Worker Impact</p>
                    <p className="text-gray-700 mt-1 md:mt-2 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl shadow-md overflow-hidden">
                    <div className="h-16 md:h-20 mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Farmers working" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-700 font-medium text-xs md:text-sm">Sustainable farming practices in action</p>
                  </div>
                </motion.div>
              </div>
            )}

            {currentProject === 2 && (
              <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Left column - Image showcase */}
                <motion.div variants={itemVariants} className="col-span-1 flex flex-col gap-4">
                  <div className="h-3/5 bg-yellow-50 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Vertical farming tower" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-2/5 bg-gray-100 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md">
                    <p className="text-gray-700 font-semibold text-sm md:text-base">Worker Impact</p>
                    <p className="text-gray-700 mt-1 md:mt-2 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
                    <div className="mt-2 md:mt-4">
                      <p className="text-gray-700 font-semibold text-sm md:text-base">Est. Time</p>
                      <div className="mt-1 md:mt-2">
                        {currentProjectData.estTime.split('\n').map((line, index) => (
                          <p key={index} className="text-gray-700 text-xs md:text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Center and Right - Main content */}
                <motion.div variants={itemVariants} className="col-span-2 grid grid-rows-2 gap-4 md:gap-6">
                  {/* Top row - Main description */}
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-md p-4 md:p-6 flex">
                    <div className="w-2/3 pr-4 md:pr-6">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">{currentProjectData.mainProduct}</h2>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2 md:mb-4">
                        {currentProjectData.description}
                      </p>
                      <div className="flex flex-col mt-2 md:mt-4">
                        {currentProjectData.leftSideText.map((text, index) => (
                          <p key={index} className="text-gray-700 font-medium text-sm md:text-base lg:text-lg mb-1">{text}</p>
                        ))}
                      </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-yellow-300 rounded-full shadow-lg flex items-center justify-center text-black font-bold text-lg md:text-xl lg:text-2xl">
                        Urban
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom row - Gallery */}
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-50 rounded-lg md:rounded-xl overflow-hidden shadow-md">
                        <div className="h-20 md:h-32 lg:h-40 overflow-hidden">
                          <img 
                            src={`https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} 
                            alt={`Urban farming example ${item}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 md:p-4">
                          <p className="text-gray-700 font-medium text-xs md:text-sm">Urban Farm Solution {item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}

            {currentProject === 3 && (
              <div className="h-full grid grid-cols-1 gap-4 md:gap-6">
                {/* Top banner */}
                <motion.div variants={itemVariants} className="h-1/5 bg-black rounded-xl md:rounded-2xl shadow-xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{currentProjectData.mainProduct}</h2>
                  </div>
                  <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-yellow-300 rounded-lg p-2 md:p-3 shadow-md">
                    <p className="text-black font-medium text-xs md:text-sm">{currentProjectData.estTime.split('\n')[0]}</p>
                  </div>
                </motion.div>
                
                {/* Main content area */}
                <motion.div variants={itemVariants} className="h-4/5 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                  {/* Left sidebar */}
                  <div className="col-span-1 md:col-span-3 bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 font-semibold text-sm md:text-base mb-2 md:mb-4">Technology Features</p>
                      <div className="space-y-2 md:space-y-4">
                        {currentProjectData.leftSideText.map((text, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-300 rounded-full"></div>
                            <p className="text-gray-700 font-medium text-xs md:text-sm">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold text-sm md:text-base mb-1 md:mb-2">Stats</p>
                      <p className="text-gray-700 text-xs md:text-sm">{currentProjectData.workerInfo}</p>
                    </div>
                  </div>
                  
                  {/* Main content and visualization */}
                  <div className="col-span-1 md:col-span-9 grid grid-rows-2 gap-4 md:gap-6">
                    {/* Description */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-md">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">AI-Powered Agriculture</h3>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-2 md:mb-4">
                        {currentProjectData.description}
                      </p>
                      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-4 lg:mt-6">
                        {['Yield Prediction', 'Disease Detection', 'Resource Optimization'].map((feature, index) => (
                          <div key={index} className="bg-gray-50 p-2 md:p-4 rounded-lg md:rounded-xl">
                            <p className="text-gray-700 font-medium text-xs md:text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Dashboard visualization */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-md flex flex-col md:flex-row">
                      <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-3 md:mb-0">
                        <div className="h-32 md:h-full bg-gray-50 rounded-lg md:rounded-xl overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Data dashboard" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 md:gap-4">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="bg-gray-50 rounded-lg md:rounded-xl overflow-hidden shadow-sm">
                            <div className="h-12 md:h-16 overflow-hidden">
                              <img 
                                src={`https://images.unsplash.com/photo-1742715852372-47f67923c3c1?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} 
                                alt={`Data chart ${item}`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-1 md:p-2">
                              <p className="text-gray-700 text-xs md:text-sm font-medium">Chart {item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Footer with progress bar */}
      <div className="mt-4 md:mt-6 lg:mt-8">
        <div className="flex justify-between items-center mb-2 md:mb-3">
          <div className="flex items-center">
            <motion.span 
              key={`footer-${currentProjectData.footerNumber}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold"
            >
              {currentProjectData.footerNumber}
            </motion.span>
            <span className="text-gray-400 text-lg md:text-2xl lg:text-3xl ml-2 md:ml-4">/04</span>
            <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
          <motion.div 
            className="bg-black rounded-full h-full"
            initial={{ width: `${((currentProject) / projects.length) * 100}%` }}
            animate={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
          </div>
          
          <button 
            onClick={handleNextProject}
            className="bg-black text-white rounded-full px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 text-xs md:text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors shadow-md"
          >
            Next
          </button>
          
          <motion.p 
            key={`footer-text-${currentProject}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 text-xs md:text-sm lg:text-base"
          >
            {currentProjectData.footerText}
          </motion.p>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
          <motion.div 
            className="bg-gray-400 rounded-full h-full"
            initial={{ width: `${((currentProject) / projects.length) * 100}%` }}
            animate={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
  
      </div>
    </div>
    </>
  );
}