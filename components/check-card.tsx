import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Check } from "@/lib/services/checks.service";
import { cn, renderLabelType } from "@/lib/utils";
import { formatDistance } from "date-fns";
import Link from "next/link";

interface Props {
  check: Pick<
    Check,
    | "pk"
    | "name"
    | "msp_address"
    | "created_at"
    | "modified_at"
    | "check_type"
    | "is_paused"
  >;
}
export function CheckCard({ check }: Props) {
  return (
    <Link
      href={`/dashboard/checks/${check.pk}`}
      key={check.pk}
      className="min-w-[240px]"
    >
      <Card className={cn(check.is_paused && "border-t-slate-400")}>
        <CardHeader>
          <CardTitle>{check.name}</CardTitle>
          <CardDescription>{check.msp_address}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-slate-400">
              {renderLabelType(check.check_type)}
            </p>
            <p className="text-green-600 capitalize">
              {formatDistance(
                new Date(check.created_at),
                new Date(check.modified_at),
                { includeSeconds: true, addSuffix: true }
              )}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Uptime (24h)</p>
            <p className="text-green-600 capitalize">100%</p>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}
