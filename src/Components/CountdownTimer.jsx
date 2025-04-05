"use client"; // If you're using App Router

import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <ol className="flex gap-3 items-center justify-center">
      <li class="border-[2px] border-[#dde1e4] rounded-[6px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] bg-[#e7ebee] flex flex-col items-center justify-center px-6 py-4 gap-1">
        <span className="font-semibold text-2xl text-[#171B1C]">
          {timeLeft.days}
        </span>
        <span className="text-[#75797C] font-medium text-sm">DAYS</span>
      </li>
      <li class="border-[2px] border-[#dde1e4] rounded-[6px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] bg-[#e7ebee] flex flex-col items-center justify-center px-6 py-4 gap-1">
        <span className="font-semibold text-2xl text-[#171B1C]">
          {timeLeft.hours}
        </span>
        <span className="text-[#75797C] font-medium text-sm">HRS</span>
      </li>
      <li class="border-[2px] border-[#dde1e4] rounded-[6px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] bg-[#e7ebee] flex flex-col items-center justify-center px-6 py-4 gap-1">
        <span className="font-semibold text-2xl text-[#171B1C]">
          {timeLeft.minutes}
        </span>
        <span className="text-[#75797C] font-medium text-sm">MINS</span>
      </li>
      <li class="border-[2px] border-[#dde1e4] rounded-[6px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)] bg-[#e7ebee] flex flex-col items-center justify-center px-6 py-4 gap-1">
        <span className="font-semibold text-2xl text-[#171B1C]">
          {timeLeft.seconds}
        </span>
        <span className="text-[#75797C] font-medium text-sm">SEC</span>
      </li>
    </ol>
  );
}
