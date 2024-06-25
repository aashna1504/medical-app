import React from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <>
    <div className="bg-[#233199] font-['Montserrat'] text-[16px] font-semibold text-white items-center p-4 flex justify-center cursor-pointer">
      PRIVACY ALERT: Protection of your privacy is vital. Learn how Avant
      Healthcare Professionals is working to protect your privacy during the job
      application process. Learn More
    </div>
    <div className="font-['Montserrat'] text-black flex items-center max-w-[1570px] w-full mx-auto justify-between">
    <img
            className="w-[150px] lg:w-[160px]"
            src={"https://th.bing.com/th/id/OIP.4OucOOmQaZxOq1K9yV_J-gAAAA?w=360&h=360&rs=1&pid=ImgDetMain"}
            alt=""
    />
    <div className="block">
        <div className="flex gap-7 items-center justify-end">
        <p className="text-[13px] font-semibold cursor-pointer border-r-2 border-gray-200 pr-4">FAQS</p>
        <p className="text-[13px] font-semibold cursor-pointer border-r-2 border-gray-200 pr-4">EVENTS</p>
        <p className="text-[13px] font-semibold cursor-pointer border-r-2 border-gray-200 pr-4">BLOGS</p>
        <p className="text-[13px] font-semibold cursor-pointer border-r-2 border-gray-200 pr-4">RESOURCES</p>
        <p className="text-[13px] font-semibold cursor-pointer">CORPORATE CAREERS</p>
        <IoSearch size={20} className="text-[#233199] hover:text-[#075af2]"/>
        </div>
      <div className="text-[#262966] text-[20px] flex gap-14 cursor-pointer mt-7 items-center font-semibold transition duration-300 ease-in-out">
       <p className="hover:text-[#075af2]">Healthcare Professionals</p>
       <p className="hover:text-[#075af2]">Healthcare Organizations</p>
       <p className="hover:text-[#075af2]">About Us </p>
       <p className="hover:text-[#075af2]">Contact Us</p>
       <button className="bg-[#233199] hover:bg-[#075af2] text-[16px] text-white px-8 py-3 rounded-full transition duration-300 ease-in-out">
        Apply Now
       </button>
       <GiHamburgerMenu size={40} className="hover:text-[#075af2]"/>
 
      </div>
    </div>
    </div>

    </>
  );
}

export default Header;
