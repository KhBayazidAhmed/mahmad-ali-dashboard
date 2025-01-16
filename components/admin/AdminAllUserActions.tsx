import { UserProps } from "@/lib/types";
import AdminAllUserAddMoneyAction from "./AdminAllUserAddMoneyAction";
import { AdminAllUserEditActions } from "./AdminAllUserEditAction";
import AdminAllUserWhatsAppAction from "./AdminAllUserWhatsAppAction";
import AdminAllUserPrepaidAndPostPaid from "./AdminAllUserPrepaidAndPostPaid";

export default function AdminAllUserActions({ user }: { user: UserProps }) {
  return (
    <>
      <AdminAllUserEditActions user={user} />
      <AdminAllUserAddMoneyAction user={user} />
      <AdminAllUserWhatsAppAction user={user} />
      <AdminAllUserPrepaidAndPostPaid />
    </>
  );
}
