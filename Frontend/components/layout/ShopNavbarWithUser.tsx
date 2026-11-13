import { Suspense } from "react";
import { getCurrentUser } from "@/lib/auth";
import ShopNavbar from "@/components/layout/ShopNavbar";

async function NavbarWithUser() {
  const user = await getCurrentUser();
  return <ShopNavbar user={user} />;
}

export default function ShopNavbarWithUser() {
  return (
    <Suspense
      fallback={<header className="h-16 border-b border-neutral-200" />}
    >
      <NavbarWithUser />
    </Suspense>
  );
}
