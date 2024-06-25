import React from "react";

function Awards() {
  return (
    <div className="items-center font-['Montserrat'] p-[70px]">
      <p className="text-[37px] text-[#272a68] font-semibold text-center">
        Awards & Accolades
      </p>
      <div className="flex gap-20 items-center justify-center cursor-pointer">
        <img
          className="w-[200px]"
          src={
            "https://th.bing.com/th/id/OIP.4OucOOmQaZxOq1K9yV_J-gAAAA?w=360&h=360&rs=1&pid=ImgDetMain"
          }
          alt=""
        />
        <img
          className="w-[200px]"
          src={"https://logodix.com/logo/2004138.jpg"}
          alt=""
        />
        <img
          className="w-[120px]"
          src={
            "https://images.saymedia-content.com/.image/t_share/MjAyODQ4NTAxMzEzMzE1OTA4/how-to-be-a-winner.jpg"
          }
          alt=""
        />
        <img
          className="w-[200px]"
          src={
            "https://static.vecteezy.com/system/resources/previews/011/883/287/non_2x/modern-letter-c-colorful-logo-with-watter-drop-good-for-technology-logo-company-logo-dummy-logo-bussiness-logo-free-vector.jpg"
          }
          alt=""
        />
        <img
          className="w-[120px]"
          src={
            "https://th.bing.com/th/id/OIP.iz4aBeZSiYy8XqdCZc7ABQHaHa?rs=1&pid=ImgDetMain"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Awards;
