import PendingTimeShower from "./PendingTimeShower";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import OrderModel from "@/lib/db/models/Order.Model";
import dbConnect from "@/lib/db/connection";
import { revalidatePath } from "next/cache";
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

export default async function AdminOrderPendingTableData() {
  await dbConnect();
  const adminPendingData = await OrderModel.find({ status: "pending" })
    .populate({
      path: "user",
      select: "name whatsapp email",
    })
    .exec();
  return (
    <TableBody className="text-nowrap">
      {adminPendingData.map((user: adminPendingData, index: number) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.idNumber}</TableCell>
          <TableCell>NID Copy</TableCell>
          <TableCell>{user.orderTime.toLocaleString()}</TableCell>
          <TableCell>{user.status}</TableCell>
          <TableCell>
            <PendingTimeShower time={user.orderTime.toLocaleString()} />
          </TableCell>
          <TableCell>{user.user.whatsapp || "-"}</TableCell>
          <TableCell>{user.user.name}</TableCell>
          <TableCell className="flex justify-end">
            <form
              action={async () => {
                "use server";
                await dbConnect();
                await OrderModel.updateOne(
                  { _id: user._id },
                  { $set: { status: "done" } }
                );
                revalidatePath("/admin");
              }}
            >
              <AdminPendingDataSubmitButton name={"Done"} />
            </form>
            <form
              action={async () => {
                "use server";
                await dbConnect();
                await OrderModel.deleteOne({ _id: user._id });
                revalidatePath(`/dashboard/${user.user._id}`);
                revalidatePath("/admin");
              }}
            >
              <AdminPendingDataSubmitButton name={"Delete"} />
            </form>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}