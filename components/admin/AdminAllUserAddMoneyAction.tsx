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
import dbConnect from "@/lib/db/connection";
import UserModel from "@/lib/db/models/User.Model";
import { UserProps } from "@/lib/types";
import { revalidatePath, revalidateTag } from "next/cache";

export default function AdminAllUserAddMoneyAction({
  user,
}: {
  user: UserProps;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          Add Money
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (formData: FormData) => {
            "use server";
            const amount = formData.get("amount");
            try {
              await dbConnect();
              await UserModel.findOneAndUpdate(
                { _id: user._id },
                { balance: user.balance + Number(amount) }
              );
              revalidateTag("userData");
              revalidatePath("/admin/users");
            } catch (error) {
              console.log(error);
              throw error;
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Money</DialogTitle>
            <DialogDescription>User name is biz</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col  gap-4">
              <Label htmlFor="amount">Current Balance : {user.balance}</Label>
              <Input
                id="amount"
                type="number"
                name="amount"
                className="col-span-3"
                placeholder="Amount"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
