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
    <div className="w-full h-screen bg-[#1a1a1a] px-30 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 w-90 h-90 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about h-[30%] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2">Expert Stylists</p>
        <h1 className="font-bold text-4xl mb-5">Meet Our Barbers</h1>
        <p className="text-lg w-[60%] text-center text-zinc-600">
          Our team of skilled barbers is dedicated to providing you with the
          perfect cut and grooming experience.
        </p>
      </div>

      <div className="flex justify-between h-[62%] w-full flex-wrap">
        {data.map((item, i) => (
          <div className="group w-sm rounded-2xl bg-zinc-800 flex flex-col items-center border border-zinc-900 hover:border-yellow-400 hover:scale-[1.05] transition-ease duration-400">
            <div className="icon w-full h-50 bg-zinc-700 rounded-md overflow-hidden mt-2">
              <img
                src={item.img}
                className="w-full h-full boject-cover group-hover:scale-[1.1] transition-ease duration-400 overflow-hidden"
                alt=""
              />
            </div>
            <div className="line w-10 h-[2px] group-hover:w-30 bg-yellow-400 m-5 transition-ease duration-400"></div>
            <h1 className="text-xl font-bold mt-1 group-hover:text-yellow-400">
              {item.name}
            </h1>
            <p className="text-yellow-400 text-sm p-2">{item.title}</p>
            <p className="text-zinc-500 text-sm px-5">{item.para}</p>
            <div className="social flex gap-3 mt-4">
              <div className="facebook bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600 w-9 h-9 rounded-full  flex justify-center items-center cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.instagram.com/pmcbarbershop/"
                >
                  <i class="ri-facebook-box-fill text-yellow-400 hover:text-white"></i>
                </a>
              </div>
              <div className="insta bg-yellow-400/8 hover:bg-yellow-400 hover:scale-[1.1] transition-ease duration-600  w-9 h-9 rounded-full  flex justify-center items-center cursor-pointer">
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
