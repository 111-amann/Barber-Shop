import React from "react";

function Button({ name, px, py, bg = "bg-yellow-500", border = "none", icon, text="text-white"}) {
  return (
    <div className="">
      <button
        className={`${px} ${py} ${bg} ${border} ${text} font-semibold text-sm rounded-lg hover:bg-yellow-400 cursor-pointer`}
      >
        {icon && <i class="ri-phone-line text-md mr-1 font-medium mr-3"></i>}
        {name}
      </button>
    </div>
  );
}

export default Button;
