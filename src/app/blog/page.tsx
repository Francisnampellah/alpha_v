"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Filter, Search, ArrowRight, ChevronDown } from "lucide-react"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation/Navigation"
import SectionContainer from "@/components/SectionContainer"
import { getBlogPosts, type BlogPost } from "@/controllers/blogController"

// Note: We'll create our own CategoryPill component inline to match the styling
const CategoryPill = ({ label }: { label: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
    >
      {label}
    </motion.span>
  )
}

export default function BlogPage() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedTag, setSelectedTag] = useState("all")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  console.log(scrolled)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts()
        setPosts(data)
        setFilteredPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching blog posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    if (selectedTag === "all" && searchQuery === "") {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(
        posts.filter((post) => {
          const matchesTag = selectedTag === "all" || 
            post.tags.some(tag => 
              tag.toLowerCase() === selectedTag.toLowerCase()
            )
          
          const matchesSearch = searchQuery === "" || 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            post.content.toLowerCase().includes(searchQuery.toLowerCase())
          
          return matchesTag && matchesSearch
        })
      )
    }
  }, [selectedTag, searchQuery, posts])

  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort()

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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Error Loading Blog Posts</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#296880] text-white rounded-lg hover:bg-[#3798b8] transition-colors"
          >
            Try Again
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Shorter for inner pages */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2670&auto=format&fit=crop"
            alt="SmartInno Engineering - Blog"
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
        <div className="relative z-10 h-[calc(70vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              <CategoryPill label="Technology" />
              <CategoryPill label="Innovation" />
              <CategoryPill label="Insights" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Blog
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Explore our latest insights, industry trends, and technological innovations
            </motion.p>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <SectionContainer
        sectionNumber="01"
        title="Latest Posts"
        subtitle="Discover our latest insights and updates"
      >
        {/* Filter and Search Controls */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-#3798b8 focus:border-transparent"
            />
          </div>

          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <select
              className="pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-#3798b8 focus:border-transparent"
              aria-label="Filter posts by tag"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="all">All Tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag.toLowerCase()}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Posts Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredPosts.length} posts found</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-2">{post.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Read More</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#296880] transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No posts found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedTag("all")
                setSearchQuery("")
              }}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </SectionContainer>

      {/* Blog Categories Section */}
      <SectionContainer
        sectionNumber="02"
        title="Blog Categories"
        subtitle="Explore posts by topic"
        bgColor="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Technology",
              count: posts.filter(p => p.tags.some(t => ["Technology", "AI", "Innovation"].includes(t))).length,
              icon: "💻",
              description: "Latest trends and developments in technology"
            },
            {
              title: "Business",
              count: posts.filter(p => p.tags.some(t => ["Business", "Digital Transformation"].includes(t))).length,
              icon: "💼",
              description: "Insights on business transformation and growth"
            },
            {
              title: "Sustainability",
              count: posts.filter(p => p.tags.some(t => ["Sustainability", "Green Tech", "Environment"].includes(t))).length,
              icon: "🌱",
              description: "Sustainable technology and environmental impact"
            },
            {
              title: "Innovation",
              count: posts.filter(p => p.tags.some(t => ["Innovation", "Research", "Development"].includes(t))).length,
              icon: "💡",
              description: "Breakthrough innovations and research"
            },
            {
              title: "Digital Transformation",
              count: posts.filter(p => p.tags.some(t => ["Digital Transformation", "Technology", "Business"].includes(t))).length,
              icon: "🔄",
              description: "Digital transformation strategies and success stories"
            },
            {
              title: "Industry Insights",
              count: posts.filter(p => p.tags.some(t => ["Industry", "Trends", "Analysis"].includes(t))).length,
              icon: "📊",
              description: "Industry analysis and market trends"
            }
          ].map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-700 mb-3">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#296880]">{category.count} posts</span>
                <button
                  onClick={() => {
                    setSelectedTag(category.title.toLowerCase())
                    document.getElementById("blog-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-sm font-medium text-gray-900 hover:text-[#296880] transition-colors flex items-center gap-1"
                >
                  <span>View all</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

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