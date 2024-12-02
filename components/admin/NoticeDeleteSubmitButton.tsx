"use client";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function NoticeDeleteSubmitButton() {
  const { pending } = useFormStatus();
  return pending ? (
    <Button disabled className="w-full my-3">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button variant="destructive" className="w-full my-3">
      Delete
    </Button>
  );
}
