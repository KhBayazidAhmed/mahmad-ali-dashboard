"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeToggler";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const navItems = [
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
  { name: "Dashboard", href: "/dashboard" },
];
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.name}
          variant="ghost"
          asChild
          className="border dark:border-white/10"
          onClick={() => setIsOpen(false)}
        >
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          Dashboard
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <NavItems />
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <VisuallyHidden>
                <SheetTitle>Navigation</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col space-y-4 mt-4 ">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
