import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ServiceAndPricingItems } from "@/lib/config";
import { noticeDemo, offersDemo } from "@/lib/demoData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
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

            <Button variant="destructive" className="w-full">
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

          <div className="space-y-4">
            <Input type="text" placeholder="Notice Title" />
            <Textarea placeholder="Notice Content" />
            <Button variant="outline" className="w-full">
              Add Offer
            </Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {noticeDemo.map((notice, index) => (
            <AccordionItem value={notice.name} key={index}>
              <AccordionTrigger
                className={`${notice.running && "text-blue-600"}`}
              >
                {notice.name} {notice.running && "notice is running"}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">
                  {notice.content}
                  <Button variant="secondary" className="w-full my-3">
                    {notice.running ? "End" : "Start"}
                  </Button>
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
