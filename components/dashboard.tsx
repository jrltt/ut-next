import { ArrowRight } from "lucide-react";
import { DashboardMetrics } from "./dashboard-metrics";

interface Props {
  metrics: {
    checks: {
      down: number;
      paused: number;
      maintenance: number;
      total: number;
    };
  };
}
export function Dashboard({ metrics }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold border-b border-b-slate-300 pb-6 mb-8">
        Dashboard
      </h1>
      <div className="grid grid-cols-4 shadow-sm mb-12">
        <div className="grid-span-1 bg-white w-full h-full p-4 border">
          <h6 className="flex items-center font-bold mb-4">
            {metrics.checks.total} Total checks{" "}
            <ArrowRight className="w-5 h-5 text-blue-700" />
          </h6>
          <ul className="space-y-3 text-slate-500">
            <li>Down {metrics.checks.down}</li>
            <li className="border-t border-slate-300 border-b py-3">
              Paused {metrics.checks.paused}
            </li>
            <li>Maintenance {metrics.checks.maintenance}</li>
          </ul>
        </div>
        <DashboardMetrics
          title="Outages"
          items={["Down", "Paused", "Maintenance"]}
        />
        <DashboardMetrics
          title="Response Time"
          items={["HTTP", "Transaction", "API"]}
        />
        <DashboardMetrics
          title="Other"
          items={["Global Uptime", "Last Alert", "RUM Load Time"]}
        />
      </div>
    </>
  );
}
