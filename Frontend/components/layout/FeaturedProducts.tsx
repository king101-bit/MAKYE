import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: string | number;
  name: string;
  price: number;
  image_url?: string | null;
};

async function getProducts(): Promise<Product[]> {
  return [
    { id: 1, name: "Linen button-up shirt", price: 34 },
    { id: 2, name: "High-rise wide jeans", price: 48 },
    { id: 3, name: "Ribbed knit tank", price: 18 },
    { id: 4, name: "Pleated midi skirt", price: 39 },
  ];
}

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <section id="new" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Just landed
        </h2>
        <Link
          href="/shop?sort=new"
          className="text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-8 decoration-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          View all new arrivals
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="mt-10 text-neutral-600">
          New pieces are on the way. Check back soon.
        </p>
      ) : (
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {products.map((p) => (
            <li key={p.id}>
              <Link
                href={`/shop/${p.id}`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
                  {p.image_url && (
                    <Image
                      src={p.image_url}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="mt-3 font-semibold text-neutral-900">{p.name}</h3>
                <p className="text-neutral-600">${p.price.toFixed(2)}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}