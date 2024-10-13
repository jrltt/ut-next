import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Check } from "@/lib/services/checks.service";
import Link from "next/link";

interface Props {
  check: Pick<Check, "pk" | "name" | "msp_address" | "created_at">;
}
export function CheckCard({ check }: Props) {
  return (
    <Link href={`/dashboard/checks/${check.pk}`} key={check.pk}>
      <Card>
        <CardHeader>
          <CardTitle>{check.name}</CardTitle>
          <CardDescription>{check.msp_address}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{new Date(check.created_at).toISOString()}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
