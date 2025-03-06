import Image from "next/image";

const PaymentPartners = () => {
  const partners = [
    { name: "JazzCash", src: "/jazzcash.png" },
    { name: "PayFast", src: "/payfast.png" },
    { name: "Bank Alfalah", src: "/alfalah.png" },
    { name: "Bank AL Habib", src: "/al-habib.png" },
    { name: "NBP", src: "/NBP.png" },
  ];

  const features = [
    { icon: "/LiveBidding.png", title: "Pakistan's No 1", subtitle: "Live Bidding Portal" },
    { icon: "/CarSold.png", title: "Car Sold", subtitle: "Every 15 Minutes" },
    { icon: "/Offers.png", title: "Offers", subtitle: "Stay updated pay less" },
    { icon: "/Compare.png", title: "Compare", subtitle: "Decode the right car" },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-9 mt-10">
      <h2 className="text-2xl font-semibold">Our Payment Partners</h2>
      <div className="flex space-x-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-gray-100 p-6 rounded-xl flex items-center justify-center gap-8 w-40 h-40"
          >
            <Image src={partner.src} alt={partner.name} width={250} height={100} />
          </div>
        ))}
      </div>

      <div className="w-full h-[200px] flex justify-between bg-gradient-to-r from-blue-600 to-red-500 text-white p-6 rounded-lg">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Image src={feature.icon} width={80} height={100} alt="features"/>
           <div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-sm">{feature.subtitle}</p>
          </div>    
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPartners;
