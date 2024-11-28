"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function LoginSubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);
  return pending ? (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button type="submit" className="w-full">
      Sign in
    </Button>
  );
}
