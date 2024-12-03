import { auth } from "@/auth/authSetup";
import Header from "@/components/Header";
import Refresher from "@/components/Refresher";
import { headerNavItemsAdmin } from "@/lib/config";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  if (session.user.role !== "admin")
    return redirect(`/dashboard/${session.user.id}`);
  return (
    <div className="container mx-auto">
      <Header items={headerNavItemsAdmin} />
      <Refresher />
      {children}
    </div>
  );
}
