import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Flag from './../../../public/pakistan.png'

interface Props{
    isScrolled: boolean
}

export default function Header({isScrolled}: Props) {
  return (
    <div className={`fixed top-0 left-0 w-full z-50 h-8 transition-all duration-300 ease-in-out text-white p-2 flex justify-between items-center ${isScrolled ? "bg-red-600" : ""}`}>
      <div className="flex mx-20 items-center gap-1">
        <Image
          src={Flag}
          alt="Pakistan Flag"
          width={20}
          height={15}
          className="rounded-sm"
        />
        <span>Pakistan</span>
      </div>
      <Link href="/login" className="flex items-center mx-20 gap-1 hover:text-gray-200">
        <User size={18} />
        <span>Login</span>
      </Link>
    </div>
  )
}

