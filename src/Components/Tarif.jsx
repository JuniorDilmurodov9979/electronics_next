import Image from "next/image";
import React from "react";
import tarif1 from "@/images/tarif1.png";
import tarif2 from "@/images/tarif2.png";
import tarif3 from "@/images/tarif3.png";

const Tarif = () => {
  return (
    <section className="tarif bg-[#F8F8F8] py-13 mt-16 mb-21">
      <div className="container mx-auto">
        <ul className="flex items-center justify-between">
          <li className="flex flex-col max-w-[215px] w-full gap-3 items-center  justify-center">
            <Image src={tarif1} alt="tarif1"></Image>
            <h3 className="font-semibold text-xl text-[#1A1A1A] ">
              Free Delivery
            </h3>
            <p className="font-medium text-center text-[#606060] ">
              And free returns. Checkout for delivery date.
            </p>
          </li>
          <li className="flex flex-col max-w-[300px] w-full gap-3 items-center  justify-center">
            <Image src={tarif2} alt="tarif1"></Image>
            <h3 className="font-semibold text-xl text-[#1A1A1A] ">
              Pay monthly at 0% APR
            </h3>
            <p className="font-medium text-center text-[#606060] ">
              Choos to checkout with Apple Card monthly installmants.
            </p>
          </li>
          <li className="flex flex-col max-w-[250px] w-full gap-3 items-center  justify-center">
            <Image src={tarif3} alt="tarif1"></Image>
            <h3 className="font-semibold text-xl text-[#1A1A1A] ">
              Personalize it
            </h3>
            <p className="font-medium text-center text-[#606060] ">
              Engrave your device with your name or a personal note.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tarif;
