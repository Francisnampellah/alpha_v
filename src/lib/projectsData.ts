export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
  features: string[];
  estTime: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "urban-farming",
    title: "Urban Farming Initiative",
    description: "A revolutionary approach to urban agriculture that maximizes space utilization while minimizing resource consumption. Our vertical farming solutions bring sustainable food production directly to urban centers.",
    imageUrl: "https://images.unsplash.com/photo-1593691509543-c55fb32e5ce9?q=80&w=2670&auto=format&fit=crop",
    technologies: ["React", "Node.js", "IoT", "Python", "TensorFlow"],
    demoUrl: "https://urban-farming-demo.com",
    githubUrl: "https://github.com/smartinno/urban-farming",
    featured: true,
    category: "Agriculture",
    features: ["Vertical Farming", "Sustainable", "Maximizes Space"],
    estTime: "2-3 years",
    impact: "High - Sustainable food production in urban areas"
  },
  {
    id: "smart-grid",
    title: "Smart Grid Solutions",
    description: "Intelligent power distribution networks that optimize electricity flow, reduce waste, and integrate renewable energy sources seamlessly into existing infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop",
    technologies: ["TypeScript", "Next.js", "GraphQL", "MongoDB", "Docker"],
    demoUrl: "https://smart-grid-demo.com",
    githubUrl: "https://github.com/smartinno/smart-grid",
    featured: true,
    category: "Energy",
    features: ["Intelligent", "Optimizes Electricity Flow", "Reduces Waste"],
    estTime: "1-2 years",
    impact: "High - Energy efficiency and sustainability"
  },
  {
    id: "water-purification",
    title: "Advanced Water Purification",
    description: "Cutting-edge water treatment technology that removes contaminants and provides clean drinking water in areas with limited access to traditional water infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2670&auto=format&fit=crop",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Redis", "AWS"],
    demoUrl: "https://water-purification-demo.com",
    githubUrl: "https://github.com/smartinno/water-purification",
    featured: false,
    category: "Water",
    features: ["Advanced", "Removes Contaminants", "Provides Clean Water"],
    estTime: "1-2 years",
    impact: "High - Access to clean water in underserved areas"
  },
  {
    id: "telemedicine",
    title: "Rural Telemedicine Network",
    description: "Connecting remote communities with medical specialists through high-quality video consultations and remote diagnostic tools.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    technologies: ["Angular", "NestJS", "MySQL", "Socket.io", "Azure"],
    demoUrl: "https://telemedicine-demo.com",
    githubUrl: "https://github.com/smartinno/telemedicine",
    featured: true,
    category: "Health",
    features: ["Connecting Remote Communities", "High-Quality Video Consultations", "Remote Diagnostic Tools"],
    estTime: "1-2 years",
    impact: "High - Improved healthcare access in rural areas"
  }
]; 