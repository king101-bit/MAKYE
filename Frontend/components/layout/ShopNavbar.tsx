"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { UserAvatar } from "../ui/UserAvatar";
import { LogoutButton } from "../auth/LogoutButton";

export default function ShopNavbar({ user }: { user: Profile | null }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const totalItems = 0;

  const [query, setQuery] = useState(params.get("q") ?? "");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  useEffect(() => () => clearTimeout(timer.current), []);

  function onChange(value: string) {
    setQuery(value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const next = new URLSearchParams(
        pathname === "/shop" ? params.toString() : "",
      );
      if (value.trim()) next.set("q", value.trim());
      else next.delete("q");
      const url = `/shop${next.size ? `?${next}` : ""}`;
      pathname === "/shop"
        ? router.replace(url, { scroll: false })
        : router.push(url);
    }, 300);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Image
            src="/logo.png"
            alt="Chic Boutique home"
            width={56}
            height={56}
          />
        </Link>

        <search className="mx-auto w-full max-w-xl">
          <input
            type="search"
            aria-label="Search products"
            placeholder="Search products"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-full border border-neutral-200 bg-neutral-100 px-5 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </search>

        <nav
          aria-label="Account"
          className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4"
        >
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-neutral-900 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ShoppingCart size={22} aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Cart</span>
            <span
              className="min-w-6 rounded-full bg-neutral-900 px-1.5 py-0.5 text-center text-xs text-white"
              aria-label={`${totalItems} items in cart`}
            >
              {totalItems}
            </span>
          </Link>

          {user ? (
            <>
              <Link
                href="/account"
                className="rounded-full focus-visible:ring-2"
              >
                <UserAvatar name={user.name} size={32} />
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-neutral-900 px-4 py-1.5 text-sm text-white"
              >
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
