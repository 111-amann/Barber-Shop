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
        <p className="text-yellow-400 font-semibold mb-2">
          Quality Barbering at Fair Prices
        </p>
        <h1 className="font-bold text-4xl mb-5">Our Service Prices</h1>
        <p className="text-lg w-[60%] text-center text-zinc-600">
          Choose from our range of professional barbering services.
        </p>
      </div>

      <div className="flex justify-between h-[80vh] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-2">
        {data.map((item, i) => (
          <div
            key={i}
            className={`group w-sm p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transintion-ease duration-500 border  ${
              i == 0 ? "border-yellow-500" : "border-zinc-600"
            } hover:border-yellow-400 relative overflow-hidden hover:scale-[1.05]`}
          >
            {i == 0 && (
              <>
                <div className="top w-full rounded-lg bg-yellow-500 h-2 absolute top-0 left-0 "></div>
                <div className="top rounded-md px-3 py-2 bg-yellow-500 absolute top-0 right-8 font-semibold text-sm">
                  <p>Most Popular</p>
                </div>
              </>
            )}
            <h2 className="text-2xl font-bold mt-2"> {item.title}</h2>
            <div className="top w-10 h-[1.7px] rounded-lg bg-yellow-500 mt-1"></div>
            <p className="mt-10">
              <span className="text-2xl font-semibold">$</span>
              <span className="text-5xl font-bold text-yellow-500">
                ${item.price}
              </span>
              <span className="text-zinc-400">/mo</span>
            </p>

            <div className="facilities mt-14 flex gap-2">
              <div className="list flex flex-col pag-5">
                {item.list.map((li, i) => (
                  <div className="flex gap-2">
                    <div className="icon bg-yellow-500 rounded-full w-5 h-5 flex justify-center items-center">
                      <i class="ri-check-line"></i>
                    </div>
                    <p key={i} className="text-sm mb-9">
                      {li}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="button w-full">
              <Button name="Book Now" px="px-33" py="py-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
