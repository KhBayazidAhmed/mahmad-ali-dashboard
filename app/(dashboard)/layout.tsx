import HeaderDashboard from "@/components/HeaderDashboard";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderDashboard />
      {children}
    </div>
  );
}
