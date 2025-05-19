import React from "react";

function Testimonials() {
    const data = [
        {
            para: `I've been getting my hair cut at PMC Barbershop for over 2 years
            now. The attention to detail is unmatched, and the atmosphere is
            always welcoming. My barber remembers exactly how I like my fade
            every time!`,
            name: `Mike Johnson`
        },
        {
            para: `As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!`,
            name: `David Martinez`
        },
        {
            para: `The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.`,
            name: `Chris Taylor`
        }
    ]
  return (
    <div className="w-full h-screen bg-[#1a1a1a] px-30 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-9%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2">Testimonials</p>
        <h1 className="font-bold text-4xl mb-5">What Our Clients Say</h1>
      </div>

      <div className="flex justify-between h-[50%] w-full flex-wrap">
        {data.map((item, i) => (
            <div key={i} className="group w-sm p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transintion-ease duration-500 border border-zinc-600 hover:border-yellow-400 relative overflow-hidden">
            <div className="circle2 w-40 h-40 rounded-full bg-yellow-400/6 absolute right-[-20%] bottom-[-14%]"></div>
          <p className="text-5xl text-yellow-400/9 mt-4 -ml-1 rotate-[5deg]">
            "
          </p>
          <p className="text-white text-lg italic -mt-8">
            {item.para}
          </p>
          <p className="text-5xl text-yellow-400/9 -mt-5 rotate-[5deg] text-right">
            "
          </p>
          <div className="rating flex gap-2 items-center border-t border-zinc-500 mt-5 pt-7">
            <div className="rating flex gap-[2px]">
              <i class="ri-star-fill text-yellow-600 text-xs"></i>
              <i class="ri-star-fill text-yellow-600 text-xs"></i>
              <i class="ri-star-fill text-yellow-600 text-xs"></i>
              <i class="ri-star-fill text-yellow-600 text-xs"></i>
              <i class="ri-star-fill text-yellow-600 text-xs"></i>
            </div>
            <div className="line h-6 w-1 bg-yellow-400 rounded-lg"></div>
            <h5 className="font-semibold">{item.name}</h5>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
