export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const mockProjects: Project[] = [
  {
    id: "safari-pro",
    title: "SafariPro Booking and Tour App",
    description: "An innovative mobile application leveraging AI and Virtual Reality (VR) to offer users an interactive and personalized travel planning experience. Features include personalized tour recommendations, VR previews of destinations, easy booking, and integration with local tour operators.",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2670&auto=format&fit=crop",
    technologies: ["iOS", "Android", "AI", "VR", "Cloud Computing", "Payment Gateway"],
    demoUrl: "https://safari-pro-demo.com",
    githubUrl: "https://github.com/smartinno/safari-pro",
    featured: true
  },
  {
    id: "asset-pro",
    title: "AssetPro App",
    description: "An advanced asset management mobile application helping organizations efficiently manage, track, and maintain physical and digital assets throughout their lifecycle. Features include real-time tracking, predictive maintenance, and blockchain-secured data management.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    technologies: ["React Native", "IoT", "AI", "Blockchain", "Cloud Storage"],
    demoUrl: "https://asset-pro-demo.com",
    githubUrl: "https://github.com/smartinno/asset-pro",
    featured: true
  },
  {
    id: "sacco-pro",
    title: "SaccoPro Super App",
    description: "A transformative financial mobile platform for Savings and Credit Cooperative Organizations (SACCOs). Simplifies financial management, ensures secure transactions, and automates administrative processes with features for member management, loan processing, and financial reporting.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
    technologies: ["Java", "Kotlin", "Swift", "Django", "Spring Boot", "Mobile Money APIs"],
    demoUrl: "https://sacco-pro-demo.com",
    githubUrl: "https://github.com/smartinno/sacco-pro",
    featured: true
  },
  {
    id: "connect-pro",
    title: "ConnectPro Workflow Automation Platform",
    description: "A dynamic workflow automation solution enhancing organizational efficiency and collaboration. Provides tools for task management, approvals, notifications, and document management with real-time monitoring and reporting capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    technologies: ["React", "Angular", "Java Spring", "PostgreSQL", "Cloud Computing"],
    demoUrl: "https://connect-pro-demo.com",
    githubUrl: "https://github.com/smartinno/connect-pro",
    featured: true
  }

];

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    if (!response.ok) {
      console.warn('Failed to fetch projects, returning mock data');
      return mockProjects;
    }
    return response.json();
  } catch (error) {
    console.warn('Error fetching projects, returning mock data:', error);
    return mockProjects;
  }
}

export async function getProjectById(id: string): Promise<Project> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`);
    if (!response.ok) {
      console.warn('Failed to fetch project, returning mock data');
      return mockProjects.find(project => project.id === id) || mockProjects[0];
    }
    return response.json();
  } catch (error) {
    console.warn('Error fetching project, returning mock data:', error);
    return mockProjects.find(project => project.id === id) || mockProjects[0];
  }
} 