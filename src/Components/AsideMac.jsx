import React from "react";

const AsideMac = () => {
  return (
    <aside className="asideMac   ">
      <div className="container mx-auto bg-[#F9F9F9] py-[70px]  rounded-2xl">
        <div className="flex gap-25 ">
          <div className="relative max-w-[640px] w-full h-[320px]">
            <div className="asideMacBg max-w-[640px] w-full h-[320px] absolute bottom-[-17%] right-[0%] "></div>
          </div>
          <div className="flex items-center max-w-[330px] w-full justify-center">
            <div className=" flex flex-col items-center justify-center">
              <p
                className="font-semibold text-[#474747] mb-2
               "
              >
                Big discount
              </p>
              <h3 className="text-[#474747] text-center font-medium text-2xl leading-[36px] ">
                Must buying apple devices
              </h3>
              <p className="text-[#CF4900] text-2xl font-semibold mt-3 mb-6 ">
                $450.00
              </p>
              <button className="bg-[#CF4900] text-white max-w-[119px] w-full text-center py-3 cursor-pointer rounded-full font-semibold ">
                Show now
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideMac;
