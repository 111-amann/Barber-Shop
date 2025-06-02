import React from "react";

function Services() {
  const data = [
    {
      img: `https://pmcbarber.devfrend.com/images/salonCommon/hair-styling-icon.svg`,
      title: `Haircuts`,
      para: `Our skilled barbers deliver precision haircuts tailored to your
            style and face shape. From classic cuts to modern fades, we ensure
            you leave looking sharp and confident.`,
      list: ["Classic Cuts", "Modern Styles"],
    },
    {
      img: `https://pmcbarber.devfrend.com/images/salonCommon/makeup-icon.svg`,
      title: `Beard Services`,
      para: `Maintain your facial hair with our premium beard services. Our
            barbers specialize in perfect beard shaping, precise trims, and
            luxurious hot towel shaves for the ultimate grooming experience.`,
      list: ["Classic Cuts", "Beard Shaping"],
    },
    {
      img: `https://pmcbarber.devfrend.com/images/salonCommon/skincare-icon.svg`,
      title: `Premium Services`,
      para: `Enhance your look with our premium barbering services including
            expert hair coloring, revitalizing scalp treatments, and styling for
            special occasions when you need to look your absolute best.`,
      list: ["Hair Coloring", "Scalp Treatments"],
    },
  ];

  return (
    <div id="services" className="w-full xl:h-screen h-fit bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 w-90 h-90 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">Premium Grooming</p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-5">Our Barber Services</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full text-center text-zinc-600">
          EProfessional barbering services to keep you looking sharp for
          everyday confidence or special occasions.
        </p>
      </div>

      <div className="aboutinfo flex lg:justify-between justify-center h-[60%] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-3">
        {data.map((item, i)=> (
          <div key={i} className="haircuts group w-sm md:p-5 p-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transintion-ease duration-500 border border-zinc-600 hover:border-yellow-400">
          <div className="title md:h-18 h-15 h-13 w-full">
            <div className="icon md:w-18 md:h-18 sm:w-15 sm:h-15 h-13 w-13 bg-zinc-700 rounded-md md:mt-8 sm:mt-3 mt-2 md:p-2 p-1 group-hover:bg-yellow-400/6 transintion-ease duration-300 md:group-hover:w-20 md:group-hover:h-20 sm:group-hover:w-17 sm:group-hover:h-17 group-hover:w-15 group-hover:h-15">
              <img
                src={item.img}
                className="w-full h-full boject-cover"
                alt=""
              />
            </div>
          </div>
          <h1 className="md:text-xl sm:text-lg text-base font-bold md:mt-7 sm:mt-5 mt-3 md:mb-8 sm:mb-3 mb-2 group-hover:text-yellow-400">
            {item.title}
          </h1>
          <p className="text-zinc-500 font-medium md:text-base sm:text-sm text-xs">
            {item.para}
          </p>
          <ul className="list-disc pl-5 text-zinc-500 md:text-sm text-xs md:mt-4 sm:mt-3 mt-2">
            {item.list.map((li, i)=> (
              <li key={i} className="font-medium">{li}</li>
            ))}
          </ul>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
