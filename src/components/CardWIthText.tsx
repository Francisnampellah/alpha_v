interface TechCardProps {
    image: string
    title: string
    description: string
  }
  
  export default function TechCard({ image, title, description }: TechCardProps) {
    return (
      <div className="flex-shrink-0 w-72 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
        {/* Image section */}
        <div className="relative h-48 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
  
        {/* Text section */}
        <div className="p-4 flex flex-col h-36">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
          </div>
          <div className="mt-auto flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">©2025</p>
              <p className="text-xs font-medium text-gray-700">SMARTiNNO</p>
            </div>
            <button className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  