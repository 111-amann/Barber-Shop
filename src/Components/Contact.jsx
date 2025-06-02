import React from "react";
import Button from "./Template/Button";

function Contact() {
  return (
    <div id="contact" className="w-full xl:h-screen h-fit bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 w-90 h-90 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2">
          Book Your Appointment
        </p>
        <h1 className="font-bold text-4xl mb-5">Contact Us</h1>
        <p className="text-lg w-[60%] text-center text-zinc-600">
          Ready for a fresh look? Book your appointment today or contact us for
          any questions.
        </p>
      </div>

      <div className="flex xl:justify-between justify-center h-[60%] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-4">
        <div className="address hover:border-2 hover:scale-[1.03] transintion-ease duration-500  hover:border-yellow-500 w-[30%] h-full bg-[#202121] rounded-xl p-5">
          <div className="location flex gap-4 items-center mt-3">
            <div className="logo w-12 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <i class="ri-map-pin-line"></i>
            </div>
            <div className="a">
              <h5 className="font-semibold">Address</h5>
              <p className="text-zinc-500 text-sm">
                518 Acme St unit 101, Denton, TX 76205, United States
              </p>
            </div>
          </div>
          <div className="phone flex gap-4 items-center mt-8">
            <div className="phonelogo w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <i class="ri-phone-line"></i>
            </div>
            <div className="b">
              <h5 className="font-semibold">Phone</h5>
              <p className="text-zinc-500 text-sm">+19408081569</p>
            </div>
          </div>
          <div className="phone flex gap-4 items-center mt-8">
            <div className="phonelogo w-14 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
             <i class="ri-time-line"></i>
            </div>
            <div className="b">
              <h5 className="font-semibold">Business Hours</h5>
              <p className="text-zinc-500 text-sm">
                Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00
                PM, Sun: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="address hover:border-2 hover:scale-[1.03] transintion-ease duration-500  hover:border-yellow-500 w-[67%] h-full bg-[#202121] rounded-xl p-5">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Enter your full name" className="focus:shadow focus:shadow-white/50 w-full p-2 border-1 border-zinc-600 rounded-lg hover:border-yellow-500" />
            <input type="text" placeholder="Enter your phone number" className="focus:shadow focus:shadow-white/50 w-full p-2 border-1 border-zinc-600 rounded-lg hover:border-yellow-500" />
            <input type="date" className="focus:shadow focus:shadow-white/50 w-fit p-2 border-1 border-zinc-600 rounded-lg text-zinc-400 hover:border-yellow-500" />
            <input type="date" className="focus:shadow focus:shadow-white/50 w-fit p-2 border-1 border-zinc-600 rounded-lg text-zinc-400 hover:border-yellow-500" />
            <textarea name="message" placeholder="Tell us about your prefrences or any questions you have" className="focus:shadow focus:shadow-white/50 w-full h-32 p-2 border-1 border-zinc-600 rounded-lg text-zinc-400 hover:border-yellow-500"></textarea>
            <Button name="Submit" px="px-5" py="py-2"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
