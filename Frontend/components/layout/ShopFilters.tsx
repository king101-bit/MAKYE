"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { CATEGORIES, PRICE_RANGES } from "@/lib/Products";

const selectClass =
  "rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export default function ShopFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();

  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    startTransition(() =>
      router.replace(`${pathname}?${next}`, { scroll: false }),
    );
  }

  const hasFilters = ["q", "category", "price", "sort"].some((k) =>
    params.get(k),
  );

  return (
    <div
      className="flex flex-wrap items-center gap-3 data-[pending=true]:opacity-70"
      data-pending={pending}
    >
      <input
        type="search"
        aria-label="Search products"
        placeholder="Search products"
        defaultValue={params.get("q") ?? ""}
        onChange={(e) => update("q", e.target.value)}
        className="w-full rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-64"
      />

      <select
        aria-label="Category"
        value={params.get("category") ?? ""}
        onChange={(e) => update("category", e.target.value)}
        className={selectClass}
      >
        <option value="">All categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        aria-label="Price"
        value={params.get("price") ?? ""}
        onChange={(e) => update("price", e.target.value)}
        className={selectClass}
      >
        <option value="">Any price</option>
        {PRICE_RANGES.map((r) => (
          <option key={r.value} value={r.value}>
            {r.label}
          </option>
        ))}
      </select>

      <select
        aria-label="Sort by"
        value={params.get("sort") ?? ""}
        onChange={(e) => update("sort", e.target.value)}
        className={`${selectClass} sm:ml-auto`}
      >
        <option value="">Featured</option>
        <option value="low">Price: low to high</option>
        <option value="high">Price: high to low</option>
      </select>

      {hasFilters && (
        <button
          type="button"
          onClick={() =>
            startTransition(() => router.replace(pathname, { scroll: false }))
          }
          className="text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-4 decoration-primary hover:text-primary"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
