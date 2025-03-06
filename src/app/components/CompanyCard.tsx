import Image from 'next/image';
import React from 'react';

interface Props {
    title: string;
    image: string;
}

const CompanyCard = ({image, title} : Props) => {
  return (
    <div className="w-full h-40 flex flex-col justify-center items-center p-2 ">
    <div className='w-full h-full flex flex-col justify-center items-center shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className="mb-2">
       <Image src={image} alt="Company Logo" width={100} height={100} />
      </div>
      <p className="text-sm text-gray-600 text-center">{title}</p>
    </div>
    </div>
  );
};

export default CompanyCard;