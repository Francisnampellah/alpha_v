"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-react"
import Navigation from "@/components/navigation/Navigation"
import Footer from "@/components/footer"

// Sample blog post data - In a real app, this would come from an API or CMS
const blogPost = {
  id: 1,
  title: "The Future of Digital Transformation in Business",
  excerpt: "Explore how businesses are leveraging technology to stay competitive in the digital age.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  category: "Digital Transformation",
  date: "March 15, 2024",
  readTime: "5 min read",
  author: "Dr. Sarah Johnson",
  authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2670&auto=format&fit=crop",
  content: `
    <p>The landscape of business is undergoing a profound transformation, driven by rapid technological advancements and changing market dynamics. In this comprehensive exploration, we'll dive deep into how businesses are adapting to the digital age and what the future holds.</p>

    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" alt="Digital Transformation" class="my-8 rounded-lg shadow-lg" />

    <h2>The Digital Imperative</h2>
    <p>In today's fast-paced business environment, digital transformation is no longer a choice but a necessity. Companies across industries are recognizing that their survival and growth depend on their ability to adapt to digital technologies and processes.</p>

    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop" alt="Business Technology" class="my-8 rounded-lg shadow-lg" />

    <h2>Key Drivers of Digital Transformation</h2>
    <ul>
      <li>Customer Expectations: Modern consumers demand seamless, personalized experiences across all channels.</li>
      <li>Operational Efficiency: Digital tools enable businesses to streamline processes and reduce costs.</li>
      <li>Data-Driven Decision Making: Access to real-time data helps companies make informed strategic decisions.</li>
      <li>Competitive Advantage: Early adopters of digital transformation often gain significant market advantages.</li>
    </ul>

    <h2>Technologies Shaping the Future</h2>
    <p>Several emerging technologies are playing pivotal roles in business transformation:</p>
    <ul>
      <li>Artificial Intelligence and Machine Learning</li>
      <li>Cloud Computing and Edge Computing</li>
      <li>Internet of Things (IoT)</li>
      <li>5G Networks</li>
      <li>Blockchain Technology</li>
    </ul>

    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" alt="Team Collaboration" class="my-8 rounded-lg shadow-lg" />

    <h2>Challenges and Solutions</h2>
    <p>While the benefits of digital transformation are clear, organizations face several challenges:</p>
    <ul>
      <li>Legacy Systems Integration</li>
      <li>Cybersecurity Concerns</li>
      <li>Skill Gaps and Workforce Training</li>
      <li>Change Management</li>
      <li>ROI Measurement</li>
    </ul>

    <h2>Best Practices for Success</h2>
    <p>To ensure successful digital transformation, organizations should:</p>
    <ul>
      <li>Develop a clear digital strategy aligned with business goals</li>
      <li>Foster a culture of innovation and continuous learning</li>
      <li>Invest in the right technologies and infrastructure</li>
      <li>Prioritize cybersecurity and data protection</li>
      <li>Measure and track progress against defined KPIs</li>
    </ul>

    <h2>Looking Ahead</h2>
    <p>The future of digital transformation will be characterized by:</p>
    <ul>
      <li>Greater integration of AI and automation</li>
      <li>Enhanced focus on sustainability and green technology</li>
      <li>Increased emphasis on customer experience</li>
      <li>More sophisticated data analytics capabilities</li>
      <li>Evolving workplace dynamics and collaboration tools</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Digital transformation is an ongoing journey that requires commitment, vision, and adaptability. Organizations that embrace this transformation and invest in the right technologies and processes will be better positioned to thrive in the digital age.</p>
  `,
  relatedPosts: [
    {
      id: 2,
      title: "Building Scalable Software Solutions",
      excerpt: "Learn the key principles and best practices for creating scalable software architectures.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630ec2f?q=80&w=2669&auto=format&fit=crop",
      category: "Software Development",
      date: "March 10, 2024",
      readTime: "7 min read",
      author: "Michael Chen",
    },
    {
      id: 3,
      title: "The Role of AI in Modern Business",
      excerpt: "Discover how artificial intelligence is reshaping business operations and decision-making.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
      category: "Artificial Intelligence",
      date: "March 5, 2024",
      readTime: "6 min read",
      author: "Elena Rodriguez",
    },
  ],
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80"></div>
        </div>

        {/* Navigation */}
        <Navigation variant="transparent" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <p className="text-xs sm:text-sm text-blue-400 font-medium">{blogPost.category}</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            >
              {blogPost.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6 text-sm text-gray-300"
            >
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blogPost.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </span>
              <span className="inline-flex items-center gap-1">
                <User className="w-4 h-4" />
                {blogPost.author}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={blogPost.authorImage}
                alt={blogPost.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{blogPost.author}</h3>
              <p className="text-sm text-gray-600">Author</p>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPost.relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 