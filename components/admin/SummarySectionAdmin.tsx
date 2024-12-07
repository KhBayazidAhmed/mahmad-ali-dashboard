import dbConnect from "@/lib/db/connection";
import OrderModel from "@/lib/db/models/Order.Model";
import TransitionModel from "@/lib/db/models/Transition.model";
import UserModel from "@/lib/db/models/User.Model";
import Link from "next/link";
import { FaUsers, FaDollarSign, FaChartBar } from "react-icons/fa";

async function fetchData() {
  await dbConnect();

  // Fetch data
  const totalUsers = await UserModel.countDocuments();
  const todayIncome = await TransitionModel.countDocuments({
    createdAt: {
      $gte: new Date(new Date().setHours(0, 0, 0, 0)), // Today's orders
    },
  }); // Replace with dynamic income logic if needed
  const todayOrders = await OrderModel.countDocuments({
    createdAt: {
      $gte: new Date(new Date().setHours(0, 0, 0, 0)), // Today's orders
    },
  });

  return { totalUsers, todayIncome, todayOrders };
}

export default async function SummarySection() {
  const { totalUsers, todayIncome, todayOrders } = await fetchData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-9 lg:grid-cols-3 gap-6">
      {/* Users Section */}
      <Link
        href="/ma/users"
        className="flex flex-col items-center border border-blue-600 dark:border-white rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300"
      >
        <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
          <FaUsers />
        </div>
        <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Users
        </div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Total Users: <span className="font-medium">{totalUsers}</span>
        </div>
      </Link>

      {/* Total Income Section */}
      <Link
        href="/ma/total-income"
        className="flex flex-col items-center border border-blue-600 dark:border-white rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300"
      >
        <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
          <FaDollarSign />
        </div>
        <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Total Income
        </div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Today Income: <span className="font-medium">{todayIncome}</span>
        </div>
      </Link>

      {/* Analytics Section */}
      <Link
        href="/ma/Analytics"
        className="flex flex-col items-center border border-blue-600 dark:border-white rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300"
      >
        <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
          <FaChartBar />
        </div>
        <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Analytics
        </div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Today Total Orders: <span className="font-medium">{todayOrders}</span>
        </div>
      </Link>
    </div>
  );
}
