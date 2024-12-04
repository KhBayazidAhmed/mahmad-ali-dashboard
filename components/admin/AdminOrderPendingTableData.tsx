import PendingTimeShower from "./PendingTimeShower";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import OrderModel from "@/lib/db/models/Order.Model";
import dbConnect from "@/lib/db/connection";
import { revalidatePath, unstable_cache } from "next/cache";
import AdminPendingDataSubmitButton from "./AdminPendingDataSubmitButton";
type adminPendingData = {
  _id: string; // MongoDB ObjectId as a string
  status: string; // The status of the order
  idNumber: string; // A unique identifier for the order
  name: string; // Name associated with the order
  note: string; // Any additional note
  orderTime: Date; // ISO date string for the order time
  idType: string; // Type of ID, e.g., NId_No
  copyType: string; // Type of copy, e.g., sign_copy
  user: {
    _id: string; // MongoDB ObjectId as a string for the user
    name: string; // Name of the user
    email: string; // Email of the user
    whatsapp: string; // WhatsApp number of the user
  };
};
const adminPendingData = unstable_cache(
  async () => {
    await dbConnect();
    const orders = await OrderModel.find({ status: "pending" })
      .populate({
        path: "user",
        select: "name whatsapp email",
      })
      .exec();

    const data = orders
      .filter((order) => order.user) // Filter out invalid orders
      .map((order) => ({
        ...order.toObject(),
        _id: order._id.toString(),
        user: {
          ...order.user.toObject(),
          _id: order.user._id.toString(),
        },
      }));
    return data;
  },
  ["adminPendingData"],
  { revalidate: 10 }
);

export default async function AdminOrderPendingTableData() {
  const adminOrderData = await adminPendingData();
  return (
    <TableBody className="text-nowrap">
      {adminOrderData.map((user: adminPendingData, index: number) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.idNumber}</TableCell>
          <TableCell>NID Copy</TableCell>
          <TableCell>
            {new Date(user.orderTime).toLocaleString("en-US", {
              timeZone: "Asia/Dhaka",
            })}
          </TableCell>
          <TableCell>{user.status}</TableCell>
          <TableCell>
            <PendingTimeShower
              time={new Date(user.orderTime).toLocaleString("en-US", {
                timeZone: "Asia/Dhaka",
              })}
            />
          </TableCell>
          <TableCell>{user.user.whatsapp || "-"}</TableCell>
          <TableCell>{user.user.name}</TableCell>
          <TableCell className="flex justify-center">
            <form
              action={async () => {
                "use server";
                await dbConnect();
                await OrderModel.updateOne(
                  { _id: user._id.toString() },
                  { $set: { status: "done", deliveryTime: new Date() } }
                );
                revalidatePath("/ma");
              }}
            >
              <AdminPendingDataSubmitButton name={"Done"} />
            </form>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
