import React from 'react';

interface CategoryPillProps {
  label: string;
}

export function CategoryPill({ label }: CategoryPillProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
      {label}
    </div>
  );
}
  
  