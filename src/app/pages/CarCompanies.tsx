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
          logo: '/toyota-logo.png', // Add a leading slash
          title: 'Toyota'
        },
        {
          id: 'company3',
          name: 'Suzuki',
          logo: '/suzuki-logo.png', // Add a leading slash
          title: 'Suzuki'
        },
        {
          id: 'company4',
          name: 'Honda',
          logo: '/honda-logo.png', // Add a leading slash
          title: 'Honda'
        },
        {
          id: 'company5',
          name: 'Daihatsu',
          logo: '/daihatsu-logo.png', // Add a leading slash
          title: 'Daihatsu'
        },
        {
          id: 'company6',
          name: 'KIA',
          logo: '/kia-logo.png', // Add a leading slash
          title: 'KIA'
        },
        {
          id: 'company7',
          name: 'Peugeot',
          logo: '/peugeot-logo.png', // Add a leading slash
          title: 'Peugeot'
        },
        {
          id: 'company8',
          name: 'Hyundai',
          logo: '/hyundai-logo.png', // Add a leading slash
          title: 'Hyundai'
        },
        {
          id: 'company9',
          name: 'Haval',
          logo: '/haval-logo.png', // Add a leading slash
          title: 'Haval'
        },
        {
          id: 'company10',
          name: 'Changan',
          logo: '/changan-logo.png', // Add a leading slash
          title: 'Changan'
        },
        {
          id: 'company11',
          name: 'DFSK',
          logo: '/dfsk-logo.png', // Add a leading slash
          title: 'DFSK'
        },
        {
          id: 'company12',
          name: 'MG',
          logo: '/mg-logo.png', // Add a leading slash
          title: 'MG'
        },
        {
          id: 'company13',
          name: 'Audi',
          logo: '/audi-logo.png', // Add a leading slash
          title: 'Audi'
        },
        {
          id: 'company14',
          name: 'FAW',
          logo: '/faw-logo.png', // Add a leading slash
          title: 'FAW'
        }
      ];
      
  return (
    <div>
      <h1 className='text-3xl font-medium mx-20'>Browse Cars by Make</h1>
        <div className="mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-0 p-6 cursor-pointer">
        {carBrands.map((item, index) => (
            <CompanyCard
            key={index}
            image={item.logo}
            title={item.title}/>
            ))}
        </div>
    </div>
  )
}

export default CarCompanies
