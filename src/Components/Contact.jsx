import React from "react";
import Button from "./Template/Button";

function Contact() {
  return (
    <div id="contact" className="w-full xl:h-screen h-fit bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 sm:w-72 sm:h-72 w-52 h-52 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 sm:w-90 sm:h-90 w-70 h-70 sm:block hidden rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 sm:w-70 sm:h-70 w-50 h-50 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">
          Book Your Appointment
        </p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-5">Contact Us</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full text-center text-zinc-600">
          Ready for a fresh look? Book your appointment today or contact us for
          any questions.
        </p>
      </div>

      <div className="flex md:flex-row flex-col lg:justify-between justify-center h-[60%] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-4">
        <div className="address hover:border-2 hover:scale-[1.03] transintion-ease duration-500  hover:border-yellow-500 md:w-[30%] w-full h-full bg-[#202121] rounded-xl p-5">
          <div className="location flex gap-4 items-center mt-3">
            <div className="logo md:w-12 md:h-10 sm:w-8 sm:h-8 w-10 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
              <i class="ri-map-pin-line"></i>
            </div>
            <div className="a">
              <h5 className="font-semibold sm:text-base text-sm">Address</h5>
              <p className="text-zinc-500 sm:text-sm text-xs">
                518 Acme St unit 101, Denton, TX 76205, United States
              </p>
            </div>
          </div>
          <div className="phone flex gap-4 items-center mt-8">
            <div className="phonelogo md:w-10 md:h-8 sm:w-8 sm:h-8 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
              <i class="ri-phone-line"></i>
            </div>
            <div className="b">
              <h5 className="font-semibold sm:text-base text-sm">Phone</h5>
              <p className="text-zinc-500 sm:text-sm text-xs">+19408081569</p>
            </div>
          </div>
          <div className="phone flex gap-4 items-center mt-8">
            <div className="phonelogo md:w-14 md:h-10 sm:w-8 sm:h-8 w-14 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
             <i class="ri-time-line"></i>
            </div>
            <div className="b">
              <h5 className="font-semibold sm:text-base text-sm">Business Hours</h5>
              <p className="text-zinc-500 sm:text-sm text-xs">
                Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00
                PM, Sun: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="address hover:border-2 hover:scale-[1.03] transintion-ease duration-500  hover:border-yellow-500 md:w-[67%] w-full h-full bg-[#202121] rounded-xl md:p-5 sm:p-3 p-2">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Enter your full name" className="focus:shadow focus:shadow-white/50 w-full sm:p-2 p-1 border-1 border-zinc-600 rounded-lg hover:border-yellow-500 md:text-base sm:text-sm text-xs" />
            <input type="text" placeholder="Enter your phone number" className="focus:shadow focus:shadow-white/50 w-full sm:p-2 p-1 border-1 border-zinc-600 rounded-lg hover:border-yellow-500 md:text-base sm:text-sm text-xs" />
            <input type="date" className="focus:shadow focus:shadow-white/50 w-fit sm:p-2 p-1 border-1 border-zinc-600 rounded-lg text-zinc-400 hover:border-yellow-500 md:text-base sm:text-sm text-xs" />
            <input type="date" className="focus:shadow focus:shadow-white/50 w-fit sm:p-2 p-1 border-1 border-zinc-600 rounded-lg text-zinc-400 hover:border-yellow-500 md:text-base sm:text-sm text-xs" />
            <textarea name="message" placeholder="Tell us about your prefrences or any questions you have" className="focus:shadow focus:shadow-white/50 w-full md:h-32 sm:h-25 h-20 sm:p-2 p-1 border-1 border-zinc-600 rounded-lg text-zinc-400 hover:border-yellow-500 md:text-base sm:text-sm text-xs"></textarea>
            <Button name="Submit" px="sm:px-5 px-3 " py="py-2"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
