import React from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Certification() {
  return (
    <div className="bg-black">
      <div className=" font-['Montserrat'] text-white flex justify-between py-10 w-[80%] mx-auto">
        <div className="flex flex-row gap-10 items-center">
          <img
            className="w-[80px] h-[80px]"
            src={"https://avanthealthcare.com/_/img/tmp/badge.png"}
            alt=""
          />
          <div className="flex flex-col">
            <p className=
            "text-[19px] font-bold">
              Joint Commission Certification
            </p>
            <p className="text-[11px] mt-2 w-[700px] leading-5">
              Avant is a Joint Commission Accredited Staffing Agency. The public
              may contact The Joint Commissions Office of Quality Monitoring to
              report any concerns or register complaints about a Joint
              Commission-certified organization by calling 1.800.994.6610 or
              emailing complaint@jointcommission.org. Complaints may also be
              made online.
            </p>
          </div>
        </div>
        
          <div className="flex gap-7 items-center cursor-pointer">
            <IoIosArrowDropup size={70} />
            <FaFacebookF size={40} />
            <FaTwitter size={40} />
            <FaLinkedinIn size={40} />
            <FaYoutube size={40} />
            <FaInstagram size={40} />
          </div>
      </div>
      <div className="bg-[#151f6d] font-['Montserrat'] text-[21px] text-white items-center p-4 flex gap-2 justify-center cursor-pointer">
        Avant Healthcare Professionals is a member of the{" "}
        <p className="text-[#fed141]">Jackson Healthcare</p> family of
        companies.
      </div>
    </div>
  );
}

export default Certification;
