"use client"

import { motion } from "framer-motion"
import { Project } from "@/lib/projectsData"
import Link from "next/link"
import { BarChart2, Clock, Users, ExternalLink } from "lucide-react"

interface ProjectDescriptionProps {
  project: Project;
  showBackLink?: boolean;
}

export default function ProjectDescription({ project, showBackLink = true }: ProjectDescriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
    >
      {showBackLink && (
        <Link href="/project" className="inline-block text-[#007AFF] hover:underline mb-6 ml-8 mt-8">
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </span>
        </Link>
      )}

      <div className="h-72 bg-gradient-to-r from-#3798b8 to-indigo-600 flex items-center justify-center relative overflow-hidden">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl">
              <div className="text-white text-6xl font-bold tracking-tight">
                {project.title.substring(0, 2)}
              </div>
            </div>
          </div>
        )}
        
        {/* Category overlay */}
        <div className="absolute top-6 right-6">
          <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">{project.description}</p>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="h-8 w-8 rounded-full bg-#3798b8 flex items-center justify-center mr-3">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="w-5 h-5 text-#3798b8 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="h-8 w-8 rounded-full bg-#3798b8 flex items-center justify-center mr-3">
                <BarChart2 className="h-4 w-4 text-white" />
              </span>
              Project Details
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-#3798b8 mr-2" />
                  <p className="text-gray-700 font-medium">Estimated Timeline</p>
                </div>
                <p className="text-gray-900 font-medium ml-7">{project.estTime}</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-#3798b8 mr-2" />
                  <p className="text-gray-700 font-medium">Impact</p>
                </div>
                <p className="text-gray-900 ml-7">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Interested in this project?</h2>
            <p className="text-gray-700 mb-6">
              Get in touch with our team to learn more about how we can implement this solution for your organization.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#007AFF] text-white font-medium rounded-lg flex items-center"
              >
                Contact Us
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 