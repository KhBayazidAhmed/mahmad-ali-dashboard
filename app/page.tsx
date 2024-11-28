import { auth } from "@/auth/authSetup";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");
  if (session.user.role === "admin") redirect("/admin");
  redirect("/dashboard");
}
