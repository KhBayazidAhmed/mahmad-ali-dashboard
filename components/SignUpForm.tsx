"use client";
import { CreateUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpForm() {
  const [state, formAction, isPending] = useActionState(CreateUser, null);
  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          required
        />
      </div>
      {state?.success === false ? (
        <p className="text-red-500">{state?.message}</p>
      ) : (
        <p className="text-green-500">{state?.message}</p>
      )}
      {state?.success === true && (
        <Button
          asChild
          variant="outline"
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          <Link href="/login">Go to Log In</Link>
        </Button>
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? <Loader2 className="animate-spin" /> : "Sign up"}
      </Button>
    </form>
  );
}
