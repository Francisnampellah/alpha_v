"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Clock, User } from 'lucide-react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer';
import SectionContainer from '@/components/SectionContainer';

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

export default function EventPage({ params }: { params: { id: string } }) {
  // Get the event data by ID parameter
  const event = events.find(e => e.id === params.id);
  
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

  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f36]/90 via-[#0a0f36]/70 to-transparent"></div>
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
                  <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Date</div>
                    <div className="text-gray-700">{formatDate(event.date)}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-gray-700">{event.venue}</div>
                    <div className="text-gray-500 text-sm">{event.address}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <User className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-blue-600 text-white">
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
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
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