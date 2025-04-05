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
    id: 'ai-robotics-summit',
    title: 'AI & Robotics Summit',
    description: 'Explore the latest advancements in artificial intelligence and robotics with industry leaders.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
    categories: ['Conference', 'AI', 'Robotics'],
    date: '2024-05-15',
    location: 'London, UK',
    status: 'Upcoming'
  },
  {
    id: 'sustainability-tech',
    title: 'Sustainability in Tech',
    description: 'Learn about sustainable practices and eco-friendly solutions in the tech industry.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop',
    categories: ['Conference', 'Sustainability', 'Innovation'],
    date: '2024-06-22',
    location: 'Manchester, UK',
    status: 'Upcoming'
  },
  {
    id: 'tech-product-showcase',
    title: 'Tech Product Showcase',
    description: 'Experience cutting-edge technologies with live demonstrations and expert insights.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
    categories: ['Showcase', 'Technology', 'Innovation'],
    date: '2024-07-10',
    location: 'Bristol, UK',
    status: 'Upcoming'
  },
  {
    id: 'innovation-workshop',
    title: 'Innovation Workshop',
    description: 'Hands-on sessions to explore innovative solutions and optimize tech processes.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop',
    categories: ['Workshop', 'Innovation', 'Training'],
    date: '2024-08-05',
    location: 'Edinburgh, UK',
    status: 'Upcoming'
  },
  {
    id: 'ai-robotics-summit-2023',
    title: 'AI & Robotics Summit 2023',
    description: 'Previous conference showcasing the latest in AI and robotics technology.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop',
    categories: ['Conference', 'AI', 'Robotics'],
    date: '2023-11-15',
    location: 'London, UK',
    status: 'Past'
  },
  {
    id: 'tech-workshop-2023',
    title: 'Tech Workshop 2023',
    description: 'Interactive learning experiences led by tech experts and industry leaders.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=3269&auto=format&fit=crop',
    categories: ['Workshop', 'Technology', 'Training'],
    date: '2023-12-10',
    location: 'Manchester, UK',
    status: 'Past'
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
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop"
            alt="Events"
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
              <CategoryPill label="AI & Robotics" />
              <CategoryPill label="Sustainability" />
              <CategoryPill label="Innovation" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Tech Innovations,
              <br />
              Meaningful Connections
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Join us at our upcoming tech events to explore cutting-edge innovations and connect with industry leaders
            </motion.p>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-[#3798b8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <p className="text-sm text-blue-400 font-medium">JOIN OUR EVENTS</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expand Your Knowledge & Network
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
                Our events bring together tech experts, innovative technologies, and forward-thinking professionals to
                create valuable learning and networking opportunities.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#3798b8]"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#3798b8]"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#3798b8]"></div>
                </div>
                <p className="text-sm">
                  Join <span className="font-semibold">500+ Tech Professionals</span> at our events
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#1a2150] p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Expert Speakers</h3>
                <p className="text-sm text-gray-300">
                  Learn from tech leaders and renowned experts sharing cutting-edge insights.
                </p>
              </div>
              <div className="bg-[#1a2150] p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Networking</h3>
                <p className="text-sm text-gray-300">
                  Connect with peers, potential partners, and clients in a collaborative environment.
                </p>
              </div>
              <div className="bg-[#1a2150] p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Hands-on Demo</h3>
                <p className="text-sm text-gray-300">
                  Experience our products and technologies through interactive demonstrations.
                </p>
              </div>
              <div className="bg-[#1a2150] p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Latest Tech</h3>
                <p className="text-sm text-gray-300">
                  Stay updated with the latest technological advancements and industry trends.
                </p>
              </div>
            </motion.div>
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
              className="pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 w-full appearance-none focus:outline-none focus:ring-2 focus:ring-#3798b8 focus:border-transparent"
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
                    <span className="text-sm font-medium text-[#296880]">View details</span>
                    <ArrowRight className="w-4 h-4 text-[#296880] transform group-hover:translate-x-1 transition-all" />
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
                    <span className="text-sm font-medium text-[#296880]">View details</span>
                    <ArrowRight className="w-4 h-4 text-[#296880] transform group-hover:translate-x-1 transition-all" />
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
      <div className="px-4 sm:px-6 lg:px-12 py-16 bg-[#296880] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Stay Updated?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive notifications about upcoming webinars, conferences, and workshops.
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