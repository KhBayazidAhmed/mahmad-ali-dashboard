import { FaBitcoin, FaDollarSign, FaAddressCard } from "react-icons/fa";
import Link from "next/link";

const summaryHeadings = [
  {
    name: "Income summary",
    data: [
      {
        name: "Total balance",
        value: "100",
      },
      {
        name: "Today order amount",
        value: "10",
      },
      {
        name: "Stock Balance",
        value: "10",
      },
    ],
    href: "/dashboard/income",
    icon: <FaDollarSign />,
  },
  {
    name: "Work Summary",
    data: [
      {
        name: "Today Sign Card",
        value: "100",
      },
      {
        name: "Today Server Cart",
        value: "10",
      },
      {
        name: "Today Nid card",
        value: "10",
      },
    ],
    href: "/admin/total-income",
    icon: <FaAddressCard />,
  },
  {
    name: "Recharge",
    data: [
      {
        name: "Remaining Balance",
        value: "100",
      },
    ],
    href: "/admin/demo-heading",
    icon: <FaBitcoin />,
  },
];

export default function DashboardSummarySection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {summaryHeadings.map((heading) => (
        <Link
          key={heading.name}
          href={heading.href}
          className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
            {heading.icon}
          </div>
          <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {heading.name}
          </div>
          {heading.data?.map((data) => (
            <div
              key={data.name}
              className="text-sm md:text-base text-gray-600 dark:text-gray-400"
            >
              {data.name}: <span className="font-medium">{data.value}</span>
            </div>
          ))}
        </Link>
      ))}
    </div>
  );
}
