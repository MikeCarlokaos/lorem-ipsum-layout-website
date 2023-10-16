import React, { useEffect } from "react";
import heroBg from "../../../assets/images/upholstery-hero-dark.jpg";
import couchIcon from "../../../assets/icons/couch.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative w-full h-screen "
    >
      <div
        data-aos="fade-up"
        className="absolute inset-0 w-full h-screen px-10 flex flex-col gap-5 items-center justify-center text-white md:w-full md:min-w-[300px] md:px-60"
      >
        <div>
          <img
            src={couchIcon}
            alt="couch"
            className="w-16 h-16 rounded-3xl md:w-20 md:h-20"
          />
        </div>
        <div className="relative w-full py-5 border-t-8 border-x-8 border-amber-900 rounded-lg">
          <h3 className="absolute -top-1/2 inset-x-1/2 -translate-x-1/2 w-80 flex justify-center px-5 text-2xl text-black bg-stone-400 rounded-xl font-bold uppercase md:text-3xl">
            welcome to
          </h3>
        </div>
        <div>
          <h1 className="text-6xl text-stone-200 text-center font-semibold capitalize underline decoration-amber-900 underline-offset-8 md:text-7xl">
            lorem ipsum
          </h1>
        </div>
        <div className="mt-10">
          <a
            href="tel:000000000"
            className="group relative p-5 overflow-hidden bg-stone-400 text-lg shadow"
          >
            <div className="absolute inset-0 w-1.5 bg-stone-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black text-lg font-semibold group-hover:text-white">
              Call now: (000) 000-000
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
