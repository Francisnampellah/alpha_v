"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Brain,
  Cpu,
  Cloud,
  Shield,
  Network,
  Link as LinkIcon,
} from "lucide-react"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/footer"
import SectionContainer from "@/components/SectionContainer"

export default function TechnologyPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
    console.log(scrolled)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Technologies data
  const technologies = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Advanced AI solutions for intelligent automation and decision-making",
      icon: <Brain className="w-10 h-10 text-blue-500" />,
      category: "intelligence",
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Intelligent Automation"
      ],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "ml",
      title: "Machine Learning",
      description: "Data-driven insights and predictive analytics",
      icon: <Cpu className="w-10 h-10 text-purple-500" />,
      category: "intelligence",
      features: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Deep Learning",
        "Neural Networks"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      description: "Scalable and secure cloud infrastructure solutions",
      icon: <Cloud className="w-10 h-10 text-cyan-500" />,
      category: "infrastructure",
      features: [
        "Cloud Migration",
        "Serverless Architecture",
        "Container Orchestration",
        "Cloud Security"
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "blockchain",
      title: "Blockchain",
      description: "Decentralized and secure transaction systems",
      icon: <LinkIcon className="w-10 h-10 text-green-500" />,
      category: "security",
      features: [
        "Smart Contracts",
        "DApp Development",
        "Tokenization",
        "Blockchain Security"
      ],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "iot",
      title: "IoT",
      description: "Connected devices and smart systems",
      icon: <Network className="w-10 h-10 text-orange-500" />,
      category: "infrastructure",
      features: [
        "Sensor Networks",
        "Real-time Monitoring",
        "Device Management",
        "Edge Computing"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Advanced security solutions for digital protection",
      icon: <Shield className="w-10 h-10 text-yellow-500" />,
      category: "security",
      features: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Security Monitoring",
        "Compliance Management"
      ],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  // Filter technologies based on active tab
  const filteredTechnologies = activeTab === "all" ? technologies : technologies.filter((tech) => tech.category === activeTab)

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Technology innovation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" showCTA={true} ctaText="Contact Us" ctaLink="/contact" />

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(70vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-sm text-blue-400 font-medium">OUR TECHNOLOGIES</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Cutting-Edge Technology Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-200 mb-8"
            >
              We leverage the latest technological advancements to deliver innovative solutions that drive business growth and digital transformation.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Technology Categories */}
      <SectionContainer
        sectionNumber="01"
        title="Our Technology Stack"
        subtitle="Explore our cutting-edge technologies and solutions"
        bgColor="gray"
      >
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "intelligence", "infrastructure", "security"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-3">
                    {tech.icon}
                    <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{tech.description}</p>
                
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  {activeAccordion === index ? "Hide Details" : "Show Details"}
                </button>

                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      <Footer />
    </div>
  )
}
