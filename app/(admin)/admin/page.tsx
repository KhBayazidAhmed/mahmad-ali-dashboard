import Link from "next/link";
import { FaUsers, FaDollarSign, FaChartBar } from "react-icons/fa";

const summaryHeadings = [
  {
    name: "Users",
    href: "/admin/users",
    icon: <FaUsers />,
  },
  {
    name: "Total Income",
    href: "/admin/total-income",
    icon: <FaDollarSign />,
  },
  {
    name: "Demo Heading",
    href: "/admin/demo-heading",
    icon: <FaChartBar />,
  },
];
type Log = {
  id: number;
  message: string;
  level: "Info" | "Warning" | "Error";
  time: string;
};
// Mock data for logs with levels
const logs: Log[] = [
  {
    id: 1,
    message: "Nid  Successfully created.",
    level: "Info",
    time: "2024-11-26 10:45 AM",
  },
  {
    id: 2,
    message: "Signature copy created successfully.",
    level: "Info",
    time: "2024-11-26 09:30 AM",
  },
  {
    id: 3,
    message: "Nid found name od the nid 1313114141.",
    level: "Warning",
    time: "2024-11-25 06:00 PM",
  },
  {
    id: 4,
    message: "Failed login attempt by user.",
    level: "Error",
    time: "2024-11-25 03:15 PM",
  },
];

export default function Dashboard() {
  // Define styles for each log level
  const levelStyles = {
    Info: "text-blue-500 border-blue-500",
    Warning: "text-yellow-500 border-yellow-500",
    Error: "text-red-500 border-red-500",
  };

  return (
    <main className="container mx-auto mt-8 px-4">
      {/* Summary Cards */}
      <div className="md:text-3xl text-xl font-bold mb-6">Admin Dashboard</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {summaryHeadings.map((heading) => (
          <Link
            key={heading.name}
            href={heading.href}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border"
          >
            <div className="text-blue-600 text-3xl mb-4">{heading.icon}</div>
            <div className="text-lg font-medium text-gray-700">
              {heading.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Logs Section */}
      <section className="mt-12">
        <h2 className="md:text-2xl text-xl font-bold mb-4">Recent Logs</h2>
        <div className=" shadow-md rounded-lg overflow-hidden">
          <ul>
            {logs.map((log) => (
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
                  <span className="text-white text-sm">{log.message}</span>
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
    </main>
  );
}
