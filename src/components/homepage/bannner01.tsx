import Image from "next/image"
import { CategoryPill } from "@/components/category-pill"
import React from 'react';
import CountingNumber from "../countIp";

// Define types for our logos
// Define default icons to use if none provided

export default function Banner_01() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-4 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              <div className="h-2 w-2 rounded-sm bg-black"></div>
              <div className="h-2 w-2 rounded-sm bg-black"></div>
              <div className="h-2 w-2 rounded-sm bg-black"></div>
              <div className="h-2 w-2 rounded-sm bg-black"></div>
            </div>
            <span className="font-semibold text-black">SMARTiNNO</span>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 sm:gap-8">
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Service
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Product
          </a>
        </nav>
      </header>

      {/* Banner */}
      <div className="relative mx-4 sm:mx-8 my-4 overflow-hidden rounded-3xl bg-gray-200">
        <div className="relative h-[500px] sm:h-[730px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural tractor spraying crops in a field"
            fill
            priority
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
            {/* Top section */}
            <div className="flex flex-col gap-16 sm:gap-36 justify-between">
              <div className="flex justify-between">
                <div className="flex flex-wrap gap-2 w-full sm:w-96">
                  <CategoryPill label="Farm Tech" />
                  <CategoryPill label="Innovation" />
                  <CategoryPill label="Seemless Intergration" />
                </div>
              </div>
              {/* Middle section */}
              <div className="flex flex-col sm:flex-row items-end justify-between gap-4 sm:gap-0">
                <div className="mx-4 sm:mx-8">
                <CountingNumber targetNumber={320} suffix="k" />
                  <p className="text-lg sm:text-xl font-thin text-white">Satisfied Customers</p>
                </div>
                <div className="max-w-full sm:max-w-md">
                  <p className="text-base sm:text-xl text-white">
                    Were dedicated to providing farmers, businesses, and communities.
                  </p>
                </div>
              </div>
            </div>
            {/* Bottom section */}
            <div className="flex justify-center sm:justify-end">
              <div className="flex items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300">
                      <div className="grid grid-cols-2 grid-rows-2 gap-0.5">
                        <div className="h-1.5 w-1.5 rounded-sm bg-black"></div>
                        <div className="h-1.5 w-1.5 rounded-sm bg-black"></div>
                        <div className="h-1.5 w-1.5 rounded-sm bg-black"></div>
                        <div className="h-1.5 w-1.5 rounded-sm bg-black"></div>
                      </div>
                    </div>
                    <h2 className="text-6xl font-bold text-white">
                      SMARTiNNO
                    </h2>
                  </div>
                  <h2 className="text-6xl font-bold text-white">
                    ENGINEERING LTD
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

