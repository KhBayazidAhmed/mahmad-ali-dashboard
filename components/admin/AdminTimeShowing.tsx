"use client";

import { useEffect, useState } from "react";

export default function AdminTimeShowing() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long", // Correct literal type
        year: "numeric",
        month: "long", // Correct literal type
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(now.toLocaleString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-5 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 text-white py-6 px-4 rounded-lg shadow-lg">
      <p className="text-2xl font-semibold tracking-wide">{time}</p>
    </div>
  );
}
