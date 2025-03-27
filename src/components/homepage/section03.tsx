import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ChemicalSupplyService() {
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 flex items-center transition-colors">
            <span className="mr-2">Start Now</span>
            <ArrowRight size={16} />
          </button>
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
            <p className="text-sm text-gray-300 mb-8">
              Achieve higher efficiency and output with our advanced solutions.
            </p>
            <div className="h-24 bg-gradient-to-r from-blue-900 to-transparent rounded-lg"></div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image
              src="https://example.com/technology-image.jpg"
              alt="Smartinno technology"
              width={400}
              height={300}
              className="w-full h-24 object-cover"
            />
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-4 h-4 text-gray-500">⚙️</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Ensure seamless operations with reliable and consistent solutions.</p>
          </div>

          <div className="bg-gray-200 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Tailored Solutions</h3>
            <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-blue-500 text-4xl">💧</div>
            </div>
          </div>

          <div className="bg-[#0a0f36] text-white p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">24/7 Expert Support</h3>
            <div className="w-full h-40 bg-blue-900/30 rounded-lg flex items-center justify-center">
              <div className="text-white text-4xl">🎧</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

