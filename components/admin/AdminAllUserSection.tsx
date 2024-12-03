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
import { unstable_cache } from "next/cache";
import UserModel from "@/lib/db/models/User.Model";
import dbConnect from "@/lib/db/connection";
import { Types } from "mongoose"; // Import this for ObjectId type

// Define the User type
type User = {
  _id: string; // MongoDB ObjectId as a string
  name: string; // User's name
  email: string; // User's email
  whatsapp?: string; // User's WhatsApp number (optional)
  balance: number; // User's balance
};

// Cached function to fetch user data
const userData = unstable_cache(
  async (): Promise<User[]> => {
    await dbConnect();
    const users = await UserModel.find(
      {},
      { name: 1, email: 1, whatsapp: 1, balance: 1 }
    ).lean<
      {
        _id: Types.ObjectId;
        name: string;
        email: string;
        whatsapp?: string;
        balance?: number;
      }[]
    >();

    // Map the data to ensure proper typing and transformations
    return users.map((user) => ({
      _id: user._id.toString(), // Convert ObjectId to string
      name: user.name,
      email: user.email,
      whatsapp: user.whatsapp || "-",
      balance: user.balance || 0, // Default balance to 0 if undefined
    }));
  },
  ["userData"],
  { revalidate: 10 }
);

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
                <TableCell>{user.whatsapp}</TableCell>
                <TableCell>{user.balance.toFixed(2)}</TableCell>
                <TableCell>
                  <AdminAllUserActions userId={user._id.toString()} />
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
