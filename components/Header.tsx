import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggler";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          Dashboard
        </Link>
        <nav className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/signup">Signup</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/">Logout</Link>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
