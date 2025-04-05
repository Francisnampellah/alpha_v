"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  BarChart2,
  Calendar,
  User,
  ChevronLeft,
  MoreVertical,
  Heart,
  Clock,
  Zap,
  Award,
  Dumbbell,
  Apple,
} from "lucide-react"

const workoutData = {
  title: "Full Body HIIT",
  description:
    "High-intensity interval training that targets all major muscle groups. This workout alternates between intense bursts of exercise and short recovery periods for maximum calorie burn.",
  benefits: [
    "Burns 400+ calories",
    "Improves cardiovascular health",
    "Increases metabolism",
    "No equipment needed",
    "Can be done anywhere",
  ],
  duration: "30 minutes\n3 sets of 10 exercises",
  instructor: "Led by certified trainer Sarah Johnson with modifications for all fitness levels",
}

const workoutsList = [
  {
    id: 1,
    title: "Full Body HIIT",
    category: "High Intensity",
    duration: "30 min",
    calories: 450,
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Morning Yoga Flow",
    category: "Flexibility",
    duration: "25 min",
    calories: 180,
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Core Crusher",
    category: "Strength",
    duration: "20 min",
    calories: 280,
    difficulty: "Advanced",
  },
]

const achievements = [
  { id: 1, name: "7-Day Streak", description: "Completed workouts for 7 consecutive days", icon: "flame" },
  { id: 2, name: "Calorie Crusher", description: "Burned over 1,000 calories this week", icon: "zap" },
  { id: 3, name: "Early Bird", description: "Completed 5 workouts before 8am", icon: "sun" },
  { id: 4, name: "Variety Pack", description: "Tried 3 different workout types", icon: "layout" },
]

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

type Screen = "workouts" | "details" | "achievements"

export default function FitnessAppLayout() {
  const [activeScreen, setActiveScreen] = useState<Screen>("workouts")
  const [activeTab, setActiveTab] = useState("home")

  // For demo purposes, using the passed workout data
  const currentWorkoutData = workoutData

  const handleWorkoutClick = () => {
    setActiveScreen("details")
  }

  const handleBackClick = () => {
    setActiveScreen("workouts")
  }

  const handleTabClick = (tab: string) => {
    if (tab === "home") setActiveScreen("workouts")
    if (tab === "stats") setActiveScreen("achievements")
    setActiveTab(tab)
  }

  console.log(activeTab)


  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Mobile Screens Container */}
        <div className="flex-1">
          {/* Mobile Screens */}
          <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
            {/* WORKOUTS LIST SCREEN */}
            <div
              className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "workouts" ? "hidden md:block" : ""}`}
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
                <h1 className="font-semibold text-xs">Workouts</h1>
                <Dumbbell size={12} />
              </div>

              {/* Main Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="h-[calc(100%-75px)] overflow-y-auto pb-10"
              >
                {/* Today's Stats */}
                <div className="p-2 bg-green-50 m-2 rounded-lg">
                  <h3 className="text-[10px] font-semibold mb-1 text-green-800">Todays Progress</h3>
                  <div className="flex justify-between text-[8px]">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Zap size={10} className="text-green-600" />
                      </div>
                      <span className="font-medium">320</span>
                      <span className="text-gray-500">calories</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Clock size={10} className="text-green-600" />
                      </div>
                      <span className="font-medium">45</span>
                      <span className="text-gray-500">minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Heart size={10} className="text-green-600" />
                      </div>
                      <span className="font-medium">128</span>
                      <span className="text-gray-500">bpm</span>
                    </div>
                  </div>
                </div>

                {/* Workouts List */}
                <div className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1 px-1">Recommended For You</h3>
                  {workoutsList.map((workout) => (
                    <motion.div
                      key={workout.id}
                      variants={itemVariants}
                      className="bg-white rounded-lg mb-2 p-2 shadow-sm"
                      onClick={handleWorkoutClick}
                    >
                      <div className="flex gap-2">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-[8px] font-medium">
                          {workout.category.slice(0, 4)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-[10px]">{workout.title}</h3>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Clock size={8} className="text-gray-500" />
                            <span className="text-gray-500 text-[8px]">{workout.duration}</span>
                            <span className="mx-1 text-gray-300">•</span>
                            <Zap size={8} className="text-gray-500" />
                            <span className="text-gray-500 text-[8px]">{workout.calories} cal</span>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-[8px] bg-green-100 text-green-800 px-1 rounded">
                              {workout.difficulty}
                            </span>
                            <span className="text-[8px] text-green-600">Start</span>
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
                  <Home size={12} className="text-green-600" />
                  <span className="text-[8px] text-green-600">Home</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("calendar")}>
                  <Calendar size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Plan</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("stats")}>
                  <BarChart2 size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Stats</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
                  <User size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Profile</span>
                </div>
              </div>
            </div>

            {/* WORKOUT DETAILS SCREEN */}
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
                  <h1 className="font-semibold text-xs">Workout Details</h1>
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
                {/* Workout Header */}
                <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
                  <div className="flex items-center gap-2 mb-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white font-medium text-[8px]">HIIT</span>
                    </motion.div>
                    <div>
                      <h2 className="text-[10px] font-semibold text-gray-900">{currentWorkoutData.title}</h2>
                      <p className="text-gray-500 text-[8px]">High Intensity</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-[8px] leading-relaxed mb-1">{currentWorkoutData.description}</p>
                </motion.div>

                {/* Workout Stats */}
                <motion.div variants={itemVariants} className="p-2 bg-green-50 mx-2 rounded-lg mb-1">
                  <div className="flex justify-between text-[8px]">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Clock size={10} className="text-green-600" />
                      </div>
                      <span className="font-medium">30</span>
                      <span className="text-gray-500">minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Zap size={10} className="text-green-600" />
                      </div>
                      <span className="font-medium">450</span>
                      <span className="text-gray-500">calories</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                        <Dumbbell size={10} className="text-green-600" />
                      </div>
                      <span className="font-medium">Int.</span>
                      <span className="text-gray-500">level</span>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
                  <h3 className="text-[10px] font-semibold mb-1">Benefits</h3>
                  <div className="space-y-1">
                    {currentWorkoutData.benefits.slice(0, 3).map((text, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-1"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <p className="text-gray-600 text-[8px]">{text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Duration Section */}
                <motion.div variants={itemVariants} className="p-2 bg-white mb-1">
                  <h3 className="text-[10px] font-semibold mb-1">Workout Structure</h3>
                  <div className="bg-gray-50 p-1.5 rounded-lg">
                    {currentWorkoutData.duration.split("\n").map((line, index) => (
                      <p key={index} className="text-gray-500 text-[8px]">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Start Button */}
                <motion.div variants={itemVariants} className="p-2">
                  <button className="w-full bg-green-500 text-white text-[10px] font-medium py-1.5 rounded-lg">
                    Start Workout
                  </button>
                </motion.div>
              </motion.div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-white border-t border-gray-200 flex justify-around items-center px-1">
                <div className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
                  <Home size={12} className="text-green-600" />
                  <span className="text-[8px] text-green-600">Home</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("calendar")}>
                  <Calendar size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Plan</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("stats")}>
                  <BarChart2 size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Stats</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
                  <User size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Profile</span>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS SCREEN */}
            <div
              className={`bg-gray-100 h-[400px] w-[188px] overflow-hidden rounded-[20px] border-4 border-gray-800 relative shadow-xl ${activeScreen !== "achievements" ? "hidden md:block" : ""}`}
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
                  <h1 className="font-semibold text-xs">Stats & Achievements</h1>
                </div>
                <Award size={12} />
              </div>

              {/* Main Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="h-[calc(100%-75px)] overflow-y-auto pb-10"
              >
                {/* Weekly Summary */}
                <motion.div variants={itemVariants} className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1">Weekly Summary</h3>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-[8px] text-gray-500">This Week</span>
                      <span className="text-[8px] text-green-600">+12% from last week</span>
                    </div>
                    <div className="flex justify-between text-[8px] mb-2">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-[10px]">5</span>
                        <span className="text-gray-500">workouts</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-[10px]">1,850</span>
                        <span className="text-gray-500">calories</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-[10px]">135</span>
                        <span className="text-gray-500">minutes</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between text-[8px] mt-1">
                      <span className="text-gray-500">Weekly Goal: 8 workouts</span>
                      <span className="text-green-600">65%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div variants={itemVariants} className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1">Recent Achievements</h3>
                  <div className="space-y-1">
                    {achievements.map((achievement) => (
                      <motion.div
                        key={achievement.id}
                        className="flex items-center gap-2 bg-white p-1.5 rounded-lg"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          {achievement.icon === "flame" && <Heart size={10} className="text-green-600" />}
                          {achievement.icon === "zap" && <Zap size={10} className="text-green-600" />}
                          {achievement.icon === "sun" && <Clock size={10} className="text-green-600" />}
                          {achievement.icon === "layout" && <Dumbbell size={10} className="text-green-600" />}
                        </div>
                        <div>
                          <p className="text-gray-900 text-[8px] font-medium">{achievement.name}</p>
                          <p className="text-gray-500 text-[6px]">{achievement.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Nutrition */}
                <motion.div variants={itemVariants} className="p-2">
                  <h3 className="text-[10px] font-semibold mb-1">Nutrition</h3>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Apple size={12} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-[8px] font-medium">Daily Water & Protein</p>
                        <div className="flex gap-2 mt-0.5">
                          <div className="flex items-center gap-0.5">
                            <div className="w-4 h-1 bg-blue-100 rounded-full overflow-hidden">
                              <div className="h-full bg-#3798b8 rounded-full" style={{ width: "75%" }}></div>
                            </div>
                            <span className="text-[6px] text-gray-500">75%</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            <div className="w-4 h-1 bg-green-100 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                            <span className="text-[6px] text-gray-500">60%</span>
                          </div>
                        </div>
                      </div>
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
                <div className="flex flex-col items-center" onClick={() => handleTabClick("calendar")}>
                  <Calendar size={12} className="text-gray-500" />
                  <span className="text-[8px] text-gray-500">Plan</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => handleTabClick("stats")}>
                  <BarChart2 size={12} className="text-green-600" />
                  <span className="text-[8px] text-green-600">Stats</span>
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
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Workouts</span>
            </div>
            <div className="w-[188px] text-center">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Workout Details</span>
            </div>
            <div className="w-[188px] text-center">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Stats & Achievements</span>
            </div>
          </div>
        </div>

        {/* Dimensions Note */}
        <div className="bg-gray-50 p-4 rounded-lg border h-fit border-gray-200 md:w-[200px] md:self-stretch md:flex md:flex-col md:justify-center">
          <h2 className="text-lg font-medium mb-2">Mobile Screens</h2>
          <p className="text-gray-700 text-sm">
            Each screen is sized at <span className="font-mono bg-gray-100 px-1">188px × 400px</span> with a 9:19 aspect
            ratio, representing a typical smartphone display. This allows all three screens to fit side-by-side without
            wrapping.
          </p>
        </div>
      </div>
    </div>
  )
}

