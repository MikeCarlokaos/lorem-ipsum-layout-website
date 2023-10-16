import React, { useEffect } from "react";
import articleImg from "../../../assets/images/upholstery-article.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Subarticle = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="w-full h-full">
      <div className="w-full h-full flex justify-center">
        <div className="w-[40rem] h-full flex flex-col items-center p-10">
          <div
            data-aos="zoom-out-right"
            className="w-full h-[25rem] -mb-20 rounded-tr-[4rem]"
          >
            <img
              src={articleImg}
              alt="article img"
              className="w-full h-full bg-top rounded-tr-[4rem]"
            />
          </div>
          <div
            data-aos="zoom-out-left"
            className="bg-white p-10 rounded-tr-[4rem] rounded-bl-[4rem] shadow-xl border-2 border-stone-400"
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subarticle;
