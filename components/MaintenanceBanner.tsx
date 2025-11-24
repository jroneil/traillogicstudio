interface MaintenanceBannerProps {
  message: string;
}

export function MaintenanceBanner({ message }: MaintenanceBannerProps) {
  return (
    <div className="border-b border-amber-300 bg-amber-100/90 py-3 text-sm text-amber-900">
      <div className="container flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <span className="font-semibold">Site Maintenance</span>
        <p className="text-amber-900/90">{message}</p>
      </div>
    </div>
  );
}
