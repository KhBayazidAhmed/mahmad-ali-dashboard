import AdminPendingOrderTable from "@/components/admin/AdminPendingOrderTable";
import AdminTimeShowing from "@/components/admin/AdminTimeShowing";
import SummarySectionAdmin from "@/components/admin/SummarySectionAdmin";
// import { Suspense } from "react";

export default function Dashboard() {
  return (
    <main className="container mx-auto space-y-12 space-x-4 mt-8 px-4">
      {/* Summary Cards */}
      {/* <Suspense fallback={<SkeletonSummary />}> */}
      <SummarySectionAdmin />
      {/* </Suspense> */}
      <AdminTimeShowing />
      <div>
        <h1 className="text-2xl font-bold my-4">Pending Orders</h1>
        <AdminPendingOrderTable />
      </div>
    </main>
  );
}
// export function SkeletonSummary() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 mb-9 lg:grid-cols-3 gap-6">
//       <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard />
//     </div>
//   );
// }
// function SkeletonCard() {
//   return (
//     <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 animate-pulse">
//       <div className="bg-gray-300 dark:bg-gray-600 h-12 w-12 rounded-full mb-4"></div>
//       <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded mb-2"></div>
//       <div className="bg-gray-300 dark:bg-gray-600 h-4 w-32 rounded"></div>
//     </div>
//   );
// }
