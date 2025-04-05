"use client";
import logo from "@/images/logo.svg";
import {
  GlobalOutlined,
  HeartOutlined,
  SearchOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [language, setLanguage] = useState("English");

  const handleMenuClick = ({ key }) => {
    setLanguage(key);
  };

  const items = [
    { key: "English", label: "🇺🇸 English" },
    { key: "Español", label: "🇪🇸 Español" },
    { key: "Français", label: "🇫🇷 Français" },
    { key: "Deutsch", label: "🇩🇪 Deutsch" },
  ];

  return (
    <header className="container mx-auto py-4">
      <div className="flex items-center">
        <div className="flex gap-7">
          <p className="text-[#4C4C4C] font-medium">+99 891 101 11 11</p>
          <p className="text-[#4C4C4C] font-medium">Store location</p>
        </div>
        <div className="mx-auto">
          <p className="text-[#4C4C4C] font-medium">
            Tell a friend about Drou & get 20% off
          </p>
        </div>
        <div className="flex gap-2">
          <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <Button icon={<GlobalOutlined />}>{language}</Button>
          </Dropdown>
          <Button>Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
      <div className="my-4 flex items-center ">
        <Link className="w-[190px] h-[62px]" href={"/"}>
          <Image src={logo} alt="logo"></Image>
        </Link>
        <div className="flex gap-4 mx-auto">
          <Link className="font-medium text-[#242424]" href={"/"}>
            Home
          </Link>
          <Link className="font-medium text-[#242424]" href={"/"}>
            Electronics
          </Link>
          <Link className="font-medium text-[#242424]" href={"/"}>
            Blog
          </Link>
          <Link className="font-medium text-[#242424]" href={"/"}>
            Pages
          </Link>
          <Link className="font-medium text-[#242424]" href={"/"}>
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <HeartOutlined style={{ fontSize: "24px" }} />
          <SearchOutlined style={{ fontSize: "24px" }} />
          <ShopOutlined style={{ fontSize: "24px" }} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
