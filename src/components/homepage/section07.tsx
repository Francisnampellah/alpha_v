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
    <div className="bg-blue-50 p-8 sm:p-12 text-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-[#9db0eb]"></div>
            <p className="text-xs sm:text-sm text-[#9db0eb] font-medium">NEWSLETTER</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive the latest insights, updates, and industry trends directly in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-blue-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9db0eb]/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#9db0eb] text-white rounded-full font-medium hover:bg-[#296880] transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="text-[#9db0eb] hover:text-[#296880] transition-colors">
              Privacy Policy
            </a>
            {" "}and consent to receive updates from our company.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 