import Image from "next/image"

const CarBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 p-3 sm:p-6 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Get the FameWheels Mobile App</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4">
          Download the FameWheels mobile app and experience seamless car buying, selling, and live bidding at your
          fingertips.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4 sm:mt-6 px-2 sm:px-0">
          <Image
            src="/google-play-badge.png"
            alt="Google Play Store"
            width={150}
            height={44}
            className="object-contain h-auto w-[135px] sm:w-[150px]"
          />
          <Image
            src="/app-store.png"
            alt="Apple App Store"
            width={150}
            height={44}
            className="object-contain h-auto w-[135px] sm:w-[150px]"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
        <Image
          src="/mobile-mockup.png"
          alt="FameWheels Mobile App"
          width={300}
          height={500}
          className="object-contain max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default CarBanner

