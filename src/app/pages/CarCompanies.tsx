import React from 'react'
import CompanyCard from '../components/CompanyCard'

const CarCompanies = () => {
  const carBrands = [
    {
      id: 'company1',
      name: 'Jetour',
      logo: '/jetour-logo.png',
      title: 'Jetour'
    },
    {
      id: 'company2',
      name: 'Toyota',
      logo: '/toyota-logo.png',
      title: 'Toyota'
    },
    {
      id: 'company3',
      name: 'Suzuki',
      logo: '/suzuki-logo.png',
      title: 'Suzuki'
    },
    {
      id: 'company4',
      name: 'Honda',
      logo: '/honda-logo.png',
      title: 'Honda'
    },
    {
      id: 'company5',
      name: 'Daihatsu',
      logo: '/daihatsu-logo.png',
      title: 'Daihatsu'
    },
    {
      id: 'company6',
      name: 'KIA',
      logo: '/kia-logo.png',
      title: 'KIA'
    },
    {
      id: 'company7',
      name: 'Peugeot',
      logo: '/peugeot-logo.png',
      title: 'Peugeot'
    },
    {
      id: 'company8',
      name: 'Hyundai',
      logo: '/hyundai-logo.png',
      title: 'Hyundai'
    },
    {
      id: 'company9',
      name: 'Haval',
      logo: '/haval-logo.png',
      title: 'Haval'
    },
    {
      id: 'company10',
      name: 'Changan',
      logo: '/changan-logo.png',
      title: 'Changan'
    },
    {
      id: 'company11',
      name: 'DFSK',
      logo: '/dfsk-logo.png',
      title: 'DFSK'
    },
    {
      id: 'company12',
      name: 'MG',
      logo: '/mg-logo.png',
      title: 'MG'
    },
    {
      id: 'company13',
      name: 'Audi',
      logo: '/audi-logo.png',
      title: 'Audi'
    },
    {
      id: 'company14',
      name: 'FAW',
      logo: '/faw-logo.png',
      title: 'FAW'
    }
  ];
      
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-medium mb-6 ml-2">Browse Cars by Make</h1>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {carBrands.map((item, index) => (
          <CompanyCard
            key={index}
            image={item.logo}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default CarCompanies