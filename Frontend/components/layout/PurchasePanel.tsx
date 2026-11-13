"use client";

import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import type { ProductDetail } from "@/lib/product-detail";

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;
const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export default function PurchasePanel({ product }: { product: ProductDetail }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  function addToCart() {
    const missing = [
      !color && "a color",
      !size && product.sizes.length > 0 && "a size",
    ].filter(Boolean);
    if (missing.length) {
      setError(`Choose ${missing.join(" and ")} first.`);
      setAdded(false);
      return;
    }
    setError("");
    // TODO: POST /cart/items { product_id, color, size, quantity: 1 }
    setAdded(true);
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
        {product.name}
      </h1>
      <p className="mt-2 text-neutral-600">{product.details}</p>
      <p className="mt-5 text-3xl font-extrabold text-neutral-900">
        {naira(product.price)}
      </p>

      <fieldset className="mt-8">
        <legend className="font-semibold text-neutral-900">
          Color
          {color && (
            <span className="ml-2 font-normal text-neutral-600">{color}</span>
          )}
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.colors.map((c) => (
            <label key={c} className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value={c}
                checked={color === c}
                onChange={() => {
                  setColor(c);
                  setError("");
                  setAdded(false);
                }}
                className="peer sr-only"
              />
              <span
                title={c}
                style={{ backgroundColor: c.toLowerCase() }}
                className="block size-10 rounded-full ring-1 ring-black/15 ring-offset-2 peer-checked:ring-2 peer-checked:ring-neutral-900 peer-focus-visible:ring-2 peer-focus-visible:ring-primary"
              />
              <span className="sr-only">{c}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {product.sizes.length > 0 && (
        <fieldset className="mt-6">
          <legend className="font-semibold text-neutral-900">Size</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.sizes.map((s) => (
              <label key={s} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => {
                    setSize(s);
                    setError("");
                    setAdded(false);
                  }}
                  className="peer sr-only"
                />
                <span className="flex h-11 min-w-11 items-center justify-center rounded-full border border-neutral-300 px-4 text-sm font-semibold peer-checked:border-neutral-900 peer-checked:bg-neutral-900 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2">
                  {s}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={addToCart}
          className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary ${ring}`}
        >
          <ShoppingBag size={20} aria-hidden="true" />
          Add to cart
        </button>
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-pressed={saved}
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          className={`rounded-full border border-neutral-300 p-3.5 hover:text-primary ${ring}`}
        >
          <Heart
            size={20}
            aria-hidden="true"
            className={saved ? "fill-primary text-primary" : ""}
          />
        </button>
      </div>

      <p
        role="status"
        className={`mt-3 text-sm ${error ? "text-primary" : "text-neutral-600"}`}
      >
        {error || (added ? "Added to your cart." : "")}
      </p>
    </div>
  );
}
