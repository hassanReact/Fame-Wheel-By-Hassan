import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select";

export default function SearchForm() {
  return (
    <div className="absolute bottom-[-50px] left-[-1px] lg: w-full flex justify-center">
      <div className="bg-white p-6 w-full max-w-[90%] md:max-w-[80%] rounded-lg shadow-lg flex flex-col md:flex-row gap-4 items-center">
        <Select>
          <SelectTrigger className="w-full md:w-[300px] md:h-[50px] border rounded-lg">
            <SelectValue placeholder="Select Make" />
          </SelectTrigger>
        </Select>

        <Select>
          <SelectTrigger className="w-full md:w-[300px] md:h-[50px] border rounded-lg">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
        </Select>

        <div className="w-full md:w-auto">
          <Button className="w-full md:w-[150px] h-[45px] bg-red-500 hover:bg-red-600 text-white">
            Search
          </Button>
        </div>

        <div className="w-full md:w-auto">
          <Button
            variant="outline"
            className="w-full md:w-[180px] h-[45px] border-gray-300 text-black hover:bg-red-600 hover:text-white"
          >
            Advanced Search
          </Button>
        </div>
      </div>
    </div>
  );
}
