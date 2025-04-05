import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";
import React from "react";
import events1 from "@/images/events1.png";
import events2 from "@/images/events2.png";
import events3 from "@/images/events3.png";
import Image from "next/image";

const Events = () => {
  const events = [
    {
      id: 1,
      image: events1,
      name: "Drou safe charger",
      time: "March 15 2025",
    },
    {
      id: 2,
      image: events2,
      name: "Security smart camera",
      time: "March 15 2025",
    },
    {
      id: 3,
      image: events3,
      name: "Iphone 15 pro max",
      time: "March 15 2025",
    },
  ];
  return (
    <section className="events pb-21">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className=" font-medium ">Blog & Events</h2>
          <button className="flex cursor-pointer gap-2 items-center">
            View all Events
            <ArrowRightOutlined
              style={{ color: "#FA6B1C", fontSize: "16px" }}
            />
          </button>
        </div>
        <ul className="grid grid-cols-3 gap-7">
          {events.map((event) => (
            <li key={event.id} className="flex flex-col gap-3 cursor-pointer">
              <Image
                src={event.image}
                alt={event.name}
                className="w-full rounded-xl"
              />
              <span className="text-[#4C4C4C] flex gap-3 font-medium text-sm">
                <CalendarOutlined /> {event.time}
              </span>
              <span className="text-[#242424] font-medium text-base">
                {event.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Events;
