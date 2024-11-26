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

export default function AdminAllUserWhatsAppAction() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          WhatsApp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>WhatsApp</DialogTitle>
          <DialogDescription>
            Add WhatsApp to This user . Turn on or off WhatsApp service
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid  items-center gap-4">
            <Label htmlFor="number">WhatsApp Number</Label>
            <Input
              id="number"
              type="number"
              defaultValue={100}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="whatsapp-service" />
            <Label htmlFor="whatsapp-service">Whatsapp Service</Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
