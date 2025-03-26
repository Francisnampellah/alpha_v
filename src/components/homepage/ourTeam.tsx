import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"

// Team member type definition
type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    email?: string
  }
}

// Sample team data - replace with your actual team members
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in software innovation, Sarah leads our company vision and strategic direction.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah@smartinno.com",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Michael oversees all technical aspects of our solutions, bringing 12 years of experience in software architecture and cloud systems.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      twitter: "https://twitter.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael@smartinno.com",
    },
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of Product Development",
    bio: "Elena leads our product initiatives, focusing on user experience design and innovative software solutions.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com/in/elenarodriguez",
      email: "elena@smartinno.com",
    },
  },
  {
    id: 4,
    name: "David Okafor",
    role: "DevOps Director",
    bio: "David ensures smooth deployment pipelines and oversees our cloud infrastructure and operational excellence.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidokafor",
      email: "david@smartinno.com",
    },
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Marketing Director",
    bio: "Priya develops our marketing strategies and builds strong relationships with clients and technology partners.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      twitter: "https://twitter.com/priyapatel",
      linkedin: "https://linkedin.com/in/priyapatel",
      email: "priya@smartinno.com",
    },
  },
  {
    id: 6,
    name: "Thomas Weber",
    role: "AI Solutions Specialist",
    bio: "Thomas brings deep expertise in machine learning, data science, and AI-powered software solutions.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    socialLinks: {
      linkedin: "https://linkedin.com/in/thomasweber",
      email: "thomas@smartinno.com",
    },
  },
]

// Update the TeamMemberCard component to use circular profile images
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col items-center text-center rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
      <div className="relative h-40 w-40 rounded-full overflow-hidden bg-gray-100 mb-6 border-2 border-gray-200">
        <Image
          src={member.imageUrl || "/placeholder.svg"}
          alt={`Photo of ${member.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 160px, 160px"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{member.role}</p>
        <p className="text-sm text-gray-700 mb-4">{member.bio}</p>

        <div className="flex justify-center space-x-4">
          {member.socialLinks.twitter && (
            <Link
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label={`${member.name}'s Twitter`}
            >
              <Twitter size={18} />
            </Link>
          )}
          {member.socialLinks.linkedin && (
            <Link
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </Link>
          )}
          {member.socialLinks.email && (
            <Link
              href={`mailto:${member.socialLinks.email}`}
              className="text-gray-500 hover:text-black transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function OurTeam() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">SMARTiNNO Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind SMARTiNNO. Our diverse team combines expertise in software development,
            cloud technologies, and digital transformation to deliver innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Were always looking for talented individuals who are passionate about software innovation and
            digital transformation. Check out our current openings and become part of our mission.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            View Open Positions
            <span className="ml-2 bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 12H18M18 12L12 6M18 12L12 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

