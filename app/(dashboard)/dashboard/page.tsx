import { auth } from "@/auth/authSetup";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session) redirect("/login");
  redirect(`/dashboard/${session.user.id}`);
}
