export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  featured?: boolean;
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sylvester Mwingira",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in technology innovation and business development. Passionate about creating sustainable solutions for global challenges.",
    imageUrl: "/ceo.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    },
    featured: true
  },
  {
    id: "2",
    name: "Gaudence Tesha",
    role: "CTO",
    bio: "Tech innovator specializing in AI and machine learning. Led multiple successful digital transformation projects and holds several patents in emerging technologies.",
    imageUrl: "/coo.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith"
    },
    featured: true
  },
  {
    id: "3",
    name: "Alfred Kajirunga",
    role: "Lead Engineer",
    bio: "Full-stack developer with expertise in modern web technologies. Passionate about creating scalable and maintainable solutions that drive business growth.",
    imageUrl: "/cto.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
      github: "https://github.com/mikejohnson"
    },
    featured: true
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    role: "Product Manager",
    bio: "Product strategist with a focus on user-centered design and market analysis. Experienced in bringing innovative products from concept to market success.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahwilliams",
      twitter: "https://twitter.com/sarahwilliams"
    },
    featured: true
  }
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-members`);
    if (!response.ok) {
      console.warn('Failed to fetch team members, returning mock data');
      return mockTeamMembers;
    }
    return response.json();
  } catch (error) {
    console.warn('Error fetching team members, returning mock data:', error);
    return mockTeamMembers;
  }
}

export async function getTeamMemberById(id: string): Promise<TeamMember> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team-members/${id}`);
    if (!response.ok) {
      console.warn('Failed to fetch team member, returning mock data');
      return mockTeamMembers.find(member => member.id === id) || mockTeamMembers[0];
    }
    return response.json();
  } catch (error) {
    console.warn('Error fetching team member, returning mock data:', error);
    return mockTeamMembers.find(member => member.id === id) || mockTeamMembers[0];
  }
} 