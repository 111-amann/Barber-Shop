import React from "react";
import Button from "./Template/Button";

function Plans() {
  const data = [
    {
      title: "Classic Services",
      price: "25",
      list: [
        "Men's Haircut",
        "Kids Haircut (12 & under)",
        "Senior Haircut (65+)",
        "Military/First Responder Cut",
        "Basic Beard Trim",
      ],
    },
    {
      title: "Classic Services",
      price: "35",
      list: [
        "Haircut & Beard Combo",
        "Hot Towel Shave",
        "Full Beard Shaping & Design",
        "Color Camo (Gray Blending)",
        "Hair & Scalp Treatment",
      ],
    },
    {
      title: "Classic Services",
      price: "40",
      list: [
        "The Works (Cut, Shave, Treatment)",
        "Father & Son Combo",
        "Groom's Package",
        "Monthly Membership (2 cuts/mo)",
        "Loyalty Program",
      ],
    },
  ]; 
  return (
    <div className="w-full xl:h-[120vh] h-[200vh] bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-9%]"></div>

      <div className="about h-[30vh] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">
          Quality Barbering at Fair Prices
        </p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-5">Our Service Prices</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full text-center text-zinc-600">
          Choose from our range of professional barbering services.
        </p>
      </div>

      <div className="flex lg:justify-between justify-center h-[80vh] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-2">
        {data.map((item, i) => (
          <div
            key={i}
            className={`group w-sm md:p-6 p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transintion-ease duration-500 border  ${
              i == 0 ? "border-yellow-500" : "border-zinc-600"
            } hover:border-yellow-400 relative overflow-hidden hover:scale-[1.05]`}
          >
            {i == 0 && (
              <>
                <div className="top w-full rounded-lg bg-yellow-500 md:h-2 h-1 absolute top-0 left-0 "></div>
                <div className="top rounded-md md:px-3 px-2 md:py-2 py-1 bg-yellow-500 absolute top-0 right-8 font-semibold md:text-sm text-xs">
                  <p>Most Popular</p>
                </div>
              </>
            )}
            <h2 className="md:text-2xl sm:text-xl text-lg font-bold md:mt-2 mt-1"> {item.title}</h2>
            <div className="top w-10 h-[1.7px] rounded-lg bg-yellow-500 mt-1"></div>
            <p className="md:mt-10 sm:mt-8 mt-5">
              <span className="md:text-2xl sm:text-xl text-lg font-semibold">$</span>
              <span className="md:text-5xl sm:text-4xl text-3xl font-bold text-yellow-500">
                ${item.price}
              </span>
              <span className="text-zinc-400 md:text-base sm:text-sm text-xs">/mo</span>
            </p>

            <div className="facilities md:mt-14 sm:mt-9 mt-6 flex sm:gap-2 gap-1">
              <div className="list flex flex-col">
                {item.list.map((li, i) => (
                  <div className="flex md:gap-2 gap-1">
                    <div className="icon bg-yellow-500 rounded-full sm:w-5 sm:h-5 w-4 h-4 flex justify-center items-center">
                      <i class="ri-check-line"></i>
                    </div>
                    <p key={i} className="md:text-sm text-xs md:mb-9 sm:mb-6 mb-4">
                      {li}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="button w-full flex justify-center mt-2">
              <Button name="Book Now" px="md:px-33 sm:px-25 px-20" py="md:py-3 py-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
