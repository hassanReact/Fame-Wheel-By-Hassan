import Image from "next/image"

const PaymentPartners = () => {
  const partners = [
    { name: "JazzCash", src: "/jazzcash.png" },
    { name: "PayFast", src: "/PayFast.png" },
    { name: "Bank Alfalah", src: "/Alfalah.png" },
    { name: "Bank AL Habib", src: "/al-habib.png" },
    { name: "NBP", src: "/NBP.png" },
  ]

  const features = [
    { icon: "/LiveBidding.png", title: "Pakistan's No 1", subtitle: "Live Bidding Portal" },
    { icon: "/CarSold.png", title: "Car Sold", subtitle: "Every 15 Minutes" },
    { icon: "/Offers.png", title: "Offers", subtitle: "Stay updated pay less" },
    { icon: "/Compare.png", title: "Compare", subtitle: "Decode the right car" },
  ]

  return (
    <div className="w-full flex flex-col items-center space-y-6 sm:space-y-9 mt-6 sm:mt-10 px-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-center">Our Payment Partners</h2>

      {/* Payment Partners Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-gray-100 p-3 sm:p-4 md:p-6 rounded-xl flex items-center justify-center aspect-square"
          >
            <Image
              src={partner.src || "/placeholder.svg"}
              alt={partner.name}
              width={100}
              height={40}
              className="w-full max-w-[100px] h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-red-500 text-white p-4 sm:p-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={feature.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">{feature.title}</h3>
                <p className="text-xs sm:text-sm">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentPartners

