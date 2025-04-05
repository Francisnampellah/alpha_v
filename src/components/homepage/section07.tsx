"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Newsletter subscription for:", email)
    setEmail("")
  }

  return (
    <div className="bg-[#296880]  p-8 sm:p-12 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <p className="text-xs sm:text-sm text-blue-400 font-medium">NEWSLETTER</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to receive the latest insights, updates, and industry trends directly in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#296880] rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </a>
            {" "}and consent to receive updates from our company.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 