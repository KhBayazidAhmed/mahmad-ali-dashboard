"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserUpdateSubmitButton() {
  const router = useRouter();
  const { pending } = useFormStatus();
  useEffect(() => {
    router.refresh();
  }, [pending, router]);
  return pending ? (
    <Button disabled className="w-full my-3">
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button variant="default" className="w-full my-3">
      Update
    </Button>
  );
}
