import React from "react";

function Therapists() {
  return (
    <div className="bg-[#f3f3f3] font-['Montserrat'] p-[70px] text-center justify-center flex items-center flex-col">
      <p className="text-[37px] text-[#272a68] font-semibold text-center">
        Hire Registered Nurses & Therapists Now
      </p>
      <p className="text-[21px] text-gray-600 w-[1028px] mt-10 items-center flex">
        You don't have to wonder anymore where to hire RNs, PTs and OTs. You've
        come to the right place! Avant Healthcare Professionals is the premier
        nurse staffing agency for registered nurses and allied health
        professionals.
      </p>
      <p className="text-[21px] text-black mt-10 items-center flex font-bold">
        We have Med/Surg, L&D, Peds and OR registered nurses!
      </p>
      <button className="transition duration-300 ease-in-out bg-[#fed141] text-[#233199] hover:bg-[#233199] hover:text-[#fed141] text-[20px] mt-8 px-8 py-3 font-bold rounded-full">
        Contact us today
      </button>
    </div>
  );
}

export default Therapists;
