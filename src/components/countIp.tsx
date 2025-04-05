"use client"

import SlotCounter from "react-slot-counter"

interface CounterProps {
  targetNumber: number
  suffix?: string
  className?: string
  suffixClassName?: string
}

export default function Counter({
  targetNumber,
  suffix = "k",
  className = "text-5xl sm:text-8xl text-white",
  suffixClassName = "text-yellow-300 text-4xl sm:text-6xl",
}: CounterProps) {
  // Format targetNumber to string for SlotCounter
  const formattedNumber = targetNumber.toString()

  return (
    <div className="inline-block">
      <div className={`flex items-center ${className}`}>
        <SlotCounter
          value={formattedNumber}
          duration={2}
          startValue={formattedNumber.replace(/\d/g, '0')}
          useMonospaceWidth
          charClassName="inline-block"
          containerClassName="inline-flex"
        />
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </div>
    </div>
  )
}

