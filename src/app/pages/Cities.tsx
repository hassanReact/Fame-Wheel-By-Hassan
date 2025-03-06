import React from 'react'
import CityCard from '../components/CityCard';

const Cities = () => {

    const cities = [
        {
          id: 'city1',
          name: 'Karachi',
          image: '/karachi.png'
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
          image: '/lahore.png'
        },
        {
          id: 'city6',
          name: 'Islamabad',
          image: '/islamabad.png'
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
    <div className='mt-10'>
      <h1 className='text-3xl  font-medium mx-20'>Browse Used Cars by Category</h1>
        <div className="mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 p-6 cursor-pointer">
        {cities.map((city, index) => (
            <CityCard
            cityName={city.name}
            iconSrc={city.image}
            key={index}/>
        ))}
        </div>
    </div>
  )
}

export default Cities