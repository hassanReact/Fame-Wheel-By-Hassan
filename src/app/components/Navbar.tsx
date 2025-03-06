import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, Home, Search, Plus, User, MoreHorizontal } from "lucide-react"
import logo from "../../../public/logo.png"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const navItems = [
    { name: "Used Cars", href: "/used-cars", hasDropdown: true },
    { name: "New Cars", href: "/new-cars", hasDropdown: true },
    { name: "Bikes", href: "/bikes", hasDropdown: true },
    { name: "Inspection", href: "/inspection", hasDropdown: true },
    { name: "Bidding", href: "/bidding", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: false },
    { name: "More", href: "#", hasDropdown: true },
  ]

  return (
    <>

      {/* Main Navigation */}
      <nav className="fixed top-8 left-0 w-full z-[1000] transition-all duration-300 ease-in-out px-4 sm:px-6">
        <div
          className={`py-3 sm:py-5 px-4 sm:px-6 flex transition-all justify-center lg:justify-between items-center rounded-full mx-auto max-w-7xl my-2 sm:my-4 ${isScrolled ? "bg-red-300" : "bg-gradient-to-r from-gray-700 to-gray-400/90"}`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo || "/placeholder.svg"}
              alt="FAME WHEELS Logo"
              width={180}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 text-white hover:text-gray-200 font-medium transition-colors">
                      {item.name} <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{item.name} Options</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Link href={`${item.href}/option-1`} className="w-full">
                          Option 1
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`${item.href}/option-2`} className="w-full">
                          Option 2
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`${item.href}/option-3`} className="w-full">
                          Option 3
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 py-1 text-white hover:text-gray-200 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Post Ad Button - Desktop */}
          <Button className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 transition-colors">
            Post Your Ad
          </Button>

        </div>
      </nav>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-between items-center z-[1000]">
        <Link href="/" className="flex flex-col items-center justify-center py-2 flex-1 text-xs text-gray-700">
          <Home className="h-5 w-5 mb-1" />
          <span>Home</span>
        </Link>
        <Link href="/my-ads" className="flex flex-col items-center justify-center py-2 flex-1 text-xs text-gray-700">
          <div className="h-5 w-5 mb-1 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span>My Ads</span>
        </Link>
        <div className="flex-1 flex justify-center">
          <Link
            href="/post"
            className="bg-red-600 rounded-full h-14 w-14 flex items-center justify-center -mt-5 shadow-lg"
          >
            <Plus className="h-8 w-8 text-white" />
          </Link>
        </div>
        <Link href="/find-cars" className="flex flex-col items-center justify-center py-2 flex-1 text-xs text-gray-700">
          <Search className="h-5 w-5 mb-1" />
          <span>Find Cars</span>
        </Link>
        <Link href="/more" className="flex flex-col items-center justify-center py-2 flex-1 text-xs text-gray-700">
          <MoreHorizontal className="h-5 w-5 mb-1" />
          <span>More</span>
        </Link>
      </div>

      {/* Help Button (Mobile) */}
      <div className="lg:hidden fixed bottom-20 right-4 z-[1000]">
        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 shadow-lg">NEED HELP?</Button>
      </div>
    </>
  )
}

