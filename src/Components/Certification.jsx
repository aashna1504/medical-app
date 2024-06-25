import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Certification() {
  return (
    <>
      <div className="bg-black font-['Montserrat'] text-white grid grid-3 justify-between p-10 max-w-[1900px] mx-auto">
        <div className="flex flex-row gap-5 ml-[8rem] items-center">
          <img
            className="w-[80px] h-[80px]"
            src={"https://avanthealthcare.com/_/img/tmp/badge.png"}
            alt=""
          />
          <div className="flex flex-col">
          <p className="text-[19px] font-bold">
          Joint Commission Certification
          </p>
          <p className="text-[11px] mt-2 w-[800px] leading-5">
          Avant is a Joint Commission Accredited Staffing Agency. The public may contact The Joint Commissions Office of Quality Monitoring to report any concerns or register complaints about a Joint Commission-certified organization by calling 1.800.994.6610 or emailing complaint@jointcommission.org. Complaints may also be made online.
          </p>
          </div>
          <div className="flex gap-5 items-center mx-[5rem]">
          <IoIosArrowDropup size={70}/>
          </div>
          <div className="flex gap-5">
          <FaFacebookF size={40}/>
          <FaTwitter size={40}/>
          <FaLinkedinIn size={40}/>
          <FaYoutube size={40}/>
          <FaInstagram size={40}/>

          </div>
        </div>
      </div>
      <div className="bg-[#151f6d] font-['Montserrat'] text-[21px] text-white items-center p-4 flex gap-2 justify-center cursor-pointer">
      Avant Healthcare Professionals is a member of the <p className="text-[#fed141]">Jackson Healthcare</p> family of companies.
      </div>
    </>
  );
}

export default Certification;
