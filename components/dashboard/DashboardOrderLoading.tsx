import React from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { FaDownload, FaEdit, FaRegEye } from "react-icons/fa";

export default function DashboardOrderLoading({
  size = 10,
}: {
  size?: number;
}) {
  return (
    <TableBody>
      {Array.from({ length: size }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-28" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-28" />
          </TableCell>
          <TableCell>
            <Button disabled variant="outline" size="sm" className="mr-2">
              <FaDownload />
            </Button>
            <Button disabled variant="outline" size="sm" className="mr-2">
              <FaRegEye />
            </Button>
          </TableCell>
          <TableCell>
            <Button disabled variant="outline" size="sm" className="mr-2">
              <FaDownload />
            </Button>
            <Button disabled variant="outline" size="sm" className="mr-2">
              <FaRegEye />
            </Button>
            <Button disabled variant="outline" size="sm" className="mr-2">
              <FaEdit />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
