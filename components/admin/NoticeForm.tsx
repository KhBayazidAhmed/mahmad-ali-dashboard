"use client";

import { createNotice } from "@/actions/notice";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";
const initialState = {
  success: false,
  message: "",
};
export default function NoticeForm() {
  const [state, formAction, isPending] = useActionState(
    createNotice,
    initialState
  );

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-4">
        <Input required name="title" type="text" placeholder="Notice Title" />
        <Textarea required name="content" placeholder="Notice Content" />
        <p
          aria-live="polite"
          className={state?.message ? "text-green-500" : "text-red-500"}
        >
          {state?.message}
        </p>
        {isPending ? (
          <Button disabled className="w-full my-3">
            <Loader2 className="animate-spin" />
          </Button>
        ) : (
          <Button variant="secondary" className="w-full">
            Add Offer
          </Button>
        )}
      </form>
    </div>
  );
}
