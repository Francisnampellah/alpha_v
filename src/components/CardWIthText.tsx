import React from 'react';

interface TechCardProps {
  image: string;
  title: string;
  description: string;
}

export default function TechCard({ image, title, description }: TechCardProps) {
  return (
    <div className=" mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image section */}
      <div className="w-72">
        <div className="relative rounded-lg pb-[75%] md:pb-[68%]">
          <img 
            src={image}
            alt="Aerial view of farm equipment spraying crops in a green field"
            className="absolute inset-0 w-[250px] h-[250px] object-cover rounded-lg "
          />
        </div>
      </div>
      
      {/* Text section */}
      <div className=" p-6 flex flex-col justify-start">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        </div>
        
        <div className="mt-auto">
          <p className="text-gray-600">©2025</p>
          <p className="text-gray-600">SMARTiNNO</p>
        </div>
      </div>
    </div>
  );
}