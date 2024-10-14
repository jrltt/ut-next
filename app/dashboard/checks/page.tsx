import { CheckCard } from "@/components/check-card";
import { getChecks } from "@/lib/services/checks.service";

export default async function ChecksPage() {
  const checks = await getChecks();

  return (
    <>
      <h4 className="text-2xl font-bold border-b border-b-slate-300 pb-6 mb-8">
        Checks
      </h4>
      <div className="flex space-x-6">
        {checks.results.map((check) => (
          <CheckCard key={check.pk} check={check} />
        ))}
      </div>
    </>
  );
}
