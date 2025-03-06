import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto py-10 px-5">

        {/* Footer Links Section */}
        {/* Logo and Links Section */}
        <div className="flex mb-8">
          <div className="w-1/5">
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="Fame Wheels Logo"
              className="w-40"
            />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-5 gap-6 text-sm">
          {/* Company */}
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-0">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms And Conditions</li>
              <li>Refund Policy</li>
              <li>Subscribe To Live Bidding</li>
            </ul>
          </div>

          {/* Cars By Make */}
          <div>
            <h3 className="font-bold mb-3">Cars By Make</h3>
            <ul className="space-y-0">
              <li>Jetour Cars For Sale</li>
              <li>Toyota Cars For Sale</li>
              <li>Suzuki Cars For Sale</li>
              <li>Honda Cars For Sale</li>
              <li>Daihatsu Cars For Sale</li>
              <li>KIA Cars For Sale</li>
              <li>Peugeot Cars For Sale</li>
              <li>Hyundai Cars For Sale</li>
              <li>Haval Cars For Sale</li>
              <li>Changan Cars For Sale</li>
            </ul>
          </div>

          {/* Cars By Cities */}
          <div>
            <h3 className="font-bold mb-3">Cars By Cities</h3>
            <ul className="space-y-0">
              <li>Cars In Karachi</li>
              <li>Cars In Faisalabad</li>
              <li>Cars In Sukkur</li>
              <li>Cars In Sahiwal</li>
              <li>Cars In Lahore</li>
              <li>Cars In Islamabad</li>
              <li>Cars In Bahawalpur</li>
              <li>Cars In Hyderabad</li>
              <li>Cars In Multan</li>
              <li>Cars In Quetta</li>
            </ul>
          </div>

          {/* Cars By Category */}
          <div>
            <h3 className="font-bold mb-3">Cars By Category</h3>
            <ul className="space-y-0">
              <li>660cc Cars</li>
              <li>800cc Cars</li>
              <li>1000cc Cars</li>
              <li>1200cc Cars</li>
              <li>1300cc Cars</li>
              <li>1400cc Cars</li>
              <li>1500cc Cars</li>
              <li>1600cc Cars</li>
              <li>1700cc Cars</li>
              <li>1800cc Cars</li>
            </ul>
          </div>

          {/* Sell On FameWheels */}
          <div>
            <h3 className="font-bold mb-3">Sell On FameWheels</h3>
            <ul className="space-y-0">
              <li>Sell On FameWheels</li>
              <li>Sell To FameWheels</li>
              <li>Become A Member</li>
            </ul>
          </div>
        </div>

       
      </div>
       {/* Footer Bottom */}
       <div className="text-center bg-red-400 flex justify-between items-center text-sm border-t">
          <p>
            Design and Developed by Fame Business Solutions, Copyright &copy; 2021-2025
            Fame Wheels (SMC-Pvt.) Ltd, All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <span>Follow Us:</span>
            <span className="text-red-500">🔴</span> <span>📷</span> <>🎶</>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
