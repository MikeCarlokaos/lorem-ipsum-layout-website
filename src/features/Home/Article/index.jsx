import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="relative w-full h-screen px-10 py-10 overflow-hidden">
      <div className="absolute -top-48 -left-48  w-96 h-96 bg-stone-200/50 rounded-full animate-beat"></div>
      <div
        data-aos="zoom-in-right"
        className="w-full flex flex-col justify-center items-center gap-5 py-10"
      >
        <h1 className="text-4xl text-center font-bold capitalize">
          what is lorem ipsum?
        </h1>
        <div data-aos="zoom-in-right" className="flex gap-3">
          <div className="w-20 h-0.5 bg-amber-800"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="py-10">
        <p className="text-lg leading-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default Article;
