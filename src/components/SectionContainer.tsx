"use client"

import React from "react"

type SectionContainerProps = {
  children: React.ReactNode
  sectionNumber: string
  title: string
  subtitle: string
  bgColor?: "white" | "gray"
  showButton?: boolean
  buttonText?: string
  buttonOnClick?: () => void
}

export default function SectionContainer({
  children,
  sectionNumber,
  title,
  subtitle,
  bgColor = "white",
  showButton = false,
  buttonText = "Learn More",
  buttonOnClick
}: SectionContainerProps) {
  const bg = bgColor === "gray" ? "bg-gray-50" : "bg-white"
  
  return (
    <section className={`px-4 sm:px-6 lg:px-12 py-16 ${bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 border-b border-gray-200 pb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-12 text-lg text-gray-400 font-bold mr-4">{sectionNumber}</div>
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          </div>
          
          {showButton && (
            <button 
              onClick={buttonOnClick}
              className="bg-black hover:bg-gray-800 transition-colors text-white px-6 py-3 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              {buttonText}
            </button>
          )}
        </div>
        
        {children}
      </div>
    </section>
  )
} 