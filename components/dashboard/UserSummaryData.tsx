import dbConnect from "@/lib/db/connection";
import OrderModel from "@/lib/db/models/Order.Model";
import UserModel from "@/lib/db/models/User.Model";
import { unstable_cache } from "next/cache";
import React from "react";

export default async function UserSummaryData({
  data,
  params,
}: {
  data: {
    name: string;
    value: string;
  }[];
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(data);
  const getUserSummaryData = unstable_cache(
    async () => {
      await dbConnect();

      // Fetch user and orders
      const user = await UserModel.findById(id);
      const orders = await OrderModel.find({
        user: id,
        orderTime: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)), // Today's orders
        },
      });

      // Calculate today's order amount
      const todayOrderAmount = orders.length;

      // Calculate work summary
      const workSummary = orders.reduce(
        (summary, order) => {
          if (order.copyType === "sign_copy") summary.signCard += 1;
          if (order.copyType === "server_copy") summary.serverCard += 1;
          if (order.nidCopyPath) summary.nidCard += 1;
          return summary;
        },
        { signCard: 0, serverCard: 0, nidCard: 0 }
      );

      return {
        totalBalance: user.balance,
        stockBalance: user.balance,
        todayOrderAmount,
        ...workSummary,
      };
    },
    ["getUserSummaryData", `${id}`],
    { revalidate: 10 }
  );

  const summary = await getUserSummaryData();

  return (
    <div>
      <p>Total Balance: {summary.totalBalance}</p>
      <p>Today Order Amount: {summary.todayOrderAmount}</p>
      <p>Stock Balance: {summary.stockBalance}</p>
    </div>
  );
}
