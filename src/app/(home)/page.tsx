import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Nsui - Component Registry</h1>
      <p className="max-w-lg text-fd-muted-foreground">
        A collection of custom components built with Shadcn UI. Ready to be
        integrated into your projects.
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/docs"
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
