import React from "react";
import Navbar from "../../features/Navbar";
import Hero from "../../features/Home/Hero";
import Article from "../../features/Home/Article";
import About from "../../features/Home/About";
import Services from "../../features/Home/Services";
import Subarticle from "../../features/Home/Subarticle";
import Testimonials from "../../features/Home/Testimonials";
import Lists from "../../features/Home/List";
import Estimate from "../../features/Home/Estimate";
import Footer from "../../features/Footer";
import phoneIcon from "../../assets/icons/phone.svg";

const Home = () => {
  return (
    <div className="relative">
      <header>
        <Navbar />
      </header>
      <main className="bg-stone-100">
        <Hero />
        <Article />
        <About />
        <Services />
        <div className="mt-[40vh]"></div>
        <Article />
        <Article />
        <Subarticle />
        <Testimonials />
        <Lists />
        <Estimate />
      </main>
      <footer>
        <Footer />
      </footer>
      <div className="fixed z-40 bottom-0 right-0 w-16 h-16 flex justify-center items-center px-3 bg-stone-200 rounded-s-3xl border-s-4 border-y-2 border-stone-800 ease-in-out duration-500 hover:w-28 hover:bg-green-500">
        <a href="tel:000000000" className="w-full h-full">
          <img src={phoneIcon} alt="phone" className="w-full h-full" />
        </a>
      </div>
    </div>
  );
};

export default Home;
