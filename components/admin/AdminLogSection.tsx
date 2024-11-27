import { logsDemo } from "@/lib/demoData";
import React from "react";
const levelStyles = {
  Info: "text-blue-500 border-blue-500",
  Warning: "text-yellow-500 border-yellow-500",
  Error: "text-red-500 border-red-500",
};

export default function AdminLogSection() {
  return (
    <section className="mt-12">
      <h2 className="md:text-2xl text-xl font-bold mb-4">Recent Logs</h2>
      <div className=" shadow-md rounded-lg overflow-hidden">
        <ul>
          {logsDemo.map((log) => (
            <li
              key={log.id}
              className={`px-4 rounded-sm my-2 py-3 flex justify-between items-center border ${
                levelStyles[log.level]
              } `}
            >
              <div className="flex items-center gap-3">
                {/* Level Badge */}
                <span
                  className={`px-2 py-1 w-24 text-center text-xs font-medium border rounded-full ${
                    levelStyles[log.level]
                  }`}
                >
                  {log.level}
                </span>
                {/* Log Message */}
                <span className=" text-sm">{log.message}</span>
              </div>
              {/* Time */}
              <span className="text-xs text-gray-500">{log.time}</span>
            </li>
          ))}
          <li>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Showing 1 to 10 of 100
              </span>
              <button className="text-xs text-gray-500">View More</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
