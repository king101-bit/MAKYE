"use client";

import { useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import type { Review } from "@/lib/product-detail";

function Stars({ value }: { value: number }) {
  return (
    <span role="img" aria-label={`${value} out of 5 stars`} className="inline-flex">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={16} aria-hidden="true" className={n <= value ? "fill-amber-400 text-amber-400" : "text-neutral-300"} />
      ))}
    </span>
  );
}

export default function Reviews({ productId, initial }: { productId: number; initial: Review[] }) {
  const [reviews, setReviews] = useState(initial);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const average = reviews.length ? reviews.reduce((n, r) => n + r.rating, 0) / reviews.length : 0;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!rating || !text.trim()) return;
    // TODO: POST /products/{productId}/reviews (author comes from the logged-in user)
    setReviews([{ id: crypto.randomUUID(), author: "You", rating, text: text.trim(), created_at: new Date().toISOString() }, ...reviews]);
    setRating(0);
    setText("");
  }

  return (
    <section aria-labelledby="reviews-heading" className="mt-20 border-t border-neutral-200 pt-12">
      <div className="flex flex-wrap items-center gap-4">
        <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-neutral-900">Reviews</h2>
        {reviews.length > 0 && (
          <p className="flex items-center gap-2 text-neutral-600">
            <Stars value={Math.round(average)} />
            {average.toFixed(1)} from {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </p>
        )}
      </div>

      <form onSubmit={submit} className="mt-8 max-w-xl space-y-4">
        <fieldset>
          <legend className="font-medium text-neutral-900">Your rating</legend>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="cursor-pointer">
                <input type="radio" name="rating" value={n} checked={rating === n} onChange={() => setRating(n)} className="peer sr-only" />
                <Star size={28} aria-hidden="true" className={`${n <= rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"} peer-focus-visible:ring-2 peer-focus-visible:ring-primary rounded`} />
                <span className="sr-only">{n} {n === 1 ? "star" : "stars"}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="review-text" className="font-medium text-neutral-900">Your review</label>
          <textarea
            id="review-text"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What did you like? How does it fit?"
            className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>
        <button
          type="submit"
          disabled={!rating || !text.trim()}
          className="rounded-full bg-neutral-900 px-7 py-3 font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:hover:bg-neutral-900"
        >
          Post review
        </button>
      </form>

      {reviews.length === 0 ? (
        <p className="mt-10 text-neutral-600">No reviews yet. Be the first to share how it fits.</p>
      ) : (
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.id} className="border-t-2 border-neutral-900 pt-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-neutral-900">{r.author}</p>
                <time dateTime={r.created_at} className="text-sm text-neutral-500">
                  {new Date(r.created_at).toLocaleDateString("en-NG", { dateStyle: "medium" })}
                </time>
              </div>
              <div className="mt-1"><Stars value={r.rating} /></div>
              <p className="mt-3 text-neutral-700">{r.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}