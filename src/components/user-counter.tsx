"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

interface UserCounterProps {
  count: number
}

export function UserCounter({ count }: UserCounterProps) {
  const [currentCount, setCurrentCount] = useState(count)

  return (
    <div className="flex items-center gap-4">
      <span className="text-2xl font-bold text-white">{currentCount}k</span>

      <div className="relative h-1 w-32 rounded-full bg-white/30">
        <div className="absolute left-1/2 h-1 w-1/2 rounded-full bg-white"></div>
        <button
          className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
          onClick={() => setCurrentCount((prev) => prev + 1)}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex -space-x-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
          <img src="/placeholder.svg?height=40&width=40" alt="User avatar" className="h-full w-full object-cover" />
        </div>
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
          <img src="/placeholder.svg?height=40&width=40" alt="User avatar" className="h-full w-full object-cover" />
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white text-black">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

