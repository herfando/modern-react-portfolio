import React from "react";

const Ask_me = () => {
    return (
    <section id="FAQ" className="max-[393px]:py-10 max-[393px]:px-3.5 flex flex-col gap-12 py-20 px-[120px]  bg-white dark:bg-black text-black dark:text-white w-full">
        <div className="flex justify-between max-[393px]:grid">
        <h2 className="basis-[331px] leading-14 text-[40px] font-bold">Need Help? Start Here.</h2>
            <p className="basis-[245px] leading-8 text-lg font-medium text-[#717680]">Everything you need to know — all in one place.</p>
            </div>
            {/* Garis atas */}
            <div className="h-[1px] bg-[#dfdfdf]"></div>
            {/* Kontainer utama */}
            <div className="flex gap-[73px] max-[393px]:flex-col max-[393px]:gap-8">
            {/* Kiri: FAQ */}
            <div className="flex flex-col gap-7 grow">
            {/* Pertanyaan 1 */}
            <div className="flex flex-col gap-4">
            <div className="flex justify-between">
            <h3 className="leading-9 text-2xl font-bold">What services do you offer?</h3>
            <div className="basis-[24px] filter invert dark:filter-none cursor-pointer">
            <img src="./Icon.png" />
            </div>
            </div>
                <p className="leading-[34px] text-xl font-medium text-[#717680]">
                We provide custom web/app development, cloud solutions, UX/UI
                design, and more.
                </p>
            </div>
            <div className="h-[1px] bg-[#dfdfdf]"></div>
            {/* Pertanyaan 2 */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                <h3 className="leading-9 text-2xl font-bold">
                    How do I know if this is right for my business?
                </h3>
                <div className="basis-[24px] filter invert dark:filter-none cursor-pointer">
                    <img src="./Icon(1).png" />
                </div>
                </div>
            </div>
            <div className="h-[1px] bg-[#dfdfdf]"></div>
            {/* Pertanyaan 3 */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                <h3 className="leading-9 text-2xl font-bold">
                    How much does a project cost?
                </h3>
                <div className="basis-[24px] filter invert dark:filter-none cursor-pointer">
                    <img src="./Icon(1).png" />
                </div>
                </div>
            </div>
            <div className="h-[1px] bg-[#dfdfdf]"></div>
            {/* Pertanyaan 4 */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                <h3 className="leading-9 text-2xl font-bold">
                    How long does it take?
                </h3>
                <div className="basis-[24px] filter invert dark:filter-none cursor-pointer">
                    <img src="./Icon(1).png" />
                </div>
                </div>
            </div>
            <div className="h-[1px] bg-[#dfdfdf]"></div>
            {/* Pertanyaan 5 */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                <h3 className="leading-9 text-2xl font-bold">
                    Can I start with a small project first?
                </h3>
                <div className="basis-[24px] filter invert dark:filter-none cursor-pointer">
                    <img src="./Icon(1).png" />
                </div>
                </div>
            </div>
            </div>
            {/* Kanan: Konsultasi */}
            <div className="flex flex-col gap-6 basis-[329px] bg-[#cc4e32] p-6 rounded-3xl">
            <div className="flex flex-col gap-1 text-white">
                <h3 className="leading-11 text-4xl font-bold">Let’s talk it through</h3>
                <button className="active:bg-blue-400 leading-8 text-lg font-semibold">
                book a free consultation with our team.
                </button>
            </div>
            <img src="./Consultation Image.png" />
            <button onclick="scrollToSection('Form')"
                className="cursor-pointer active:bg-blue-400 bg-black dark:bg-white dark:text-black p-2 leading-[30px] rounded-full text-white text-center font-bold"
            >Free consultation</button>
            </div>
        </div>
    </section>
    )
}

export default Ask_me;