import React from "react";
import bgSub from "../../../assets/images/upholstery-bg-2.jpg";
import qouteIcon from "../../../assets/images/qoute.png";

const Testimonials = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgSub})` }}
      className="relative bg-cover w-full h-screen"
    >
      <div className="absolute inset-0 w-full h-screen bg-black/60">
        <div className="w-full flex flex-col items-center py-2 md:py-20">
          <h1 className="w-96 text-center py-5 text-stone-100 text-4xl font-bold uppercase md:w-full">
            client's testimonials
          </h1>
          <div className=" pt-10 px-20 md:pt-20">
            <p className="relative p-10 bg-stone-100 border border-amber-300 rounded-tr-3xl rounded-bl-3xl">
              <span className="absolute -top-5 left-10 w-12 h-12 bg-stone-300 p-2 rounded-s-2xl rounded-br-2xl">
                <img src={qouteIcon} alt="qoute" />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="pt-10">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 bg-stone-800 text-white font-semibold uppercase ease-in-out hover:bg-stone-500"
            >
              read more reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
