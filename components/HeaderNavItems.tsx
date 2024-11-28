import { NavItem } from "@/lib/types";
import { Button } from "./ui/button";
import Link from "next/link";
export interface HeaderNavItemsProps {
  setIsOpen: (isOpen: boolean) => void;
  items: NavItem[];
}
export default function HeaderNavItems({
  setIsOpen,
  items,
}: HeaderNavItemsProps) {
  return (
    <>
      {items?.map((item, index) =>
        index === 0 ? null : (
          <Button
            key={item.name}
            variant="ghost"
            asChild
            className="border dark:border-white/10"
            onClick={() => setIsOpen(false)}
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
        )
      )}
    </>
  );
}
