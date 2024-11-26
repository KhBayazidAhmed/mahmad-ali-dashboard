import Header from "@/components/Header";
import { headerNavItemsAdmin } from "@/lib/config";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <Header items={headerNavItemsAdmin} />
      {children}
    </div>
  );
}
