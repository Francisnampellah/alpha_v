export default function Section03() {
    return (
      <div className="m-8 p-4 rounded-xl bg-white font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Column - Image and Stats */}
          <div className="relative w-[600px] h-[700px] rounded-3xl overflow-hidden bg-slate-400">
            <img
              src="https://images.unsplash.com/photo-1726137570713-2458b137684f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTIwfHxURUNITk9MT0dZfGVufDB8fDB8fHww"
              alt="Tractor working in a field"
              className=" object-cover"
            />
  
            {/* Top buttons */}
            <div className="absolute top-6 right-6 flex gap-2">
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-5 py-2 rounded-full text-sm">
                Agri-Business
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-5 py-2 rounded-full text-sm">
                Support
              </button>
            </div>
  
            {/* Stats box */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 w-48">
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold">
                  86<span className="text-3xl">%</span>
                </span>
                <div className="bg-yellow-300 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mt-1">Increase in Yields</p>
            </div>
          </div>
  
          {/* Right Column - Content */}
          <div className="flex flex-col justify-between py-6">
            {/* Top navigation */}
            <div className="mb-8">
              <nav className="flex justify-between items-center">
                <div className="flex space-x-8">
                  <a href="#" className="text-gray-400 hover:text-gray-700">
                    Crop Solutions
                  </a>
                  <div className="relative">
                    <a href="#" className="font-medium border border-gray-300 rounded-full px-6 py-1 relative">
                      Farm Tech
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></span>
                    </a>
                  </div>
                  <a href="#" className="text-gray-400 hover:text-gray-700">
                    Sustainable
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-700">
                    Development
                  </a>
                </div>
                <div className="text-gray-400">02</div>
              </nav>
            </div>
  
            {/* Main content */}
            <div className="flex-grow flex flex-col justify-center mb-8">
              <h2 className="text-4xl font-bold text-center leading-tight mb-8">
                Whether you're a small farm or a large-scale operation, we're here to help you grow smarter, faster, and
                more sustainably.
              </h2>
  
              <div className="flex justify-center">
                <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2">
                  Get Started
                  <span className="bg-yellow-300 rounded-md p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
  
            {/* Bottom stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-between">
                <span className="text-xl font-medium">Growth</span>
                <div className="bg-yellow-300 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
  
                {/* Bar chart visualization */}
                <div className="flex items-end h-16 space-x-1 ml-4">
                  {[40, 70, 30, 90, 50, 80, 60, 100, 20, 75, 45, 65].map((height, index) => (
                    <div
                      key={index}
                      className={`w-2 rounded-t-sm ${index < 9 ? "bg-black" : "bg-gray-200"}`}
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
  
              <div className="bg-yellow-300 rounded-xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Eficiency</span>
                  <div className="bg-black rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-lg">up to</div>
                  <div className="text-7xl font-bold">300%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  