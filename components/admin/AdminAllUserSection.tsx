import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminAllUserSearch } from "./AdminAllUserSearch";
import AdminAllUserActions from "./AdminAllUserActions";
import { AdminAllUserPagination } from "./AdminAllUserPagination";
import UserModel from "@/lib/db/models/User.Model";
import dbConnect from "@/lib/db/connection";

// Cached function to fetch user data
const userData = async () => {
  await dbConnect();

  // Fetch data, excluding unnecessary fields
  const users = await UserModel.find(
    {},
    { password: 0, orders: 0, __v: 0 }
  ).lean();

  // Ensure all fields are converted to plain objects
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return users.map((user: any) => ({
    ...user,
    _id: user._id.toString(), // Convert _id to a string
  }));
};
export default async function AdminAllUserSection() {
  const users = await userData();
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
          {/* Search Row */}
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
            <TableCell colSpan={2}>No search</TableCell>
          </TableRow>
          {/* User Data Rows */}
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.whatsapp || "-"}</TableCell>
                <TableCell>{user.balance.toFixed(2)}</TableCell>
                <TableCell>
                  <AdminAllUserActions user={user} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
          {/* Pagination Row */}
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
