import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import certified1 from '../../../public/cer.png'
import certified2 from '../../../public/cer1.png'
import certified3 from '../../../public/cer2.png'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Newsletter Subscription */}
        <div className="max-w-5xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 sm:p-6 rounded-lg shadow-md text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Subscribe to our <span className="text-red-500">Newsletter</span>
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[100%] p-3 border rounded-lg sm:rounded-r-none outline-none"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg sm:rounded-l-none shadow-md hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        </div>

        {/* Logo and Description */}
        {/* <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-full sm:w-1/5">
              <img src="/logo.png" alt="Fame Wheels Logo" className="w-40 mx-auto sm:mx-0" />
              <p className="mt-4 text-sm text-gray-600 max-w-xs mx-auto sm:mx-0 text-center sm:text-left">
                Pakistans trusted platform for buying and selling cars with verified listings and premium services.
              </p>
            </div>
          </div>
        </div> */}

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-base">Company</h3>
            <ul className="space-y-0">
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-red-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500 transition-colors">
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-red-500 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/live-bidding" className="hover:text-red-500 transition-colors">
                  Subscribe To Live Bidding
                </Link>
              </li>
            </ul>
          </div>

          {/* Cars By Make */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-base">Cars By Make</h3>
            <ul className="space-y-0">
              <li>
                <Link href="/cars/jetour" className="hover:text-red-500 transition-colors">
                  Jetour Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/toyota" className="hover:text-red-500 transition-colors">
                  Toyota Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/suzuki" className="hover:text-red-500 transition-colors">
                  Suzuki Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/honda" className="hover:text-red-500 transition-colors">
                  Honda Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/daihatsu" className="hover:text-red-500 transition-colors">
                  Daihatsu Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/kia" className="hover:text-red-500 transition-colors">
                  KIA Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/peugeot" className="hover:text-red-500 transition-colors">
                  Peugeot Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/hyundai" className="hover:text-red-500 transition-colors">
                  Hyundai Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/haval" className="hover:text-red-500 transition-colors">
                  Haval Cars For Sale
                </Link>
              </li>
              <li>
                <Link href="/cars/changan" className="hover:text-red-500 transition-colors">
                  Changan Cars For Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Cars By Cities */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-base">Cars By Cities</h3>
            <ul className="space-y-0">
              <li>
                <Link href="/cities/karachi" className="hover:text-red-500 transition-colors">
                  Cars In Karachi
                </Link>
              </li>
              <li>
                <Link href="/cities/faisalabad" className="hover:text-red-500 transition-colors">
                  Cars In Faisalabad
                </Link>
              </li>
              <li>
                <Link href="/cities/sukkur" className="hover:text-red-500 transition-colors">
                  Cars In Sukkur
                </Link>
              </li>
              <li>
                <Link href="/cities/sahiwal" className="hover:text-red-500 transition-colors">
                  Cars In Sahiwal
                </Link>
              </li>
              <li>
                <Link href="/cities/lahore" className="hover:text-red-500 transition-colors">
                  Cars In Lahore
                </Link>
              </li>
              <li>
                <Link href="/cities/islamabad" className="hover:text-red-500 transition-colors">
                  Cars In Islamabad
                </Link>
              </li>
              <li>
                <Link href="/cities/bahawalpur" className="hover:text-red-500 transition-colors">
                  Cars In Bahawalpur
                </Link>
              </li>
              <li>
                <Link href="/cities/hyderabad" className="hover:text-red-500 transition-colors">
                  Cars In Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/cities/multan" className="hover:text-red-500 transition-colors">
                  Cars In Multan
                </Link>
              </li>
              <li>
                <Link href="/cities/quetta" className="hover:text-red-500 transition-colors">
                  Cars In Quetta
                </Link>
              </li>
            </ul>
          </div>

          {/* Cars By Category */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-base">Cars By Category</h3>
            <ul className="space-y-0">
              <li>
                <Link href="/category/660cc" className="hover:text-red-500 transition-colors">
                  660cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/800cc" className="hover:text-red-500 transition-colors">
                  800cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1000cc" className="hover:text-red-500 transition-colors">
                  1000cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1200cc" className="hover:text-red-500 transition-colors">
                  1200cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1300cc" className="hover:text-red-500 transition-colors">
                  1300cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1400cc" className="hover:text-red-500 transition-colors">
                  1400cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1500cc" className="hover:text-red-500 transition-colors">
                  1500cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1600cc" className="hover:text-red-500 transition-colors">
                  1600cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1700cc" className="hover:text-red-500 transition-colors">
                  1700cc Cars
                </Link>
              </li>
              <li>
                <Link href="/category/1800cc" className="hover:text-red-500 transition-colors">
                  1800cc Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* Sell On FameWheels */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 text-base">Sell On FameWheels</h3>
            <ul className="space-y-0">
              <li>
                <Link href="/sell" className="hover:text-red-500 transition-colors">
                  Sell On FameWheels
                </Link>
              </li>
              <li>
                <Link href="/sell-to-us" className="hover:text-red-500 transition-colors">
                  Sell To FameWheels
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-red-500 transition-colors">
                  Become A Member
                </Link>
              </li>

            </ul>
            {/* Payment Methods */}
            <h3 className="font-bold mb-4 mt-8 text-base">Certified By</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <Image src={certified1} width={40} height={50} alt="Visa" className="h-8" />
              <Image src={certified2} width={40} height={50} alt="Mastercard" className="h-8" />
              <Image src={certified3} width={40} height={50} alt="Mastercard" className="h-8" />
              
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-red-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-center md:text-left mb-4 md:mb-0">
              Design and Developed by Hassan Kashif, Copyright &copy; {new Date().getFullYear()} Fame Wheels
              (SMC-Pvt.) Ltd, All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span>Follow Us:</span>
              <div className="flex space-x-3">
                <Link href="#" className="hover:text-gray-200 transition-colors">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors">
                  <Twitter size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

