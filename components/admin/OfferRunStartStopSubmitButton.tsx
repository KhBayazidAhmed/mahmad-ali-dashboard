"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function OfferRunStartStopSubmitButton({
  running,
}: {
  running: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <div className="w-full">
      {pending ? (
        <Button disabled className="w-full my-3">
          <Loader2 className="animate-spin" />
          {running ? "Ending..." : "Starting..."}
        </Button>
      ) : (
        <Button
          className="w-full my-3"
          variant={running ? "secondary" : "destructive"}
        >
          {running ? "End" : "Start"}
        </Button>
      )}
    </div>
  );
}
