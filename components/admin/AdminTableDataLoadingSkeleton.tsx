import React from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export default function AdminTableDataLoadingSkeleton() {
  return (
    <TableBody>
      {Array.from({ length: 8 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton className="h-4 w-6" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-24" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-32" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-24" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell>
            <Button disabled variant="default" size="sm" className="mr-2">
              Done
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
