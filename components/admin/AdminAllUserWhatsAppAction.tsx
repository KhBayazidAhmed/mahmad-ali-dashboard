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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import dbConnect from "@/lib/db/connection";
import UserModel from "@/lib/db/models/User.Model";
import { UserProps } from "@/lib/types";
import { revalidatePath } from "next/cache";
import UserWhatsAppSubmitButton from "./UserWhatsAppSubmitButton";

export default function AdminAllUserWhatsAppAction({
  user,
}: {
  user: UserProps;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          WhatsApp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (formData: FormData) => {
            "use server";
            const number = formData.get("number");
            const whatsappService = formData.get("whatsapp-service");

            try {
              await dbConnect();
              await UserModel.findOneAndUpdate(
                { _id: user._id },
                {
                  whatsapp: number,
                  whatsappService: whatsappService === "on", // Convert the switch state to boolean
                }
              );
              revalidatePath("/admin/users");
              console.log("WhatsApp updated successfully");
            } catch (error) {
              console.log(error);
              throw error;
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>WhatsApp</DialogTitle>
            <DialogDescription>
              Add WhatsApp to this user. Turn on or off WhatsApp service.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="number">WhatsApp Number</Label>
              <Input
                id="number"
                type="number"
                name="number"
                defaultValue={user?.whatsapp} // Set default number
                className="col-span-3"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                name="whatsapp-service"
                id="whatsapp-service"
                defaultChecked={user?.whatsappService ?? false} // Use the user's current service status
              />
              <Label htmlFor="whatsapp-service">Whatsapp Service</Label>
            </div>
          </div>
          <DialogFooter>
            <UserWhatsAppSubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
