import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-24 h-24 grid grid-cols-2 grid-rows-2 gap-2 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-sm bg-gray-200 animate-pulse"></div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center"
      >
        Return Home
      </Link>
    </div>
  );
} 