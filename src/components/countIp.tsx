"use client"

import  SlotCounter  from "react-slot-counter"

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
  // Convert number to string for the SlotCounter
  const numberString = targetNumber

  return (
    <h1 className={className}>
      <div className="flex items-center">
        <SlotCounter
          value={numberString}
          duration={2}
          startValue="000"
          useMonospaceWidth
          charClassName="inline-block"
          containerClassName="inline-flex"
        />
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </div>
    </h1>
  )
}

