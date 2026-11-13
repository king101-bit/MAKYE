import { Suspense } from "react";
import CartView from "@/components/layout/CartView";
import ShopNavbarWithUser from "@/components/layout/ShopNavbarWithUser";

export default function CartPage() {
  return (
    <>
      <Suspense
        fallback={<div className="h-[73px] border-b border-neutral-200" />}
      >
        <ShopNavbarWithUser />
      </Suspense>
      <CartView />
    </>
  );
}
