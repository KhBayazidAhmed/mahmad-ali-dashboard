import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { AdminAllUserSearch } from "./AdminAllUserSearch";
import AdminAllUserActions from "./AdminAllUserActions";
import { AdminAllUserPagination } from "./AdminAllUserPagination";

export function AdminUserLoading() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {["Id", "Name", "Email", "Whatsapp", "Balance", "Actions"].map(
              (heading, index) => (
                <TableHead key={index}>
                  <div className="flex items-center justify-center gap-2">
                    {heading}
                  </div>
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody className="text-nowrap text-center">
          {/* Loading rows */}
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <AdminAllUserSearch name="Name" />
            </TableCell>
            <TableCell>
              <AdminAllUserSearch name="Email" />
            </TableCell>
            <TableCell>
              <AdminAllUserSearch name="Whatsapp" />
            </TableCell>
            <TableCell colSpan={10}>No search</TableCell>
          </TableRow>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-8 mx-auto" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20 mx-auto" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-28 mx-auto" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16 mx-auto" />
              </TableCell>
              <TableCell>
                <AdminAllUserActions userId={""} />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={6}>
              <AdminAllUserPagination />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
