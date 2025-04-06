"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getTeamMembers, TeamMember } from "@/controllers/teamMemberController"

export default function OurTeam() {
  const router = useRouter()
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const members = await getTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="bg-blue-50 text-gray-800 p-8 md:p-12">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#9db0eb]"></div>
        <p className="text-sm text-[#9db0eb] font-medium">OUR LEADERSHIP</p>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet The Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Loading skeletons
          [...Array(3)].map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden animate-pulse border border-blue-100 shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))
        ) : (
          teamMembers.slice(0, 3).map((member) => (
            <div key={member.id} className="bg-white rounded-xl overflow-hidden border border-blue-100 shadow-sm hover:bg-blue-50/50 transition-colors">
              <div className="h-64 relative">
                <Image
                  src={member.imageUrl || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                <p className="text-[#9db0eb] text-sm mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
                {member.socialLinks && (
                  <div className="mt-4 flex space-x-4">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9db0eb] transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.4.953-1.4 1.94v5.669h-3v-11h3v1.61c.42-.81 1.16-1.33 2.38-1.33 2.54 0 3.44 1.66 3.44 4.87v5.85z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9db0eb] transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9db0eb] transition-colors">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-12 bg-white text-gray-800 p-8 rounded-xl border border-blue-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for talented individuals who share our passion for excellence and innovation in
              chemical supply solutions.
            </p>
            <button 
              onClick={() => router.push('/career')}
              className="bg-[#9db0eb] hover:bg-[#296880] text-white rounded-full px-6 py-3 font-medium transition-colors"
            >
              View Career Opportunities
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <div className="w-24 h-24 rounded-full bg-[#9db0eb] flex items-center justify-center">
              <span className="text-4xl">👥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

