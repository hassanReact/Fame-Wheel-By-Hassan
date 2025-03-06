"use client"
import { useState, useEffect } from 'react'
import carousel from '../../../public/carousel.jpg'
import Navigation from './Navbar'
import SearchForm from './SearchBar'
import Header from './Topbar'

export default function HeroSection() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative min-h-[500px] h-[85vh] md:h-[80vh] w-full">
            {/* Background image with gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${carousel.src})`,
                    backgroundPosition: "center",
                }}
            >
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
            </div>

            {/* Navigation components - moved outside the background div and given highest z-index */}
            <div className='fixed top-0 left-0 right-0 z-50'>
                <Header isScrolled={isScrolled} />
                <Navigation isScrolled={isScrolled} />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
                {/* Main heading with responsive text sizes */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight mt-16 sm:mt-20">
                    Discover, Buy & Sell Cars in Pakistan
                </h1>

                {/* Subheading with responsive text */}
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Smart Choices, Smooth Rides – Your Trusted Platform
                </p>
            </div>

            {/* Search form container - centered with flex and auto margins */}
            <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl z-20">
                        <SearchForm />
                    </div>
                </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        </div>
    )
}