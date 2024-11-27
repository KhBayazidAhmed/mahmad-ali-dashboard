"use client";
import { formatRelativeTime } from "@/lib/helperFunction";
import { useEffect, useState } from "react";

export default function PendingTimeShower({ time }: { time: string }) {
  const [timeShower, setTimeShower] = useState(
    formatRelativeTime(new Date(time))
  );

  useEffect(() => {
    const updateTime = () => {
      setTimeShower(formatRelativeTime(new Date(time)));
    };

    updateTime(); // Update immediately on mount
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [time]); // Re-run effect if `time` changes

  return <div>{timeShower}</div>;
}
