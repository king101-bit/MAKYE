import Image from "next/image";
import Link from "next/link";
import HeroNavbar from "./HeroNavbar";
import TypewriterText from "./TypeWriterText";

const perks = [
  { title: "New drops weekly", body: "Fresh pieces every Friday." },
  { title: "Free returns", body: "30 days, no questions." },
  { title: "Most items under $50", body: "Style without the markup." },
];

export default function Hero() {
  return (
    <>
      <HeroNavbar />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl xl:text-7xl">
              Fashion that feels{" "}
              <span className="inline-grid text-primary">
                <span
                  aria-hidden="true"
                  className="invisible col-start-1 row-start-1"
                >
                  Elegance|
                </span>
                <span className="col-start-1 row-start-1">
                  <TypewriterText />
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-neutral-600">
              Trend-led pieces and everyday classics, picked by people who
              actually wear them. Priced so you can build a whole wardrobe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center rounded-full bg-neutral-900 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Shop the collection
              </Link>
              <Link
                href="/shop?sort=new"
                className="inline-flex items-center rounded-full px-5 py-3.5 text-base font-semibold text-neutral-900 underline decoration-2 underline-offset-8 decoration-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                See what&apos;s new
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-6">
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] bg-primary/15 sm:-right-5 sm:-top-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1586&auto=format&fit=crop"
                alt="Model wearing a layered outfit from the new collection"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>

            {/* The one memorable detail: a hang tag */}
            <div className="absolute -bottom-5 left-4 -rotate-3 rounded-xl bg-white px-5 py-3 shadow-lg ring-1 ring-black/5 sm:-left-6">
              <p className="text-xs font-medium text-neutral-500">Tops from</p>
              <p className="text-3xl font-extrabold leading-none text-neutral-900">
                $18
              </p>
            </div>
          </div>
        </div>

        {/* Perks */}
        <dl className="mt-20 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title}>
              <dt className="font-semibold text-neutral-900">{p.title}</dt>
              <dd className="mt-1 text-neutral-600">{p.body}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
