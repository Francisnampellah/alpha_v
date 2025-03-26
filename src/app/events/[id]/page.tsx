import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/footer';
import { CategoryPill } from '@/components/category-pill';

// Mock event data - in a real app this would be fetched from a database or API
const events = [
  {
    id: 'agritech-expo-2023',
    title: 'AgriTech Expo 2023',
    description: 'Showcasing the latest agricultural technologies and innovations',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Exhibition', 'Innovation', 'Networking'],
    date: '2023-11-15',
    location: 'London, UK',
    status: 'Past',
    fullDescription: `
      AgriTech Expo 2023 was the premier agricultural technology exhibition in the UK, showcasing cutting-edge innovations that are transforming modern farming and agriculture.
      
      The event brought together industry leaders, innovators, farmers, and technology enthusiasts to explore the latest advances in agricultural technology, from precision farming equipment to IoT devices, AI solutions, and sustainable farming practices.
      
      Key highlights included:
      - Live demonstrations of autonomous farming equipment
      - Panel discussions on the future of agricultural technology
      - Networking opportunities with industry leaders
      - Showcases of emerging technologies and startups
    `,
    venue: 'ExCeL London Exhibition Centre',
    address: 'Royal Victoria Dock, London E16 1XL',
    organizer: 'UK Agricultural Technology Association',
    speakers: [
      { name: 'Dr. Emily Chen', role: 'Agricultural Innovation Specialist' },
      { name: 'Michael Williams', role: 'CEO, FarmTech Solutions' },
      { name: 'Sarah Johnson', role: 'Director of Research, Agricultural Institute' }
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Registration and Welcome Coffee' },
      { time: '10:00 AM', activity: 'Opening Ceremony and Keynote Speech' },
      { time: '11:30 AM', activity: 'Technology Exhibition Opens' },
      { time: '01:00 PM', activity: 'Lunch Break' },
      { time: '02:00 PM', activity: 'Panel Discussion: Future of Farming' },
      { time: '04:00 PM', activity: 'Live Demonstrations' },
      { time: '06:00 PM', activity: 'Networking Reception' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1588446780664-3b93b1e59593?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1651175821883-282a896de5b2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1657665028934-a154a01fa100?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'farm-tech-summit',
    title: 'Farm Tech Summit',
    description: 'Annual gathering of farming technology experts and innovators',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Conference', 'Workshop', 'Networking'],
    date: '2024-02-20',
    location: 'Manchester, UK',
    status: 'Past',
    fullDescription: `
      The Farm Tech Summit was a major gathering of agricultural technology experts, innovators, researchers, and industry leaders focused on the future of farming technology.
      
      This annual conference featured keynote speeches, panel discussions, workshops, and demonstrations centered around cutting-edge technologies that are reshaping the agricultural landscape.
      
      Key themes included:
      - Precision agriculture and data-driven farming
      - AI and machine learning applications in agriculture
      - Sustainable farming practices powered by technology
      - The future of food production and security
    `,
    venue: 'Manchester Central Convention Complex',
    address: 'Windmill St, Manchester M2 3GX',
    organizer: 'UK Farm Technology Association',
    speakers: [
      { name: 'Professor James Wilson', role: 'Agricultural Technology Researcher' },
      { name: 'Rebecca Thompson', role: 'Founder, AgriData Solutions' },
      { name: 'David Mitchell', role: 'Director of Innovation, National Farming Association' }
    ],
    schedule: [
      { time: '08:30 AM', activity: 'Registration' },
      { time: '09:30 AM', activity: 'Welcome Address' },
      { time: '10:00 AM', activity: 'Keynote: The Future of Agricultural Technology' },
      { time: '11:30 AM', activity: 'Panel: Data-Driven Farming' },
      { time: '01:00 PM', activity: 'Lunch and Networking' },
      { time: '02:00 PM', activity: 'Parallel Workshops' },
      { time: '04:30 PM', activity: 'Closing Remarks and Discussion' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'soil-health-workshop',
    title: 'Soil Health Workshop',
    description: 'Practical workshop on maintaining and improving soil health',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Workshop', 'Training', 'Education'],
    date: '2024-05-10',
    location: 'Bristol, UK',
    status: 'Upcoming',
    fullDescription: `
      The Soil Health Workshop is a hands-on educational event designed for farmers, agronomists, and anyone interested in improving soil health and fertility.
      
      This practical workshop will cover various aspects of soil management, from testing and analysis to organic matter management, cover cropping, and sustainable soil practices.
      
      What to expect:
      - Expert-led demonstrations of soil testing techniques
      - Practical sessions on interpreting soil test results
      - Strategies for building soil organic matter
      - Sustainable approaches to managing soil fertility
      - Networking with soil health experts and fellow practitioners
    `,
    venue: 'University of Bristol School of Agricultural Sciences',
    address: 'Woodland Road, Bristol BS8 1UG',
    organizer: 'Sustainable Farming Initiative',
    speakers: [
      { name: 'Dr. Robert Anderson', role: 'Soil Scientist' },
      { name: 'Lisa Hayes', role: 'Regenerative Farming Specialist' },
      { name: 'Thomas Greene', role: 'Agricultural Extension Officer' }
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Registration and Introduction' },
      { time: '09:30 AM', activity: 'Presentation: Fundamentals of Soil Health' },
      { time: '10:30 AM', activity: 'Hands-on Workshop: Soil Testing Methods' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Field Demonstration: Cover Crops and Soil Structure' },
      { time: '03:00 PM', activity: 'Discussion: Implementing Soil Health Practices' },
      { time: '04:00 PM', activity: 'Q&A and Conclusion' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'precision-farming-seminar',
    title: 'Precision Farming Seminar',
    description: 'In-depth discussion on precision farming techniques and technologies',
    image: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Seminar', 'Education', 'Technology'],
    date: '2024-06-15',
    location: 'Edinburgh, UK',
    status: 'Upcoming',
    fullDescription: `
      The Precision Farming Seminar is an educational event focusing on the latest advancements in precision agriculture technology and practices.
      
      This seminar will bring together experts in the field to discuss how precision farming technologies can optimize crop production, reduce inputs, and improve sustainability.
      
      Topics covered:
      - GPS guidance systems and variable rate technology
      - Remote sensing and satellite imagery for crop monitoring
      - Data management and analytics for farm decision-making
      - Economic benefits and implementation strategies
      - Future trends in precision agriculture
    `,
    venue: 'Edinburgh International Conference Centre',
    address: 'The Exchange, 150 Morrison St, Edinburgh EH3 8EE',
    organizer: 'Scottish Agricultural Technology Association',
    speakers: [
      { name: 'Dr. Andrew Fraser', role: 'Precision Agriculture Researcher' },
      { name: 'Emma Wilson', role: 'Agricultural Technology Consultant' },
      { name: 'Ian Campbell', role: 'Precision Farming Practitioner' }
    ],
    schedule: [
      { time: '09:30 AM', activity: 'Welcome and Introduction' },
      { time: '10:00 AM', activity: 'Keynote: The State of Precision Agriculture' },
      { time: '11:00 AM', activity: 'Presentation: Satellite and Drone Technology in Farming' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Case Studies: Successful Precision Farming Implementation' },
      { time: '02:30 PM', activity: 'Panel Discussion: ROI of Precision Agriculture' },
      { time: '03:30 PM', activity: 'Networking and Conclusion' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'agri-innovation-hackathon',
    title: 'Agricultural Innovation Hackathon',
    description: 'Two-day competition to develop innovative solutions for agricultural challenges',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Hackathon', 'Competition', 'Innovation'],
    date: '2024-07-08',
    location: 'Cambridge, UK',
    status: 'Upcoming',
    fullDescription: `
      The Agricultural Innovation Hackathon is an intensive two-day event that brings together developers, designers, engineers, and agricultural experts to develop innovative solutions to pressing agricultural challenges.
      
      Teams will compete to create prototypes that address specific problems in modern agriculture, with a focus on sustainability, efficiency, and technological innovation.
      
      Event highlights:
      - Collaboration with industry experts and mentors
      - Access to datasets and APIs for agricultural applications
      - Opportunities to pitch to potential investors
      - Prizes for winning solutions
      - Networking with industry leaders and innovators
    `,
    venue: 'Cambridge Science Park',
    address: 'Milton Road, Cambridge CB4 0FZ',
    organizer: 'AgriTech East Innovation Hub',
    speakers: [
      { name: 'Dr. Katherine Lee', role: 'Agricultural Innovation Director' },
      { name: 'Mark Johnson', role: 'Technology Entrepreneur' },
      { name: 'Olivia Taylor', role: 'Sustainable Agriculture Specialist' }
    ],
    schedule: [
      { time: 'Day 1 - 09:00 AM', activity: 'Registration and Team Formation' },
      { time: 'Day 1 - 10:00 AM', activity: 'Challenge Presentations' },
      { time: 'Day 1 - 11:00 AM', activity: 'Hacking Begins' },
      { time: 'Day 1 - 07:00 PM', activity: 'Day 1 Check-in and Networking Dinner' },
      { time: 'Day 2 - 09:00 AM', activity: 'Hacking Continues' },
      { time: 'Day 2 - 03:00 PM', activity: 'Final Submissions' },
      { time: 'Day 2 - 04:00 PM', activity: 'Presentations and Judging' },
      { time: 'Day 2 - 06:00 PM', activity: 'Awards Ceremony' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'livestock-management-conference',
    title: 'Livestock Management Conference',
    description: 'Conference focused on modern livestock management practices and technologies',
    image: 'https://images.unsplash.com/photo-1605605859948-89a8f8960f5f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Conference', 'Livestock', 'Management'],
    date: '2024-09-22',
    location: 'York, UK',
    status: 'Upcoming',
    fullDescription: `
      The Livestock Management Conference is a specialized event focusing on modern approaches to livestock management, welfare, and technology solutions for the livestock industry.
      
      This conference will gather livestock farmers, veterinarians, researchers, and technology providers to discuss best practices and innovations in livestock management.
      
      Key topics:
      - Animal health monitoring and management technologies
      - Sustainable livestock production systems
      - Precision livestock farming approaches
      - Animal welfare best practices
      - Data management for livestock operations
    `,
    venue: 'York Racecourse Conference Centre',
    address: 'York Racecourse, York YO23 1EX',
    organizer: 'National Livestock Association',
    speakers: [
      { name: 'Dr. Richard Brown', role: 'Livestock Management Expert' },
      { name: 'Jennifer Adams', role: 'Veterinary Research Scientist' },
      { name: 'Paul Thompson', role: 'Precision Livestock Farming Specialist' }
    ],
    schedule: [
      { time: '08:30 AM', activity: 'Registration' },
      { time: '09:30 AM', activity: 'Opening Address' },
      { time: '10:00 AM', activity: 'Keynote: The Future of Livestock Management' },
      { time: '11:30 AM', activity: 'Panel: Technology in Livestock Farming' },
      { time: '01:00 PM', activity: 'Lunch' },
      { time: '02:00 PM', activity: 'Parallel Sessions by Species' },
      { time: '04:00 PM', activity: 'Technology Showcase' },
      { time: '05:30 PM', activity: 'Closing Remarks and Networking Reception' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1605605859948-89a8f8960f5f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  }
];

// Format date to more readable format
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Generate metadata dynamically based on the event ID
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Await the params to resolve the promise
  const event = events.find(e => e.id === resolvedParams.id);

  if (!event) {
    return {
      title: 'Event Not Found | SMARTiNNO',
      description: 'The requested event could not be found.'
    };
  }

  return {
    title: `${event.title} | SMARTiNNO Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // Await the params to resolve the promise
  const event = events.find(e => e.id === resolvedParams.id);

  // Handle case where event is not found
  if (!event) {
    notFound();
  }

  // Define status badge color based on event status
  const statusColor = event.status === 'Upcoming' 
    ? 'bg-green-100 text-green-800' 
    : 'bg-gray-100 text-gray-800';

  return (
    <>
      <div className="min-h-screen">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-4 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-sm bg-black"></div>
              ))}
            </div>
            <span className="font-semibold text-black">SMARTiNNO</span>
          </div>
          
          <nav className="flex flex-wrap gap-4 sm:gap-8" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="/events" className="text-black font-semibold transition-colors">
              Events
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </Link>
          </nav>
        </header>

        {/* Event Hero */}
        <div className="relative mx-4 sm:mx-8 my-4 overflow-hidden rounded-3xl bg-gray-200 h-[500px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className={`object-cover ${event.status === 'Past' ? 'grayscale' : ''}`}
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="flex flex-wrap gap-2 w-full sm:w-96">
              {event.categories.map((category, idx) => (
                <CategoryPill key={idx} label={category} />
              ))}
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                  {event.status}
                </span>
                <Link 
                  href="/events" 
                  className="text-white hover:underline flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back to Events
                </Link>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {event.title}
              </h1>
              <p className="text-xl text-white max-w-xl">
                {event.description}
              </p>
            </div>
          </div>
        </div>

        {/* Event Content */}
        <div className="px-4 sm:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left column - Description */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">About This Event</h2>
                <div className="prose max-w-none">
                  {event.fullDescription.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Schedule */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, idx) => (
                    <div key={idx} className="flex border-b border-gray-200 pb-4">
                      <div className="w-1/3 text-gray-600 font-medium">{item.time}</div>
                      <div className="w-2/3">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Speakers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-bold">{speaker.name}</div>
                      <div className="text-sm text-gray-600">{speaker.role}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.gallery.map((image, idx) => (
                    <div key={idx} className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${event.title} gallery image ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column - Event Details */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6">Event Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Date</div>
                    <div className="text-gray-900 font-medium">{formatDate(event.date)}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-gray-900 font-medium">{event.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Venue</div>
                    <div className="text-gray-900 font-medium">{event.venue}</div>
                    <div className="text-gray-700 text-sm mt-1">{event.address}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Organizer</div>
                    <div className="text-gray-900 font-medium">{event.organizer}</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  {event.status === 'Upcoming' ? (
                    <Link
                      href="#"
                      className="w-full bg-black hover:bg-gray-800 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Register for Event</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      className="w-full bg-gray-200 text-gray-700 rounded-lg px-6 py-3 flex items-center justify-center gap-2"
                    >
                      <span>Event Completed</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Events */}
          <div className="mt-16 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events
                .filter(e => e.id !== event.id && e.categories.some(c => event.categories.includes(c)))
                .slice(0, 3)
                .map(relatedEvent => (
                  <Link 
                    key={relatedEvent.id} 
                    href={`/events/${relatedEvent.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={relatedEvent.image}
                        alt={relatedEvent.title}
                        fill
                        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${relatedEvent.status === 'Past' ? 'grayscale' : ''}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="text-lg font-bold text-white">{relatedEvent.title}</h3>
                        <p className="text-xs text-white/80 mt-1">{formatDate(relatedEvent.date)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}