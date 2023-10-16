import React from "react";
import ServiceCard from "../../../components/ServiceCard";
import services from "../../../data/services";
import serviceBg from "../../../assets/images/upholstery-bg.jpg";

const Services = () => {
  return (
    <section
      style={{ backgroundImage: `url(${serviceBg})` }}
      className="relative z-10 w-full h-[450vh] p-10 -mt-[20vh] -mb-[20vh] bg-cover bg-center bg-fixed md:h-[160vh]"
    >
      <div className="absolute inset-0 w-full h-screen py-36 px-10 flex flex-col items-center gap-10 bg-black/30">
        <div className="p-4 bg-stone-300 border-4 border-stone-700 rounded-lg">
          <h1 className="text-xl font-bold capitalize">our services</h1>
        </div>
        <div className="">
          <ServiceCard services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
