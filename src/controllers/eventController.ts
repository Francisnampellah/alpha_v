export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string | null;
  imageUrl: string | null;
  isVirtual: boolean;
  registrationUrl: string | null;
  content: any | null;
  blocks: any | null;
  createdAt: string;
  updatedAt: string;
  categories?: string[];
  status?: string;
  fullDescription?: string;
  venue?: string;
  address?: string;
  organizer?: string;
  speakers?: Array<{ name: string; role: string }>;
  schedule?: Array<{ time: string; activity: string }>;
  gallery?: string[];
}

const mockEvents: Event[] = [
  // Upcoming Events
  {
    id: "ai-ml-summit",
    title: "AI & ML Innovation Summit",
    description: "Explore the latest advancements in artificial intelligence and machine learning with industry leaders.",
    date: "2025-05-15",
    location: "Dar es Salaam, Tanzania",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    isVirtual: false,
    registrationUrl: "https://example.com/register",
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Conference", "AI", "Machine Learning"],
    status: "Upcoming",
    fullDescription: "Join us for the AI & ML Innovation Summit, where we'll explore how artificial intelligence and machine learning are transforming businesses in Tanzania and beyond. Learn about implementing AI solutions, data-driven decision making, and the future of intelligent automation.",
    venue: "Dar es Salaam Institute of Technology",
    address: "Dar es Salaam, Tanzania",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Dr. Sarah Chen", role: "AI Research Director" },
      { name: "Michael Roberts", role: "ML Solutions Architect" },
      { name: "Lisa Thompson", role: "Tech Innovation Lead" }
    ],
    schedule: [
      { time: "09:00 AM", activity: "Registration and Welcome Coffee" },
      { time: "10:00 AM", activity: "Opening Ceremony" },
      { time: "11:00 AM", activity: "Keynote: Future of AI in Tanzania" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "cybersecurity-workshop",
    title: "Cybersecurity & Blockchain Workshop",
    description: "Learn about robust protection against digital threats and secure blockchain solutions.",
    date: "2025-06-22",
    location: "Virtual Event",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop",
    isVirtual: true,
    registrationUrl: "https://example.com/register2",
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Workshop", "Cybersecurity", "Blockchain"],
    status: "Upcoming",
    fullDescription: "Join our comprehensive workshop on cybersecurity and blockchain technology. Learn about protecting digital assets, implementing secure blockchain solutions, and best practices for data protection in the Tanzanian context.",
    venue: "Virtual Platform",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Dr. James Wilson", role: "Cybersecurity Expert" },
      { name: "Emma Green", role: "Blockchain Solutions Architect" }
    ],
    schedule: [
      { time: "09:30 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Welcome Address" },
      { time: "11:00 AM", activity: "Keynote: Digital Security in Modern Business" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "cloud-computing-workshop",
    title: "Cloud Computing & DevOps Workshop",
    description: "Master cloud technologies and DevOps practices for efficient software delivery.",
    date: "2025-07-10",
    location: "Dar es Salaam, Tanzania",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
    isVirtual: false,
    registrationUrl: "https://example.com/register3",
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Workshop", "Cloud Computing", "DevOps"],
    status: "Upcoming",
    fullDescription: "Learn about cloud computing and DevOps practices to streamline your development and operations. This workshop covers AWS, Azure, and Google Cloud Platform, along with modern DevOps tools and practices.",
    venue: "Smartinno Engineering Hub",
    address: "Dar es Salaam, Tanzania",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Alex Kumar", role: "Cloud Architect" },
      { name: "Sarah Martinez", role: "DevOps Engineer" }
    ],
    schedule: [
      { time: "10:00 AM", activity: "Introduction to Cloud Computing" },
      { time: "11:30 AM", activity: "Hands-on AWS Workshop" },
      { time: "02:00 PM", activity: "Azure Deployment Lab" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "iot-robotics-conference",
    title: "IoT & Robotics Innovation Conference",
    description: "Explore the future of connected devices and intelligent automation.",
    date: "2025-08-05",
    location: "Dar es Salaam, Tanzania",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    isVirtual: false,
    registrationUrl: "https://example.com/register4",
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Conference", "IoT", "Robotics"],
    status: "Upcoming",
    fullDescription: "Join us for the IoT & Robotics Innovation Conference, where we'll explore how connected devices and intelligent automation are transforming industries in Tanzania. Learn about implementing IoT solutions and robotics applications in various sectors.",
    venue: "Dar es Salaam Convention Centre",
    address: "Dar es Salaam, Tanzania",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Dr. Robert Chen", role: "IoT Solutions Architect" },
      { name: "Maria Garcia", role: "Robotics Engineer" }
    ],
    schedule: [
      { time: "09:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Keynote: Future of IoT in Tanzania" },
      { time: "11:30 AM", activity: "Robotics Workshop" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  // Past Events
  {
    id: "web-development-bootcamp",
    title: "Software Engineering Bootcamp",
    description: "Intensive training on modern software development technologies and frameworks.",
    date: "2023-12-15",
    location: "Virtual Event",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2670&auto=format&fit=crop",
    isVirtual: true,
    registrationUrl: null,
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Workshop", "Software Engineering", "Training"],
    status: "Completed",
    fullDescription: "A comprehensive bootcamp covering modern software development technologies including React, Node.js, and cloud deployment. Focused on empowering Tanzanian youth with practical software development skills.",
    venue: "Virtual Platform",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "John Smith", role: "Senior Developer" },
      { name: "Emily Brown", role: "Frontend Expert" }
    ],
    schedule: [
      { time: "10:00 AM", activity: "Introduction to Modern Web Dev" },
      { time: "11:30 AM", activity: "React Workshop" },
      { time: "02:00 PM", activity: "Backend Development" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "digital-transformation-summit",
    title: "Digital Transformation Summit",
    description: "Explore how technology is transforming businesses and organizations.",
    date: "2023-11-20",
    location: "Dar es Salaam, Tanzania",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    isVirtual: false,
    registrationUrl: null,
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Conference", "Digital Transformation", "Innovation"],
    status: "Completed",
    fullDescription: "The Digital Transformation Summit brought together business leaders and tech experts to discuss how technology is reshaping organizations in Tanzania. Focused on practical implementation strategies and success stories.",
    venue: "Dar es Salaam Institute of Technology",
    address: "Dar es Salaam, Tanzania",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Dr. David Wilson", role: "Digital Transformation Director" },
      { name: "Sophie Chen", role: "Innovation Lead" }
    ],
    schedule: [
      { time: "09:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Keynote: Digital Future of Tanzania" },
      { time: "11:30 AM", activity: "Transformation Workshop" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development Workshop",
    description: "Learn to build cross-platform mobile applications using modern frameworks.",
    date: "2023-10-10",
    location: "Virtual Event",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    isVirtual: true,
    registrationUrl: null,
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Workshop", "Mobile Development", "Cross-platform"],
    status: "Completed",
    fullDescription: "A hands-on workshop covering mobile app development using React Native and Flutter. Focused on building scalable and user-friendly mobile applications for the Tanzanian market.",
    venue: "Virtual Platform",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Mike Johnson", role: "Mobile Developer" },
      { name: "Lisa Wang", role: "UI/UX Expert" }
    ],
    schedule: [
      { time: "10:00 AM", activity: "Introduction to Mobile Dev" },
      { time: "11:30 AM", activity: "React Native Workshop" },
      { time: "02:00 PM", activity: "Flutter Development" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: "tech-innovation-conference",
    title: "Tech Innovation Conference",
    description: "Discover the latest trends in technology and innovation.",
    date: "2023-09-15",
    location: "Dar es Salaam, Tanzania",
    imageUrl: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2670&auto=format&fit=crop",
    isVirtual: false,
    registrationUrl: null,
    content: null,
    blocks: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    categories: ["Conference", "Innovation", "Technology"],
    status: "Completed",
    fullDescription: "The Tech Innovation Conference explored cutting-edge technologies and their applications in Tanzania. Focused on fostering innovation and technological advancement in the region.",
    venue: "Dar es Salaam Convention Centre",
    address: "Dar es Salaam, Tanzania",
    organizer: "Smartinno Engineering",
    speakers: [
      { name: "Dr. Thomas Anderson", role: "Innovation Director" },
      { name: "Rachel Lee", role: "Tech Solutions Architect" }
    ],
    schedule: [
      { time: "09:00 AM", activity: "Registration" },
      { time: "10:00 AM", activity: "Keynote: Future of Tech in Tanzania" },
      { time: "11:30 AM", activity: "Innovation Workshop" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2670&auto=format&fit=crop"
    ]
  }
];

export async function getEvents(): Promise<Event[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    if (!response.ok) {
      console.warn('Failed to fetch events, returning mock data');
      return mockEvents;
    }
    return response.json();
  } catch (error) {
    console.warn('Error fetching events, returning mock data:', error);
    return mockEvents;
  }
}

export async function getEventById(id: string): Promise<Event> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`);
    if (!response.ok) {
      console.warn('Failed to fetch event, returning mock data');
      return mockEvents.find(event => event.id === id) || mockEvents[0];
    }
    return response.json();
  } catch (error) {
    console.warn('Error fetching event, returning mock data:', error);
    return mockEvents.find(event => event.id === id) || mockEvents[0];
  }
} 