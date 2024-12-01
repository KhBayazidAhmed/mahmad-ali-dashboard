import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import DashboardOrderDataTable from "./DashboardOrderDataTable";
import { Suspense } from "react";
import DashboardOrderLoading from "./DashboardOrderLoading";

export default async function DashboardOrderData({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
            <TableHead className="text-center">
              Sign Copy / Server Copy
            </TableHead>
            <TableHead className="text-center">NID Copy</TableHead>
          </TableRow>
        </TableHeader>
        <Suspense fallback={<DashboardOrderLoading />}>
          <DashboardOrderDataTable params={params} />
        </Suspense>
      </Table>
    </div>
  );
}
