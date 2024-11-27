import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ServiceAndPricingItems } from "@/lib/config";

export function AdminAllUserEditActions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Card>
          <CardHeader>
            <CardTitle>Service Changes and Pricing</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {ServiceAndPricingItems.map((heading, index) => (
              <div
                key={index}
                className="flex flex-col space-y-3 rounded-md border p-4 "
              >
                <Label className="flex items-center justify-between">
                  Current price : {10} Taka <Switch />
                </Label>
                <div className="flex  items-center flex-row gap-2">
                  <Input type="number" placeholder={` ${heading} price`} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
