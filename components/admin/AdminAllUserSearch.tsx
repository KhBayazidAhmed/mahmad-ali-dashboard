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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { DialogTitle } from "../ui/dialog";

export function AdminAllUserSearch({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center gap-2">
        <Input
          onFocus={() => setOpen(true)}
          className="w-full border border-gray-800 focus:border-gray-500 focus:ring focus:ring-gray-200 text-gray-900 placeholder-gray-400 rounded-md px-2 py-1"
          placeholder={`Search by ${name}`}
        />
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      </div>
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
