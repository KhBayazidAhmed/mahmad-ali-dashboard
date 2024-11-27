"use client";
import { useEffect, useState } from "react";
export default function AdminTimeShowing() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="text-center">{time}</div>;
}
