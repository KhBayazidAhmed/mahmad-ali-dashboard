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

import { ServiceAndPricingItems } from "@/lib/config";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UserProps } from "@/lib/types";
import dbConnect from "@/lib/db/connection";
import UserModel from "@/lib/db/models/User.Model";
import { revalidatePath } from "next/cache";
import UserUpdateSubmitButton from "./UserUpdateSubmitButton";

export function AdminAllUserEditActions({ user }: { user: UserProps }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          Pricing
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            "use server";
            try {
              await dbConnect();
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const updatedFields: Record<string, any> = Object.fromEntries(
                formData.entries()
              );

              // Handle switches and ensure default values
              ServiceAndPricingItems.forEach((item) => {
                if (updatedFields[item.service]) {
                  updatedFields[item.service] =
                    updatedFields[item.service] === "on";
                } else {
                  updatedFields[item.service] = false; // Explicitly set to false
                }

                if (updatedFields[item.price]) {
                  updatedFields[item.price] = parseFloat(
                    updatedFields[item.price]
                  );
                }
              });

              // Update user data in the database
              await UserModel.updateOne(
                { _id: user?._id },
                { $set: updatedFields }
              );
              revalidatePath("/admin/users");
            } catch (error) {
              console.error("Failed to update user:", error);
              throw error;
            }
          }}
          className="grid gap-4 py-4"
        >
          <Card>
            <CardHeader>
              <CardTitle>Service Changes and Pricing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {ServiceAndPricingItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-3 rounded-md border p-4 "
                >
                  <Label className="flex items-center justify-between">
                    Current price: {user?.[item.price as keyof UserProps]}
                    Taka{" "}
                    <Switch
                      name={item.service}
                      defaultChecked={Boolean(
                        user?.[item.service as keyof UserProps]
                      )}
                    />
                  </Label>

                  <div className="flex items-center flex-row gap-2">
                    <Input
                      type="number"
                      name={item.price}
                      defaultValue={Number(
                        user?.[item.price as keyof UserProps]
                      )} // Set default value for price
                      placeholder={`${item.name} price`}
                    />
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Minimum Balance </Label>
                <Input
                  type="number"
                  name="minimumBalance"
                  placeholder="minimum balance"
                  defaultValue={user?.minimumBalance}
                />
              </div>
            </CardContent>
          </Card>
          <DialogFooter>
            <UserUpdateSubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
