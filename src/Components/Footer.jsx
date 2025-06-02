import React from "react";
import Button from "./Template/Button";

function Footer() {
  return (
    <div className="w-full h-fit bg-[#1a1a1a] text-white md:mt-30 sm:mt-20 mt-15 relative overflow-hidden">
      <div className="footer1 w-full md:h-[55vh] sm:h-[45vh] h-[35vh] flex flex-col justify-center items-center bg-yellow-400/90 relative overflow-hidden">
        <div className="circle1 w-52 h-52 rounded-full bg-white/20 absolute right-[-4%] top-[-9%]"></div>
        <div className="circle1 w-70 h-70 md:block hidden rounded-full bg-white/22 absolute right-[-14%] top-[-18%]"></div>
        <div className="circle2 w-50 h-50 rounded-full bg-white/20 absolute left-[-7%] bottom-[-7%]"></div>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold py-3">Ready for a Fresh Cut?</h1>
        <p className="py-3 sm:w-[50%] text-center md:text-bse sm:text-sm text-xs w-full">
          Visit PMC Barbershop for premium men's grooming services. Our expert
          barbers are ready to give you a clean, precise cut and a relaxing
          barbershop experience.
        </p>
        <div className="button flex gap-5 py-3">
          <Button
            name="Book an Appointment"
            px="md:px-4 sm:px-3 px-2"
            py="sm:py-2 py-1"
            bg="bg-white"
            text="text-yellow-500"
          />
          <Button
            name="View our Services"
            px="md:px-4 sm:px-3 px-2"
            py="sm:py-2 py-1"
            bg="bg-black"
            text="text-yellow-500"
          />
        </div>
      </div>

      <div className="footer1 w-full md:h-[55vh] flex flex-col justify-center items-center xl:px-30 lg:px-20 md:px-10 px-0">
        <div className="links h-[80%] w-full flex md:mt-20 sm:mt-15 mt-10">
          <div className="flex md:flex-row flex-col items-center gap-10 w-full">
            <div className="social h-full md:w-[25%] w-[70%] flex flex-col md:gap-4 sm:gap-3 gap-2 items-start">
            <img
              className="w-full h-full object-cover"
              src="./Famaa.png"
              alt="logo"
            />
            <p className="sm:text-sm text-xs text-zinc-600">Classic cuts with modern style</p>
            <div className="social flex sm:gap-3 gap-2 md:mt-4 sm:mt-3 mt-2">
              <div className="facebook bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600 md:w-9 md:h-9 sm:w-7 sm:h-7 w-5 h-5 rounded-full flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-facebook-box-fill sm:text-base sm:text-sm text-xs text-yellow-400 hover:text-white"></i>
                </a>
              </div>
              <div className="insta bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600 md:w-9 md:h-9 sm:w-7 sm:h-7 w-5 h-5 rounded-full flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-instagram-line text-yellow-400 sm:text-base sm:text-sm text-xs hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="quick-links h-full md:w-[25%] w-[70%] flex flex-col md:gap-4 sm:gap-3 gap-2 items-start">
            <h6 className="font-semibold md:text-lg sm:text-base text-sm">Quick Links</h6>
            <a href="" className="sm:text-sm text-xs text-zinc-600">Home</a>
            <a href="" className="sm:text-sm text-xs text-zinc-600">About</a>
            <a href="" className="sm:text-sm text-xs text-zinc-600">Services</a>
            <a href="" className="sm:text-sm text-xs text-zinc-600">Gallery</a>
            <a href="" className="sm:text-sm text-xs text-zinc-600">Contact</a>
          </div>
          <div className="contact  h-full md:w-[25%] w-[70%] flex flex-col md:gap-4 sm:gap-3 gap-2 items-start">
            <h6 className="font-semibold md:text-lg sm:text-base text-sm">Contact Us</h6>
            <p className="sm:text-sm text-xs text-zinc-600"><i class="ri-map-pin-line text-yellow-400 pr-2"></i>518 Acme St unit 101, Denton, TX 76205, United States</p>
            <p className="sm:text-sm text-xs text-zinc-600">+19408081569</p>
          </div>
          <div className="newsletter h-full md:md:w-[25%] w-[70%] flex flex-col md:gap-4 sm:gap-3 gap-2 items-start">
            <h6 className="font-semibold md:text-lg sm:text-base text-sm">Newsletter</h6>
            <p className="sm:text-sm text-xs text-zinc-600">Subscribe to our newsletter to receive updates and news.</p>
            <input className="sm:p-2 p-1 md:text-base sm:text-sm text-xs w-[90%] border-1 focus:shadow-md focus:shadow-white/40 sm:rounded-xl rounded-lg" placeholder="Your email" type="text" />
            <Button name="Subscribe" px="lg:px-27 md:px-20 px-18 mb-5" py="sm:py-2 py-1" />
          </div>
          </div>
        </div>
        <hr className="w-full h-[1px] text-zinc-700 md:pb-5 sm:pb-3 pb-2" />
        <div className="links h-[20%] w-full p-2">
            <p className="sm:text-sm text-xs text-zinc-600 md:mt-3 sm:mt-2 mt-1">© 2023 PMC Barbershop. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
