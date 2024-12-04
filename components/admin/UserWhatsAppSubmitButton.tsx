"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function UserWhatsAppSubmitButton() {
  const { data, pending } = useFormStatus();
  console.log(data);
  return pending ? (
    <Button disabled className="w-full my-3">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button className="w-full my-3">Submit</Button>
  );
}
