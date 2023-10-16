import { useState } from "react";
import phoneIcon from "../../assets/icons/phone.svg";
import locationIcon from "../../assets/icons/location.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-stone-700 transition ease transform duration-300`;
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="w-full flex flex-col items-center justify-items-center bg-stone-100">
      <div className="w-full flex flex-col items-center justify-center gap-2 px-10 py-5 md:flex-row md:justify-between md:gap-0">
        <div className="flex justify-items-center">
          <h1 className="text-5xl text-center font-extrabold uppercase">
            lorem ipsum
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-px md:flex-row">
          <img src={phoneIcon} alt="phone" className="w-5" />
          <p className="text-md font-medium ">(000) 000-000</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-px md:flex-row">
          <img src={locationIcon} alt="location" className="w-5" />
          <p className="text-md font-medium text-center">
            Mount Lebanon, Pennsylvania 15228
          </p>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center border-y border-y-stone-800/50 md:static">
        <div className=" w-full h-full flex justify-center  bg-stone-300 md:hidden">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group "
            onClick={handleMenu}
          >
            <div
              className={`${genericHamburgerLine} ${
                openMenu
                  ? "rotate-45 translate-y-3 opacity-70 group-hover:opacity-100"
                  : "opacity-90 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                openMenu ? "opacity-0" : "opacity-80 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                openMenu
                  ? "-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>

        <nav
          className={`absolute top-12 z-10 w-full h-44 bg-stone-300 py-px ${
            openMenu ? "" : "hidden"
          } md:block md:static md:h-full md:px-0`}
        >
          <ul className=" w-full flex flex-col items-center gap-2 px-10 py-2 capitalize font-semibold md:flex-row md:items-start md:gap-10">
            <li className="decoration-2 decoration-stone-800 underline-offset-4 hover:underline hover:text-amber-900">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                home
              </a>
            </li>
            <li className="decoration-2 decoration-stone-800 underline-offset-4 hover:underline hover:text-amber-900">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                about
              </a>
            </li>
            <li className="decoration-2 decoration-stone-800 underline-offset-4 hover:underline hover:text-amber-900">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                testimonials
              </a>
            </li>
            <li className="decoration-2 decoration-stone-800 underline-offset-4 hover:underline hover:text-amber-900">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                contact
              </a>
            </li>
            <li className="decoration-2 decoration-stone-800 underline-offset-4 hover:underline hover:text-amber-900">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                get a free estimate
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
