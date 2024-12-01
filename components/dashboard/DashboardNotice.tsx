import dbConnect from "@/lib/db/connection";
import NoticeModel from "@/lib/db/models/Notice.Model";
import { Suspense } from "react";
type notice = {
  _id: string;
  content: string;
};

export default async function DashboardNotice() {
  return (
    <div className="my-3 bg-gray-100 dark:bg-gray-800 bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)] dark:from-[#0a0a0b] dark:via-[rgba(0,0,0,0)] dark:to-[#0a0a0b] py-2 overflow-hidden">
      <div className="relative flex animate-[scroll_30s_linear_infinite] sm:animate-[scroll_100s_linear_infinite] ">
        <div className="whitespace-nowrap text-gray-800 dark:text-gray-200"></div>
        <Suspense fallback={<span className="mx-4">Loading...</span>}>
          <Notices />
        </Suspense>
      </div>
    </div>
  );
}
async function Notices() {
  await dbConnect();
  const notice = await NoticeModel.find();
  return notice.map((notice: notice) => (
    <span key={notice._id} className="mx-4">
      {notice.content}
    </span>
  ));
}
