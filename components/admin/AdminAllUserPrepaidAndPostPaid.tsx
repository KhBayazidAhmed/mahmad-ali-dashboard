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

// import UserWhatsAppSubmitButton from "./UserWhatsAppSubmitButton";
// import { UserProps } from "@/lib/types";

export default function AdminAllUserPrepaidAndPostPaid() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          Prepaid and Postpaid
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form>
          <DialogHeader>
            <DialogTitle>Prepaid and Postpaid</DialogTitle>
            <DialogDescription>Current status is Postpaid</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full mt-2" type="submit">
              Change the status
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
