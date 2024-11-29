"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const [pending, setPending] = useState<boolean>();
  const handleSubmit = async (event: React.FormEvent) => {
    setPending(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (searchParams.get("error")) {
      setPending(false);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="Email address"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          required
        />
      </div>
      {searchParams.get("error") && (
        <p className="text-red-500">{searchParams.get("code")}</p>
      )}
      {pending ? (
        <Button disabled className="w-full">
          <Loader2 className="animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      )}
    </form>
  );
}
