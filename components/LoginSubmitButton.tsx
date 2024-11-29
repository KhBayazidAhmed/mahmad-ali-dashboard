"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function LoginSubmitButton() {
  const { pending } = useFormStatus();
  return pending ? (
    <Button disabled className="w-full">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button type="submit" className="w-full">
      Sign in
    </Button>
  );
}
