"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { dashboardFormIdTypes } from "@/lib/config";
import { useActionState, useEffect } from "react";
import { createOrder } from "@/actions/order";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DashboardFormSection() {
  const [state, formAction, isPending] = useActionState(createOrder, null);
  const { toast } = useToast();

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast({
          title: "Success",
          description: state.message,
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: state.message || "Something went wrong!",
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="min-w-80 shadow-lg border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6 space-y-6">
        <form action={formAction} className="space-y-6">
          {/* Type Selection */}
          <div className="space-y-2">
            <Label
              htmlFor="type"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Select Type
            </Label>
            <Select name="idType">
              <SelectTrigger className="w-full border-2 border-gray-200 dark:border-gray-700">
                <SelectValue placeholder="Choose a type" />
              </SelectTrigger>
              <SelectContent>
                {dashboardFormIdTypes.map((item) => (
                  <SelectItem
                    key={item.value}
                    className="dark:hover:bg-gray-400"
                    value={item.value}
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ID Number Input */}
          <div className="space-y-2">
            <Label
              htmlFor="idNumber"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Number
            </Label>
            <Input
              type="number"
              id="idNumber"
              name="idNumber"
              placeholder="Enter ID number"
              className="w-full border-2 border-gray-200 dark:border-gray-700"
              required
            />
          </div>

          {/* Name Input */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="w-full border-2 border-gray-200 dark:border-gray-700"
              required
            />
          </div>

          {/* Note Input */}
          <div className="space-y-2">
            <Label
              htmlFor="note"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Note
            </Label>
            <Textarea
              name="note"
              id="note"
              className="w-full border-2 border-gray-200 dark:border-gray-700"
              placeholder="Type your message here."
            />
          </div>

          {/* Copy Type Radio Group */}
          <div className="space-y-4">
            <Label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Select Copy Type
            </Label>
            <RadioGroup
              defaultValue="sign-copy"
              id="copy-type"
              name="copyType"
              className="flex justify-between items-center"
            >
              {/* Sign Copy Option */}
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id="sign-copy"
                  value="sign_copy"
                  className="form-radio text-blue-600 focus:ring-blue-500 dark:text-blue-400 dark:focus:ring-blue-300"
                />
                <Label
                  className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  htmlFor="sign-copy"
                >
                  Sign Copy
                </Label>
              </div>

              {/* Server Copy Option */}
              <div className="flex items-center justify-center gap-2">
                <RadioGroupItem
                  id="server-copy"
                  value="server_copy"
                  className="form-radio text-blue-600 focus:ring-blue-500 dark:text-blue-400 dark:focus:ring-blue-300"
                />
                <Label
                  className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  htmlFor="server-copy"
                >
                  Server Copy
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="animate-spin mr-2" />}
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
