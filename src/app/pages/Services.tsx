"use client"
import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    const services = [
        {
            title: "Sell Your Car",
            description: "Easiest way to sell your car at the best price.",
            link: "#",
            image: "car1.png"
        },
        {
            title: "Car Inspection",
            description: "Get a detailed car inspection report at the comfort of your home.",
            link: "#",
            image: "car2.png"
        },
        {
            title: "Car Insurance",
            description: "Get reliable car insurance and drive worry-free.",
            link: "#",
            image: "car3.png"
        },
        {
            title: "Sell Through Live Bidding",
            description: "Join our live auction platform and get the best price for your car.",
            link: "#",
            image: "car4.png"
        },
        {
            title: "Sell Through Famewheels",
            description: "Dedicated Sales Expert to Sell your Car. We Bargain for you.",
            link: "#",
            image: "car5.png"
        },
        {
            title: "Car Finance",
            description: "FameWheels proudly offers premier Financing services in Pakistan.",
            link: "#",
            image: "car1.png",
        },
    ];

    return (
        <section className="mt-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        image={`/${service.image}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;