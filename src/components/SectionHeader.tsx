"use client"

import { useRouter } from "next/navigation"

interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
  buttonOnClick?: () => void
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  showButton = false,
  buttonText = "Read More",
  buttonLink,
  buttonOnClick
}: SectionHeaderProps) {
  const router = useRouter()

  const handleClick = () => {
    if (buttonOnClick) {
      buttonOnClick()
    } else if (buttonLink) {
      router.push(buttonLink)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 border-b border-gray-200 pb-6">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="w-12 text-lg text-gray-400 font-bold mr-4">{number}</div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
      </div>
      {showButton && (
        <button 
          className="bg-black hover:bg-gray-800 transition-colors text-white px-6 py-3 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          aria-label={`Read more about ${title}`}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  )
} 