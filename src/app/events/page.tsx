"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Filter } from 'lucide-react';
import Footer from '@/components/footer';
import Navigation from '@/components/navigation/Navigation';
import SectionContainer from '@/components/SectionContainer';

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
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  console.log(scrolled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split events into upcoming and past
  const upcomingEvents = events.filter(event => event.status === 'Upcoming');
  const pastEvents = events.filter(event => event.status === 'Past');

  // Filter events based on category
  const getFilteredEvents = (eventsList: typeof events) => {
    if (activeFilter === 'all') return eventsList;
    return eventsList.filter(event => 
      event.categories.some(category => 
        category.toLowerCase() === activeFilter.toLowerCase()
      )
    );
  };

  const filteredUpcomingEvents = getFilteredEvents(upcomingEvents);
  const filteredPastEvents = getFilteredEvents(pastEvents);

  // Get all unique categories from events
  const allCategories = Array.from(
    new Set(events.flatMap(event => event.categories))
  ).sort();
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section - Shorter for inner pages */}
      <div className="relative h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agricultural conference and events"
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
              <CategoryPill label="Conferences" />
              <CategoryPill label="Workshops" />
              <CategoryPill label="Exhibitions" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Events
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Connect with industry experts and explore cutting-edge agricultural innovations
            </motion.p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <SectionContainer
        sectionNumber="01"
        title="Upcoming Events"
        subtitle="Join us at these upcoming agricultural events"
      >
        {/* Filter Controls */}
        <div className="mb-8 flex justify-end">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-gray-400" />
            </div>
            <select
              className="pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Filter events by category"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {allCategories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredUpcomingEvents.length} upcoming events</p>
        </div>

        {/* Upcoming Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpcomingEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/events/${event.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
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
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.categories.slice(0, 2).map((category, catIdx) => (
                        <span 
                          key={catIdx} 
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                      {event.categories.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          +{event.categories.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                  </div>
                </div>
                
                <div className="p-4 flex-grow">
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="p-4 pt-0 border-t border-gray-100 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">View details</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* No Results State */}
        {filteredUpcomingEvents.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No upcoming events found</h3>
            <p className="text-gray-500 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </SectionContainer>

      {/* Past Events Section */}
      <SectionContainer
        sectionNumber="02"
        title="Past Events"
        subtitle="Explore our previous events and gatherings"
        bgColor="gray"
      >
        {/* Events Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredPastEvents.length} past events</p>
        </div>

        {/* Past Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPastEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/events/${event.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
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
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.categories.slice(0, 2).map((category, catIdx) => (
                        <span 
                          key={catIdx} 
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                      {event.categories.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          +{event.categories.length - 2}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                  </div>
                </div>
                
                <div className="p-4 flex-grow">
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="p-4 pt-0 border-t border-gray-100 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">View details</span>
                    <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* No Results State */}
        {filteredPastEvents.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No past events found</h3>
            <p className="text-gray-500 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </SectionContainer>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Stay Updated?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive updates about upcoming events and agricultural innovations
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