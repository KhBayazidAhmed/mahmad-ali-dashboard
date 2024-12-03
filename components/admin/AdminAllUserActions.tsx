import AdminAllUserAddMoneyAction from "./AdminAllUserAddMoneyAction";
import { AdminAllUserEditActions } from "./AdminAllUserEditAction";
import AdminAllUserWhatsAppAction from "./AdminAllUserWhatsAppAction";

export default function AdminAllUserActions({ userId }: { userId: string }) {
  console.log(userId);
  return (
    <>
      <AdminAllUserEditActions />
      <AdminAllUserAddMoneyAction />
      <AdminAllUserWhatsAppAction />
    </>
  );
}
