export type BlogBlock = {
  type: 'text' | 'image' | 'heading' | 'list';
  content: string;
  level?: number;  // For headings (h1, h2, etc.)
  items?: string[];  // For lists
  alt?: string;  // For images
  src?: string;  // For images
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  authorId: string
  imageUrl: string
  tags: string[]
  published: boolean
  content: string
  blocks: BlogBlock[]
  createdAt: string
  updatedAt: string
}

// Mock data for development
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Business",
    slug: "future-of-ai-in-business",
    authorId: "author1",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
    tags: ["AI", "Business", "Technology", "Innovation"],
    published: true,
    content: "Artificial Intelligence is transforming the way businesses operate...",
    blocks: [],
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T10:00:00Z"
  },
  {
    id: "2",
    title: "Sustainable Technology Solutions",
    slug: "sustainable-technology-solutions",
    authorId: "author2",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop",
    tags: ["Sustainability", "Green Tech", "Environment"],
    published: true,
    content: "As the world becomes more environmentally conscious...",
    blocks: [],
    createdAt: "2024-03-14T15:30:00Z",
    updatedAt: "2024-03-14T15:30:00Z"
  },
  {
    id: "3",
    title: "Digital Transformation in Africa",
    slug: "digital-transformation-africa",
    authorId: "author1",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop",
    tags: ["Digital Transformation", "Africa", "Technology"],
    published: true,
    content: "Africa is experiencing a rapid digital transformation...",
    blocks: [],
    createdAt: "2024-03-13T09:15:00Z",
    updatedAt: "2024-03-13T09:15:00Z"
  }
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // In a real app, this would be an API call
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to fetch blog posts, using mock data:', error)
    return mockBlogPosts
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // In a real app, this would be an API call
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`)
    if (!response.ok) {
      throw new Error('Failed to fetch blog post')
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to fetch blog post, using mock data:', error)
    return mockBlogPosts.find(post => post.slug === slug) || null
  }
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    // In a real app, this would be an API call
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${currentSlug}/related?limit=${limit}`)
    if (!response.ok) {
      throw new Error('Failed to fetch related posts')
    }
    return await response.json()
  } catch (error) {
    console.warn('Failed to fetch related posts, using mock data:', error)
    // Filter out the current post and return random posts
    return mockBlogPosts
      .filter(post => post.slug !== currentSlug)
      .sort(() => Math.random() - 0.5)
      .slice(0, limit)
  }
} 