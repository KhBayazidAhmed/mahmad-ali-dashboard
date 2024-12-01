import DashboardSummarySection from "@/components/dashboard/DashboardSummarySection";
import DashboardFormSection from "@/components/dashboard/DashboardFormSection";
import DashboardOrderData from "@/components/dashboard/DashboardOrderData";
import DashboardNotice from "@/components/dashboard/DashboardNotice";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="container mx-auto mt-8 px-4">
      <DashboardNotice />
      <DashboardSummarySection />
      <div className="flex  flex-col lg:flex-row gap-6 mt-8">
        <DashboardFormSection />
        <div className=" flex-1 p-y-6">
          <DashboardOrderData params={params} />
        </div>
      </div>
    </div>
  );
}
