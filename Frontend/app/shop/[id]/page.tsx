import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProductGallery from "@/components/layout/ProductGallery";
import PurchasePanel from "@/components/layout/PurchasePanel";
import Reviews from "@/components/layout/Reviews";
import ShopNavbarWithUser from "@/components/layout/ShopNavbarWithUser";
import { getReviews } from "@/lib/product-detail";
import { getProduct } from "@/lib/Products";

type Props = { params: Promise<{ id: string }> };

async function ProductContent({ params }: Props) {
  const { id } = await params;
  const [product, reviews] = await Promise.all([
    getProduct(id),
    getReviews(id),
  ]);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />
        <PurchasePanel product={product} />
      </div>
      <Reviews productId={product.id} initial={reviews} />
    </main>
  );
}

export default function ProductPage({ params }: Props) {
  return (
    <>
      <ShopNavbarWithUser />
      <Suspense
        fallback={<div className="mx-auto h-96 max-w-7xl animate-pulse px-4" />}
      >
        <ProductContent params={params} />
      </Suspense>
    </>
  );
}
