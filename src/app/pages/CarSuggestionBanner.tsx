import React from 'react';
import Image from 'next/image';

const CarSuggestionBanner = () => {
  return (
    <div 
      className="w-full py-4 sm:py-6 md:py-8 bg-[url('/car-background.png')] bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,0.9)]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          FameWheels Car Suggest
        </h2>
        
        <div className="relative rounded-lg mx-auto">
          {/* Main content container */}
          <div className="bg-[rgba(0,0,0,0.6)] rounded-lg w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-6 md:px-8">
              {/* Left content */}
              <div className="text-white text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-lg md:text-xl mb-1 md:mb-2">Not Sure,</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">Which car to buy?</h2>
                <p className="text-base sm:text-lg mb-4 md:mb-6">Let us help you find the dream car</p>
              </div>
              
              {/* Right content */}
              <div className="flex flex-col items-center">
                <div className="mb-4 w-48 sm:w-56 md:w-64 lg:w-72 relative">
                  <Image 
                    src="/banner.png" 
                    alt="Car finder" 
                    width={300} 
                    height={150}
                    layout="responsive"
                  />
                </div>
                <button className="bg-white text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-200 transition-colors text-sm sm:text-base">
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