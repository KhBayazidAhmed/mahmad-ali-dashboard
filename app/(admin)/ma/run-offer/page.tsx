import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { ServiceAndPricingItems } from "@/lib/config";
// import { offersDemo } from "@/lib/demoData";
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
import OfferModel from "@/lib/db/models/Offer.Model";
import OfferAddingButton from "@/components/admin/OfferAddingButton";
import OfferRunStartStopSubmitButton from "@/components/admin/OfferRunStartStopSubmitButton";

type Notice = {
  _id: string;
  title: string;
  running: boolean;
  content: string;
};

const getAllNotices = unstable_cache(
  async () => {
    await dbConnect();
    const notices = await NoticeModel.find();
    return notices;
  },
  ["all notices"],
  { revalidate: 10 }
);

export default async function Page() {
  const notices = await getAllNotices();
  const offers = await OfferModel.find();
  return (
    <div className="p-6 bg-background">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add New Offer Section */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Add New Offer
          </h3>
          <OfferForm />
          {/* Display Offers Section */}
          {offers.map((offer, index) => (
            <div className="rounded-lg border p-4 my-4 " key={offer._id}>
              <form
                key={index}
                action={async () => {
                  "use server";
                  await dbConnect();
                  await OfferModel.findOneAndUpdate(
                    {
                      running: true,
                    },
                    {
                      running: false,
                    }
                  );
                  await OfferModel.findByIdAndUpdate(offer._id, {
                    running: !offer.running,
                  });
                  revalidatePath("/ma/run-offer");
                }}
              >
                <div
                  className={` p-4 my-4 flex flex-col gap-3 ${
                    offer.running
                      ? "bg-red-500 text-red-100 shadow"
                      : "bg-card text-card-foreground shadow"
                  }`}
                >
                  <div>
                    <h2 className="text-lg font-semibold">{offer.title}</h2>
                    <p className="text-sm">{offer.description}</p>
                  </div>
                  <OfferRunStartStopSubmitButton running={offer.running} />
                </div>
              </form>
              <form
                action={async () => {
                  "use server";
                  await dbConnect();
                  await OfferModel.findByIdAndDelete(offer._id);
                  revalidatePath("/ma/run-offer");
                }}
              >
                <NoticeDeleteSubmitButton />
              </form>
            </div>
          ))}
        </div>

        {/* Add New Notice Board Section */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Add New Notice
          </h3>
          <NoticeForm />
          <Accordion type="single" collapsible className="w-full">
            {notices.map((notice: Notice, index) => (
              <AccordionItem value={notice._id.toString()} key={index}>
                <AccordionTrigger
                  className={`${notice.running && "text-red-600"}`}
                >
                  {notice.title} {notice.running && "(Running)"}
                </AccordionTrigger>
                <AccordionContent>
                  <form
                    action={async () => {
                      "use server";
                      await dbConnect();
                      await NoticeModel.findByIdAndUpdate(
                        notice._id.toString(),
                        { running: !notice.running }
                      );
                      revalidateTag("notices");
                      revalidatePath("/ma/run-offer");
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
                      await NoticeModel.findByIdAndDelete(
                        notice._id.toString()
                      );
                      revalidateTag("notices");
                      revalidatePath("/ma/run-offer");
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

        {/* Custom Message and Announcement Section */}
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Custom Message and Announcement
          </h3>
          <form action={""} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter a custom message or announcement"
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
            <Button variant="destructive" type="submit" className="w-full">
              Today Accounts Close
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
async function OfferForm() {
  await dbConnect();
  const offer = await OfferModel.findOne({
    running: true,
  });
  return (
    <div className="space-y-4">
      <form
        action={async (FormData: FormData) => {
          "use server";
          await dbConnect();
          const signCopyPrice = FormData.get("signCopyPrice");
          const serverCopyPrice = FormData.get("serverCopyPrice");
          const title = FormData.get("title");
          const newOffer = await OfferModel.create({
            signCopyPrice,
            serverCopyPrice,
            title,
            running: false,
          });
          newOffer.save();
          revalidatePath("/ma/run-offer");
        }}
        className="space-y-4"
      >
        <div className="rounded-md border p-4 space-y-3">
          <Label className="block">Title</Label>
          <Input name="title" type="text" required placeholder="Offer Title" />
        </div>

        <div className="rounded-md border p-4 space-y-3">
          <Label className="block">
            Current price Sign Copy : {offer?.signCopyPrice || "no offer"} Taka
          </Label>
          <Input
            name="signCopyPrice"
            type="number"
            required
            placeholder="Sign Copy price"
          />
        </div>

        <div className="rounded-md border p-4 space-y-3">
          <Label className="block">
            Current price Server Copy : {offer?.serverCopyPrice || "no offer"}{" "}
            Taka
          </Label>
          <Input
            name="serverCopyPrice"
            type="number"
            required
            placeholder="Server price"
          />
        </div>

        <OfferAddingButton name="Adding Offer" />
      </form>
    </div>
  );
}
