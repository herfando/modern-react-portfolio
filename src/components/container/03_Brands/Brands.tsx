import React from "react";

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
                {/* Perbaikan di sini: Tambahkan flex-shrink-0 dan atur lebar yang jelas */}
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/adobe.png" alt="Adobe" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/upwork.png" alt="Upwork" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/zoom.png" alt="Zoom" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/postman.png" alt="Postman" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/databricks.png" alt="Databricks" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/airbnb.png" alt="Airbnb" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/dropbox.png" alt="Dropbox" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/paypal.png" alt="PayPal" /></li>
                <li className="flex-shrink-0"><img className="md:w-auto h-auto object-contain" src="./public/netflix.png" alt="Netflix" /></li>
            </ul>
        </section>
    );
}

export default Brands;