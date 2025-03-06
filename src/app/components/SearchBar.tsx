import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchForm() {

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
  )
}

