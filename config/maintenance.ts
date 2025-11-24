export const maintenanceConfig = {
  enabled: process.env.NEXT_PUBLIC_MAINTENANCE_ENABLED === "true",
  message:
    process.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE ||
    "We're preparing the trailhead. New updates are coming soon!",
};
