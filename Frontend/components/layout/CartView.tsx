"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

type CartItem = {
  id: number;
  quantity: number;
  size: string | null;
  color: string | null;
  product: {
    id: number;
    name: string;
    price: number;
    images: string[];
  };
};

const SHIPPING_FEE = 1500;
const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);

  const setQty = (id: number, qty: number) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)),
    );

  const remove = (id: number) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const itemCount = items.reduce((n, i) => n + i.quantity, 0);

  const subtotal = items.reduce((n, i) => n + i.product.price * i.quantity, 0);
  const shipping = items.length ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
          Your cart is empty
        </h1>
        <p className="mt-3 text-neutral-600"></p>
        <Link
          href="/shop"
          className="mt-8 inline-flex rounded-full bg-neutral-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Browse the shop
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
        Your cart
      </h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        {/* Items */}
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200 lg:col-span-8">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 py-6 sm:gap-6">
              <Link
                href={`/shop/${item.product.id}`}
                className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:w-32"
              >
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-neutral-900">
                      {item.product.name}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.size}, {item.color}
                    </p>
                  </div>
                  <p className="font-semibold text-neutral-900">
                    {naira(item.product.price * item.quantity)}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="inline-flex items-center rounded-full border border-neutral-300">
                    <button
                      type="button"
                      onClick={() => setQty(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      aria-label={`Decrease quantity of ${item.product.name}`}
                      className="rounded-full p-2.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-40 disabled:hover:text-inherit"
                    >
                      <Minus size={16} aria-hidden="true" />
                    </button>
                    <span
                      className="min-w-8 text-center text-sm font-semibold"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.product.name}`}
                      className="rounded-full p-2.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Plus size={16} aria-hidden="true" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-neutral-600 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Trash2 size={16} aria-hidden="true" />
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="lg:col-span-4">
          <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-neutral-900">
              Order summary
            </h2>
            <dl className="mt-5 space-y-3 text-neutral-600">
              <div className="flex justify-between">
                <dt>Items ({itemCount})</dt>
                <dd>{naira(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd>{naira(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-4 text-lg font-bold text-neutral-900">
                <dt>Total</dt>
                <dd>{naira(total)}</dd>
              </div>
            </dl>

            <Link
              href="/checkout"
              className="mt-6 flex w-full justify-center rounded-full bg-neutral-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Continue to checkout
            </Link>
            <Link
              href="/shop"
              className="mt-3 block text-center text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-4 decoration-primary hover:text-primary"
            >
              Keep shopping
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
