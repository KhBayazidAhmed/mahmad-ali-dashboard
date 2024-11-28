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
import DashboardProfile from "./dashboard/DashboardProfile";
import HeaderNavItems from "./HeaderNavItems";
import { NavItem } from "@/lib/types";

export default function Header({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={items[0].href} className="text-xl font-bold">
          {items[0].name}
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <HeaderNavItems items={items} setIsOpen={setIsOpen} />
          <ModeToggle />
          <DashboardProfile />
        </nav>
        <div className="md:hidden flex items-center ">
          <ModeToggle />
          <DashboardProfile />
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
                <HeaderNavItems items={items} setIsOpen={setIsOpen} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
