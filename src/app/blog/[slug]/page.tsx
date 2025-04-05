"use client"

import { useState, useEffect } from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation/Navigation"
import SectionContainer from "@/components/SectionContainer"
import { getBlogPostBySlug, getRelatedPosts, type BlogPost } from "@/controllers/blogController"

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getBlogPostBySlug(resolvedParams.slug)
        setPost(data)
        
        // Fetch related posts
        const related = await getRelatedPosts(data.id)
        setRelatedPosts(related)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching the blog post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [resolvedParams.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navigation />
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#296880]"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Error Loading Blog Post</h1>
          <p className="text-gray-600 mb-8">{error || 'Post not found'}</p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-[#296880] text-white rounded-lg hover:bg-[#3798b8] transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.imageUrl || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2670&auto=format&fit=crop"}
            alt={post.title}
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
        <div className="relative z-10 h-[calc(70vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 text-gray-300"
            >
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </span>
              <span className="inline-flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.authorId}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-2"
          >
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex justify-between items-center border-t border-gray-200 pt-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#296880] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#296880] hover:text-[#3798b8] transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <SectionContainer
          sectionNumber="01"
          title="Related Posts"
          subtitle="You might also like"
          bgColor="gray"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, idx) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={relatedPost.imageUrl || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedPost.tags.slice(0, 2).map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {relatedPost.tags.length > 2 && (
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            +{relatedPost.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-2">{relatedPost.content}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Read More</span>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#296880] transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-[#296880] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest updates and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#296880] hover:bg-blue-50 font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Our Services</span>
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