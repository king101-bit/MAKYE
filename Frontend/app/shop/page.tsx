import { Suspense } from "react";
import ShopFilters from "@/components/layout/ShopFilters";
import ProductCard from "@/components/layout/ProductCard";
import { getProducts, type ShopQuery } from "@/lib/Products";
import ShopNavbarWithUser from "@/components/layout/ShopNavbarWithUser";

type Props = { searchParams: Promise<ShopQuery> };

async function ProductGrid({ searchParams }: Props) {
  const products = await getProducts(await searchParams);

  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-neutral-600">
        Nothing matches those filters. Try clearing them or searching for
        something else.
      </p>
    );
  }

  return (
    <>
      <p className="mb-6 text-sm text-neutral-500" aria-live="polite">
        {products.length} {products.length === 1 ? "item" : "items"}
      </p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {products.map((p) => (
          <li key={p.id}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </>
  );
}

function GridSkeleton() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <li
          key={i}
          className="aspect-[3/4] animate-pulse rounded-xl bg-neutral-100"
        />
      ))}
    </ul>
  );
}

export default function ShopPage({ searchParams }: Props) {
  return (
    <>
      <Suspense
        fallback={<div className="h-[73px] border-b border-neutral-200" />}
      >
        <ShopNavbarWithUser />
      </Suspense>{" "}
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            Shop everything
          </h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            From community favourites to pieces about to sell out. Filter by
            category and price to find yours.
          </p>
        </header>

        <Suspense>
          <ShopFilters />
        </Suspense>

        <div className="mt-8">
          <Suspense fallback={<GridSkeleton />}>
            <ProductGrid searchParams={searchParams} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
