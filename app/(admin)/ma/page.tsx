import AdminPendingOrderTable from "@/components/admin/AdminPendingOrderTable";
import AdminTimeShowing from "@/components/admin/AdminTimeShowing";
import SummarySectionAdmin from "@/components/admin/SummarySectionAdmin";

export default function Dashboard() {
  return (
    <main className="container mx-auto space-y-12 space-x-4 mt-8 px-4">
      {/* Summary Cards */}
      <SummarySectionAdmin />
      <AdminTimeShowing />
      <div>
        <h1 className="text-2xl font-bold my-4">Pending Orders</h1>
        <AdminPendingOrderTable />
      </div>
    </main>
  );
}
