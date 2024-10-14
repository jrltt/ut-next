import { CheckCard } from "@/components/check-card";
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
          <CheckCard key={check.pk} check={check} />
        ))}
      </div>
    </>
  );
}
