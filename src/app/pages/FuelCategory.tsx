"use client"
import Image from "next/image";
import { useState } from "react";

const FuelCategory = () => {
  const [activeTab, setActiveTab] = useState("Fuel Type");

  const tabs = ["Transmission", "Fuel Type"];
  const fuelTypes = [
    { name: "Petrol", icon: "/icons/petrol.png" },
    { name: "Diesel", icon: "/icons/diesel.png" },
    { name: "Electric", icon: "/icons/electric.png" },
    { name: "Hybrid", icon: "/icons/hybrid.png" },
  ];
  const Transmition = [
    { name: "Automatic", icon: "/icons/petrol.png" },
    { name: "Manual", icon: "/icons/diesel.png" },
    { name: "CVT", icon: "/icons/electric.png" },
  ];

  return (
    <div className="max-w-[80vw] mx-auto my-6">
     <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Used Cars in UAE by Category</h1>
      {/* Tabs */}
      <div className="flex space-x-6 text-gray-500">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 border-rounded text-xl ${
              activeTab === tab
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Fuel Type Cards */}
      {activeTab === "Fuel Type" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-[60vw] h-[15vh]">
          {fuelTypes.map((fuel) => (
            <div
              key={fuel.name}
              className="p-4 border rounded-lg shadow-sm flex items-center justify-center space-x-2"
            >
              <Image
                src={''}
                alt={fuel.name}
                className="w-6 h-6 object-contain"
                width={100}
                height={100}
                // onError={(e) => (e.currentTarget.src = "/icons/placeholder.png")}
              />
              <span className="text-center">{fuel.name}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Transmission" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-[60vw] h-[15vh]">
          {Transmition.map((fuel) => (
            <div
              key={fuel.name}
              className="p-4 border rounded-lg shadow-sm flex items-center justify-center space-x-2"
            >
              <Image
                src={""}
                alt={fuel.name}
                className="w-6 h-6 object-contain"
                width={100}
                height={100}
                // onError={(e) => (e.currentTarget.src = "/icons/placeholder.png")}
              />
              <span className="text-center">{fuel.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FuelCategory;
