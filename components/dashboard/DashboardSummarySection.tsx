import OrderModel from "@/lib/db/models/Order.Model";
import UserModel from "@/lib/db/models/User.Model";
import { Suspense } from "react";
import { FaDollarSign, FaAddressCard, FaBitcoin } from "react-icons/fa";
import { Skeleton } from "../ui/skeleton";

// Income Summary Component
async function IncomeSummary({ userId }: { userId: string }) {
  const user = await UserModel.findById(userId);
  const totalBalance = user ? user.balance : 0;
  const todayOrders = await OrderModel.countDocuments({
    user: userId,
    orderTime: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
  });

  return (
    <div className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300">
      <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
        <FaDollarSign />
      </div>
      <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Income Summary
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Total balance: <span className="font-medium">{totalBalance}</span>
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Today order amount: <span className="font-medium">{todayOrders}</span>
      </div>
    </div>
  );
}

// Work Summary Component
async function WorkSummary({ userId }: { userId: string }) {
  const todaySignCard = await OrderModel.countDocuments({
    user: userId,
    copyType: "sign_copy",
    orderTime: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
  });

  const todayServerCart = await OrderModel.countDocuments({
    user: userId,
    copyType: "server_copy",
    orderTime: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
  });

  const todayNidCard = await OrderModel.countDocuments({
    user: userId,
    idType: "nid",
    orderTime: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
  });

  return (
    <div className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300">
      <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
        <FaAddressCard />
      </div>
      <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Work Summary
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Today Sign Card: <span className="font-medium">{todaySignCard}</span>
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Today Server Cart:{" "}
        <span className="font-medium">{todayServerCart}</span>
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Today Nid Card: <span className="font-medium">{todayNidCard}</span>
      </div>
    </div>
  );
}

// Recharge Component
async function RechargeSummary({ userId }: { userId: string }) {
  const user = await UserModel.findById(userId);
  const remainingBalance = user ? user.balance : 0;
  return (
    <div className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg transition-shadow duration-300">
      <div className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl mb-4">
        <FaBitcoin />
      </div>
      <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Recharge
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Remaining Balance:{" "}
        <span className="font-medium">{remainingBalance}</span>
      </div>
    </div>
  );
}

// Dashboard Summary Section
export default async function DashboardSummarySection({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Suspense fallback={<Loading />}>
        <IncomeSummary userId={userId} />
      </Suspense>
      <Suspense fallback={Loading()}>
        <WorkSummary userId={userId} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <RechargeSummary userId={userId} />
      </Suspense>
    </div>
  );
}
function Loading() {
  return (
    <div className="flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <Skeleton className="h-10 w-10 mb-4" />
      <Skeleton className="h-6 w-1/3 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />

      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
