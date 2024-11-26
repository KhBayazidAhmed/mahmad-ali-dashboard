import { FaDownload } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const order = [
  {
    id: 1,
    formNumber: "1234567890",
    status: "Pending",
    deliveryTime: "2024-11-26 10:45 AM",
  },
  {
    id: 2,
    formNumber: "1234567890",
    status: "Pending",
    deliveryTime: "2024-11-26 10:45 AM",
  },
];
export default function UserTable() {
  return (
    <div className="rounded-md border text-center">
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Id</TableHead>
            <TableHead className="text-center">Number </TableHead>
            <TableHead className="text-center">Order Time </TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Delivery Time</TableHead>
            <TableHead className="text-center">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-nowrap">
          {order.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.formNumber}</TableCell>
              <TableCell>{user.deliveryTime}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.deliveryTime}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  <FaDownload />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
