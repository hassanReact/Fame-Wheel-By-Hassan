import Image from "next/image";

const CarInspection = () => {
  return (
    <div className="flex border items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-gray-800">Famewheels Car Inspection</h2>
        <p className="text-lg text-gray-600 mt-4">
          Get a professional and reliable car inspection service with FameWheels across
          major cities like Karachi, Lahore, and Islamabad. Your trusted partner for used car
          evaluations in Pakistan.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded shadow hover:bg-red-700 transition">
          GET YOUR CAR INSPECTED
        </button>
      </div>
      {/* Image Section */}
      <div className="w-1/2 flex justify-end">
        <Image src="/inspection.png" alt="Car Inspection" width={300} height={250} className="object-contain" />
      </div>
    </div>
  );
};

export default CarInspection;
