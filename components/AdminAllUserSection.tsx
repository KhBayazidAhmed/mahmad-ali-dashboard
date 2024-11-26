import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AdminAllUserPagination } from "./AdminAllUserPagination";
import { adminAllUserActions, usersDemo } from "@/lib/demoData";

export default function AdminAllUserSection() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {["Name", "Email", "Whatsapp", "Balance", "Actions"].map(
              (heading, index) => (
                <TableHead key={index} className="text-center">
                  {heading}
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody className="text-nowrap text-center">
          {usersDemo.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.whatsapp}</TableCell>
              <TableCell>{user.balance.toFixed(2)}</TableCell>
              <TableCell>
                {adminAllUserActions.map((action) => (
                  <Button
                    key={action.name}
                    variant="outline"
                    size="sm"
                    className="mr-2"
                  >
                    {action.name}
                  </Button>
                ))}
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
