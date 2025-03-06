import React from 'react';
import Image from 'next/image';

const CarSuggestionBanner = () => {
  return (
    <div 
      className="w-full py-8 bg-[url('/car-background.png')] bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,0.9)]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          FameWheels Car Suggest
        </h2>
        
        <div className="relative rounded-lg">
          <div className="relative w-full h-80"></div>
          
          {/* Content overlay */}
          <div className="absolute top-0 bg-[rgba(0,0,0,0.6)] rounded-lg left-[160px] w-[75vw] h-full flex items-center">
            <div className="container mx-auto px-8 flex justify-around items-center">
              {/* Left content */}
              <div className="text-white max-w-md">
                <h3 className="text-xl mb-2">Not Sure,</h3>
                <h2 className="text-4xl font-bold mb-4">Which car to buy?</h2>
                <p className="text-lg mb-6">Let us help you find the dream car</p>
              </div>
              
              {/* Right content */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image 
                    src="/banner.png" 
                    alt="Car finder" 
                    width={300} 
                    height={150} 
                  />
                </div>
                <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
                  Show Me Best Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSuggestionBanner;
