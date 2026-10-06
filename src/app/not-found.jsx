import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-5 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </div>
  );
}
