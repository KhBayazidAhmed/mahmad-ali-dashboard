import AdminLogSection from "@/components/AdminLogSection";
import SummarySectionAdmin from "@/components/SummarySectionAdmin";

// Mock data for logs with levels

export default function Dashboard() {
  // Define styles for each log level

  return (
    <main className="container mx-auto mt-8 px-4">
      {/* Summary Cards */}
      <SummarySectionAdmin />

      {/* Logs Section */}
      <AdminLogSection />
    </main>
  );
}
