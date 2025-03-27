import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ChemicalSupplyService() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section - Process Steps */}
      <div className="bg-[#0a0f36] text-white p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <p className="text-sm text-blue-400 font-medium">4 SIMPLE STEPS</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Effortless Process,
          <br />
          Continuous Supply
        </h2>

        <div className="h-px bg-gray-700 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">01.</p>
            <h3 className="font-semibold text-lg mb-4">Choose a Plan</h3>
            <p className="text-sm text-gray-300">Select the flexible or premium plan that suits your business needs.</p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">02.</p>
            <h3 className="font-semibold text-lg mb-4">Subscribe Instantly</h3>
            <p className="text-sm text-gray-300">Activate your subscription with just a click - no forms, no hassle.</p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">03.</p>
            <h3 className="font-semibold text-lg mb-4">Get Tailored Solutions</h3>
            <p className="text-sm text-gray-300">Receive personalized products & support for your operations.</p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">04.</p>
            <h3 className="font-semibold text-lg mb-4">Receive Your Supplies</h3>
            <p className="text-sm text-gray-300">Sit back as your chemicals are delivered on time, every time.</p>
          </div>
        </div>

        <div className="bg-[#1a2150] rounded-xl p-4 mt-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[#1a2150]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#1a2150]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#1a2150]"></div>
            </div>
            <p className="text-sm">
              Align with Businesses that <span className="font-semibold">Choose Quality</span>
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center transition-colors">
            <span className="mr-2">Start Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Section - Benefits */}
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500 font-medium">BENEFITS YOU'LL GAIN</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xs">
            Unlock
            <br />
            Exclusive
            <br />
            Advantages
          </h2>

          <div className="flex-1">
            <div className="h-px bg-gray-300 mb-8"></div>
            <p className="text-gray-600 max-w-md">
              Synthrix provides flexible, cost-effective solutions for all your chemical supply needs, ensuring
              consistent quality, timely deliveries, and dedicated support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Fast Delivery</h3>
            <p className="text-sm text-gray-300 mb-8">
              Count on prompt, dependable delivery that enhances your experience downtime.
            </p>
            <div className="h-24 bg-gradient-to-r from-blue-900 to-transparent rounded-lg"></div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Oq0SeMhO3PWUsSRJNSKkaO42VHKe4N.png"
              alt="Chemical facility"
              width={400}
              height={300}
              className="w-full h-24 object-cover"
            />
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-4 h-4 text-gray-500">⚙️</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Guaranteed consistency for uninterrupted production flow.</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Customized Solutions</h3>
            <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-blue-500 text-4xl">💧</div>
            </div>
          </div>

          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">24/7 Customer Support</h3>
            <div className="w-full h-40 bg-blue-900/30 rounded-lg flex items-center justify-center">
              <div className="text-white text-4xl">🎧</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



// "use client"

// import { useState, useEffect, useRef } from "react"
// import { BarChart2, Play, Grid, Pause, Leaf, Cpu, Sprout, ArrowRight } from "lucide-react"

// export default function Section03() {
//   const [activeTab, setActiveTab] = useState<string>("farm-tech")
//   const [isPaused, setIsPaused] = useState(false)
//   const [fadeState, setFadeState] = useState("fade-in")
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)
//   const ROTATION_INTERVAL = 5000 // 5 seconds per tab

//   // Tab content data with images
//   const tabContent = {
//     "crop-solutions": {
//       title: "Advanced crop solutions for modern agriculture and sustainable farming practices.",
//       image:
//         "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
//       imageAlt: "Advanced crop solutions in action",
//       imageDescription: "Precision agriculture technology",
//       stats: [
//         {
//           title: "Yield",
//           icon: <BarChart2 className="h-5 w-5" />,
//           chart: true,
//           color: "bg-emerald-100/70",
//           iconBg: "bg-emerald-500",
//           textColor: "text-emerald-900",
//         },
//         {
//           title: "Productivity",
//           value: "250%",
//           icon: <Sprout className="h-5 w-5 text-white" />,
//           color: "bg-emerald-200/70",
//           iconBg: "bg-emerald-600",
//           textColor: "text-emerald-900",
//         },
//       ],
//     },
//     "farm-tech": {
//       title:
//         "Whether you're a small farm or a large-scale operation, we're here to help you grow smarter, faster, and more sustainably.",
//       image:
//         "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       imageAlt: "Farm technology integration",
//       imageDescription: "Smart farming systems",
//       stats: [
//         {
//           title: "Growth",
//           icon: <BarChart2 className="h-5 w-5" />,
//           chart: true,
//           color: "bg-emerald-100/70",
//           iconBg: "bg-emerald-500",
//           textColor: "text-emerald-900",
//         },
//         {
//           title: "Efficiency",
//           value: "300%",
//           icon: <Cpu className="h-5 w-5 text-white" />,
//           color: "bg-emerald-200/70",
//           iconBg: "bg-emerald-600",
//           textColor: "text-emerald-900",
//         },
//       ],
//     },
//     sustainable: {
//       title: "Eco-friendly farming solutions that reduce environmental impact while maximizing productivity.",
//       image:
//         "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       imageAlt: "Sustainable farming practices",
//       imageDescription: "Eco-friendly agriculture",
//       stats: [
//         {
//           title: "Reduction",
//           icon: <BarChart2 className="h-5 w-5" />,
//           chart: true,
//           color: "bg-emerald-100/70",
//           iconBg: "bg-emerald-500",
//           textColor: "text-emerald-900",
//         },
//         {
//           title: "Sustainability",
//           value: "180%",
//           icon: <Leaf className="h-5 w-5 text-white" />,
//           color: "bg-emerald-200/70",
//           iconBg: "bg-emerald-600",
//           textColor: "text-emerald-900",
//         },
//       ],
//     },
//     development: {
//       title: "Continuous innovation and development to keep your farm at the cutting edge of agricultural technology.",
//       image:
//         "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
//       imageAlt: "Agricultural technology development",
//       imageDescription: "Research and innovation",
//       stats: [
//         {
//           title: "Innovation",
//           icon: <BarChart2 className="h-5 w-5" />,
//           chart: true,
//           color: "bg-emerald-100/70",
//           iconBg: "bg-emerald-500",
//           textColor: "text-emerald-900",
//         },
//         {
//           title: "Progress",
//           value: "420%",
//           icon: <Grid className="h-5 w-5 text-white" />,
//           color: "bg-emerald-200/70",
//           iconBg: "bg-emerald-600",
//           textColor: "text-emerald-900",
//         },
//       ],
//     },
//   }

//   // Navigation items
//   const navItems = [
//     { id: "crop-solutions", label: "Crop Solutions" },
//     { id: "farm-tech", label: "Farm Tech" },
//     { id: "sustainable", label: "Sustainable" },
//     { id: "development", label: "Development" },
//   ]

//   // Function to change tab with animation
//   const changeTab = (tabId: string) => {
//     // Start fade out animation
//     setFadeState("fade-out")

//     // After fade out completes, change tab and fade in
//     setTimeout(() => {
//       setActiveTab(tabId)
//       setFadeState("fade-in")
//     }, 300) // Match this with the CSS transition duration
//   }

//   // Handle tab click
//   const handleTabClick = (tabId: string) => {
//     changeTab(tabId)
//     // Reset the timer when user manually changes tab
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }
//     if (!isPaused) {
//       startRotation()
//     }
//   }

//   // Start the rotation timer
//   const startRotation = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }

//     intervalRef.current = setInterval(() => {
//       const currentIndex = navItems.findIndex((item) => item.id === activeTab)
//       const nextIndex = (currentIndex + 1) % navItems.length
//       changeTab(navItems[nextIndex].id)
//     }, ROTATION_INTERVAL)
//   }

//   // Toggle pause/play
//   const togglePause = () => {
//     setIsPaused((prevState) => {
//       if (prevState) {
//         // If currently paused, start rotation
//         setTimeout(() => startRotation(), 0)
//         return false
//       } else {
//         // If currently playing, clear interval
//         if (intervalRef.current) {
//           clearInterval(intervalRef.current)
//           intervalRef.current = null
//         }
//         return true
//       }
//     })
//   }

//   // Initialize and clean up the interval
//   useEffect(() => {
//     // Start rotation if not paused
//     if (!isPaused) {
//       startRotation()
//     }

//     // Clean up on unmount
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//         intervalRef.current = null
//       }
//     }
//   }, [isPaused])

//   // Restart rotation when activeTab changes (to ensure proper timing)
//   useEffect(() => {
//     if (!isPaused) {
//       startRotation()
//     }
//   }, [activeTab])

//   // Get current tab content
//   const currentTab = tabContent[activeTab as keyof typeof tabContent]

//   return (
//     <section className="w-full py-12 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
//       {/* Section Title */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="flex items-center border-l-4 border-blue-300 pl-4">
//           <div>
//             <h2 className="text-3xl font-bold text-white">Our Services</h2>
//             <p className="text-slate-300 text-sm mt-1">Innovative solutions tailored to your needs.</p>
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="flex flex-wrap border-b border-blue-400/30 mb-8"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => {
//             setIsPaused(false)
//             startRotation()
//           }}
//         >
//           <div className="flex overflow-x-auto scrollbar-hide">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleTabClick(item.id)}
//                 className={`relative py-3 px-6 text-sm font-medium transition-all duration-300 ${
//                   activeTab === item.id ? "text-white" : "text-blue-100 hover:text-white"
//                 }`}
//               >
//                 {item.label}
//                 {activeTab === item.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300"></span>}
//               </button>
//             ))}
//           </div>
//           <button
//             onClick={togglePause}
//             className="ml-auto p-2 rounded-full transition-colors text-blue-100 hover:text-white bg-blue-600/50"
//             aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
//           >
//             {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
//           </button>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className={`transition-opacity duration-500 ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}>
//           <div className="bg-blue-800/50 rounded-xl overflow-hidden border border-blue-700/50">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//               {/* Image Column - Now on the left for desktop */}
//               <div className="lg:col-span-7 relative">
//                 <div className="aspect-video overflow-hidden lg:h-full">
//                   <img
//                     src={currentTab.image || "/placeholder.svg"}
//                     alt={currentTab.imageAlt}
//                     className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>

//                 <div className="absolute bottom-4 left-4 bg-blue-900/80 backdrop-blur-sm text-white px-3 py-1.5 text-sm rounded-md border border-blue-700/50">
//                   <p className="font-medium">{currentTab.imageDescription}</p>
//                 </div>
//               </div>

//               {/* Content Column - Now on the right for desktop */}
//               <div className="lg:col-span-5 p-6">
//                 <div className="space-y-4">
//                   <h3 className="text-2xl font-bold text-white leading-tight">{currentTab.title}</h3>

//                   <div className="flex flex-wrap gap-2 my-3">
//                     <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-blue-500/30 rounded-full border border-blue-400/30">
//                       Agri-Business
//                     </span>
//                     <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-blue-500/30 rounded-full border border-blue-400/30">
//                       Support
//                     </span>
//                   </div>

//                   {/* Stats */}
//                   <div className="grid grid-cols-2 gap-3 my-4">
//                     {currentTab.stats.map((stat, index) => (
//                       <div
//                         key={index}
//                         className="py-3 px-4 bg-blue-900/50 rounded-lg border border-blue-700/50 text-white flex items-center"
//                       >
//                         <div className={`${stat.iconBg} p-2 rounded-md mr-3 shadow-lg`}>{stat.icon}</div>
//                         <div>
//                           <p className="text-xs font-medium text-blue-100">{stat.title}</p>
//                           {stat.value && <p className="text-base font-bold text-white">{stat.value}</p>}
//                           {stat.chart && (
//                             <div className="w-16 h-2 bg-blue-600/50 rounded-full overflow-hidden mt-1">
//                               <div className="h-full bg-blue-200 w-4/5"></div>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <a
//                     href="#"
//                     className="inline-flex items-center text-blue-100 text-sm font-medium hover:text-white transition-colors group mt-2"
//                   >
//                     Learn more
//                     <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

