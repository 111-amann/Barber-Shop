import { useState, useEffect } from "react";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-12 bg-[#1e1f1f] sm:py-8 py-5 xl:px-30 lg:px-20 md:px-10 px-3 flex justify-between text-white items-center fixed top-0 left-0 z-[100]">
      <div className="logo font-bold md:w-12 w-10">
        <img className="w-full h-full object-cover" src="./Famaa.png" alt="logo" />
      </div>

      <div className="navlinks hidden lg:flex gap-4 font-semibold">
        {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
          <a
            key={item}
            className="hover:text-yellow-500 transition lg:text-md md:text-sm text-xs"
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="right hidden lg:flex gap-4 items-center">
        <p className="font-semibold lg:text-md md:text-sm sm:block hidden">
          <i className="ri-phone-line text-yellow-500 text-lg mr-1"></i>+1
          940-612-9127
        </p>
        <Button name="Book an Appointment" px="px-5" py="py-2" icon />
      </div>

      <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#1e1f1f] text-white z-[200] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
          <div className="text-lg font-bold w-12">
            <img
              className="w-full h-full object-cover"
              src="./Famaa.png"
              alt="logo"
            />
          </div>
          <i
            className="ri-close-line text-2xl cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>

        <div className="flex flex-col gap-6 p-6 font-semibold">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              className="hover:text-yellow-500 text-lg"
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}

          <p className="font-semibold">
            <i className="ri-phone-line text-yellow-500 mr-2"></i>
            +1 940-612-9127
          </p>

          <Button name="Book an Appointment" px="px-4" py="py-2" icon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
