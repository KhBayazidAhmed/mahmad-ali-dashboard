import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AdminOrderPendingTableData from "./AdminOrderPendingTableData";
import { Suspense } from "react";
import AdminTableDataLoadingSkeleton from "./AdminTableDataLoadingSkeleton";

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
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <Suspense fallback={<AdminTableDataLoadingSkeleton />}>
          <AdminOrderPendingTableData />
        </Suspense>
      </Table>
    </div>
  );
}
