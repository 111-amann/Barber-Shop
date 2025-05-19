import React from "react";
import Button from "./Template/Button";
function Home() {
  return (
    <div className="w-full h-screen flex px-30 text-white mt-30">
      <div className="left w-1/2">
        <p className="text-yellow-500 font-semibold text-lg">
          Premium Barber Services in Denton
        </p>
        <h1 className="text-5xl font-bold mt-5 w-[80%]">
          Classic Cuts, Modern Style
        </h1>
        <h1 className="text-5xl font-bold text-yellow-500 mt-2">
          Premium Barber Shop
        </h1>
        <p className="text-lg text-zinc-600 mt-5 leading-7">
          At PMC Barbershop, we combine traditional barbering techniques with
          modern styling to give you the perfect look. Our experienced barbers
          deliver precision cuts, beard grooming, and relaxing hot towel shaves
          in a classic barbershop atmosphere.
        </p>
        <div className="location px-3 py-1 mt-8 border border-zinc-600 hover:border-yellow-500 w-fit rounded-full">
          <i class="ri-map-pin-line mr-2 text-yellow-500"></i>
          Denton, TX
        </div>
        <div className="button mt-8 flex flex-col gap-4 w-full">
          <Button name="Our Services" px="w-full" py="py-2" bg="bg-zinc-900" border="border-[1px] border-zinc-500" icon='true'/>
          <Button name="Book Now" px="w-full" py="py-2" icon='true'/>
        </div>
      </div>

      <div className="right w-1/2 flex items-top justify-center">
        <div className="img h-[54%] w-[85%] mt-18 hover:w-[88%] hover:h-[56%] transition-ease duration-500">
          <img src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
