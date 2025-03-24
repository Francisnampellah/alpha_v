"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Droplets,
  Leaf,
  Cpu,
  LineChart,
  Smartphone,
  PlusCircle,
  MinusCircle,
} from "lucide-react"

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Services data
  const services = [
    {
      id: "smart-irrigation",
      title: "Smart Irrigation Systems",
      description: "Water-efficient irrigation solutions powered by IoT sensors and weather data integration.",
      icon: <Droplets className="w-10 h-10 text-blue-500" />,
      category: "water",
      features: [
        "Real-time soil moisture monitoring",
        "Weather-adaptive watering schedules",
        "Mobile app control and notifications",
        "Water usage analytics and reporting",
        "Integration with existing irrigation infrastructure",
      ],
      image:
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "soil-monitoring",
      title: "Soil Health Monitoring",
      description: "Comprehensive soil analysis systems for optimal crop health and yield improvement.",
      icon: <Leaf className="w-10 h-10 text-green-500" />,
      category: "soil",
      features: [
        "Nutrient level tracking and analysis",
        "pH and composition monitoring",
        "Automated soil sampling technology",
        "Fertilization recommendation engine",
        "Historical data comparison and trends",
      ],
      image:
        "https://images.unsplash.com/photo-1621149545341-7562da785e80?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "iot-solutions",
      title: "Agricultural IoT Solutions",
      description: "Connected sensor networks and devices for comprehensive farm monitoring and automation.",
      icon: <Cpu className="w-10 h-10 text-purple-500" />,
      category: "technology",
      features: [
        "Wireless sensor networks deployment",
        "Equipment monitoring and maintenance alerts",
        "Environmental condition tracking",
        "Livestock health and location monitoring",
        "Secure data transmission and storage",
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "data-analytics",
      title: "Agricultural Data Analytics",
      description: "Advanced data processing and visualization tools for actionable farming insights.",
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      category: "data",
      features: [
        "Predictive yield modeling",
        "Resource optimization algorithms",
        "Pest and disease risk assessment",
        "Custom reporting dashboards",
        "Machine learning crop recommendations",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "precision-farming",
      title: "Precision Farming Systems",
      description: "GPS-guided equipment and variable rate technology for optimized field operations.",
      icon: <LineChart className="w-10 h-10 text-red-500" />,
      category: "technology",
      features: [
        "GPS field mapping and analysis",
        "Variable rate application technology",
        "Automated equipment guidance",
        "Drone-based field assessment",
        "Yield mapping and analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "mobile-solutions",
      title: "Mobile Farm Management",
      description: "Mobile applications for on-the-go farm monitoring, management, and decision-making.",
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      category: "technology",
      features: [
        "Real-time farm data access",
        "Task management and assignment",
        "Inventory and resource tracking",
        "Offline functionality for remote areas",
        "Integration with other farm systems",
      ],
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Assessment & Analysis",
      description:
        "We begin by thoroughly assessing your current agricultural operations, challenges, and goals to identify the most impactful opportunities for improvement.",
    },
    {
      number: "02",
      title: "Solution Design",
      description:
        "Our team designs a customized solution that integrates the right technologies and approaches to address your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We handle the complete deployment of your solution, including hardware installation, software setup, and integration with existing systems.",
    },
    {
      number: "04",
      title: "Training & Support",
      description:
        "We provide comprehensive training for your team and ongoing technical support to ensure you get the maximum benefit from your new systems.",
    },
    {
      number: "05",
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor system performance and make data-driven adjustments to optimize results and adapt to changing conditions.",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How long does it typically take to implement your solutions?",
      answer:
        "Implementation timelines vary based on the complexity and scale of the project. Simple systems like basic soil monitoring can be operational within 2-4 weeks, while comprehensive farm-wide solutions may take 2-3 months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "Do your systems work in areas with limited internet connectivity?",
      answer:
        "Yes, we design our solutions with rural and remote areas in mind. Many of our systems use low-power, long-range communication protocols that don't rely on continuous internet connectivity. Our mobile applications also feature offline functionality, syncing data when connectivity is available.",
    },
    {
      question: "How do you ensure the security of farm data?",
      answer:
        "Data security is a top priority. We implement end-to-end encryption for all data transmission, secure cloud storage with regular backups, and role-based access controls. All our systems comply with industry standards for agricultural data privacy and security. You maintain ownership of your data at all times.",
    },
    {
      question: "Can your solutions integrate with our existing farm equipment?",
      answer:
        "Absolutely. Our systems are designed to be compatible with most major agricultural equipment brands and can often be retrofitted to work with older machinery. During the assessment phase, we'll evaluate your existing equipment and recommend the most efficient integration approach.",
    },
    {
      question: "What kind of ROI can we expect from implementing your solutions?",
      answer:
        "ROI varies by solution and farm conditions, but our clients typically see returns within 1-2 growing seasons. For example, our irrigation systems have reduced water usage by up to 40% while increasing yields by 15-20%. During our consultation, we'll provide case studies relevant to your specific situation and projected ROI calculations.",
    },
  ]

  // Filter services based on active tab
  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-sm bg-black"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                />
              ))}
            </div>
            <span className="font-semibold text-black">SMARTiNNO</span>
          </div>

          <nav className="flex flex-wrap gap-4 sm:gap-8" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-black transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-black font-semibold transition-colors relative">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-16 sm:pt-0">
        <div className="relative mx-auto my-0 overflow-hidden h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural technology services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Agricultural Technology <br className="hidden md:block" />
                Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Innovative solutions designed to optimize your farming operations, increase yields, and promote
                sustainability
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-6 sm:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a comprehensive suite of agricultural technology solutions designed to address the unique
              challenges of modern farming
            </p>
          </motion.div>

          {/* Service Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab("water")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "water" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Water Management
            </button>
            <button
              onClick={() => setActiveTab("soil")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "soil" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Soil Health
            </button>
            <button
              onClick={() => setActiveTab("technology")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "technology" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "data" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Data Analytics
            </button>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state if no services match filter */}
          {filteredServices.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6">Try selecting a different category</p>
              <button
                onClick={() => setActiveTab("all")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-6 sm:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Why Choose Our Services
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our agricultural technology solutions are designed with farmers in mind, combining cutting-edge
                innovation with practical, field-tested approaches that deliver real results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Increased Efficiency</h3>
                    <p className="text-gray-700">
                      Our solutions automate routine tasks and optimize resource usage, allowing you to accomplish more
                      with less time and effort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Environmental Sustainability</h3>
                    <p className="text-gray-700">
                      Reduce your environmental footprint with precision technologies that minimize waste and promote
                      sustainable farming practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-700">
                      Make informed choices based on real-time data and analytics, reducing guesswork and improving
                      outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Cpu className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Scalable Solutions</h3>
                    <p className="text-gray-700">
                      Our modular approach allows you to start with what you need now and expand as your operation
                      grows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1601026909629-bad5e1148817?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Agricultural technology benefits"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="px-6 sm:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful implementation and maximum value from your
              agricultural technology investment
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-px hidden sm:block"></div>

            {/* Process steps */}
            <div className="space-y-12 sm:space-y-20">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  className={`relative flex flex-col sm:flex-row gap-8 ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step number */}
                  <div className="absolute left-0 sm:left-1/2 top-0 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold transform -translate-x-1/2 z-10 hidden sm:flex">
                    {step.number}
                  </div>

                  {/* Mobile step number */}
                  <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold sm:hidden flex-shrink-0">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={`sm:w-1/2 ${idx % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="px-6 sm:px-8 py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our agricultural technology solutions have helped real farms achieve remarkable results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Case study farm"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-900 text-blue-300 text-sm font-medium mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl font-bold mb-4">Riverdale Farms: 40% Water Reduction</h3>
                <p className="text-gray-300 mb-6">
                  Riverdale Farms, a 500-acre operation in the Midwest, was facing increasing water costs and
                  restrictions. By implementing our Smart Irrigation System, they achieved:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>40% reduction in water usage across all fields</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>22% increase in crop yield due to optimized watering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>$45,000 annual savings in water and labor costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>ROI achieved within the first growing season</span>
                  </li>
                </ul>
                <Link
                  href="/case-studies/riverdale-farms"
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              <span>View All Case Studies</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 sm:px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our agricultural technology services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left"
                  onClick={() => toggleAccordion(idx)}
                >
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                  {activeAccordion === idx ? (
                    <MinusCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeAccordion === idx ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 sm:px-8 py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Agricultural Operations?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation and discover how our services can help you achieve your
              farming goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/pricing"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="grid grid-cols-2 grid-rows-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-sm bg-white"></div>
                  ))}
                </div>
                <span className="font-semibold text-white">SMARTiNNO</span>
              </div>
              <p className="text-gray-400 mb-6">
                Innovative solutions for smart urban development and sustainable infrastructure projects.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Smart Irrigation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Soil Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    IoT Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Precision Farming
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    News & Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p className="mb-3">123 Innovation Street</p>
                <p className="mb-3">Smartville, SV 12345</p>
                <p className="mb-3">Email: info@smartinno.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p>© 2024 SMARTiNNO. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

