import React from "react";

function Hero() {
  return (
    <>
      <div className="flex w-full overflow-hidden font-['Montserrat']">
        <div className="w-[50%] h-[655px] overflow-hidden relative cursor-pointer group">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in z-0 absolute group-hover:scale-105"
            src="https://avanthealthcare.com/_/img/tmp/hero1.jpg"
            alt=""
          />
          <div className="absolute flex flex-col items-center w-full bottom-0 bg-[rgba(0,0,0,.4)] justify-center p-8">
            <h2 className="text-[37px] text-white flex gap-3">
              Healthcare
              <h2 className="font-bold">Professionals</h2>
            </h2>
            <p className="text-[17px] text-white w-[500px] items-center flex justify-center mt-6 mb-8 text-center">
              Start your career in the USA as a registered nurse, physical
              therapist or occupational therapist with Avant!
            </p>
            <button className="transition duration-300 ease-in-out bg-[#fed141] text-[#233199] hover:bg-[#233199] hover:text-[#fed141] text-[18px] mb-4 px-8 py-4 uppercase font-bold rounded-full">
              Careers in the USA
            </button>
          </div>
        </div>
        <div className="w-[50%] h-[655px] overflow-hidden relative cursor-pointer group">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in z-0 absolute group-hover:scale-105"
            src="https://avanthealthcare.com/_/img/tmp/hero2.jpg"
            alt=""
          />
          <div className="absolute flex flex-col items-center w-full bottom-0 bg-[rgba(19,32,131,.55)] justify-center p-8">
            <h2 className="text-[37px] text-white flex gap-3">
              Healthcare
              <h2 className="font-bold">Organizations</h2>
            </h2>
            <p className="text-[17px] text-white w-[552px] items-center flex justify-center mt-6 mb-8 text-center">
            Need nurses? We assist clients in overcoming their staffing challenges with registered nurses and allied health professionals.
            </p>
            <button className="transition duration-300 ease-in-out bg-[#fed141] text-[#233199] hover:bg-[#233199] hover:text-[#fed141] text-[18px] mb-4 px-8 py-4 uppercase font-bold rounded-full">
             STAFFING SOLUTIONS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
