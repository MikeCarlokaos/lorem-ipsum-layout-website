import React from "react";

const Estimate = () => {
  return (
    <section className="w-full h-screen p-5">
      <div className="w-full h-full flex flex-col items-center border-4 shadow-inner">
        <h1 className="py-10 text-4xl font-semibold capitalize">
          get a free estimate
        </h1>
        <form className="w-full px-10 flex flex-col gap-5 md:w-[40rem] md:px-0">
          <input
            type="text"
            placeholder="Name*"
            className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
          />
          <input
            type="text"
            placeholder="Phone(optional)"
            className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
          />
          <input
            type="email"
            placeholder="Email*"
            className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Your message (Minimum 5 Characters)"
            className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
          ></textarea>
          <button
            type="submit"
            className="group relative p-2 w-32 self-center overflow-hidden bg-stone-300 text-lg shadow"
          >
            <div className="absolute inset-0 w-1.5 bg-stone-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black text-lg font-semibold capitalize group-hover:text-white">
              send
            </span>
          </button>{" "}
        </form>
      </div>
    </section>
  );
};

export default Estimate;
