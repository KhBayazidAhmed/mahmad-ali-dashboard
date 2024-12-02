import { auth } from "@/auth/authSetup";
import { redirect } from "next/navigation";

const DomainSuspended = async () => {
  const session = await auth();
  if (session) {
    if (session.user.role === "admin") redirect("/admin");
    redirect(`/dashboard/${session.user.id}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">
          Domain Suspended
        </h1>
        <p className="text-lg mb-6">
          This domain has been suspended. If you are the owner of this domain,
          please contact your hosting provider.
        </p>
      </div>
      <footer className="absolute bottom-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DomainSuspended;
