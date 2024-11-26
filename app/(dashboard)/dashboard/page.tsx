import DashboardSummarySection from "@/components/DashboardSummarySection";
import DashboardFormSection from "@/components/DashboardFormSection";
import DashboardOrderData from "@/components/DashboardOrderData";

export default function Page() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <DashboardSummarySection />
      <div className="flex  flex-col lg:flex-row gap-6 mt-8">
        <DashboardFormSection />
        <div className=" flex-1 p-y-6">
          <DashboardOrderData />
        </div>
      </div>
    </div>
  );
}
