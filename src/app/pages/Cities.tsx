import React from 'react'
import CityCard from '../components/CityCard';

const Cities = () => {
  const cities = [
    {
      id: 'city1',
      name: 'Karachi',
      image: '/Karachi.png'
    },
    {
      id: 'city2',
      name: 'Faisalbad',
      image: '/Faislabad.png'
    },
    {
      id: 'city3',
      name: 'Sukkur',
      image: '/Sukker.png'
    },
    {
      id: 'city4',
      name: 'Sahiwal',
      image: '/Sahiwal.png'
    },
    {
      id: 'city5',
      name: 'Lahore',
      image: '/Lahore.png'
    },
    {
      id: 'city6',
      name: 'Islamabad',
      image: '/Islamabad.png'
    },
    {
      id: 'city7',
      name: 'Bahawalpur',
      image: '/Bahawalpur.png'
    },
    {
      id: 'city8',
      name: 'Hyderabad',
      image: '/Hyderabad.png'
    },
    {
      id: 'city9',
      name: 'Multan',
      image: '/Multan.png'
    },
    {
      id: 'city10',
      name: 'Quetta',
      image: '/Quetta.png'
    },
    {
      id: 'city11',
      name: 'Peshawar',
      image: '/Peshwar.png'
    },
    {
      id: 'city12',
      name: 'Sialkot',
      image: '/Sialkot.png'
    }
  ];
      
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
      <h1 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">Browse Used Cars by Category</h1>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 cursor-pointer">
        {cities.map((city, index) => (
          <CityCard
            cityName={city.name}
            iconSrc={city.image}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Cities