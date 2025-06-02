import React from "react";
import Button from "./Template/Button";
function Home() {
  return (
    <div
      id="home"
      className="w-full xl:h-screen h-fit flex sm:flex-row sm:gap-4 flex-col xl:px-30 lg:px-20 md:px-10 px-0 text-white md:mt-30 sm:mt-20 mt-15"
    >
      <div className="left sm:w-1/2 w-full">
        <p className="text-yellow-500 font-semibold lg:text-lg text-md">
          Premium Barber Services in Denton
        </p>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mt-5 sm:w-[80%]">
          Classic Cuts, Modern Style
        </h1>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-yellow-500 mt-2">
          Premium Barber Shop
        </h1>
        <p className="lg:text-lg md:text-md text-sm text-zinc-600 mt-5 leading-7 sm:block hidden">
          At PMC Barbershop, we combine traditional barbering techniques with
          modern styling to give you the perfect look. Our experienced barbers
          deliver precision cuts, beard grooming, and relaxing hot towel shaves
          in a classic barbershop atmosphere.
        </p>
        <div className="location lg:px-3 px-2 py-1 lg:mt-8 md:mt-5 mt-3 border border-zinc-600 hover:border-yellow-500 w-fit rounded-full lg:text-md md:text-sm text-xs">
          <i class="ri-map-pin-line mr-2 text-yellow-500 lg:text-md md:text-sm text-xs"></i>
          Denton, TX
        </div>
        <div className="button mt-8 mb-4 w-full sm:block hidden">
          <Button
            name="Our Services"
            px="w-full"
            py="py-2"
            bg="bg-zinc-900"
            border="border-[1px] border-zinc-500"
            icon="true"
          />
        </div>
        <div className="btn w-full sm:block hidden">
          <Button name="Book Now" px="w-full" py="py-2" icon="true" />
        </div>
      </div>

      <div className="right sm:w-1/2 w-full sm:flex-row flex-col items-top justify-center">
        <div className="img sm:mt-18 mt-5 h-[54%] sm:w-[85%]  sm:hover:w-[88%] sm:hover:h-[56%] w-full transition-ease duration-500">
          <img
            src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <p className="lg:text-lg md:text-md text-sm text-zinc-600 mt-5 leading-7 bolck sm:hidden">
          At PMC Barbershop, we combine traditional barbering techniques with
          modern styling to give you the perfect look. Our experienced barbers
          deliver precision cuts, beard grooming, and relaxing hot towel shaves
          in a classic barbershop atmosphere.
        </p>
        <div className="button mt-8 flex flex-col gap-4 w-full bolck sm:hidden">
          <Button
            name="Our Services"
            px="w-full"
            py="py-2"
            bg="bg-zinc-900"
            border="border-[1px] border-zinc-500"
            icon="true"
          />
          <Button name="Book Now" px="w-full" py="py-2" icon="true" />
        </div>
      </div>
    </div>
  );
}

export default Home;
