import React from "react";

function Events() {
  return (
    <>
      <div className="font-['Montserrat'] p-[70px] flex flex-col items-center">
        <p className="text-[37px] text-[#272a68] font-semibold text-center">
          Upcoming Events
        </p>
        <p className="text-[21px] text-gray-600 mt-7 items-center flex text-center gap-2">
          Want to connect? Come and see us at one of our upcoming events or just
          <p className="text-[21px] text-[#093fdc] underline cursor-pointer items-center text-center font-bold"> contact us today.</p>
        </p>
        <p className="text-[18px] text-[#093fdc] mt-20 text-center underline font-bold cursor-pointer">
        See all events
      </p>
      </div>
      
    </>
  );
}

export default Events;
