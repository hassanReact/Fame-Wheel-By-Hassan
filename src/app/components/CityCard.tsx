import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CityCardProps {
  cityName: string;
  iconSrc: string;
  href?: string;
}

const CityCard: React.FC<CityCardProps> = ({ cityName, iconSrc, href = "#" }) => {
  return (
    <Link href={href}>
      <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 cursor-pointer">
        <div className="mb-4 h-16 flex items-center justify-center">
          <Image 
            src={iconSrc} 
            alt={`${cityName} icon`} 
            width={64} 
            height={64} 
            className="object-contain"
          />
        </div>
        <p className="text-gray-800 font-medium text-center">{cityName}</p>
      </div>
    </Link>
  );
};

export default CityCard;