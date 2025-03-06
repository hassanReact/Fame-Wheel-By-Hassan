import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
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
        <nav className="fixed top-7 left-0 w-full z-[1000] transition-all duration-300 ease-in-out px-4 sm:px-6">
            <div className={`py-3 sm:py-5 px-4 sm:px-6 flex transition-all justify-between items-center rounded-full mx-auto max-w-7xl my-2 sm:my-4 ${isScrolled ? "bg-red-300" : "bg-gradient-to-r from-gray-700 to-gray-400/90"}`}>
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src={logo}
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
                                            <Link href={`${item.href}/option-1`} className="w-full">Option 1</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={`${item.href}/option-2`} className="w-full">Option 2</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={`${item.href}/option-3`} className="w-full">Option 3</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link href={item.href} className="px-2 py-1 text-white hover:text-gray-200 font-medium transition-colors">
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

                {/* Mobile Menu Button */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="lg:hidden text-white hover:bg-gray-700/20 p-2">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                        <SheetTitle>Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-6 mt-6">
                            {navItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-200 pb-4">
                                    {item.hasDropdown ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center justify-between w-full text-gray-900 hover:text-gray-600">
                                                {item.name}
                                                <ChevronDown className="h-4 w-4" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>
                                                    <Link href={`${item.href}/option-1`} className="w-full">Option 1</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link href={`${item.href}/option-2`} className="w-full">Option 2</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Link href={`${item.href}/option-3`} className="w-full">Option 3</Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link href={item.href} className="block text-gray-900 hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2">
                                Post Your Ad
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}