"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  Search,
  Bell,
  User,
  ChevronLeft,
  MoreVertical,
  Heart,
  MessageCircle,
  Users,
  Calendar,
  Filter,
} from "lucide-react"

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

const projectsList = [
  {
    id: 1,
    title: "Urban Farming Initiative",
    category: "Sustainable Agriculture",
    image: "/placeholder.svg?height=60&width=60",
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    title: "Vertical Garden System",
    category: "Urban Greening",
    image: "/placeholder.svg?height=60&width=60",
    likes: 95,
    comments: 18,
  },
  {
    id: 3,
    title: "Community Harvest Program",
    category: "Food Security",
    image: "/placeholder.svg?height=60&width=60",
    likes: 76,
    comments: 31,
  },
]

const teamMembers = [
  { id: 1, name: "Alex Morgan", role: "Project Lead", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Jamie Chen", role: "Urban Planner", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Sam Wilson", role: "Agricultural Expert", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Taylor Reed", role: "Community Manager", avatar: "/placeholder.svg?height=40&width=40" },
]

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

type Screen = "projects" | "details" | "community"

export default function MobileAppLayout() {
  const [activeScreen, setActiveScreen] = useState<Screen>("projects")
  const [activeTab, setActiveTab] = useState("home")

  // For demo purposes, using the passed project data
  const currentProjectData = sampleProjectData

  const handleProjectClick = () => {
    setActiveScreen("details")
  }

  const handleBackClick = () => {
    setActiveScreen("projects")
  }

  const handleTabClick = (tab: string) => {
    if (tab === "home") setActiveScreen("projects")
    if (tab === "alerts") setActiveScreen("community")
    setActiveTab(tab)
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Dimensions Note */}
        <div className="bg-gray-50 p-4 rounded-lg border h-fit border-gray-200 md:w-[200px] md:self-stretch md:flex md:flex-col md:justify-center">
          <h2 className="text-lg font-medium mb-2">Mobile Screens</h2>
          <p className="text-gray-700 text-sm">
            Each screen is sized at <span className="font-mono bg-gray-100 px-1">188px × 400px</span> with a 9:19 aspect
            ratio, representing a typical smartphone display. This allows all three screens to fit side-by-side without
            wrapping.
          </p>
        </div>

        {/* Mobile Screens Container */}
        <div className="flex-1">
          {/* Mobile Screens */}
          <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
            {/* PROJECTS LIST SCREEN */}
            <div
              className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "projects" ? "hidden md:block" : ""}`}
            >
              {/* Status Bar */}
              <div className="bg-black text-white h-5 flex justify-between items-center px-2 text-[8px]">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* App Header */}
              <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-gray-200">
                <h1 className="font-semibold text-xs">Urban Projects</h1>
                <Filter size={12} />
              </div>

              {/* Main Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="h-[calc(100%-75px)] overflow-y-auto pb-10"
              >
                {/* Projects List */}
                <div className="p-2">
                  {projectsList.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="bg-white rounded-lg mb-2 p-2 shadow-sm"
                      onClick={handleProjectClick}
                    >
                      <div className="flex gap-2">
                        <div className="w-10 h-10 bg-[#007AFF] rounded-lg flex items-center justify-center text-white text-[8px] font-medium">
                          Urban
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-[10px]">{project.title}</h3>
                          <p className="text-gray-500 text-[8px]">{project.category}</p>
                          <div className="flex justify-between items-center mt-1 text-[8px]">
                            <div className="flex gap-2">
                              <div className="flex items-center gap-0.5">
                                <Heart size={8} className="text-gray-500" />
                                <span className="text-gray-500">{project.likes}</span>
                              </div>
                              <div className="flex items-center gap-0.5">
                                <MessageCircle size={8} className="text-gray-500" />
                                <span className="text-gray-500">{project.comments}</span>
                              </div>
                            </div>
                            <span className="text-[#007AFF]">View</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
                <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
                  <Home size={12} className="text-[#007AFF]" />
                  <span className="text-[8px] text-[#007AFF]">Home</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("search")}>
                  <Search size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Search</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("alerts")}>
                  <Bell size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Alerts</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
                  <User size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Profile</span>
                </div>
              </div>
            </div>

            {/* PROJECT DETAILS SCREEN */}
            <div
              className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "details" ? "hidden md:block" : ""}`}
            >
              {/* Status Bar */}
              <div className="bg-black text-white h-5 flex justify-between items-center px-2 text-[8px]">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* App Header */}
              <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-gray-200">
                <div className="flex items-center gap-1">
                  <ChevronLeft size={12} onClick={handleBackClick} className="cursor-pointer" />
                  <h1 className="font-semibold text-xs">Project Details</h1>
                </div>
                <MoreVertical size={12} />
              </div>

              {/* Main Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="h-[calc(100%-75px)] overflow-y-auto pb-10"
              >
                {/* Project Header */}
                <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="w-8 h-8 bg-[#007AFF] rounded-full flex items-center justify-center"
                    >
                      <span className="text-white font-medium text-[8px]">Urban</span>
                    </motion.div>
                    <div>
                      <h2 className="text-[10px] font-semibold text-gray-900">{currentProjectData.mainProduct}</h2>
                      <p className="text-gray-500 text-[8px]">Sustainable Agriculture</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-[8px] leading-relaxed mb-1">{currentProjectData.description}</p>
                </motion.div>

                {/* Key Features Section */}
                <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
                  <h3 className="text-[10px] font-semibold mb-1">Key Features</h3>
                  <div className="space-y-1">
                    {currentProjectData.leftSideText.slice(0, 3).map((text, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-1"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-1 h-1 bg-[#007AFF] rounded-full"></div>
                        <p className="text-gray-600 text-[8px]">{text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Section */}
                <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
                  <h3 className="text-[10px] font-semibold mb-1">Timeline</h3>
                  <div className="bg-gray-50 p-1.5 rounded-lg">
                    <p className="text-gray-700 font-medium text-[8px] mb-0.5">Estimated Duration</p>
                    {currentProjectData.estTime.split("\n").map((line, index) => (
                      <p key={index} className="text-gray-500 text-[8px]">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
                <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
                  <Home size={12} className="text-[#007AFF]" />
                  <span className="text-[8px] text-[#007AFF]">Home</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("search")}>
                  <Search size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Search</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("alerts")}>
                  <Bell size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Alerts</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
                  <User size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Profile</span>
                </div>
              </div>
            </div>

            {/* COMMUNITY SCREEN */}
            <div
              className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "community" ? "hidden md:block" : ""}`}
            >
              {/* Status Bar */}
              <div className="bg-black text-white h-5 flex justify-between items-center px-2 text-[8px]">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <span>100%</span>
                </div>
              </div>

              {/* App Header */}
              <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-gray-200">
                <div className="flex items-center gap-1">
                  <h1 className="font-semibold text-xs">Community</h1>
                </div>
                <Users size={12} />
              </div>

              {/* Main Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="h-[calc(100%-75px)] overflow-y-auto pb-10"
              >
                {/* Team Section */}
                <motion.div variants={itemVariants} className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1">Project Team</h3>
                  <div className="space-y-1">
                    {teamMembers.map((member) => (
                      <motion.div
                        key={member.id}
                        className="flex items-center gap-2 bg-white p-1.5 rounded-lg"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <div>
                          <p className="text-gray-900 text-[8px] font-medium">{member.name}</p>
                          <p className="text-gray-500 text-[6px]">{member.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Events Section */}
                <motion.div variants={itemVariants} className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1">Upcoming Events</h3>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="bg-[#007AFF] text-white rounded-lg w-8 h-8 flex flex-col items-center justify-center">
                        <span className="text-[8px] font-bold">15</span>
                        <span className="text-[6px]">JUN</span>
                      </div>
                      <div>
                        <p className="text-gray-900 text-[8px] font-medium">Community Garden Opening</p>
                        <p className="text-gray-500 text-[6px]">10:00 AM - Downtown Center</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Calendar size={6} className="text-gray-400" />
                          <span className="text-gray-400 text-[6px]">Add to calendar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Impact Stats */}
                <motion.div variants={itemVariants} className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1">Community Impact</h3>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white p-1.5 rounded-lg">
                      <p className="text-[#007AFF] text-sm font-bold">80+</p>
                      <p className="text-gray-500 text-[6px]">Urban Farmers</p>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg">
                      <p className="text-[#007AFF] text-sm font-bold">12</p>
                      <p className="text-gray-500 text-[6px]">Community Gardens</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
                <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
                  <Home size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Home</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("search")}>
                  <Search size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Search</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("alerts")}>
                  <Bell size={12} className="text-[#007AFF]" />
                  <span className="text-[8px] text-[#007AFF]">Alerts</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
                  <User size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screen Labels */}
          <div className="flex justify-center gap-6 mt-4 flex-wrap md:flex-nowrap">
            <div className="w-[188px] text-center">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Home Screen</span>
            </div>
            <div className="w-[188px] text-center">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Details Screen</span>
            </div>
            <div className="w-[188px] text-center">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Community Screen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

