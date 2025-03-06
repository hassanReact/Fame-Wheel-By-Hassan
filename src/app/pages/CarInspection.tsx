import Image from "next/image"

const CarInspection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 p-3 sm:p-6 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Famewheels Car Inspection</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-4">
          Get a professional and reliable car inspection service with FameWheels across major cities like Karachi,
          Lahore, and Islamabad. Your trusted partner for used car evaluations in Pakistan.
        </p>
        <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 transition w-full sm:w-auto">
          GET YOUR CAR INSPECTED
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
        <Image
          src="/inspection.png"
          alt="Car Inspection"
          width={300}
          height={250}
          className="object-contain max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default CarInspection

