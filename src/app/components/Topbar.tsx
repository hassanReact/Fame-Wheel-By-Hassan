import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Flag from './../../../public/pakistan.png'

interface Props {
  isScrolled: boolean
}

export default function Header({isScrolled}: Props) {
  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out text-white py-2 px-4 sm:px-6 flex justify-between items-center ${isScrolled ? "bg-red-600" : ""}`}>
      {/* Left side - Country selector */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Image
          src={Flag}
          alt="Pakistan Flag"
          width={20}
          height={15}
          className="rounded-sm w-[16px] h-[12px] sm:w-[20px] sm:h-[15px]"
          priority
        />
        <span className="text-sm sm:text-base">Pakistan</span>
      </div>

      {/* Right side - Login button */}
      <Link 
        href="/login" 
        className="flex items-center gap-1 sm:gap-2 hover:text-gray-200 transition-colors duration-200"
      >
        <User size={16} className="sm:size-[18px]" />
        <span className="text-sm sm:text-base">Login</span>
      </Link>
    </div>
  )
}