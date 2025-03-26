import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import { CategoryPill } from '@/components/category-pill';
import Navigation from '@/components/navigation/Navigation';

export const metadata: Metadata = {
  title: 'Events | SMARTiNNO',
  description: 'Upcoming and past events by SMARTiNNO Engineering Ltd.',
};

// Mock event data - in a real app this would come from a database or API
const events = [
  {
    id: 'agritech-expo-2023',
    title: 'AgriTech Expo 2023',
    description: 'Showcasing the latest agricultural technologies and innovations',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Exhibition', 'Innovation', 'Networking'],
    date: '2023-11-15',
    location: 'London, UK',
    status: 'Past'
  },
  {
    id: 'farm-tech-summit',
    title: 'Farm Tech Summit',
    description: 'Annual gathering of farming technology experts and innovators',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Conference', 'Workshop', 'Networking'],
    date: '2024-02-20',
    location: 'Manchester, UK',
    status: 'Past'
  },
  {
    id: 'soil-health-workshop',
    title: 'Soil Health Workshop',
    description: 'Practical workshop on maintaining and improving soil health',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Workshop', 'Training', 'Education'],
    date: '2024-05-10',
    location: 'Bristol, UK',
    status: 'Upcoming'
  },
  {
    id: 'precision-farming-seminar',
    title: 'Precision Farming Seminar',
    description: 'In-depth discussion on precision farming techniques and technologies',
    image: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Seminar', 'Education', 'Technology'],
    date: '2024-06-15',
    location: 'Edinburgh, UK',
    status: 'Upcoming'
  },
  {
    id: 'agri-innovation-hackathon',
    title: 'Agricultural Innovation Hackathon',
    description: 'Two-day competition to develop innovative solutions for agricultural challenges',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Hackathon', 'Competition', 'Innovation'],
    date: '2024-07-08',
    location: 'Cambridge, UK',
    status: 'Upcoming'
  },
  {
    id: 'livestock-management-conference',
    title: 'Livestock Management Conference',
    description: 'Conference focused on modern livestock management practices and technologies',
    image: 'https://images.unsplash.com/photo-1605605859948-89a8f8960f5f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Conference', 'Livestock', 'Management'],
    date: '2024-09-22',
    location: 'York, UK',
    status: 'Upcoming'
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

export default function EventsPage() {
  // Split events into upcoming and past
  const upcomingEvents = events.filter(event => event.status === 'Upcoming');
  const pastEvents = events.filter(event => event.status === 'Past');
  
  return (
    <>
      <div className="min-h-screen">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-4 gap-4 sm:gap-0">          
          <Navigation />
        </header>

        {/* Hero Banner */}
        <div className="relative mx-4 sm:mx-8 my-4 overflow-hidden rounded-3xl bg-gray-200 h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural conference and events"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="flex flex-wrap gap-2 w-full sm:w-96">
              <CategoryPill label="Conferences" />
              <CategoryPill label="Workshops" />
              <CategoryPill label="Exhibitions" />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                Our Events
              </h1>
              <p className="text-xl text-white max-w-xl">
                Connect with industry experts and explore cutting-edge agricultural innovations
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="px-4 sm:px-8 mt-12 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <p className="text-gray-600">{upcomingEvents.length} events</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <select 
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                aria-label="Filter events by category"
              >
                <option value="all">All Categories</option>
                <option value="conference">Conferences</option>
                <option value="workshop">Workshops</option>
                <option value="exhibition">Exhibitions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <div className="px-4 sm:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link 
                key={event.id} 
                href={`/events/${event.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-sm text-white/80">{event.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-700 font-medium">
                      {formatDate(event.date)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.categories.map((category, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div className="px-4 sm:px-8 mt-16 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Past Events</h2>
            <p className="text-gray-600">{pastEvents.length} events</p>
          </div>
        </div>

        {/* Past Events Grid */}
        <div className="px-4 sm:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Link 
                key={event.id} 
                href={`/events/${event.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-sm text-white/80">{event.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-700 font-medium">
                      {formatDate(event.date)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.categories.map((category, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 