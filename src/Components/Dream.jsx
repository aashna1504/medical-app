import React from "react";

function Dream() {
  return (
    <>
      <div className="font-['Montserrat'] flex py-10 gap-10 justify-between max-w-[1600px] mx-auto">
        <div className="p-10">
          <p className="text-[37px] text-[#272a68] font-semibold leading-7">
            Achieve Your
          </p>
          <p className="text-[37px] text-[#272a68] font-semibold">
            American Dream
          </p>
          <p className="text-[21px] text-gray-600 w-[630px] mt-10 items-center flex">
            Since 2003, we have made thousands of dreams come true for
            international healthcare professionals. From our prestigious support
            programs to our highly experienced teams, no one knows international
            staffing like we do.
          </p>
          <p className="text-[21px] text-[#000] w-[630px] mt-7 font-bold items-center flex">
            Are you an RN, PT or OT ready to start your dream?
          </p>
          <button className="mt-8 bg-[#233199] hover:bg-[#075af2] text-[22px] text-white font-bold px-[3.5rem] py-3 rounded-full transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
        <div>
          <img
            className="w-[750px] h-[400px] mt-6"
            src={
              "https://images.healthshots.com/healthshots/en/uploads/2022/01/09140918/speech.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="font-['Montserrat'] flex p-10 justify-between max-w-[1600px] mx-auto">
        <div>
          <img
            className="w-[670px] h-[400px] mt-6"
            src={
              "https://embedsocial.com/wp-content/uploads/2022/02/advertising-testimonials-examples.jpg"
            }
            alt=""
          />
        </div>
        <div className="p-10">
          <p className="text-[37px] text-[#272a68] font-semibold leading-7">
            Changing Lives
          </p>
          <p className="text-[37px] text-[#272a68] font-semibold">Together</p>
          <p className="text-[21px] text-gray-600 w-[630px] mt-10 items-center flex">
            Hospitals across the U.S. trust Avant Healthcare Professionals as
            their long-term RN staffing partner. Let's fill your chronic nursing
            staff shortage and change lives. Together.
          </p>
          <p className="text-[21px] text-[#000] w-[630px] mt-7 font-bold items-center flex">
            Need to Hire Experienced Nurses?
          </p>
          <button className="mt-8 bg-[#233199] hover:bg-[#075af2] text-[22px] text-white font-bold px-[3.5rem] py-3 rounded-full transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Dream;
