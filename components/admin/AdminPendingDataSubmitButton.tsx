"use client";

import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function AdminPendingDataSubmitButton({
  name,
}: {
  name: string;
}) {
  const { pending } = useFormStatus();
  return pending ? (
    <Button disabled size="sm" className="mr-2">
      <Loader2 className="animate-spin" />
      {name}
    </Button>
  ) : (
    <Button
      variant={name === "Done" ? "default" : "destructive"}
      size="sm"
      className="mr-2"
    >
      {name}
    </Button>
  );
}
