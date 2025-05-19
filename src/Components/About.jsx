import React from "react";

function About() {
  return (
    <div className="w-full h-screen bg-[#1a1a1a] px-30 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2">Our Story</p>
        <h1 className="font-bold text-4xl mb-5">About PMC Barbershop</h1>
        <p className="text-lg w-[60%] text-center text-zinc-600">
          Established in 2018, PMC Barbershop has been providing premium
          grooming services to the men of Denton, TX. Our mission is to deliver
          exceptional haircuts and grooming services in a welcoming, classic
          barbershop environment.
        </p>
      </div>

      <div className="aboutinfo flex h-[60%] w-full">
        <div className="leftinfo w-1/2 flex justify-center">
          <div className="group w-[95%] h-[85%] mt-5 rounded-3xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1626079496328-b0ec3354d4da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover hover:scale-[1.1] transition-ease duration-400"
              alt="Shop Image"
            />
            <div className="exp absolute right-[3%] bottom-[6%] rounded-lg px-5 py-2 bg-yellow-400 rotate-[5deg] group-hover:rotate-0 transition-ease duration-400"><h5>5+ years</h5></div>
          </div>
        </div>
        <div className="rightinfo w-1/2 p-3 mt-5">
          <div className="p flex gap-3">
            <div className="line h-30 w-2 bg-yellow-400"></div>
            <p className="text-lg text-zinc-600">
              Established in 2018, PMC Barbershop has been providing premium
              grooming services to the men of Denton, TX. Our mission is to
              deliver exceptional haircuts and grooming services in a welcoming,
              classic barbershop environment.
            </p>
          </div>
          <div className="group bg-zinc-800 hover:bg-zinc-700 rounded-xl p-5 hover:pl-8 transintion-ease duration-300 mt-12 relative">
            <p className="text-5xl group-hover:text-6xl transition-ease duration-300 italic group-hover:rotate-[20deg] absolute top-[1%] group-hover:top-[-1%] left-[1%] group-hover:left-[3%] text-yellow-400 opacity-50 group-hover:opacity-75">"</p>
            <p className="text-zinc-500 mt-2">We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.</p>
            <hr className="mt-2 text-zinc-800 group-hover:text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
