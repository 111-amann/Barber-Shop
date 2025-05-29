import React from "react";
import Button from "./Template/Button";

function Footer() {
  return (
    <div className="w-full h-fit bg-[#1a1a1a] text-white mt-30 relative overflow-hidden">
      <div className="footer1 w-full h-[55vh] flex flex-col justify-center items-center bg-yellow-400/90 relative overflow-hidden">
        <div className="circle1 w-52 h-52 rounded-full bg-white/20 absolute right-[-4%] top-[-9%]"></div>
        <div className="circle1 w-70 h-70 rounded-full bg-white/22 absolute right-[-14%] top-[-18%]"></div>
        <div className="circle2 w-50 h-50 rounded-full bg-white/20 absolute left-[-7%] bottom-[-7%]"></div>
        <h1 className="text-4xl font-bold py-3">Ready for a Fresh Cut?</h1>
        <p className="py-3 w-[50%] text-center">
          Visit PMC Barbershop for premium men's grooming services. Our expert
          barbers are ready to give you a clean, precise cut and a relaxing
          barbershop experience.
        </p>
        <div className="button flex gap-5 py-3">
          <Button
            name="Book an Appointment"
            px="px-4"
            py="py-2"
            bg="bg-white"
            text="text-yellow-500"
          />
          <Button
            name="View our Services"
            px="px-4"
            py="py-2"
            bg="bg-black"
            text="text-yellow-500"
          />
        </div>
      </div>

      <div className="footer1 w-full h-[55vh] flex flex-col justify-center items-center px-30">
        <div className="links h-[80%] w-full flex mt-20">
          <div className="social h-full w-[25%] flex flex-col gap-4 items-start">
            <img src="" alt="logo" />
            <p className="text-sm text-zinc-600">Classic cuts with modern style</p>
            <div className="social flex gap-3 mt-4">
              <div className="facebook bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600 w-9 h-9 rounded-full  flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-facebook-box-fill text-yellow-400 hover:text-white"></i>
                </a>
              </div>
              <div className="insta bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600  w-9 h-9 rounded-full  flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-instagram-line text-yellow-400 hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="quick-links h-full w-[25%] flex flex-col gap-4 items-start">
            <h6 className="font-semibold text-lg">Quick Links</h6>
            <a href="" className="text-sm text-zinc-600">Home</a>
            <a href="" className="text-sm text-zinc-600">About</a>
            <a href="" className="text-sm text-zinc-600">Services</a>
            <a href="" className="text-sm text-zinc-600">Gallery</a>
            <a href="" className="text-sm text-zinc-600">Contact</a>
          </div>
          <div className="contact  h-full  w-[25%] flex flex-col gap-4 items-start">
            <h6 className="font-semibold text-lg">Contact Us</h6>
            <p className="text-sm text-zinc-600"><i class="ri-map-pin-line text-yellow-400 pr-2"></i>518 Acme St unit 101, Denton, TX 76205, United States</p>
            <p className="text-sm text-zinc-600">+19408081569</p>
          </div>
          <div className="newsletter h-full  w-[25%] flex flex-col gap-4 items-start">
            <h6 className="font-semibold text-lg">Newsletter</h6>
            <p className="text-sm text-zinc-600">Subscribe to our newsletter to receive updates and news.</p>
            <input className="p-2 w-[90%] border-1 focus:shadow-md focus:shadow-white/40 rounded-xl" placeholder="Your email" type="text" />
            <Button name="Subscribe" px="px-27" py="py-2" />
          </div>
        </div>
        <hr className="w-full h-[1px] text-zinc-700 pb-5" />
        <div className="links h-[20%] w-full">
            <p className="text-sm text-zinc-600 mt-3">© 2023 PMC Barbershop. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
