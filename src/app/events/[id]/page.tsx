"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Clock, User } from 'lucide-react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer';
import SectionContainer from '@/components/SectionContainer';
import { useParams } from 'next/navigation';

// Mock event data - in a real app this would be fetched from a database or API
const events = [
  {
    id: 'ai-robotics-summit',
    title: 'AI & Robotics Summit',
    description: 'Explore the latest advancements in artificial intelligence and robotics with industry leaders.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
    categories: ['Conference', 'AI', 'Robotics'],
    date: '2024-05-15',
    location: 'London, UK',
    status: 'Upcoming',
    fullDescription: `
      The AI & Robotics Summit brings together leading experts in artificial intelligence and robotics to explore the latest technological breakthroughs and their real-world applications.
      
      This premier conference features keynote presentations, panel discussions, and interactive workshops focused on the future of AI and robotics technology.
      
      Key highlights include:
      - Cutting-edge AI developments and applications
      - Robotics innovation showcase
      - Industry expert networking
      - Future technology trends
    `,
    venue: 'London Convention Centre',
    address: '1 Convention Way, London SW1A 1AA',
    organizer: 'Tech Innovation Association',
    speakers: [
      { name: 'Dr. Sarah Chen', role: 'AI Research Director' },
      { name: 'Michael Roberts', role: 'Robotics Engineer' },
      { name: 'Lisa Thompson', role: 'Tech Innovation Lead' }
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Registration and Welcome Coffee' },
      { time: '10:00 AM', activity: 'Opening Ceremony' },
      { time: '11:00 AM', activity: 'Keynote: Future of AI' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '02:00 PM', activity: 'Panel: Robotics Innovation' },
      { time: '04:00 PM', activity: 'Networking Session' },
      { time: '06:00 PM', activity: 'Closing Reception' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 'sustainability-tech',
    title: 'Sustainability in Tech',
    description: 'Learn about sustainable practices and eco-friendly solutions in the tech industry.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop',
    categories: ['Conference', 'Sustainability', 'Innovation'],
    date: '2024-06-22',
    location: 'Manchester, UK',
    status: 'Upcoming',
    fullDescription: `
      The Sustainability in Tech conference focuses on eco-friendly solutions and sustainable practices in the technology sector.
      
      Join industry leaders and environmental experts as they share insights on creating a more sustainable future through technology.
      
      Key topics include:
      - Green computing initiatives
      - Sustainable data centers
      - Eco-friendly product design
      - Carbon footprint reduction
    `,
    venue: 'Manchester Conference Centre',
    address: '123 Tech Street, Manchester M1 1AA',
    organizer: 'Sustainable Tech Alliance',
    speakers: [
      { name: 'Dr. James Wilson', role: 'Environmental Tech Specialist' },
      { name: 'Emma Green', role: 'Sustainability Director' },
      { name: 'David Brown', role: 'Green Computing Expert' }
    ],
    schedule: [
      { time: '09:30 AM', activity: 'Registration' },
      { time: '10:00 AM', activity: 'Welcome Address' },
      { time: '11:00 AM', activity: 'Keynote: Sustainable Tech Future' },
      { time: '12:30 PM', activity: 'Lunch' },
      { time: '02:00 PM', activity: 'Workshop: Green Computing' },
      { time: '04:00 PM', activity: 'Panel Discussion' },
      { time: '06:00 PM', activity: 'Networking Reception' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 'tech-product-showcase',
    title: 'Tech Product Showcase',
    description: 'Experience cutting-edge technologies with live demonstrations and expert insights.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
    categories: ['Showcase', 'Technology', 'Innovation'],
    date: '2024-07-10',
    location: 'Bristol, UK',
    status: 'Upcoming',
    fullDescription: `
      The Tech Product Showcase is an interactive event featuring the latest technological innovations and product demonstrations.
      
      Experience firsthand the future of technology through live demos, hands-on workshops, and expert-led sessions.
      
      Event highlights:
      - Live product demonstrations
      - Interactive workshops
      - Expert Q&A sessions
      - Networking opportunities
    `,
    venue: 'Bristol Innovation Hub',
    address: '456 Innovation Way, Bristol BS1 1AA',
    organizer: 'Tech Innovation Network',
    speakers: [
      { name: 'Alex Turner', role: 'Product Innovation Lead' },
      { name: 'Sophie Chen', role: 'Tech Evangelist' },
      { name: 'Mark Thompson', role: 'Product Development Director' }
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Doors Open' },
      { time: '11:00 AM', activity: 'Welcome Presentation' },
      { time: '12:00 PM', activity: 'Product Demonstrations' },
      { time: '01:30 PM', activity: 'Lunch Break' },
      { time: '02:30 PM', activity: 'Interactive Workshops' },
      { time: '04:30 PM', activity: 'Expert Panel' },
      { time: '06:00 PM', activity: 'Closing Reception' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 'innovation-workshop',
    title: 'Innovation Workshop',
    description: 'Hands-on sessions to explore innovative solutions and optimize tech processes.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
    categories: ['Workshop', 'Innovation', 'Training'],
    date: '2024-08-05',
    location: 'Edinburgh, UK',
    status: 'Upcoming',
    fullDescription: `
      The Innovation Workshop provides hands-on experience with cutting-edge technologies and innovative solutions.
      
      Join us for interactive sessions designed to enhance your technical skills and knowledge.
      
      Workshop features:
      - Practical training sessions
      - Expert guidance
      - Real-world applications
      - Collaborative learning
    `,
    venue: 'Edinburgh Tech Hub',
    address: '789 Innovation Lane, Edinburgh EH1 1AA',
    organizer: 'Tech Training Institute',
    speakers: [
      { name: 'Dr. Rachel Smith', role: 'Innovation Specialist' },
      { name: 'Tom Wilson', role: 'Technical Trainer' },
      { name: 'Sarah Johnson', role: 'Workshop Leader' }
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Registration' },
      { time: '09:30 AM', activity: 'Introduction' },
      { time: '10:00 AM', activity: 'Morning Workshop' },
      { time: '12:00 PM', activity: 'Lunch' },
      { time: '01:00 PM', activity: 'Afternoon Session' },
      { time: '03:00 PM', activity: 'Practical Exercises' },
      { time: '05:00 PM', activity: 'Wrap-up' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  {
    id: 'ai-robotics-summit-2023',
    title: 'AI & Robotics Summit 2023',
    description: 'Previous conference showcasing the latest in AI and robotics technology.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop',
    categories: ['Conference', 'AI', 'Robotics'],
    date: '2023-11-15',
    location: 'London, UK',
    status: 'Past',
    fullDescription: `
      The 2023 AI & Robotics Summit was a landmark event that brought together industry leaders and innovators.
      
      This past conference showcased groundbreaking developments in artificial intelligence and robotics.
      
      Event highlights:
      - Keynote presentations
      - Technology demonstrations
      - Industry networking
      - Expert panels
    `,
    venue: 'London Convention Centre',
    address: '1 Convention Way, London SW1A 1AA',
    organizer: 'Tech Innovation Association',
    speakers: [
      { name: 'Dr. Emily Chen', role: 'AI Research Director' },
      { name: 'Michael Roberts', role: 'Robotics Engineer' },
      { name: 'Lisa Thompson', role: 'Tech Innovation Lead' }
    ],
    schedule: [
      { time: '09:00 AM', activity: 'Registration' },
      { time: '10:00 AM', activity: 'Opening Ceremony' },
      { time: '11:00 AM', activity: 'Keynote Presentations' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '02:00 PM', activity: 'Panel Discussions' },
      { time: '04:00 PM', activity: 'Networking Session' },
      { time: '06:00 PM', activity: 'Closing Reception' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop'
    ]
  },
  {
    id: 'tech-workshop-2023',
    title: 'Tech Workshop 2023',
    description: 'Interactive learning experiences led by tech experts and industry leaders.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=3269&auto=format&fit=crop',
    categories: ['Workshop', 'Technology', 'Training'],
    date: '2023-12-10',
    location: 'Manchester, UK',
    status: 'Past',
    fullDescription: `
      The 2023 Tech Workshop was an interactive learning experience that brought together tech experts and industry leaders.
      
      This past event focused on practical training and knowledge sharing in technology.
      
      Workshop features:
      - Expert-led sessions
      - Hands-on training
      - Industry insights
      - Networking opportunities
    `,
    venue: 'Manchester Conference Centre',
    address: '123 Tech Street, Manchester M1 1AA',
    organizer: 'Tech Training Institute',
    speakers: [
      { name: 'Dr. James Wilson', role: 'Technical Director' },
      { name: 'Emma Green', role: 'Training Lead' },
      { name: 'David Brown', role: 'Workshop Instructor' }
    ],
    schedule: [
      { time: '09:30 AM', activity: 'Registration' },
      { time: '10:00 AM', activity: 'Welcome Address' },
      { time: '11:00 AM', activity: 'Training Sessions' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '02:00 PM', activity: 'Practical Workshops' },
      { time: '04:00 PM', activity: 'Expert Q&A' },
      { time: '05:30 PM', activity: 'Closing Session' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=3269&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=3269&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=3269&auto=format&fit=crop'
    ]
  }
]

// Format date to more readable format
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// CategoryPill component
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
  );
};

// Define proper page props according to Next.js App Router conventions

export default function EventPage() {
  // Get the params using the useParams hook
  const params = useParams();
  const eventId = params.id as string;
  
  // Hooks need to be at the top level, before any conditional logic
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get the event data by ID parameter
  const event = events.find(e => e.id === eventId);
  
  // If event not found
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <p className="text-gray-600 mb-6">The event you are looking for does not exist or has been removed.</p>
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Events</span>
          </Link>
        </div>
      </div>
    );
  }

  console.log(scrolled);

  // Get similar events
  const similarEvents = events
    .filter(e => e.id !== event.id && e.categories.some(c => event.categories.includes(c)))
    .slice(0, 3);

  // Define status color
  const statusColor = event.status === 'Upcoming' 
    ? 'bg-green-100 text-green-800' 
    : 'bg-gray-100 text-gray-800';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Shorter for inner pages */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={event.image}
            alt={event.title}
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
              {event.categories.map((category, idx) => (
                <CategoryPill key={idx} label={category} />
              ))}
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${statusColor}`}>
                {event.status}
              </span>
              <Link 
                href="/events" 
                className="text-white hover:text-gray-200 flex items-center gap-1.5 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back to Events</span>
              </Link>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {event.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              {event.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Event Overview */}
      <SectionContainer
        sectionNumber="01"
        title="Event Details"
        subtitle="Everything you need to know about this event"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Event Description - Left Column */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none mb-8">
              {event.fullDescription.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  <motion.p 
                    key={idx} 
                    className="mb-6 text-gray-700 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                )
              ))}
            </div>
          </div>

          {/* Event Info - Right Column */}
          <div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Event Information</h3>
              
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Calendar className="w-5 h-5 text-[#296880] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Date</div>
                    <div className="text-gray-700">{formatDate(event.date)}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#296880] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-700">{event.venue}</div>
                    <div className="text-gray-500 text-sm">{event.address}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <User className="w-5 h-5 text-[#296880] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Organizer</div>
                    <div className="text-gray-700">{event.organizer}</div>
                  </div>
                </div>
                
                {event.status === 'Upcoming' && (
                  <Link
                    href="#"
                    className="mt-4 w-full bg-black hover:bg-gray-800 text-white rounded-lg px-5 py-3 flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
                  >
                    <span>Register for Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Event Schedule */}
      <SectionContainer
        sectionNumber="02"
        title="Event Schedule"
        subtitle="Plan your day with our detailed agenda"
        bgColor="gray"
      >
        <div className="max-w-3xl mx-auto">
          <ul className="relative border-l border-gray-300 ml-3 space-y-8">
            {event.schedule.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="ml-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-50">
                  <Clock className="w-3 h-3 text-blue-800" />
                </span>
                <div className="bg-white p-5 rounded-lg shadow border border-gray-100">
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.time}</time>
                  <h3 className="font-medium text-gray-900">{item.activity}</h3>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      {/* Speakers */}
      {event.speakers && event.speakers.length > 0 && (
        <SectionContainer
          sectionNumber="03"
          title="Speakers"
          subtitle="Meet our expert speakers"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.speakers.map((speaker, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
                      {speaker.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Gallery */}
      {event.gallery && event.gallery.length > 0 && (
        <SectionContainer
          sectionNumber="04"
          title="Event Gallery"
          subtitle="Visual highlights from the event"
          bgColor="gray"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.gallery.map((image, idx) => (
              <motion.div 
                key={idx} 
                className="aspect-square relative rounded-xl overflow-hidden shadow-md group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image}
                  alt={`${event.title} gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Similar Events */}
      {similarEvents.length > 0 && (
        <SectionContainer
          sectionNumber="05"
          title="Related Events"
          subtitle="You might also be interested in these events"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarEvents.map((similarEvent, idx) => (
              <motion.div
                key={similarEvent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={`/events/${similarEvent.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={similarEvent.image}
                      alt={similarEvent.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`bg-${similarEvent.status === 'Upcoming' ? 'green' : 'gray'}-100 text-${similarEvent.status === 'Upcoming' ? 'green' : 'gray'}-800 text-xs font-medium px-2.5 py-1 rounded-full`}>
                        {similarEvent.status}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {similarEvent.categories.slice(0, 2).map((category, catIdx) => (
                          <span 
                            key={catIdx} 
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-white">{similarEvent.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{formatDate(similarEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{similarEvent.location}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-[#296880] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t Miss Our Future Events</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Stay updated with our latest agricultural technology events and innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button
                type="button"
                className="bg-white text-[#296880] hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}