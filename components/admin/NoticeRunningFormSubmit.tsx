"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
export default function NoticeRunningFormSubmit({
  running,
}: {
  running: boolean;
}) {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled className="w-full my-3">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button variant="default" className="w-full my-3">
      {running ? "End" : "Start"}
    </Button>
  );
}
