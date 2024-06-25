import React from "react";

function Blog() {
  return (
    <div className="bg-[#f3f3f3] font-['Montserrat'] p-[70px]">
      <div className="text-center justify-center flex items-center flex-col">
        <p className="text-[37px] text-[#272a68] font-semibold text-center">
          Recent Blog Posts
        </p>
        <p className="text-[21px] text-gray-600 mt-10 items-center flex">
          Stay up-to-date with our latest news and announcements on the Avant
          blog.
        </p>
      </div>
      <div className="flex p-10 justify-center max-w-[1800px] gap-12">
        <div className="flex flex-col max-w-[690px] hover:cursor-pointer">
          <img
            className="w-[690px] hover:cursor-pointer"
            src={
              "https://avanthealthcare.com/core/fileparse.php/116/urlt/visa-bulletin-blog.jpg"
            }
            alt=""
          />
          <p className="text-[#337ab7] text-[27px] mt-10 font-bold hover:text-[#233199] hover:underline hover:decoration-2">
            July 2024 Visa Bulletin
          </p>
          <p className="text-[18px] text-gray-600 mt-7">
            The latest visa bulletin has been issued by the U.S. Department of
            State. Here are the Final Action Dates for Employment-based (EB)
            preference cases.
          </p>
        </div>

        <div className="flex flex-col max-w-[690px] hover:cursor-pointer">
          <img
            className="w-[690px] hover:cursor-pointer"
            src={
              "https://avanthealthcare.com/core/fileparse.php/116/urlt/AEP-Featured-Image.png"
            }
            alt=""
          />
          <p className="text-[#337ab7] text-[27px] mt-10 font-bold hover:text-[#233199] hover:underline hover:decoration-2">
          IELTS & TOEFL: Everything International Nurses Need To Know
          </p>
          <p className="text-[18px] text-gray-600 mt-7">
            On this episode of Healthcare Heartbeat, a podcast by Avant
            Healthcare Professionals, host Ross Herosian sits down with English
            Program Manager Jennifer Rives. They discuss Jennifer's role at
            Avant Healthcare Professionals, how the AEP department plays a role
            in the immigration process, and what is needed to ensure the success
            of our Avant RNs!
          </p>
        </div>
      </div>
      <p className="text-[18px] text-[#093fdc] mt-7 text-center underline font-bold cursor-pointer">
            More blog posts
      </p>
    </div>
  );
}

export default Blog;
