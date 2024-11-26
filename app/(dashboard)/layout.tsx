import Header from "@/components/Header";
import { headerNavItemsDashboard } from "@/lib/config";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header items={headerNavItemsDashboard} />
      {children}
    </div>
  );
}
