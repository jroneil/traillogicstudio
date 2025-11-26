import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-[#E3D8BD] bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("border-b border-[#E3D8BD] p-6", className)}>{children}</div>;
}
