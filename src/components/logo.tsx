import React from 'react';

// Define types for our logos
interface LogoItemProps {
  icon?: React.ReactNode;
  name: string;
  badgeText?: string;
  className?: string;
}

export const LogoItem: React.FC<LogoItemProps> = ({ icon, name, badgeText, className }) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      {icon && icon}
      <span className="ml-2 text-gray-400 font-medium text-xl">{name}</span>
      {badgeText && (
        <span className="ml-1 text-gray-400 font-bold text-xl bg-gray-300 text-white px-1 rounded">
          {badgeText}
        </span>
      )}
    </div>
  );
};
