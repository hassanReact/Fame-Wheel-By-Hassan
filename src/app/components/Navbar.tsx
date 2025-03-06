import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import logo from '../../../public/logo.png'

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
        <nav className="fixed top-7 left-0 w-full z-50 transition-all duration-300 ease-in-out">
            {/* Navigation content */}
            <div className={`py-5  px-6 flex transition-all justify-between items-center rounded-full mx-auto max-w-7xl my-4 ${isScrolled ? "bg-red-300" : "bg-gradient-to-r from-gray-700 to-gray-400/90 transition-all "}`}>
                <div className="flex items-center gap-4">
                    <Link href="/" className="mr-4">
                        <Image
                            src={logo}
                            alt="FAME WHEELS Logo"
                            width={180}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.hasDropdown ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 text-white hover:text-gray-900 font-medium">
                                        {item.name} <ChevronDown size={16} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <Link href={`${item.href}/option-1`}>Option 1</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={`${item.href}/option-2`}>Option 2</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={`${item.href}/option-3`}>Option 3</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link href={item.href} className="px-2 py-1 text-gray-700 hover:text-gray-900 font-medium">
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2">Post Your Ad</Button>
            </div>
        </nav>
    )
}
