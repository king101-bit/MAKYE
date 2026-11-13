import Link from "next/link";
import { CurrentYear } from "./CurrentYear";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "New arrivals", href: "/shop?sort=new" },
      { label: "All products", href: "/shop" },
      { label: "Sale", href: "/shop?sale=true" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-xl font-extrabold tracking-tight text-neutral-900">
            Makye
          </p>
          <p className="mt-3 max-w-xs text-neutral-600">
            Affordable, well-made fashion, picked by hand.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-semibold text-neutral-900">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-neutral-600 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-neutral-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-neutral-500 sm:px-6 lg:px-8">
          &copy; <CurrentYear /> Makye. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
