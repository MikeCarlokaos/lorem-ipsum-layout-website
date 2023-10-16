import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <div className="w-full h-full flex flex-col gap-5 md:flex-row">
      {services.map((service) => (
        <div
          key={service.id}
          className="w-96 h-[140vh] bg-stone-200 border-4 border-stone-800"
        >
          <div className="w-full h-2/5">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-full border-b-4 border-stone-800"
            />
          </div>
          <div className="flex flex-col items-center gap-2 px-5">
            <h2 className="py-5 text-xl font-semibold capitalize">
              {service.title}
            </h2>
            <p className="text-justify">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
