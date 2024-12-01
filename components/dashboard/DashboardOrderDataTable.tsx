import { FaDownload, FaRegEye, FaEdit } from "react-icons/fa";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import dbConnect from "@/lib/db/connection";
import OrderModel from "@/lib/db/models/Order.Model";
import { unstable_cache } from "next/cache";

type userOrderData = {
  id: string;
  status: string;
  idNumber: string;
  name: string;
  deliveryTime?: Date;
  idType: string;
  note: string;
  orderTime: Date;
};

export default async function DashboardOrderDataTable({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const getOrderData = unstable_cache(
    async (id: string) => {
      await dbConnect();
      const orderData = (await OrderModel.find({ user: id })
        .sort({
          createdAt: -1,
        })
        .limit(10)) as userOrderData[];
      return orderData;
    },
    [id]
  );
  const orderData = await getOrderData(id);
  return (
    <TableBody className="text-nowrap">
      {orderData.map((user, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{user.idNumber}</TableCell>
          <TableCell>{new Date(user.orderTime).toLocaleString()}</TableCell>
          <TableCell>{user.status}</TableCell>
          <TableCell>
            {user.deliveryTime
              ? new Date(user.deliveryTime).toLocaleString()
              : "Not Delivered"}
          </TableCell>
          <TableCell>
            <Button
              disabled={!user.deliveryTime}
              variant="outline"
              size="sm"
              className="mr-2"
            >
              <FaDownload />
            </Button>
            <Button
              disabled={!user.deliveryTime}
              variant="outline"
              size="sm"
              className="mr-2"
            >
              <FaRegEye />
            </Button>
          </TableCell>
          <TableCell>
            <Button
              disabled={!user.deliveryTime}
              variant="outline"
              size="sm"
              className="mr-2"
            >
              <FaDownload />
            </Button>
            <Button
              disabled={!user.deliveryTime}
              variant="outline"
              size="sm"
              className="mr-2"
            >
              <FaRegEye />
            </Button>
            <Button
              disabled={!user.deliveryTime}
              variant="outline"
              size="sm"
              className="mr-2"
            >
              <Link href={`/dashboard/${id}/nid-edit`}>
                <FaEdit />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={7}>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}