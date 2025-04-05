'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import Footer from '@/components/footer';
import SectionContainer from '@/components/SectionContainer';

const CareerPage = () => {
  const benefits = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'We offer market-competitive compensation packages with regular reviews and performance-based incentives.'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Inclusive Culture',
      description: 'Join a diverse and collaborative environment where every voice matters and innovation thrives.'
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning through training, mentorship, and exposure to cutting-edge technologies.'
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to support your lifestyle and productivity.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smart_inno-01.jpeg"
            alt="Join our team"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" showCTA={true} ctaText="Apply Now" ctaLink="/career/apply" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-sm text-blue-400 font-medium">JOIN SMARTINNO ENGINEERING</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Build Tanzania&apos;s
              <br />
              Technology Future
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Join our team of innovators and help shape the future of technology in Tanzania. We&apos;re looking for passionate individuals who want to make a difference through cutting-edge solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/career/apply"
                className="bg-white text-[#296880] hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#open-positions"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>View Open Positions</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <SectionContainer
        sectionNumber="01"
        title="Why Join Us?"
        subtitle="Discover the benefits of working at SMARTINNO Engineering"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="text-[#296880] mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Open Positions Section */}
      <SectionContainer
        sectionNumber="02"
        title="Open Positions"
        subtitle="Find your next career opportunity"
        bgColor="gray"
      >
        <div id="open-positions" className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              'Software Engineer',
              'Cloud Solutions Architect',
              'Cybersecurity Specialist',
              'AI/ML Engineer',
              'DevOps Engineer',
              'Blockchain Developer'
            ].map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{position}</h3>
                <p className="text-gray-600 mb-4">Full-time • Dar es Salaam, Tanzania</p>
                <Link
                  href={`/career/positions/${position.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#296880] font-semibold hover:text-blue-700 inline-flex items-center gap-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[#296880] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Take the first step towards an exciting career at SMARTINNO Engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career/apply"
                className="bg-white text-[#296880] hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Learn About Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerPage;
