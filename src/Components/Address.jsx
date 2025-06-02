import React from "react";
import Button from "./Template/Button";

function Address() {
  return (
    <div className="w-full xl:h-screen h-fit bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 sm:w-72 sm:h-72 w-52 h-52 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 sm:w-90 sm:h-90 w-70 h-70 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 sm:w-70 sm:h-70 w-50 h-50 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">Visit Our Shop</p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-5">Our Location</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full text-center text-zinc-600">
          Conveniently located in Denton, TX:
        </p>
      </div>

      <div className="flex xl:justify-between justify-center h-[60%] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-3">
        <div className="map w-xl h-[83%] bg-[#2d2d2d] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.8103062284335!2d-97.12963752658268!3d33.21906897348197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca8e42f9e23b%3A0x400e09b2d264750b!2s500%20N%20Bell%20Ave%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sin!4v1747661079862!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="address w-xl h-[75%] bg-[#202121] rounded-xl p-5">
          <h1 className="md:text-xl sm:text-lg text-base font-semibold">Contact Information</h1>
          <div className="line w-10 h-[2.5px] bg-yellow-400 mt-1"></div>
          <div className="location flex gap-4 items-center md:mt-15 sm:mt-10 mt-5">
            <div className="logo md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <i class="ri-map-pin-line"></i>
            </div>
            <div className="a">
              <h5 className="font-semibold sm:text-base text-sm">Address</h5>
              <p className="text-zinc-500 sm:text-sm text-xs">
                518 Acme St unit 101, Denton, TX 76205, United States
              </p>
            </div>
          </div>
          <div className="phone flex gap-4 items-center md:mt-8 sm:mt-6 mt-4">
            <div className="phonelogo md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <i class="ri-phone-line"></i>
            </div>
            <div className="b">
              <h5 className="font-semibold sm:text-base text-sm">Phone</h5>
              <p className="text-zinc-500 sm:text-sm text-xs">+19408081569</p>
            </div>
          </div>
          <a target="_blank" href="https://maps.app.goo.gl/XWL8Y5cUA9tpTxUu6">
            <div className="button md:mt-10 sm:mt-8 mt-5">
              <Button name="Get Directions" px="px-2" py="sm:py-2 py-1" border="none" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Address;
