import { adminSummaryHeadings } from "@/lib/config";
import Link from "next/link";

export default function SummarySection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {adminSummaryHeadings.map((heading) => (
        <Link
          key={heading.name}
          href={heading.href}
          className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
            <heading.icon />
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
