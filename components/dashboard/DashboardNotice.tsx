import React from "react";

export default function DashboardNotice() {
  return (
    <div className="my-3 bg-gray-100 dark:bg-gray-800 bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)] dark:from-[#0a0a0b] dark:via-[rgba(0,0,0,0)] dark:to-[#0a0a0b] py-2 overflow-hidden">
      <div className="relative flex animate-[scroll_30s_linear_infinite] sm:animate-[scroll_100s_linear_infinite] ">
        <div className="whitespace-nowrap text-gray-800 dark:text-gray-200">
          <span className="mx-4">
            📢 Special Offer: Get 20% off until November 30th!
          </span>
          <span className="mx-4">
            🎉 New Features Coming Soon – Stay Tuned!
          </span>
          <span className="mx-4">
            🚀 Exclusive Discount for Premium Members!
          </span>
          <span className="mx-4">
            📢 Special Offer: Get 20% off until November 30th!
          </span>
          <span className="mx-4">
            🎉 New Features Coming Soon – Stay Tuned!
          </span>
          <span className="mx-4">
            🚀 Exclusive Discount for Premium Members!
          </span>
        </div>
      </div>
    </div>
  );
}
