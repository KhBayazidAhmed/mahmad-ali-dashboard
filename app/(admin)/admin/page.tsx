import AdminPendingOrderTable from "@/components/AdminPendingOrderTable";
import AdminTimeShowing from "@/components/AdminTimeShowing";
import SummarySectionAdmin from "@/components/SummarySectionAdmin";

export default function Dashboard() {
  return (
    <main className="container mx-auto space-y-12 mt-8 px-4">
      {/* Summary Cards */}
      <SummarySectionAdmin />
      <div>
        <AdminTimeShowing />
        <h1 className="text-2xl font-bold my-4">Pending Orders</h1>
        <AdminPendingOrderTable />
      </div>
    </main>
  );
}
