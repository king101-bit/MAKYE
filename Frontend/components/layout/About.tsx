import Image from "next/image";

const values = [
  {
    title: "Priced fairly",
    body: "We keep margins small so good clothes stay within reach.",
  },
  {
    title: "Picked by hand",
    body: "Every piece is tried, washed and worn before it makes the shop.",
  },
  {
    title: "Made to last",
    body: "Timeless cuts and sturdy fabric, not one-wear trends.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-900 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Good style shouldn&apos;t cost a fortune.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            We&apos;re a small team who love clothes and hate overpaying for
            them. So we curate pieces that look great, hold up in the wash, and
            fit a real budget.
          </p>

          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="border-t-2 border-primary pt-4">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div className="rounded-[2rem] bg-white p-8">
            <Image
              src="/team.svg"
              width={350}
              height={250}
              alt="Illustration of the Chic Boutique team"
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
