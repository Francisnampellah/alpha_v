'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DataPoint {
  month: string;
  value: number;
}

const productivityData: DataPoint[] = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 85 },
  { month: 'Apr', value: 90 },
  { month: 'May', value: 95 },
  { month: 'Jun', value: 98 },
]

const energyData: DataPoint[] = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 85 },
  { month: 'Mar', value: 75 },
  { month: 'Apr', value: 65 },
  { month: 'May', value: 60 },
  { month: 'Jun', value: 55 },
]

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: DataPoint;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-800">{label}</p>
        <p className="text-lg font-bold text-blue-600">{payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export default function OurTechnology() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section - Process Steps */}
      <div className="bg-[#0a0f36] text-white p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <p className="text-sm text-blue-400 font-medium">OUR TECHNOLOGIES</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Cutting-Edge Innovations,
          <br />
          Driving Your Success
        </h2>

        <div className="h-px bg-gray-700 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">01.</p>
            <h3 className="font-semibold text-lg mb-4">AI-Powered Insights</h3>
            <p className="text-sm text-gray-300">Leverage artificial intelligence to make smarter, data-driven decisions.</p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">02.</p>
            <h3 className="font-semibold text-lg mb-4">IoT Connectivity</h3>
            <p className="text-sm text-gray-300">Integrate devices seamlessly for real-time monitoring and control.</p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">03.</p>
            <h3 className="font-semibold text-lg mb-4">Cloud-Based Solutions</h3>
            <p className="text-sm text-gray-300">Access your data securely from anywhere, anytime.</p>
          </div>

          <div className="bg-[#1a2150] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">04.</p>
            <h3 className="font-semibold text-lg mb-4">Sustainability Focus</h3>
            <p className="text-sm text-gray-300">Adopt eco-friendly practices to reduce your environmental impact.</p>
          </div>
        </div>

        <div className="bg-[#1a2150] rounded-xl p-4 mt-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[#1a2150]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#1a2150]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#1a2150]"></div>
            </div>
            <p className="text-sm">
              Align with Businesses that <span className="font-semibold">Choose Quality</span>
            </p>
          </div>
          <Link href="/technology" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center transition-colors">
            <span className="mr-2">Start Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom Section - Benefits */}
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="text-sm text-blue-500 font-medium">BENEFITS FROM SMARTINNO</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xs">
            Experience
            <br />
            Unmatched
            <br />
            Advantages
          </h2>

          <div className="flex-1">
            <div className="h-px bg-gray-300 mb-8"></div>
            <p className="text-gray-600 max-w-md">
              Smartinno empowers your business with innovative technologies, ensuring efficiency, scalability, and sustainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Enhanced Productivity</h3>
            <p className="text-sm text-gray-300 mb-4">
              Streamline operations with AI-driven automation and real-time analytics, reducing manual tasks by up to 60%.
            </p>
            <div className="h-48 bg-white/10 rounded-lg p-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productivityData}>
                  <defs>
                    <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#ffffff80"
                    tick={{ fill: '#ffffff80', fontSize: 12 }}
                    axisLine={{ stroke: '#ffffff40' }}
                    tickLine={{ stroke: '#ffffff40' }}
                  />
                  <YAxis 
                    stroke="#ffffff80"
                    tick={{ fill: '#ffffff80', fontSize: 12 }}
                    axisLine={{ stroke: '#ffffff40' }}
                    tickLine={{ stroke: '#ffffff40' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill="url(#productivityGradient)"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={0}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="relative h-48">
              <Image
                src="/images/iot-monitoring.jpg"
                alt="Smartinno IoT Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Real-Time Monitoring</h3>
              <p className="text-sm text-gray-600">
                Monitor your operations 24/7 with our advanced IoT sensors and analytics dashboard.
              </p>
            </div>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Energy Efficiency</h3>
            <div className="h-48 bg-white rounded-lg p-2 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={energyData}>
                  <defs>
                    <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#4b5563"
                    tick={{ fill: '#4b5563', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis 
                    stroke="#4b5563"
                    tick={{ fill: '#4b5563', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={{ stroke: '#e5e7eb' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill="url(#energyGradient)"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={0}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600">
              Optimize energy consumption with smart algorithms, reducing costs by up to 40%.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Smart Analytics</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="/images/analytics-dashboard.jpg"
                alt="Smart Analytics Dashboard"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-sm text-gray-600">
              Make data-driven decisions with our advanced analytics and predictive maintenance tools.
            </p>
          </div>

          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">24/7 Expert Support</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="/images/support-team.jpg"
                alt="Expert Support Team"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-sm text-gray-300">
              Access our dedicated support team anytime for technical assistance and optimization guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

