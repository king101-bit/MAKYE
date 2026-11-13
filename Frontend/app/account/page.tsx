import { Suspense } from "react";
import AccountView from "@/components/layout/AccountView";
import ShopNavbarWithUser from "@/components/layout/ShopNavbarWithUser";

export default function AccountPage() {
  return (
    <>
      <Suspense
        fallback={<div className="h-[73px] border-b border-neutral-200" />}
      >
        <ShopNavbarWithUser />
      </Suspense>
      <AccountView />
    </>
  );
}
