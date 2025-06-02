import React from "react";

function Commitment() {
  const data = [
    {
      title: `Expert Barbers`,
      para: `Our team consists of certified barbers with years of experience in
            classic and modern cutting techniques, beard grooming, and men's
            styling.`,
    },
    {
      title: `Premium Tools & Products`,
      para: ` We use only high-quality barbering tools and premium men's grooming
            products to ensure the best results for your hair and skin.`,
    },
    {
      title: `Classic Barbershop Experience`,
      para: `Enjoy a comfortable, clean shop with a classic barbershop atmosphere
            where you can relax while getting a great cut or shave.`,
    },
  ];

  return (
    <div className="w-full xl:h-screen h-fit bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 w-90 h-90 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>
      <div className="circle2 w-75 h-75 rounded-full bg-yellow-400/5 absolute right-[-10%] bottom-[-9%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">Our Commitment</p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-5">Why Choose PMC Barbershop?</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full text-center text-zinc-600">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </div>

      <div className="aboutinfo flex lg:justify-between justify-center h-[45%] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-2">
        {data.map((item, i ) => (
          <div key={i} className="haircuts group w-sm md:p-5 p-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transintion-ease duration-500 border border-zinc-600 hover:border-yellow-400">
          <div className="title md:h-18 h-15 h-13 w-full">
            <div className="icon md:w-18 md:h-18 sm:w-15 sm:h-15 h-13 w-13 bg-yellow-400/6 rounded-md md:mt-4 sm:mt-2 mt-1 md:p-2 p-1 group-hover:bg-yellow-400 transintion-ease duration-300 md:group-hover:w-20 md:group-hover:h-20 sm:group-hover:w-17 sm:group-hover:h-17 group-hover:w-15 group-hover:h-15 flex justify-center items-center">
              <p className="text-yellow-400 group-hover:text-white text-semibold md:text-base sm:text-sm text-xs">
                User
              </p>
            </div>
          </div>
          <h1 className="md:text-xl sm:text-lg text-base font-bold md:mt-7 sm:mt-5 mt-3 md:mb-8 sm:mb-3 mb-2 group-hover:text-yellow-400">
            {item.title}
          </h1>
          <p className="text-zinc-500 font-medium md:text-base sm:text-sm text-xs">
           {item.para}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Commitment;
