import AdminAllUserAddMoneyAction from "./AdminAllUserAddMoneyAction";
import { AdminAllUserEditActions } from "./AdminAllUserEditAction";
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
