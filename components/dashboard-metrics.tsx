import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  link?: string;
  items: string[];
}
export function DashboardMetrics({ title, link, items }: Props) {
  return (
    <div className="grid-span-1 bg-white w-full h-full p-4 border">
      <h6 className="flex items-center font-bold mb-4">
        {link && (
          <Link href={link}>
            {title} <ArrowRight className="w-5 h-5 text-blue-700" />
          </Link>
        )}
        {!link && title}
      </h6>
      <ul className="space-y-3 text-slate-500">
        {items.map((item, idx) => (
          <li
            key={item}
            className={cn(
              idx === 1 && "border-t border-slate-300 border-b py-3"
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
