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
    <div className="w-full h-screen bg-[#1a1a1a] px-30 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 w-90 h-90 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>
      <div className="circle2 w-75 h-75 rounded-full bg-yellow-400/5 absolute right-[-10%] bottom-[-9%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2">Our Commitment</p>
        <h1 className="font-bold text-4xl mb-5">Why Choose PMC Barbershop?</h1>
        <p className="text-lg w-[60%] text-center text-zinc-600">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </div>

      <div className="aboutinfo flex justify-between h-[45%] w-full flex-wrap">
        {data.map((item, i ) => (
          <div key={i} className="haircuts group w-sm p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transintion-ease duration-500 border border-zinc-600 hover:border-yellow-400">
          <div className="title h-18 w-full">
            <div className="icon w-18 h-18 bg-yellow-400/6 rounded-md mt-4 p-2 group-hover:bg-yellow-400 transintion-ease duration-300 group-hover:w-20 group-hover:h-20 flex justify-center items-center">
              <p className="text-yellow-400 group-hover:text-white text-semibold">
                User
              </p>
            </div>
          </div>
          <h1 className="text-xl font-bold mt-7 mb-8 group-hover:text-yellow-400">
            {item.title}
          </h1>
          <p className="text-zinc-500 font-medium">
           {item.para}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Commitment;
