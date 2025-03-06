import Image from "next/image";

const CarBanner = () => {
  return (
    <div className="flex border items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-gray-800">Get the FameWheels Mobile App</h2>
        <p className="text-lg text-gray-600 mt-4">
        Download the FameWheels mobile app and experience seamless car buying, selling, and live bidding at your fingertips.
        </p>
        <div className="flex p-7 gap-2">
        <Image src="/google-play-badge.png" alt="Car Inspection" width={150} height={250} className="object-contain" />
        <Image src="/app-store.png" alt="Car Inspection" width={150} height={250} className="object-contain" />
        </div>
      </div>
      {/* Image Section */}
      <div className="w-1/2 flex justify-end">
        <Image src="/mobile-mockup.png" alt="Car Inspection" width={300} height={250} className="object-contain" />
      </div>
    </div>
  );
};

export default CarBanner;
