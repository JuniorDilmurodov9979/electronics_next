import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import heroBg from "@/images/heroBg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero bg-[#F9F9F9] pt-[85px] pb-[180px]">
      <div className="container mx-auto">
        <div className="flex gap-25 items-center">
          <div className="max-w-[514px] w-full">
            <span className="text-[#FA6B1C] text-2xl font-medium">
              SALE UP TO 30% OFF
            </span>
            <h1 className="text-[#242424] mb-5 mt-3 font-semibold text-[52px] ">
              Apple Watch Series
            </h1>
            <p className="text-[#4C4C4C]  font-medium text-base">
              Featured packed at a batter value than over pawerful sensors to
              manitor your fitness
            </p>
            <button className="bg-[#FA6B1C] w-[171px] mt-11 border border-transparent cursor-pointer flex gap-2 items-center justify-center rounded-2xl py-3 text-white">
              Show now
              <ArrowRightOutlined
                style={{ color: "white", fontSize: "24px" }}
              />
            </button>
          </div>
          <div className="">
            <Image src={heroBg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
