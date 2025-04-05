import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";
import asideBg from "@/images/asideBg.png";
const Aside = () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 300);

  return (
    <aside className="bg-[#F1F6FF] py-[70px] ">
      <div className="container mx-auto">
        <div className="flex gap-12 items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="max-w-[500px] w-full flex flex-col items-center justify-center gap-6">
              <button className="bg-[#CF4900] text-white max-w-[133px] w-full text-center py-3 mb-3 cursor-pointer font-semibold ">
                Hurry Up!
              </button>
              <h3 className="text-[#171B1C] text-center font-semibold text-5xl">
                Up To 20 % Discount Check it Out
              </h3>
              <div>
                <CountdownTimer targetDate={futureDate} />
              </div>
              <button className="cursor-pointer font-semibold text-xl">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative max-w-[536px] w-full h-[400px]">
            <div className="asideBg max-w-[536px] w-full h-[400px] absolute bottom-[-17%] right-[0%] "></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
