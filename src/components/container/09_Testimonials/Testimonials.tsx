import React, { useState, useRef, useEffect } from "react";

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const testimonialCardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const testimonials = [
    {
      name: "John Lee",
      title: "Creative Director at Innovate Corp",
      quote: "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
      image: "./09_Testimonials_johnlee.png",
      index: 0
    },
    {
      name: "Sarah Tan",
      title: "Product Manager at Finovate",
      quote: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
      image: "./09_Testimonials_sarahtan.png",
      index: 1
    },
    {
      name: "Emily Chen",
      title: "Marketing Head at Tech Solutions",
      quote: "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
      image: "./09_Testimonials_emilychen.png",
      index: 2
    }
  ];

  useEffect(() => {
    const updateSliderPosition = () => {
      if (!sliderRef.current || testimonialCardsRef.current.length === 0) {
        return;
      }

      const container = sliderRef.current.parentElement as HTMLElement;
      if (!container) return;

      const card = testimonialCardsRef.current[currentSlide];
      if (!card) return;

      const currentCardWidth = card.offsetWidth;
      const containerWidth = container.offsetWidth;

      let scrollOffset = 0;

      if (window.innerWidth <= 393) {
        scrollOffset = card.offsetLeft - (containerWidth / 2) + (currentCardWidth / 2);
      } else {
        scrollOffset = card.offsetLeft - (containerWidth / 2) + (currentCardWidth / 2);
      }
      
      const maxScroll = sliderRef.current.scrollWidth - containerWidth;
      scrollOffset = Math.max(0, Math.min(scrollOffset, maxScroll));

      sliderRef.current.style.transform = `translateX(-${scrollOffset}px)`;
    };

    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);

    return () => {
      window.removeEventListener("resize", updateSliderPosition);
    };
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const isActive = (index: number) => index === currentSlide;

  return (
    <section id="Testimonials" className="gap-4 bg-white dark:bg-black justify-center flex flex-col md:h-[723px] h-[700px] text-black dark:text-white w-full">
      <div className="gap-4 flex flex-col text-center">
        <h2 className="leading-14 text-[40px] font-bold max-[393px]:text-[30px] max-[393px]:font-medium">
          What Partners Say About Working With Us
        </h2>
        <p className="leading-8 text-[18px] font-medium text-[#717680] max-[393px]:text-[17px] max-[393px]:font-light">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      <div className=" relative overflow-hidden py-[25px] max-[393px]:h-[483px] max-[393px]:pt-0">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none max-[393px]:hidden"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none max-[393px]:hidden"></div>

        <div ref={sliderRef} id="testimonialSlider" 
            className="flex flex-nowrap gap-4 transition-transform duration-500 ease-in-out px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  testimonialCardsRef.current[index] = el;
                }
              }}
              className={`
                testimonial-card flex-shrink-0 
                w-[594px] h-[292px] max-[393px]:w-[361px] max-[393px]:h-[284px] 
                p-[1px] rounded-[18px] relative mt-5
                ${isActive(index) ? 'bg-gradient-to-br from-[#ff6c37] to-[#dedcdc]' : 'bg-transparent'}
                ${isActive(index) ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}
                transition-all duration-500 ease-in-out
              `}
            >
              <div className="h-full bg-[#fafafa] dark:bg-[#0A0D12] rounded-2xl relative flex flex-col gap-6">
                <div className="absolute top-[-20px] left-6 w-[46px]">
                  <img src="./09_Testimonials_vector.png" alt="Quote Icon" className="w-full h-auto" />
                </div>
                
                <div className="flex flex-col gap-6 items-center text-center mt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src="./09_Testimonials_star.png" alt="Star" />
                    ))}
                  </div>
                  <p className="px-2 leading-8 md:text-lg text-sm font-semibold">
                    “{testimonial.quote}”
                  </p>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-auto">
                    <h3 className="leading-8 text-lg font-semibold">{testimonial.name}</h3>
                    <p className="leading-8 text-lg font-semibold text-[#ff623e]">{testimonial.title}</p>
                    <img className="mx-auto w-[75px] h-[75px] rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <ul className=" mt-25 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <li key={index}>
              <button
                className={`dot w-3 h-3 rounded-full ${isActive(index) ? "bg-[#ff6c37]" : "bg-[#e5e5e5]"}`}
                onClick={() => goToSlide(index)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;