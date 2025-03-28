"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Mail, Phone, Clock } from "lucide-react"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/footer"
import SectionContainer from "@/components/SectionContainer"

// Company Logo component - Removing unused component or commenting out for future use
/* 
const CompanyLogo = ({ className = "h-2 w-2" }: { className?: string }) => (
  <div className="grid grid-cols-2 grid-rows-2 gap-1">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className={`${className} rounded-sm bg-white`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      />
    ))}
  </div>
)
*/

// Create our own CountingNumber component - Removing unused component or commenting out for future use
/*
const CountingNumber = ({ targetNumber, suffix = "" }: { targetNumber: number; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds animation
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const easeOutQuad = (t: number) => t * (2 - t)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      const currentCount = Math.round(targetNumber * progress)

      if (frame === totalFrames) {
        clearInterval(counter)
      }

      setCount(currentCount)
    }, frameDuration)

    return () => clearInterval(counter)
  }, [targetNumber])

  return (
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      <span>{count}</span>
      {suffix}
    </div>
  )
}
*/

export default function AboutPage() {
  // Removing unused scrolled state or changing to use it in the future
  // const [scrolled, setScrolled] = useState(false)
  
  // If the scrolled state is needed elsewhere in the future, keep the effect but use it properly
  /*
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  */

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in software development, Dr. Johnson leads our vision for innovative software solutions.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael brings expertise in software architecture and development, driving our technical innovation and product development.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Research",
      bio: "Elena&apos;s background in computer science helps shape our approach to developing innovative software solutions.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "James Wilson",
      role: "Operations Director",
      bio: "James ensures our solutions are implemented efficiently and effectively across all client projects.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  // Updated company values
  const values = [
    { title: "Innovation", description: "We embrace cutting-edge technology to deliver future-ready solutions.", icon: "💡" },
    { title: "Integrity", description: "We uphold the highest standards of professionalism and ethics in our work.", icon: "⚖️" },
    { title: "Customer Focus", description: "Our solutions are designed to meet the unique needs of our clients.", icon: "🎯" },
    { title: "Excellence", description: "We strive for top-quality service delivery in every project.", icon: "🏆" },
    { title: "Collaboration", description: "We foster strong partnerships to achieve shared success.", icon: "🤝" },
  ]

  // Updated milestones
  const milestones = [
    { year: "2015", title: "Company Founded", description: "SMARTiNNO was established in Dar es Salaam, Tanzania, with a mission to revolutionize businesses through innovative IT solutions." },
    { year: "2018", title: "First Major Project", description: "Launched AssetPro, a robust asset management system for businesses." },
    { year: "2020", title: "FinTech Innovation", description: "Developed digital payment and e-wallet systems, enhancing financial accessibility and security." },
    { year: "2022", title: "Agribusiness Solutions", description: "Introduced smart solutions for farm management and supply chain optimization in the agriculture sector." },
    { year: "2023", title: "E-Government Solutions", description: "Digitized government processes to improve transparency and citizen services." },
  ]

  // Updated statistics
  const stats = [
    { value: "300+", label: "Completed Projects" },
    { value: "15+", label: "Industries Served" },
    { value: "10+", label: "Years of Experience" },
    { value: "100+", label: "Team Members" },
  ]

  // Updated contact details
  const contactDetails = {
    address: "MA 2 Seabreeze Complex, Kilongawima Road, Mbezi Beach-Kinondoni, Dar es Salaam, Tanzania",
    phone: "+255-762-111-129",
    email: "info@smartinno.net",
    website: "https://www.smartinno.net",
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Shorter for inner pages */}
      <div className="relative h-[60vh] sm:h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Software development and innovation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f36]/90 via-[#0a0f36]/70 to-transparent"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" showCTA={true} ctaText="Contact Us" ctaLink="/contact" />

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(60vh-80px)] sm:h-[calc(70vh-80px)] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-xs sm:text-sm text-blue-400 font-medium">ABOUT SMARTINNO ENGINEERING</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            >
              Transforming Business Through Technology
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl"
            >
              We&apos;re on a mission to create innovative software solutions that drive business growth and digital excellence
            </motion.p>

            {/* Stats Section in a row instead of grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-8 max-w-2xl"
            >
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="mr-4 sm:mr-8">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <SectionContainer
        sectionNumber="01"
        title="Our Story"
        subtitle="The journey of innovation and growth"
        showButton={true}
        buttonText="Read More"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2015, SMARTiNNO began with a simple yet powerful vision: to revolutionize business operations
                through innovative software solutions. Our founder, Dr. Sarah Johnson, recognized that traditional
                business processes were facing unprecedented challenges in a rapidly evolving digital landscape.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small team of passionate engineers and technology experts has grown into a global
                company at the forefront of digital innovation. Today, we work with businesses, enterprises, and
                organizations across the world to implement robust, scalable solutions.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SMARTiNNO team collaborating on software solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Values Section */}
      <SectionContainer
        sectionNumber="02"
        title="Our Core Values"
        subtitle="Principles that guide our approach"
        bgColor="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Our Journey Section */}
      <SectionContainer
        sectionNumber="03"
        title="Our Journey"
        subtitle="Key milestones that have shaped our growth"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:translate-x-px"></div>

          {/* Timeline events */}
          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm transform -translate-x-2 md:-translate-x-2.5"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} pl-6 sm:pl-8 md:pl-0`}>
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700">{milestone.description}</p>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Our Team Section */}
      <SectionContainer
        sectionNumber="04"
        title="Meet Our Team"
        subtitle="The experts behind our innovation"
        bgColor="gray"
        showButton={true}
        buttonText="View Full Team"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm sm:text-base text-blue-600 mb-2 sm:mb-3">{member.role}</p>
                <p className="text-sm sm:text-base text-gray-700 line-clamp-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-[#0a0f36] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Interested in learning more about our solutions or discussing a potential project? Our team is ready to
                help.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">Visit Us</h3>
                    <p className="text-sm sm:text-base text-gray-300">{contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">Email Us</h3>
                    <p className="text-sm sm:text-base text-gray-300">{contactDetails.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">Call Us</h3>
                    <p className="text-sm sm:text-base text-gray-300">{contactDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">Business Hours</h3>
                    <p className="text-sm sm:text-base text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm sm:text-base text-gray-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#131842] p-6 sm:p-8 rounded-xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1c2254] border border-[#2a325e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1c2254] border border-[#2a325e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1c2254] border border-[#2a325e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#1c2254] border border-[#2a325e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business Operations?</h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8">
              Let&apos;s work together to create innovative software solutions for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>View Our Projects</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

