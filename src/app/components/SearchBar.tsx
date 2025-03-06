import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchForm() {
  // Sample data for dropdowns
  const carMakes = ["Toyota", "Honda", "Suzuki", "Kia", "Hyundai", "BMW", "Mercedes", "Audi"]
  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "Quetta", "Multan", "Faisalabad"]

  return (
    <div className="absolute z-30 bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white p-4 sm:p-6 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full h-[45px]">
              <SelectValue placeholder="Select Make" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto z-50">
              {carMakes.map((make) => (
                <SelectItem key={make} value={make.toLowerCase()}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full h-[45px]">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto z-50">
              {cities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Button className="w-full h-[45px] bg-red-500 hover:bg-red-600 text-white">Search</Button>
        </div>

        <div className="w-full">
          <Button
            variant="outline"
            className="w-full h-[45px] border-gray-300 text-black hover:bg-red-600 hover:text-white"
          >
            Advanced Search
          </Button>
        </div>
      </div>
    </div>
  )
}

