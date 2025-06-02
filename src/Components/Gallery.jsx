import React from "react";
import Button from "./Template/Button";

function Gallery() {
  const gallery = [
    "https://images.unsplash.com/photo-1588771930296-88c2cb03f386?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661381025863-4d740c289dd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546641082-f149d4c3c907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677444546739-21b8aad351d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]; 
  return (
    <div id="gallery" className="w-full xl:h-[120vh] h-[190vh] bg-[#1a1a1a] xl:px-30 lg:px-20 md:px-10 px-5 text-white mt-30 relative overflow-hidden">
      <div className="circle1 w-72 h-72 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle2 w-70 h-70 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-9%]"></div>

      <div className="about h-[30vh] w-full mt-[3%] flex flex-col items-center justify-center">
        <p className="text-yellow-400 font-semibold mb-2">Our Work & Shop</p>
        <h1 className="font-bold text-4xl mb-5">Our Barbershop Gallery</h1>
        <p className="text-lg w-[60%] text-center text-zinc-600">
          Take a look at our shop atmosphere and the quality cuts we deliver to
          our clients.
        </p>
      </div>

      <div className="flex justify-center h-[80vh] w-full flex-wrap gap-5">
        {gallery.map((img, i) => (
          <div
            key={i}
            className="imgdiv h-[35vh] w-[54vh] hover:scale-[1.07] transition-ease duration-400 hover:shadow-lg hover:shadow-zinc-400/10"
          >
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
