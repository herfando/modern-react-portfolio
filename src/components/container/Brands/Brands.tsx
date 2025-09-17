import React from "react";

const Brands = () => {
    return (
    <section id="Service" className="max-[393px]:h-[200px] relative z-20 items-center dark:bg-black w-full flex flex-col">
        <h3 className="max-[393px]:pl-3 max-[393px]:w-[393px] max-[393px]:pt-[20px] max-[393px]:text-[16px] max-[393px]:font-bold text-xl mb-2 pb-13 dark:text-white">Trusted by Global Innovators & Leading Brands</h3>
        <div class="max-[393px]:w-[1500px] flex grayscale overflow-hidden w-full whitespace-nowrap animate-scroll-left space-x-10" role="list">
            <figure><img class="h-10 w-auto" src="./public/adobe.png" alt="adobe company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/upwork.png" alt="upwork company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/zoom.png" alt="zoom company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/postman.png" alt="postman company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/databricks.png" alt="databricks company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/airbnb.png" alt="airbnb company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/dropbox.png" alt="dropbox company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/paypal.png" alt="paypal company" /></figure>
            <figure><img class="h-10 w-auto" src="./public/netflix.png" alt="netflix company" /></figure>
        </div>
    </section>
    )
}
export default Brands;
    