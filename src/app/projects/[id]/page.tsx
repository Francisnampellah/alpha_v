"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/footer"
import SectionContainer from "@/components/SectionContainer"

// For demo purposes - in a real app, this would be fetched from a database or API
const sampleProject = {
  id: 'advanced-irrigation-system',
  title: 'Advanced Irrigation System',
  description: 'Smart irrigation system using IoT sensors and AI for optimal water usage',
  status: 'Completed',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  categories: ['IoT', 'Agriculture', 'AI'],
  fullDescription: `
    The Advanced Irrigation System is a cutting-edge solution designed to optimize water usage in agricultural settings through the application of IoT technology and artificial intelligence.
    
    This innovative system uses a network of soil moisture sensors, weather data integration, and crop-specific algorithms to determine precisely when and how much to irrigate, reducing water waste while maximizing crop yields.
    
    Key features of this system include real-time monitoring through a mobile application, automated scheduling based on predictive analytics, and integration with existing irrigation infrastructure for seamless deployment.
    
    The system has been successfully implemented across multiple farms in different climate zones, resulting in average water savings of 30% while maintaining or improving crop output.
  `,
  specs: [
    { label: 'Technology', value: 'IoT, Machine Learning, Mobile App' },
    { label: 'Integration', value: 'Weather APIs, Existing irrigation hardware' },
    { label: 'Results', value: '30% water reduction, 15% yield increase' },
    { label: 'Timeline', value: '8 months from concept to deployment' },
    { label: 'Client', value: 'Agricultural Innovation Cooperative' }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1623227713554-8acc8d9fb7e6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
}

// Sample related projects
const relatedProjects = [
  {
    id: 'drone-crop-monitoring',
    title: 'Drone Crop Monitoring',
    description: 'Automated drone system for crop health assessment and monitoring',
    image: 'https://images.unsplash.com/photo-1579256945418-f3583583a15e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Drones', 'Agriculture', 'AI']
  },
  {
    id: 'soil-analysis-platform',
    title: 'Soil Analysis Platform',
    description: 'Digital platform for comprehensive soil health analysis and recommendations',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Data Analytics', 'Agriculture', 'Machine Learning']
  },
  {
    id: 'harvest-prediction-system',
    title: 'Harvest Prediction System',
    description: 'AI-powered system for accurate crop yield predictions and harvest timing',
    image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['AI', 'Predictive Analytics', 'Agriculture']
  }
]

const CategoryPill = ({ label }: { label: string }) => {
  return (
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
    >
      {label}
    </motion.span>
  )
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const [scrolled, setScrolled] = useState(false)
  console.log(params);
  console.log(scrolled);
  // In a real app, you would fetch the project data based on the ID
  // For now, we'll use sample data
  const project = sampleProject
  
  // Define status color based on project status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  const statusColor = getStatusColor(project.status)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
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
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.categories.map((category, idx) => (
                <CategoryPill key={idx} label={category} />
              ))}
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${statusColor}`}>
                {project.status}
              </span>
              <Link 
                href="/projects" 
                className="text-white hover:text-gray-200 flex items-center gap-1.5 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back to Projects</span>
              </Link>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <SectionContainer
        sectionNumber="01"
        title="Project Overview"
        subtitle="Details and specifications of this innovation"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Description - Left Column */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none mb-8">
              {project.fullDescription.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  <motion.p 
                    key={idx} 
                    className="mb-6 text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                )
              ))}
            </div>
          </div>

          {/* Project Specs - Right Column */}
          <div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Project Specifications</h3>
              
              <div className="space-y-4">
                {project.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-sm text-gray-500">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="mt-8 w-full bg-black hover:bg-gray-800 text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
              >
                <span>Inquire About This Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Project Gallery */}
      <SectionContainer
        sectionNumber="02"
        title="Project Gallery"
        subtitle="Visual highlights from this innovation"
        bgColor="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.gallery.map((image, idx) => (
            <motion.div 
              key={idx} 
              className={`rounded-xl overflow-hidden shadow-md ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''} aspect-square relative group`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image}
                alt={`${project.title} gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Related Projects */}
      <SectionContainer
        sectionNumber="03"
        title="Related Projects"
        subtitle="Explore more of our innovative solutions"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((relatedProject, idx) => (
            <motion.div
              key={relatedProject.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/projects/${relatedProject.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {relatedProject.categories.slice(0, 2).map((category, catIdx) => (
                        <span 
                          key={catIdx} 
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                      {relatedProject.categories.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          +{relatedProject.categories.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white">{relatedProject.title}</h3>
                  </div>
                </div>
                
                <div className="p-4 flex-grow">
                  <p className="text-gray-700">{relatedProject.description}</p>
                </div>
                
                <div className="px-4 pb-4 flex items-center text-blue-600 font-medium">
                  <span>View Project</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Similar Project in Mind?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let us help you bring your innovative agricultural technology ideas to life
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
