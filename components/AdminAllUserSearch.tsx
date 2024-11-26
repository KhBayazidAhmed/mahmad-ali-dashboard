"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";
import { DialogTitle } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Search } from "lucide-react";

export function AdminAllUserSearch({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p className="text-sm text-muted-foreground flex gap-2 items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="text-muted-foreground flex gap-2 items-center justify-center"
        >
          <Search className="h-4 w-4" />
        </button>{" "}
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle>
          <VisuallyHidden>Search Dialog</VisuallyHidden>
        </DialogTitle>
        <CommandInput placeholder={`Search by ${name}`} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <CommandItem key={i}>
                  <span>
                    Suggestion for {name} {i + 1}
                  </span>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
