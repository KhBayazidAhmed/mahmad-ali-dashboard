"use client";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    setPending(false);
    if (result?.error) {
      // Handle the error (e.g., show a toast, redirect, etc.)
      setError(result.error);
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
      {error && (
        <div className="flex items-center justify-center text-sm text-red-500">
          {error}
        </div>
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
