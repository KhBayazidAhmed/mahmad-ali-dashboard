import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orderPendingDataDemo } from "@/lib/demoData";
import { formatRelativeTime } from "@/lib/helperFunction";
export default function AdminPendingOrderTable() {
  return (
    <div className="rounded-md border text-center">
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Id</TableHead>
            <TableHead className="text-center">Number </TableHead>
            <TableHead className="text-center">Order Type </TableHead>
            <TableHead className="text-center">Order Time </TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Pending Time</TableHead>
            <TableHead className="text-center">User WhatsApp</TableHead>
            <TableHead className="text-center">User Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-nowrap">
          {orderPendingDataDemo.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.formNumber}</TableCell>
              <TableCell>NID Copy</TableCell>
              <TableCell>{user.orderTime}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                {formatRelativeTime(new Date(user.orderTime))}
              </TableCell>
              <TableCell>{user.formNumber}</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
