import Image from "next/image"
import { Play, Plus, Settings } from "lucide-react"

export default function Section_0() {
  return (
    <div className="px-16 py-8">
                <div className="flex items-center mb-16 border-gray-200 border-b pb-6">
          <div className="w-16 text-lg text-gray-400 font-bold">05</div>
          <div className="flex-1">
            <h2 className="text-xl text-black font-bold">@Etitud</h2>
            <p className="text-sm text-black">Just the board, the streets, & your trick.</p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full">Cultivating Excellence</button>
        </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-[#e6e338] text-3xl font-serif">"</span>
          </div>
          <h2 className="text-4xl text-black md:text-5xl font-bold">Call For Action</h2>
        </div>
        <div className="flex items-center">
          {/* <div className="flex -space-x-4">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
          </div> */}
          <button className="ml-1 p-2 rounded-full hover:bg-gray-100">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 border border-white/20">
            Agri-Business
          </button>
          <button className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 border border-white/20">
            Seeds
          </button>
          <button className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 border border-white/20">
            Support
          </button>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-4">
          <span className="text-white text-sm">©2025 NewTech</span>
          <button className="rounded-full h-12 w-12 bg-[#e6e338] hover:bg-[#d6d328] flex items-center justify-center">
            <Settings className="h-6 w-6 text-black" />
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="rounded-full h-16 w-16 bg-white/30 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center">
            <Play className="h-8 w-8 text-white" fill="white" />
          </button>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=3259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Agricultural field rows"
          width={1200}
          height={600}
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  )
}

