import Link from 'next/link';

export default function EventNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-24 h-24 grid grid-cols-2 grid-rows-2 gap-2 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-sm bg-gray-200 animate-pulse"></div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We couldnt find the event youre looking for. It might have ended or been removed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/events"
          className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center"
        >
          Browse All Events
        </Link>
        <Link
          href="/"
          className="border border-gray-300 px-6 py-3 rounded-full flex items-center justify-center"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 