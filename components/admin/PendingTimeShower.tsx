"use client";

import { formatRelativeTime } from "@/lib/helperFunction";
import { useEffect, useState } from "react";

export default function PendingTimeShower({ time }: { time: string }) {
  const [relativeTime, setRelativeTime] = useState<string>(() =>
    formatRelativeTime(new Date(time))
  );

  useEffect(() => {
    const updateRelativeTime = () => {
      setRelativeTime(formatRelativeTime(new Date(time)));
    };

    // Update immediately on mount
    updateRelativeTime();

    // Set interval to update every second
    const intervalId = setInterval(updateRelativeTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [time]);

  return <div>{relativeTime}</div>;
}
