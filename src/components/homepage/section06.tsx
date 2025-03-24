import Image from "next/image"
import { Star } from "lucide-react"

export default function Section_06() {
  return (
    <>
        <div className="flex items-center mb-16 border-gray-200 border-b pb-6 mx-16">
          <div className="w-16 text-lg text-gray-400 font-bold">04</div>
          <div className="flex-1">
            <h2 className="text-xl  text-black font-bold">Testmony</h2>
            <p className="text-sm text-black ">Just the board, the streets, & your trick.</p>
          </div>
          <button className="bg-black text-gray-400 text-white px-6 py-3 rounded-full">Cultivating Excellence</button>
        </div>
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xl font-medium">04</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-500 stroke-amber-500" />
                ))}
              </div>
            </div>
          </div>

          <blockquote className="space-y-6">
            <span className="text-5xl text-gray-300">"</span>
            <h2 className="text-4xl font-semibold leading-tight text-gray-800">
              Since switching to their sustainable fertilizers, my crops have been healthier, and my yields have
              increased by 40%!
            </h2>

            <div className="pt-4">
              <p className="text-xl font-medium text-gray-800">Jon Snow</p>
              <p className="text-gray-500">King of the light</p>
            </div>
          </blockquote>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative w-80 h-96 rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1732017765181-3b0f972778a3?q=80&w=3100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Farmer in overalls and straw hat smiling in a field"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200"></div>
    </div>
    </>
  )
}

