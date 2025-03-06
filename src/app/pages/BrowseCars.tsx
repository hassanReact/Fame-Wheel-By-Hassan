import React from 'react'
import Cars from '../components/Cars'

const BrowseCars = () => {
  const dummyCar = {
    id: 1,
    name: "Sample Car",
    price: "$10,000",
    location: "Sample Location",
    image: "/sample-image.jpg",
    featured: false
  }
  return (
    <div className='mt-10'>
        <Cars
        title='Browse New Cars'
        car={dummyCar}
        index={0}
        />
    </div>
  )
}

export default BrowseCars