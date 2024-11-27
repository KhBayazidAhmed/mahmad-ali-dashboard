import AdminPendingOrderTable from "@/components/AdminPendingOrderTable";
import SummarySectionAdmin from "@/components/SummarySectionAdmin";

// Mock data for logs with levels

export default function Dashboard() {
  // Define styles for each log level

  return (
    <main className="container mx-auto space-y-12 mt-8 px-4">
      {/* Summary Cards */}
      <SummarySectionAdmin />
      <div>
        <h1 className="text-2xl font-bold my-4">Pending Orders</h1>
        <AdminPendingOrderTable />
      </div>
    </main>
  );
}
