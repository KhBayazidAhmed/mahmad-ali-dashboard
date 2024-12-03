import { auth } from "@/auth/authSetup";
import Header from "@/components/Header";
import Refresher from "@/components/Refresher";
import { headerNavItemsDashboard } from "@/lib/config";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <main>
      <Header items={headerNavItemsDashboard} />
      <Refresher />
      {children}
    </main>
  );
}
