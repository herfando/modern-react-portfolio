import React from "react";

// Pisahkan data achievement ke dalam array
const ACHIEVEMENTS = [
    { number: "50+", text: "Projects Delivered" },
    { number: "5+", text: "Years of Experience" },
    { number: "10+", text: "Industry Awards Won" },
    { number: "100%", text: "Client Satisfaction Rate" },
];

const Achievement: React.FC = () => {
    return (
        <section id="Projects" className="py-10 flex flex-col justify-center items-center w-full dark:bg-black h-[688px] md:h-[598px]">
            
            {/* Text */}
            <article>
                <h2 className="text-4xl font-bold text-center dark:text-white max-[393px]:text-3xl">
                    End-to-End IT Solutions<span className="inline max-[393px]:block">That Drive Results</span>
                </h2>
                <h3 className="pt-8 pb-24 text-xl text-[#717680] text-center max-[393px]:text-[15px]">
                    From strategy to execution, we deliver solutions that <span className="inline max-[393px]:block">grow your business.</span>
                </h3>
            </article>

            <article className="dark:text-white grid grid-cols-2 place-items-center md:flex md:gap-x-10  gap-x-5 gap-y-5">
                {/* Gunakan map untuk merender setiap item dari array */}
                {ACHIEVEMENTS.map((item, index) => (
                    <dl key={index} className="h-[172.5px] w-[172.5px] md:h-[275px] md:w-[275px] border-4 border-[#DEDCDC] rounded-full grid justify-center text-center content-center">
                        <dt className="text-[#FF623E] md:text-5xl text-3xl font-bold">{item.number}</dt>
                        <dd className="md:text-lg text-l font-semibold">{item.text}</dd>
                    </dl>
                ))}
            </article>
        </section>
    );
};

export default Achievement;