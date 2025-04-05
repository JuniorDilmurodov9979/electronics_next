// components/Footer.js
import { Button, Divider } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import Image from "next/image";
import footerLogo from "@/images/footerLogo.png";
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">Uzbekistan</p>
            <p className="text-gray-600 mb-2">+998 91 101 01 01</p>
            <p className="text-gray-600 mb-2">demo@exampledemo.com</p>
            <p className="text-gray-600 mb-2">DJ Demo Store</p>
            <p className="text-gray-600">No. 12345 Freedom Tashkent</p>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Product Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  License Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Raddem Voucher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Policies & Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Download Our App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-600 mb-4">
              Download our App & get extra 20% Discount on your first Order...
            </p>
            <div className="flex space-x-4">
              <Button
                type="default"
                icon={<GoogleOutlined />}
                className="flex items-center"
                href="#"
              >
                Google Play
              </Button>
              <Button
                type="default"
                icon={<AppleOutlined />}
                className="flex items-center"
                href="#"
              >
                App Store
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Payment Icons */}
        <div className="mt-16 py-4 bg-[#F8F8F8] ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image src={footerLogo}></Image>
              <p className="text-gray-500 text-sm mb-4 sm:mb-0">
                Copyright © Team90Degree | Built with DJ by Team90Degree.
              </p>
            </div>

            <div className="flex space-x-4">
              {/* Replace these with actual payment icons */}
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                width={40}
                height={24}
                className="object-contain"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                width={40}
                height={24}
                className="object-contain"
              />
              {/* Add more payment icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
