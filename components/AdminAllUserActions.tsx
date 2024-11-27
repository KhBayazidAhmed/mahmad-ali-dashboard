import { AdminAllUserEditActions } from "./AdminAllUserEditAction";
import AdminAllUserAddMoneyAction from "./AdminAllUserAddMoneyAction";
import AdminAllUserWhatsAppAction from "./AdminAllUserWhatsAppAction";

export default function AdminAllUserActions() {
  return (
    <>
      <AdminAllUserEditActions />
      <AdminAllUserAddMoneyAction />
      <AdminAllUserWhatsAppAction />
    </>
  );
}
