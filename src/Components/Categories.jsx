import React from "react";
import Image from "next/image";

import categoryImageOne from "@/images/category1.png";
import categoryImageTwo from "@/images/category2.png";
import categoryImageThree from "@/images/category3.png";
import categoryImageFour from "@/images/category4.png";
import categoryImageFive from "@/images/category5.png";
import categoryImageSix from "@/images/category6.png";
import Camera from "@/images/Camera.png";
import joystick from "@/images/joystick.png";
import products1 from "@/images/products1.png";
import products2 from "@/images/products2.png";
import products3 from "@/images/products3.png";
import products4 from "@/images/products4.png";
import products5 from "@/images/products5.png";
import { Rate } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

let categories_list = [
  {
    id: 1,
    image: categoryImageOne,
    name: "Iphone",
  },
  {
    id: 2,
    image: categoryImageTwo,
    name: "Mini Speakers",
  },
  {
    id: 3,
    image: categoryImageThree,
    name: "Ipad Mini Pro",
  },
  {
    id: 4,
    image: categoryImageFour,
    name: "Headphones",
  },
  {
    id: 5,
    image: categoryImageFive,
    name: "Laptop",
  },
  {
    id: 6,
    image: categoryImageSix,
    name: "Accessories",
  },
];
let products_list = [
  {
    id: 1,
    image: products1,
    name: "Latest Smart Watch ",
    price: "$90.00",
    actual_price: "$100.00",
  },
  {
    id: 2,
    image: products2,
    name: "Apple Mackbook Air M3",
    price: "$1099.00",
    actual_price: "$1199.00",
  },
  {
    id: 3,
    image: products3,
    name: "Homepad mini",
    price: "$54.00",
    actual_price: "$68.00",
  },
  {
    id: 4,
    image: products4,
    name: "Drou safe charger",
    price: "$34.00",
    actual_price: "$52.00",
  },
  {
    id: 5,
    image: products5,
    name: "Home Entertainment",
    price: "$94.00",
    actual_price: "$113.00",
  },
];
const Categories = () => {
  return (
    <section className="categories mt-[210px] pb-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold leading-[42px] text-[#242424] ">
          Trending Categories
        </h2>
        <ul className="flex gap-4 mt-8 mb-16 justify-center items-center">
          {categories_list.map((category) => (
            <li
              key={category.id}
              className="flex flex-col items-center gap-2 cursor-pointer border border-[#F4F4F4] rounded-2xl py-4 px-6"
            >
              <Image src={category.image} alt={category.name} />
              <span className="text-[#242424] font-medium text-base">
                {category.name}
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex gap-6 justify-center items-center">
          <li className="bg-[#EEEEEE] relative pt-10 pb-[205px]  max-w-[616px] w-full rounded flex flex-col items-center justify-center">
            <p className="text-[#474747] mb-4 font-medium ">
              Security smart Camera
            </p>
            <p className="text-[#474747] font-medium text-2xl">
              Just starting at $850
            </p>
            <button className="bg-[#FA6B1C] z-10 w-[119px] text-sm font-semibold mt-5 border border-transparent cursor-pointer flex gap-2 items-center justify-center rounded-full py-3 text-white">
              Show now
            </button>
            <Image
              className="absolute bottom-[-55%] right-[-5%]  "
              src={Camera}
              alt=""
            ></Image>
          </li>
          <li className="bg-[#EEEEEE] relative pt-10 pb-[205px]  max-w-[616px] w-full rounded flex flex-col items-center justify-center">
            <p className="text-[#474747] mb-4 font-medium ">
              Entertainment & Games
            </p>
            <p className="text-[#474747] font-medium text-2xl">
              Just starting at $450
            </p>
            <button className="bg-[#FA6B1C] w-[119px]  text-sm font-semibold mt-5 border border-transparent cursor-pointer flex gap-2 items-center justify-center rounded-full py-3 text-white">
              Show now
            </button>
            <Image
              className="absolute bottom-[-9%] right-[29%]  "
              src={joystick}
              alt=""
            ></Image>
          </li>
        </ul>
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <h3 className=" font-medium ">Latest Products</h3>
            <button className="flex cursor-pointer gap-2 items-center">
              View all products{" "}
              <ArrowRightOutlined
                style={{ color: "#FA6B1C", fontSize: "16px" }}
              />
            </button>
          </div>
          <ul className="flex gap-4 ">
            {products_list.map((product) => (
              <li
                key={product.id}
                className="flex flex-col items-center gap-2 cursor-pointer border border-[#F4F4F4] rounded-2xl pb-6 pt-8 px-6"
              >
                <Image
                  className="mb-10"
                  src={product.image}
                  alt={product.name}
                />
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
      </div>
    </section>
  );
};

export default Categories;
