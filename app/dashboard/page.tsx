import Header from "@/components/Header";
import UserTable from "@/components/UserTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
        <UserTable />
      </main>
    </div>
  );
}
