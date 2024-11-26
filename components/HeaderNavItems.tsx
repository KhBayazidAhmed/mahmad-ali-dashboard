import { HeaderNavItemsProps } from "@/lib/types";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeaderNavItems({
  setIsOpen,
  items,
}: HeaderNavItemsProps) {
  return (
    <>
      {items.map((item) => (
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
}
