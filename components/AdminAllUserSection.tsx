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
            {["Name", "Email", "Whatsapp", "Balance", "Actions"].map(
              (heading, index) => (
                <TableHead key={index}>
                  <div className="flex items-center justify-center gap-2">
                    {heading}
                    <AdminAllUserSearch name={heading} />
                  </div>
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody className="text-nowrap text-center">
          <TableRow className="bg-muted">
            <TableCell className="hover:bg-muted">
              <AdminAllUserSearch name={"Name"} />
            </TableCell>
            <TableCell className="hover:bg-muted">
              <AdminAllUserSearch name={"Email"} />
            </TableCell>
            <TableCell className="hover:bg-muted">
              <AdminAllUserSearch name={"Whatsapp"} />
            </TableCell>
          </TableRow>
          {usersDemo.map((user) => (
            <TableRow key={user.id}>
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
            <TableCell colSpan={5}>
              <AdminAllUserPagination />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
