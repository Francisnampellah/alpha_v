"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FiCpu, FiCode, FiCloud, FiShield } from "react-icons/fi";

const technologies = [
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Advanced algorithms powering intelligent solutions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Cloud Computing",
    description: "Scalable infrastructure for modern applications",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FiCloud className="w-8 h-8" />,
    title: "Edge Computing",
    description: "Real-time processing at the network edge",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Advanced protection for digital assets",
    color: "from-red-500 to-orange-500"
  }
];

export default function Section_05() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex);
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering businesses with innovative technology solutions that drive growth and transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`text-${tech.color.split('-')[1]}-500 mb-4`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link 
            href="/technology"
            className="group relative bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10">Discover Our Technology Stack</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}