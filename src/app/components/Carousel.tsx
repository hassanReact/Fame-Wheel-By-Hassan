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
            setIsScrolled(scrollPosition > 50) // Change this value to adjust when the color change happens
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative h-[70vh] w-full">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${carousel.src})`,
                    backgroundPosition: "center",
                }}
            >
                <div className='relative z-10'>
                    <Header isScrolled={isScrolled} />
                    <Navigation isScrolled={isScrolled} />
                </div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-xl md:text-xl lg:text-4xl font-bold mb-4">Discover, Buy & Sell Cars in Pakistan</h1>
                <p className="text-xl md:text-xl mb-12">Smart Choices, Smooth Rides – Your Trusted Platform</p>

            </div>
            {/* Search form */}
                <SearchForm />
        </div>
    )
}

