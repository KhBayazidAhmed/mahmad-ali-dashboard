import { auth } from "@/auth/authSetup";
import Header from "@/components/Header";
import { headerNavItemsAdmin } from "@/lib/config";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || session.user.role !== "admin") return redirect("/login");
  return (
    <div className="container mx-auto">
      <Header items={headerNavItemsAdmin} />
      {children}
    </div>
  );
}
