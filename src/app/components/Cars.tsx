import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Toyota Aqua 2019",
    price: "PKR 56 lacs",
    location: "Faisalabad",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 2,
    name: "Toyota Prius 2012",
    price: "Call for price",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1591051270770-b268b0575d34?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 3,
    name: "Toyota Corolla 2019",
    price: "PKR 47 lacs",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 4,
    name: "Honda City 2017",
    price: "PKR 36.75 lacs",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 5,
    name: "Toyota Prius 2013",
    price: "PKR 43 lacs",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 6,
    name: "KIA Sportage 2019",
    price: "Call for price",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 7,
    name: "Toyota Corolla 2021",
    price: "PKR 62.52 lacs",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1591051270770-b268b0575d34?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 8,
    name: "Toyota Raize 2020",
    price: "PKR 61 lacs",
    location: "Faisalabad",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800",
    featured: true
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 relative">
                {car.featured && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded-md z-10">
                    Featured
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{car.name}</h2>
                <p className="text-lg font-bold text-gray-900 mb-3">{car.price}</p>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{car.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}