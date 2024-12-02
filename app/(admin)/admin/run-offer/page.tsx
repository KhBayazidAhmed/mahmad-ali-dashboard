import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ServiceAndPricingItems } from "@/lib/config";
import { offersDemo } from "@/lib/demoData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NoticeForm from "@/components/admin/NoticeForm";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import NoticeModel from "@/lib/db/models/Notice.Model";
import dbConnect from "@/lib/db/connection";
import NoticeRunningFormSubmit from "@/components/admin/NoticeRunningFormSubmit";
import NoticeDeleteSubmitButton from "@/components/admin/NoticeDeleteSubmitButton";
type Notice = {
  _id: string;
  title: string;
  running: boolean;
  content: string;
};
const getAllNotices = unstable_cache(async () => {
  await dbConnect();
  const notices = await NoticeModel.find();

  return notices;
}, ["all notices"]);
export default async function Page() {
  const notices = await getAllNotices();
  return (
    <div className="p-6 bg-background flex flex-wrap justify-around gap-6">
      <div className="w-full sm:w-1/2 lg:w-1/3 space-y-6">
        {/* Add New Offer Section */}
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Add New Offer
          </h3>
          <div className="space-y-4">
            {ServiceAndPricingItems.map((heading, index) => (
              <div key={index} className="rounded-md border p-4 space-y-3">
                <Label className="block">Current price: 10 Taka</Label>
                <Input type="number" placeholder={`${heading} price`} />
              </div>
            ))}

            <Button variant="secondary" className="w-full">
              Add Offer
            </Button>
          </div>
        </div>

        {/* Display Offers Section */}
        {offersDemo.map((offer, index) => (
          <div
            key={index}
            className={`rounded-lg border p-4 flex items-start justify-between gap-3 ${
              offer.running
                ? "bg-red-500 text-red-100 shadow"
                : "bg-card text-card-foreground shadow"
            }`}
          >
            <div>
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm">{offer.description}</p>
            </div>
            <Button variant={offer.running ? "secondary" : "destructive"}>
              {offer.running ? "End" : "Start"}
            </Button>
          </div>
        ))}
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 space-y-6">
        {/* Add New Notice Board Section */}
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Add New Notice
          </h3>

          <NoticeForm />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {notices.map((notice: Notice, index) => (
            <AccordionItem value={notice._id.toString()} key={index}>
              <AccordionTrigger
                className={`${notice.running && "text-red-600"}`}
              >
                {notice.title} {notice.running && "notice is running"}
              </AccordionTrigger>
              <AccordionContent>
                <form
                  action={async () => {
                    "use server";
                    await dbConnect();
                    await NoticeModel.findByIdAndUpdate(notice._id.toString(), {
                      running: !notice.running,
                    });
                    revalidateTag("notices");
                    revalidatePath("/admin/run-offer");
                  }}
                >
                  <p className="text-sm">
                    {notice.content}
                    <NoticeRunningFormSubmit running={notice.running} />
                  </p>
                </form>
                <form
                  action={async () => {
                    "use server";
                    await dbConnect();
                    await NoticeModel.findByIdAndDelete(notice._id.toString());
                    revalidateTag("notices");
                    revalidatePath("/admin/run-offer");
                  }}
                >
                  <p className="text-sm">
                    <NoticeDeleteSubmitButton />
                  </p>
                </form>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
