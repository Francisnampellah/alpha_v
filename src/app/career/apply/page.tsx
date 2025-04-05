'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Upload, Send } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import Footer from '@/components/footer';
import SectionContainer from '@/components/SectionContainer';

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Apply for a position"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" showCTA={false} />

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(40vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-white hover:text-blue-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Careers</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-sm text-blue-400 font-medium">APPLY NOW</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Apply for a Position
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
            >
              Fill out the application form below to start your journey with SMARTiNNO
            </motion.p>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <SectionContainer
        sectionNumber="01"
        title="Application Form"
        subtitle="Please provide your details and documents"
      >
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#3798b8 focus:border-#3798b8"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#3798b8 focus:border-#3798b8"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#3798b8 focus:border-#3798b8"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#3798b8 focus:border-#3798b8"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Position Applied For
              </label>
              <select
                id="position"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#3798b8 focus:border-#3798b8"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              >
                <option value="">Select a position</option>
                <option value="software-engineer">Software Engineer</option>
                <option value="product-manager">Product Manager</option>
                <option value="ux-designer">UX Designer</option>
                <option value="data-scientist">Data Scientist</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="resume"
                      className="relative cursor-pointer rounded-md font-medium text-[#296880] hover:text-#3798b8 focus-within:outline-none focus-within:ring-2 focus-within:ring-#3798b8 focus-within:ring-offset-2"
                    >
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 10MB</p>
                </div>
              </div>
              {formData.resume && (
                <p className="mt-2 text-sm text-gray-500">
                  Selected file: {formData.resume.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#3798b8 focus:border-#3798b8"
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Tell us why you're interested in joining SMARTiNNO and how your experience aligns with the position..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#296880] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Submit Application</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </SectionContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApplyPage; 