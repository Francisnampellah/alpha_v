"use client"

import { type ReactNode, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionProps {
  icon: ReactNode
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function Accordion({ icon, title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex items-center gap-4 mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-blue-200">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="ml-auto">
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
        </div>
      </div>

      <div
        className={`pl-18 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

