import dbConnect from "@/lib/db/connection";
import OrderModel from "@/lib/db/models/Order.Model";
import TransitionModel from "@/lib/db/models/Transition.model";
import UserModel from "@/lib/db/models/User.Model";
import Link from "next/link";
import { Suspense } from "react";
import { FaUsers, FaDollarSign, FaChartBar } from "react-icons/fa";

export default async function SummarySection() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
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
          <Suspense fallback={<Loading />}>
            <TotalUsers />
          </Suspense>
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
          <Suspense fallback={<Loading />}>
            <TotalIncome />
          </Suspense>
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
          <Suspense fallback={<Loading />}>
            <TodayOrders />
          </Suspense>
        </div>
      </Link>
    </div>
  );
}
function Loading() {
  return <div className="bg-gray-300 dark:bg-gray-600 h-5 w-36 rounded"></div>;
}
async function TotalIncome() {
  await dbConnect();

  const todayIncome = await TransitionModel.countDocuments({
    createdAt: {
      $gte: new Date(new Date().setHours(0, 0, 0, 0)), // Today's orders
    },
  });
  return (
    <>
      Today Income: <span className="font-medium">{todayIncome}</span>
    </>
  );
}
async function TodayOrders() {
  await dbConnect();

  const todayOrders = await OrderModel.countDocuments({
    createdAt: {
      $gte: new Date(new Date().setHours(0, 0, 0, 0)), // Today's orders
    },
  });
  return (
    <>
      Today Total Orders: <span className="font-medium">{todayOrders}</span>
    </>
  );
}
async function TotalUsers() {
  await dbConnect();

  const totalUsers = await UserModel.countDocuments();
  return (
    <>
      Total Users: <span className="font-medium">{totalUsers}</span>
    </>
  );
}
