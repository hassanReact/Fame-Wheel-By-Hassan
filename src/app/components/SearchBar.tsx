import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchForm() {
  // Sample data for dropdowns
  const carMakes = ["Toyota", "Honda", "Suzuki", "Kia", "Hyundai", "BMW", "Mercedes", "Audi"]
  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "Quetta", "Multan", "Faisalabad"]

  return (
    <div className="absolute z-0 bottom-[-30px] right-[145px] bg-white p-6 w-[80vw] rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
      <Select>
        <SelectTrigger className="w-full md:w-[550px] md:h-[50px]">
          <SelectValue placeholder="Select Make" />
        </SelectTrigger>
        {/* <SelectContent>
          {carMakes.map((make) => (
            <SelectItem key={make} value={make.toLowerCase()}>
              {make}
            </SelectItem>
          ))}
        </SelectContent> */}
      </Select>

      <Select>
        <SelectTrigger className="w-full md:w-[550px] md:h-[50px]">
          <SelectValue placeholder="Select City" />
        </SelectTrigger>
        {/* <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city} value={city.toLowerCase()}>
              {city}
            </SelectItem>
          ))}
        </SelectContent> */}
      </Select>

      <Button className="bg-red-500 mt-1 hover:bg-red-600 text-white md:w-[150px] md:h-[40px]">Search</Button>

      <Button variant="outline" className="border-gray-300 text-black mt-1 hover:bg-red-600 md:w-[150px] md:h-[40px]">
        Advance Search
      </Button>
    </div>
  )
}

