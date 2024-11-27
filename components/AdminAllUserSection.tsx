import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminAllUserPagination } from "./AdminAllUserPagination";
import { usersDemo } from "@/lib/demoData";
import { AdminAllUserSearch } from "./AdminAllUserSearch";
import AdminAllUserActions from "./AdminAllUserActions";

export default function AdminAllUserSection() {
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
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <AdminAllUserSearch name={"Name"} />
            </TableCell>
            <TableCell>
              <AdminAllUserSearch name={"Email"} />
            </TableCell>
            <TableCell>
              <AdminAllUserSearch name={"Whatsapp"} />
            </TableCell>
            <TableCell colSpan={2}>No search</TableCell>
          </TableRow>
          {usersDemo.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.whatsapp}</TableCell>
              <TableCell>{user.balance.toFixed(2)}</TableCell>
              <TableCell>
                <AdminAllUserActions />
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
