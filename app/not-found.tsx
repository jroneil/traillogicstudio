import { Button } from "@/components/UI/Button";

export default function NotFound() {
  return (
    <div className="section bg-background">
      <div className="container flex flex-col items-start gap-4 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trail not found.</p>
        <h1 className="text-4xl font-semibold tracking-tight text-primary">Return to basecamp.</h1>
        <p className="text-text/80">The page you&apos;re looking for isn&apos;t on this map.</p>
        <div className="flex gap-3">
          <Button href="/">Go Home</Button>
          <Button href="/products" variant="secondary">
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}
