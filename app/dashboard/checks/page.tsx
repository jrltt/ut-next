import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getChecks } from "@/lib/services/checks.service";

export default async function ChecksPage() {
  const checks = await getChecks();

  const activeChecks = checks.results.filter((check) => !check.is_paused);

  return (
    <>
      <h1>Checks page</h1>
      {/* <pre>{JSON.stringify(checks, null, 2)}</pre> */}
      <div className="flex space-x-6">
        {activeChecks.map((check) => (
          <Card key={check.pk}>
            <CardHeader>
              <CardTitle>{check.name}</CardTitle>
              <CardDescription>{check.msp_address}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{new Date(check.created_at).toISOString()}</p>
              {/* <pre className="text-ellipsis">
                {JSON.stringify(check, null, 2)}
              </pre> */}
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
