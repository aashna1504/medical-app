import React from "react";

function Footer() {
  return (
    <div className="bg-[#1f1e1e]">
      <div className="bg-[#151f6d] font-['Montserrat'] text-[21px] font-semibold text-white items-center p-4 flex justify-center cursor-pointer">
        POEA License Number: POEA-040-LB-061914-PA • EDI Staffbuilders
        International
      </div>
      <div className="font-['Montserrat'] text-white grid grid-cols-4 w-[80%] py-20 mx-auto">
        <div>
        <img
          className="w-[200px]"
          src={"https://avanthealthcare.com/_/img/footer-mobile.png"
          }
          alt=""
        />
          <p className="text-[17px] font-bold mt-7">
            Avant Healthcare Professionals
          </p>
          <p className="text-[14px] mt-8">2301 Lucien Way, Suite 360</p>
          <p className="text-[14px] mt-1">Maitland, Florida 32751</p>
          <button className="transition duration-300 ease-in-out bg-[#075af2] text-[#fff] text-[14px] mt-5 px-9 py-4">
            View on Google Maps
          </button>
          <p className="text-[14px] mt-6 cursor-pointer hover:underline">
            +1.407.681.2999 (Direct Dial)
          </p>
          <p className="text-[14px] mt-1 cursor-pointer hover:underline">
            +1.888.681.2999 (Toll Free in U.S.)
          </p>
          <p className="text-[14px] mt-1 cursor-pointer hover:underline">
            +1.407.671.7615 (Fax)
          </p>
          <p className="text-[17px] font-bold mt-6">Hours:</p>
          <p className="text-[14px] mt-8 cursor-pointer">
            Monday through Friday,
          </p>
          <p className="text-[14px] mt-1 cursor-pointer">
            8:00 a.m. to 5:00 p.m. EST
          </p>
          </div>

          <div>
          <p className="text-[21px] font-bold">Healthcare Professionals</p>
          <p className="text-[14px] mt-7 cursor-pointer hover:underline">
          Jobs in the USA
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Who We Are
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Why Avant
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          How to Qualify
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          The Process
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Referral Bonuses Program
          </p>
          <p className="text-[14px] mt-3 cursor-pointer hover:underline">
          #IamAvant
          </p>
          <p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Apply Now
          </p>
          </div>

          <div>
          <p className="text-[21px] font-bold">Healthcare Organizations</p>
          <p className="text-[14px] mt-7 cursor-pointer hover:underline">
          Staffing Solutions
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Avant Difference
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Meeting the Nursing Shortage
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Success Stories
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Contact Us
          </p>
          </div>

          <div>
          <p className="text-[21px] font-bold">About Us</p>
          <p className="text-[14px] mt-7 cursor-pointer hover:underline">
          Overview
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Our Core Values
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Meet Our Team
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Joint Commission Certified
          </p><p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Our Partners
          </p>
          <p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Frequently Asked Questions
          </p>
          <p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Upcoming Events
          </p>
          <p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Blog
          </p>
          <p className="text-[14px] mt-3 cursor-pointer hover:underline">
          Corporate Careers
          </p>
          </div>

      </div>
    </div>
  );
}

export default Footer;
