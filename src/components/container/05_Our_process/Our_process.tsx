import React from "react";

const Our_process = () => {
    return (
    <section className="flex flex-col gap-16 py-20 max-[393px]:py-10 px-[140px] max-[393px]:px-3.5 bg-white dark:bg-black w-full">
      <div className="flex flex-col gap-[11px] text-center">
        {/* Text */}
        <h2 className="max-[393px]:text-4xl max-[393px]:w-[361px] leading-14 text-[40px] font-bold text-black dark:text-white">Our Process</h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680]">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>
      <div className="relative grid grid-cols-[1fr_48px_1fr] max-[393px]:grid-cols-[48px_1fr] gap-4 items-center">
        {/* Line 1 */}
        <div className="flex justify-between dark:bg-[#0A0D12] p-6 border dark:border-[#181D27] bg-[#FAFAFA] border-[#DEDCDC] rounded-2xl dark:text-white max-[393px]:order-2">
          <div className="flex flex-col cursor-pointer">
            <p className="text-xl leading-[34px] font-bold">Discovery & Consultation</p>
            <p className="leading-[30px] text-base font-medium text-[#717680]">Understand Your Needs & Goals</p>
          </div>
          <div className="basis-[12px]">
            <img className="w-8 h-3 scale-200 text-[#0A0D12] filter invert dark:filter-none" src="assets/images/chevron-up.png" />
          </div>
        </div>
        <div className="z-20 h-12 bg-[#ff623e] rounded-full leading-12 text-white text-center max-[393px]:order-1">1</div>
        <div className="max-[393px]:hidden"></div>
        {/* Line 2 */}
        <div className="max-[393px]:hidden"></div>
        <div className="z-20 h-12 bg-[#ff623e] rounded-full leading-12 text-white text-center max-[393px]:order-3">2</div>
        <div className="flex justify-between dark:bg-[#0A0D12] p-6 border dark:border-[#181D27] bg-[#FAFAFA] border-[#DEDCDC] rounded-2xl dark:text-white max-[393px]:order-4">
          <div className="flex flex-col cursor-pointer">
            <p className="text-xl leading-[34px] font-bold">Planning & Strategy</p>
            <p className="leading-[30px] text-base font-medium text-[#717680]">Build a Clear, Scalable Roadmap</p>
          </div>
          <div className="basis-[12px]">
            <img className="w-8 h-3 scale-200 text-[#0A0D12] filter invert dark:filter-none" src="assets/images/chevron-up.png" />
          </div>
        </div>
        {/* Line 3 */}
        <div className="flex justify-between dark:bg-[#0A0D12] p-6 border dark:border-[#181D27] bg-[#FAFAFA] border-[#DEDCDC] rounded-2xl dark:text-white max-[393px]:order-6">
          <div className="flex flex-col cursor-pointer">
            <p className="text-xl leading-[34px] font-bold">Design & Prototyping</p>
            <p className="leading-[30px] text-base font-medium text-[#717680]">Craft UX That Converts</p>
          </div>
          <div className="basis-[12px]">
            <img className="w-8 h-3 scale-200 text-[#0A0D12] filter invert dark:filter-none" src="assets/images/chevron-up.png" />
          </div>
        </div>
        <div className="z-20 h-12 bg-[#ff623e] rounded-full leading-12 text-white text-center max-[393px]:order-5">3</div>
        <div className="max-[393px]:hidden"></div>
        {/* Line 4 */}
        <div className="max-[393px]:hidden"></div>
        <div className="z-20 h-12 bg-[#ff623e] rounded-full leading-12 text-white text-center max-[393px]:order-7">4</div>
        <div className="cursor-pointer flex justify-between dark:bg-[#0A0D12] p-6 border dark:border-[#181D27] bg-[#FAFAFA] border-[#DEDCDC] rounded-2xl dark:text-white max-[393px]:order-8">
          <div className="flex flex-col">
            <p className="text-xl leading-[34px] font-bold">Development & Implementation</p>
            <p className="leading-[30px] text-base font-medium text-[#717680]">Deliver With Speed & Precision</p>
          </div>
          <div className="basis-[12px]">
            <img className="w-8 h-3 scale-200 text-[#0A0D12] filter invert dark:filter-none" src="assets/images/chevron-up.png" />
          </div>
        </div>
        {/* Line 5 */}
        <div className="flex justify-between dark:bg-[#0A0D12] p-6 border dark:border-[#181D27] bg-[#FAFAFA] border-[#DEDCDC] rounded-2xl dark:text-white max-[393px]:order-10">
          <div className="flex flex-col cursor-pointer">
            <p className="text-xl leading-[34px] font-bold">Testing & Optimization</p>
            <p className="leading-[30px] text-base font-medium text-[#717680]">Ensure Quality at Every Step</p>
          </div>
          <div className="basis-[12px]">
            <img className="w-8 h-3 scale-200 text-[#0A0D12] filter invert dark:filter-none" src="assets/images/chevron-up.png" />
          </div>
        </div>
        <div className="z-20 h-12 bg-[#ff623e] rounded-full leading-12 text-white text-center max-[393px]:order-9">5</div>
        <div className="max-[393px]:hidden"></div>
        {/* Line 6 */}
        <div className="max-[393px]:hidden"></div>
        <div className="z-20 h-12 bg-[#ff623e] rounded-full leading-12 text-white text-center max-[393px]:order-11">6</div>
        <div className="cursor-pointer flex justify-between dark:bg-[#0A0D12] p-6 border dark:border-[#181D27] bg-[#FAFAFA] border-[#DEDCDC] rounded-2xl dark:text-white max-[393px]:order-12">
          <div className="flex flex-col">
            <p className="text-xl leading-[34px] font-bold">Launch & Growth</p>
            <p className="leading-[30px] text-base font-medium text-[#717680]">Scale, Measure & Improve Continuously</p>
          </div>
          <div className="basis-[12px]">
            <img className="w-8 h-3 scale-200 text-[#0A0D12] filter invert dark:filter-none" src="assets/images/chevron-up.png" />
          </div>
        </div>
        {/* Vertical Line */}
        <div className="absolute top-[8.5%] left-1/2 max-[393px]:left-[24px] -z-0 w-[1px] h-10/12 bg-[#DEDCDC] dark:bg-[#181D27]"></div>
      </div>
    </section>
    )
}
export default Our_process;