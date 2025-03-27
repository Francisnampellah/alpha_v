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
  Cpu,
  LineChart,
  Smartphone,
  PlusCircle,
  MinusCircle,
} from "lucide-react"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/footer"
import SectionContainer from "@/components/SectionContainer"

export default function ServicesPage() {
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

  // Services data
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies and responsive design principles.",
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      category: "development",
      features: [
        "Responsive front-end development",
        "Scalable back-end architecture",
        "API integration and development",
        "Performance optimization",
        "SEO-friendly implementation",
      ],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      icon: <Smartphone className="w-10 h-10 text-green-500" />,
      category: "development",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "Offline functionality",
        "Push notification integration",
        "App store optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies for optimal performance and reliability.",
      icon: <Droplets className="w-10 h-10 text-purple-500" />,
      category: "infrastructure",
      features: [
        "Cloud architecture design",
        "Migration to cloud platforms",
        "Serverless implementation",
        "Microservices development",
        "Continuous deployment pipelines",
      ],
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "data-analytics",
      title: "Data Analytics & BI",
      description: "Transform your raw data into actionable insights with custom analytics solutions and dashboards.",
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      category: "data",
      features: [
        "Custom dashboard development",
        "Data visualization",
        "Predictive analytics models",
        "Business intelligence solutions",
        "Data integration services",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "ai-solutions",
      title: "AI & Machine Learning",
      description: "Cutting-edge AI and ML solutions to automate processes and extract insights from your data.",
      icon: <LineChart className="w-10 h-10 text-red-500" />,
      category: "technology",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision implementation",
        "AI-powered automation",
        "Predictive modeling",
      ],
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "devops-services",
      title: "DevOps Services",
      description: "Streamline your development lifecycle with CI/CD pipelines and infrastructure as code.",
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      category: "infrastructure",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as code",
        "Automated testing implementation",
        "Container orchestration",
        "Performance monitoring",
      ],
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Requirements",
      description:
        "We begin by understanding your business objectives, technical requirements, and end-user needs to define a clear project roadmap.",
    },
    {
      number: "02",
      title: "Solution Architecture",
      description:
        "Our team designs a tailored architecture that leverages the right technologies and approaches to address your specific requirements.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "We implement your solution following agile methodologies, with regular iterations and feedback loops to ensure alignment with expectations.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description:
        "We conduct comprehensive testing and handle deployment to ensure a smooth transition to production with minimal disruption.",
    },
    {
      number: "05",
      title: "Support & Enhancement",
      description:
        "We provide ongoing support and continuous improvement to keep your solution running optimally and evolving with your business needs.",
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How long does it typically take to complete a software development project?",
      answer:
        "Project timelines vary based on complexity and scope. Simple web applications might be completed in 6-8 weeks, while complex enterprise solutions can take 6 months or more. During our initial consultation, we'll provide a detailed timeline specific to your project needs and priorities.",
    },
    {
      question: "What development methodologies do you follow?",
      answer:
        "We primarily follow Agile development methodologies, with an emphasis on Scrum or Kanban depending on the project requirements. This approach allows for regular feedback, incremental delivery, and the flexibility to adapt to changing requirements throughout the development process.",
    },
    {
      question: "How do you ensure the security of our data and applications?",
      answer:
        "Security is built into every stage of our development process. We implement industry best practices including encryption for data at rest and in transit, secure authentication systems, regular security audits, penetration testing, and adherence to OWASP guidelines. We also provide comprehensive documentation on all security measures implemented.",
    },
    {
      question: "Can you work with our existing systems and technology stack?",
      answer:
        "Absolutely. We have expertise across a wide range of technologies and frameworks. Our team can integrate with your existing systems, extend current functionality, or build new components that work seamlessly with your technology stack. During the discovery phase, we'll assess your current architecture to determine the best approach.",
    },
    {
      question: "What kind of support do you provide after the project launch?",
      answer:
        "We offer flexible support options tailored to your needs, including dedicated maintenance plans, 24/7 critical issue response, regular updates and security patches, performance monitoring, and continuous improvement services. Our goal is to ensure your software remains secure, stable, and aligned with your evolving business requirements.",
    },
  ]

  // Filter services based on active tab
  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Shorter for inner pages */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Software development services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f36]/90 via-[#0a0f36]/70 to-transparent"></div>
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
              <p className="text-sm text-blue-400 font-medium">OUR SERVICES</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Software Development Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Innovative solutions designed to transform your business, streamline operations, and create exceptional digital experiences
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Category Tabs */}
      <SectionContainer
        sectionNumber="01"
        title="Our Services"
        subtitle="Comprehensive solutions tailored to your needs"
      >
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "all" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveTab("development")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "development" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setActiveTab("infrastructure")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "infrastructure" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Infrastructure
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "data" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Data
          </button>
          <button
            onClick={() => setActiveTab("technology")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "technology" ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Technology
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                    {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{service.description}</p>
                <h4 className="font-medium mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="mt-6 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Our Process Section */}
      <SectionContainer
        sectionNumber="02"
        title="Our Process"
        subtitle="How we deliver exceptional solutions"
        bgColor="gray"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:translate-x-px"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[15px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm transform -translate-x-2 md:-translate-x-2.5"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-3">
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer
        sectionNumber="03"
        title="Frequently Asked Questions"
        subtitle="Common questions about our services"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{item.question}</span>
                  {activeAccordion === idx ? (
                    <MinusCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeAccordion === idx ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="p-4 pt-0 bg-white border-t border-gray-100">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our software development services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/process"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Learn About Our Process</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

