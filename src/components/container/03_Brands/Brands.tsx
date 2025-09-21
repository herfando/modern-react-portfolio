import React from "react";

// Pisahkan data merek ke dalam array
const BRAND_LOGOS = [
    { src: "./03_Brands_adobe.png", alt: "Adobe" },
    { src: "./03_Brands_upwork.png", alt: "Upwork" },
    { src: "./03_Brands_zoom.png", alt: "Zoom" },
    { src: "./03_Brands_postman.png", alt: "Postman" },
    { src: "./03_Brands_databricks.png", alt: "Databricks" },
    { src: "./03_Brands_airbnb.png", alt: "Airbnb" },
    { src: "./03_Brands_dropbox.png", alt: "Dropbox" },
    { src: "./03_Brands_paypal.png", alt: "PayPal" },
    { src: "./03_Brands_netflix.png", alt: "Netflix" },
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