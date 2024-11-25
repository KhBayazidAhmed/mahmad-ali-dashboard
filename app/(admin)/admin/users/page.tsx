import UserTable from "@/components/UserTable";
import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      <h1 className="md:text-3xl text-xl font-bold mb-6">User Dashboard</h1>
      <UserTable />
    </div>
  );
}
