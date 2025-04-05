"use client"

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Clock, User, Globe } from 'lucide-react';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer';
import SectionContainer from '@/components/SectionContainer';
import { Event, getEventById } from '@/controllers/eventController';

// Mock event data - in a real app this would be fetched from a database or API


// Format date to more readable format
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Check if event is in the past
function isPastEvent(dateString: string): boolean {
  const eventDate = new Date(dateString);
  const now = new Date();
  return eventDate < now;
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

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(resolvedParams.id);
        setEvent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error || 'Event not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        {event.imageUrl && (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-2 justify-center">
              {event.categories?.map((category) => (
                <CategoryPill key={category} label={category} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionContainer sectionNumber="01" title="Event Details" subtitle="All the information you need about this event">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 mb-6">{event.fullDescription || event.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{formatDate(event.date)}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{event.venue}</span>
                  </div>
                )}
                {event.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{event.address}</span>
                  </div>
                )}
                {event.organizer && (
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span>{event.organizer}</span>
                  </div>
                )}
                {event.isVirtual && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <span>Virtual Event</span>
                  </div>
                )}
              </div>
            </div>

            {/* Schedule Section */}
            {event.schedule && event.schedule.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{item.time}</p>
                        <p className="text-gray-600">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers Section */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">{speaker.name}</p>
                        <p className="text-gray-600">{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Event Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{event.status || 'Upcoming'}</p>
                </div>
                {event.registrationUrl && !isPastEvent(event.date) && (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </a>
                )}
                {isPastEvent(event.date) && (
                  <div className="text-center py-3 text-gray-500 italic">
                    This event has already passed
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </div>
  );
}