import React from "react";
import popular1 from "@/images/popular1.png";
import popular2 from "@/images/popular2.png";
import popular3 from "@/images/popular3.png";
import popular4 from "@/images/popular4.png";
import popular5 from "@/images/popular5.png";
import popular6 from "@/images/popular6.png";
import popular7 from "@/images/popular7.png";
import popular8 from "@/images/popular8.png";
import { Rate } from "antd";
import Image from "next/image";

const Popular = () => {
  const popularProducts = [
    {
      id: 1,
      image: popular1,
      name: "Drou safe charger",
      price: "$34.00",
      actual_price: "$52.00",
    },
    {
      id: 2,
      image: popular2,
      name: "Security smart camera",
      price: "$850.00",
      actual_price: "$900.00",
    },
    {
      id: 3,
      image: popular3,
      name: "Iphone 15 pro max",
      price: "$1099.00",
      actual_price: "$1590.00",
    },
    {
      id: 4,
      image: popular4,
      name: "Latest Smart Watch",
      price: "$90.00",
      actual_price: "$100.00",
    },
    {
      id: 5,
      image: popular5,
      name: "Iphone 14 pro max",
      price: "$990.00",
      actual_price: "$1090.00",
    },
    {
      id: 6,
      image: popular6,
      name: "Ipad mini Pro",
      price: "$590.00",
      actual_price: "$790.00",
    },
    {
      id: 7,
      image: popular7,
      name: "Iphone Lighting Cable",
      price: "$90.00",
      actual_price: "$100.00",
    },
    {
      id: 8,
      image: popular8,
      name: "Homepad mini",
      price: "$90.00",
      actual_price: "$100.00",
    },
  ];
  return (
    <section className="popular mt-21 pb-21">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Popular products</h2>
          <div className="flex gap-5 font-semibold ">
            <button className="hover:text-[#CF4900] cursor-pointer">
              Accessories
            </button>
            <button className="hover:text-[#CF4900] cursor-pointer">
              Iphone
            </button>
            <button className="hover:text-[#CF4900] cursor-pointer">
              Laptop
            </button>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-x-6 gap-y-8">
          {popularProducts.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center gap-2 cursor-pointer border border-[#F4F4F4] rounded-2xl pb-6 pt-8 px-6"
            >
              <Image className="mb-10" src={product.image} alt={product.name} />
              <Rate />
              <span className="text-[#242424] font-medium text-base">
                {product.name}
              </span>
              <div className="flex gap-2 items-center">
                <span className="text-[#FF5B00] font-semibold ">
                  {product.price}
                </span>
                <del className="text-[#68696B] font-semibold ">
                  {product.actual_price}
                </del>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Popular;
