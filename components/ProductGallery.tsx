import Image from "next/image";

export function ProductGallery({ images }: { images: string[] }) {
  if (!images?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((img) => (
        <div key={img} className="relative h-56 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          <Image
            src={img}
            alt="Product preview"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
