import React from "react";

function Barbers() {
  const data = [
    {
      img: `https://plus.unsplash.com/premium_photo-1671741519366-f8200f554568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJhcmJlcnxlbnwwfDB8MHx8fDA%3D`,

      name: "Jason Rodriguez",
      title: `Owner & Master Barber`,
      para: `With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in lorem ipsu classic cuts and...`,
    },
    {
      img: `https://images.unsplash.com/photo-1476419627509-e59980979da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhcmJlcnxlbnwwfDB8MHx8fDA%3D`,
      name: "Marcus Williams",
      title: `Senior Barber`,
      para: `Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him lorem ip a loyal...`,
    },
    {
      img: `https://images.unsplash.com/photo-1593702282967-96c9f195befa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxiYXJiZXJ8ZW58MHwwfDB8fHww`,
      name: "Terrence Jackson",
      title: `Barber & Stylist`,
      para: `Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your lor look...`,
    },
  ];

  return (
    <div className="w-full xl:h-screen h-fit bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 sm:w-90 sm:h-90 w-70 h-70 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 sm:w-70 sm:h-70 w-50 h-50 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">Expert Stylists</p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-5">Meet Our Barbers</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full text-center text-zinc-600">
          Our team of skilled barbers is dedicated to providing you with the
          perfect cut and grooming experience.
        </p>
      </div>

      <div className="flex lg:justify-between justify-center h-[62%] w-full flex-wrap xl:gap-0 gap-4 xl:my-0 my-3">
        {data.map((item, i) => (
          <div className="group w-sm rounded-2xl bg-zinc-800 flex flex-col items-center border border-zinc-900 hover:border-yellow-400 hover:scale-[1.05] transition-ease duration-400 lg:p-0 p-2">
            <div className="icon w-full h-50 bg-zinc-700 rounded-md overflow-hidden mt-2">
              <img
                src={item.img}
                className="w-full h-full boject-cover group-hover:scale-[1.1] transition-ease duration-400 overflow-hidden"
                alt=""
              />
            </div>
            <div className="line w-10 h-[2px] group-hover:w-30 bg-yellow-400 md:m-5 sm:m-3 m-2 transition-ease duration-400"></div>
            <h1 className="md:text-xl sm:text-lg text-base font-bold mt-1 group-hover:text-yellow-400">
              {item.name}
            </h1>
            <p className="text-yellow-400 md:text-sm text-xs md:p-2 p-1">{item.title}</p>
            <p className="text-zinc-500 sm:text-sm text-xs md:px-5 sm:px-3 px-2">{item.para}</p>
            <div className="social flex sm:gap-3 gap-2 sm:mt-4 mt-3">
              <div className="facebook bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600 md:w-9 md:h-9 sm:w-7 sm:h-7 w-5 h-5 rounded-full flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-facebook-box-fill text-yellow-400 hover:text-white"></i>
                </a>
              </div>
              <div className="insta bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600 md:w-9 md:h-9 sm:w-7 sm:h-7 w-5 h-5 rounded-full  flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-instagram-line text-yellow-400 hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Barbers;
