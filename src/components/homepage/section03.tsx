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
        <p className="text-lg font-bold text-[#296880]">{payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export default function OurTechnology() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section - Process Steps */}
      <div className="bg-[#3798b8] text-white p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          <p className="text-sm font-medium">OUR TECHNOLOGIES</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
          Cutting-Edge Innovations,
          <br />
          Driving Your Success
        </h2>

        <div className="h-px bg-gray-700 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#296880] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">01.</p>
            <h3 className="font-semibold text-lg mb-4">Smart Energy Management</h3>
            <p className="text-sm text-gray-300">Advanced algorithms for optimal energy consumption and cost reduction.</p>
          </div>

          <div className="bg-[#296880] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">02.</p>
            <h3 className="font-semibold text-lg mb-4">Predictive Analytics</h3>
            <p className="text-sm text-gray-300">AI-powered forecasting for energy usage and maintenance needs.</p>
          </div>

          <div className="bg-[#296880] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">03.</p>
            <h3 className="font-semibold text-lg mb-4">Real-Time Monitoring</h3>
            <p className="text-sm text-gray-300">Live tracking of energy consumption and system performance.</p>
          </div>

          <div className="bg-[#296880] p-6 rounded-xl">
            <p className="text-gray-400 mb-1">04.</p>
            <h3 className="font-semibold text-lg mb-4">Automated Optimization</h3>
            <p className="text-sm text-gray-300">Smart systems that automatically adjust for peak efficiency.</p>
          </div>
        </div>

        <div className="bg-[#296880] rounded-xl p-4 mt-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-[#296880]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-[#296880]"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#296880]"></div>
            </div>
            <p className="text-sm">
              Align with Businesses that <span className="font-semibold">Choose Quality</span>
            </p>
          </div>
          <Link href="/technology" className="bg-#3798b8 hover:bg-[#296880] text-white rounded-full px-4 py-2 flex items-center transition-colors">
            <span className="mr-2">Start Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom Section - Benefits */}
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-#3798b8"></div>
          <p className="text-sm text-#3798b8 font-medium">BENEFITS FROM SMARTINNO</p>
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
              Smartinno revolutionizes energy management with cutting-edge technology, delivering measurable cost savings and environmental benefits through intelligent automation and data-driven insights.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#3798b8] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Enhanced Productivity</h3>
            <p className="text-sm text-gray-300 mb-4">
              Streamline operations with AI-driven automation and real-time analytics, reducing manual tasks by up to 60%.
            </p>
            <div className="h-48 bg-white/10 rounded-lg p-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productivityData}>
                  <defs>
                    <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.4}/>
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
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Smartinno IoT Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Real-Time Monitoring</h3>
              <p className="text-sm text-gray-600">
                Track energy consumption patterns and system performance in real-time through our intuitive dashboard interface.
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
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.4}/>
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
              Reduce energy waste by up to 40% with our smart scheduling and load balancing technology.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Smart Analytics</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1545063328-c8e3faffa16f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="https://images.unsplash.com/photo-1545063328-c8e3faffa16f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-sm text-gray-600">
              Leverage our advanced analytics engine to predict energy needs and optimize consumption patterns.
            </p>
          </div>

          <div className="bg-[#3798b8] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">24/7 Expert Support</h3>
            <div className="relative h-48 mb-4">
              <Image
                src="https://media.istockphoto.com/id/1970475008/photo/close-up-headset-with-employee-man-hand-type-work-on-keyboard-laptop-at-desk-for-advise-or.jpg?s=1024x1024&w=is&k=20&c=ZpGoQvYpyVQPrKdDo4uxUwRI2w_KGfgk5kuF3MjXQaE="
                alt="Expert Support Team"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <p className="text-sm text-gray-300">
              Get expert guidance on energy optimization and system maintenance from our dedicated technical team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

