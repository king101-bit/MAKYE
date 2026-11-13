import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/Products";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">
            No image
          </div>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-neutral-900">{product.name}</h3>
          <p className="text-sm text-neutral-500">{product.details}</p>
        </div>
        <p className="shrink-0 font-semibold text-neutral-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
