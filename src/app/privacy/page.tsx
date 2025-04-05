"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Lock, Eye, FileText, Mail } from "lucide-react"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/footer"
import SectionContainer from "@/components/SectionContainer"

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false)
  console.log(scrolled)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Privacy and data protection"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" showCTA={true} ctaText="Contact Us" ctaLink="/contact" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-sm text-blue-400 font-medium">PRIVACY POLICY</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Privacy & Data Protection
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Your privacy and data security are our top priorities. Learn how we protect and handle your information.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <SectionContainer
        sectionNumber="01"
        title="Our Commitment to Privacy"
        subtitle="How we protect your data"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At SMARTiNNO, we take your privacy seriously. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our services. We are committed to protecting your personal data and ensuring your privacy rights are respected.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-[#296880] mt-1 flex-shrink-0" />
                <span>Personal information (name, email, contact details)</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-5 h-5 text-[#296880] mt-1 flex-shrink-0" />
                <span>Account credentials and security information</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-[#296880] mt-1 flex-shrink-0" />
                <span>Project-related information and documentation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6">Key Principles</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Data Minimization</h4>
                <p className="text-gray-700">We only collect data that is necessary for providing our services.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-gray-700">We implement robust security measures to protect your data.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transparency</h4>
                <p className="text-gray-700">We are clear about how we use and protect your information.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Data Usage Section */}
      <SectionContainer
        sectionNumber="02"
        title="How We Use Your Data"
        subtitle="Understanding our data processing practices"
        bgColor="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Service Delivery</h3>
            <p className="text-gray-700">To provide and maintain our services, process your requests, and communicate with you about your projects.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Analytics</h3>
            <p className="text-gray-700">To analyze and improve our services, understand user behavior, and enhance user experience.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3">Security</h3>
            <p className="text-gray-700">To protect our services, prevent fraud, and ensure the security of our systems and users.</p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Data Protection Section */}
      <SectionContainer
        sectionNumber="03"
        title="Data Protection Measures"
        subtitle="How we safeguard your information"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Our Security Measures</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#296880] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Encryption</h4>
                  <p className="text-gray-700">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#296880] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Access Controls</h4>
                  <p className="text-gray-700">Strict access controls and authentication mechanisms protect your data.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#296880] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Regular Audits</h4>
                  <p className="text-gray-700">We conduct regular security audits and vulnerability assessments.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6">Your Rights</h3>
            <div className="space-y-4">
              <p className="text-gray-700">You have the right to:</p>
              <ul className="space-y-3 text-gray-700">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Object to data processing</li>
                <li>• Data portability</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-[#296880] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Our team is here to help you understand how we protect your data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#296880] hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:privacy@smartinno.com"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Privacy Team</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
