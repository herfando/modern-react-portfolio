import React from "react";

const Achievement = () => {
    return (
        <section id="Projects" className="flex flex-col items-center w-full dark:bg-black h-[598px] max-[393px]:h-[558px] pt-32 max-[393px]:pt-0">
        
        {/* Text */}
        <article>
          <h2 className="text-4xl font-bold text-center dark:text-white max-[393px]:text-3xl">
            End-to-End IT Solutions<span className="inline max-[393px]:block">That Drive Results</span>
          </h2>
          <h3 className="pt-8 pb-24 text-xl text-[#717680] text-center max-[393px]:text-[15px] max-[393px]:pb-0">
            From strategy to execution, we deliver solutions that <span className="inline max-[393px]:block">grow your business.</span>
          </h3>
        </article>

        {/* Circle Stats */}
        <article className="dark:text-white flex space-x-10 max-[393px]:space-x-0 content-center items-center max-[393px]:grid max-[393px]:grid-cols-2 max-[393px]:gap-x-[240px] max-[393px]:gap-y-12 max-[393px]:place-items-center max-[393px]:scale-[0.65] max-[393px]:p-[20px] max-[393px]:mt-[-80px]">
          
          <dl className="h-[275px] w-[275px] border-4 border-[#DEDCDC] rounded-full grid justify-center text-center content-center">
            <dt className="text-[#FF623E] text-5xl font-bold">50+</dt>
            <dd className="text-lg font-semibold">Projects Delivered</dd>
          </dl>

          <dl className="h-[275px] w-[275px] border-4 border-[#DEDCDC] rounded-full grid justify-center text-center content-center">
            <dt className="text-[#FF623E] text-5xl font-bold">5+</dt>
            <dd className="text-lg font-semibold">Years of Experience</dd>
          </dl>

          <dl className="h-[275px] w-[275px] border-4 border-[#DEDCDC] rounded-full grid justify-center text-center content-center">
            <dt className="text-[#FF623E] text-5xl font-bold">10+</dt>
            <dd className="text-lg font-semibold">Industry Awards Won</dd>
          </dl>

          <dl className="h-[275px] w-[275px] border-4 border-[#DEDCDC] rounded-full grid justify-center text-center content-center">
            <dt className="text-[#FF623E] text-5xl font-bold">100%</dt>
            <dd className="text-lg font-semibold">Client Satisfaction Rate</dd>
          </dl>

        </article>
      </section>

    )
}

export default Achievement;