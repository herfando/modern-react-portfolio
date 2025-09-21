import React from "react";

// Pisahkan data merek ke dalam array
const BRAND_LOGOS = [
    { src: "./adobe.png", alt: "Adobe" },
    { src: "./upwork.png", alt: "Upwork" },
    { src: "./zoom.png", alt: "Zoom" },
    { src: "./postman.png", alt: "Postman" },
    { src: "./databricks.png", alt: "Databricks" },
    { src: "./airbnb.png", alt: "Airbnb" },
    { src: "./dropbox.png", alt: "Dropbox" },
    { src: "./paypal.png", alt: "PayPal" },
    { src: "./netflix.png", alt: "Netflix" },
];

const Brands: React.FC = () => {
    return (
    <section
        id="Service"
        className="w-full relative z-20 flex flex-col items-center py-10 overflow-hidden bg-white dark:bg-black"
    >
    <h3 className="text-xl md:text-2xl font-bold mb-8 dark:text-white px-4 md:px-0 text-center">
        Trusted by Global Innovators & Leading Brands
    </h3>
    <ul
        className="flex animate-scroll-left space-x-10 grayscale w-full"
    >
        {/* map untuk merender setiap item dari array */}
        {BRAND_LOGOS.map((brand, index) => (
        <li key={index} className="flex-shrink-0">
            <img 
            className="md:w-auto h-auto object-contain" 
            src={brand.src} 
            alt={brand.alt} 
            />
        </li>
        ))}
    </ul>
    </section>
    );
}

export default Brands;