import { CheckCard } from "@/components/check-card";
import { Dashboard } from "@/components/dashboard";
import { Check, getChecks } from "@/lib/services/checks.service";

interface ChecksState {
  downChecks: Check[];
  pausedChecks: Check[];
  activeChecks: Check[];
  underMaintenanceChecks: Check[];
}
const checksReducer = (state: ChecksState, check: Check): ChecksState => {
  if (!check.state_is_up) {
    state.downChecks.push(check);
  }
  if (check.is_paused) {
    state.pausedChecks.push(check);
  } else {
    state.activeChecks.push(check);
  }
  if (check.is_under_maintenance) {
    state.underMaintenanceChecks.push(check);
  }
  return state;
};

export default async function DashboardPage() {
  const checks = await getChecks();

  const initialState = {
    downChecks: [],
    pausedChecks: [],
    activeChecks: [],
    underMaintenanceChecks: [],
  };

  const { downChecks, pausedChecks, activeChecks, underMaintenanceChecks } =
    checks.results.reduce(checksReducer, initialState);

  const checksMetrics = {
    down: downChecks.length,
    paused: pausedChecks.length,
    maintenance: underMaintenanceChecks.length,
  };

  return (
    <>
      <Dashboard metrics={{ checks: checksMetrics }} />
      <h4 className="text-2xl font-bold border-b border-b-slate-300 pb-6 mb-8">
        Checks
      </h4>
      <div className="flex space-x-6">
        {activeChecks.map((check) => (
          <CheckCard
            key={check.pk}
            {...{
              check: {
                created_at: check.created_at,
                msp_address: check.msp_address,
                name: check.name,
                pk: check.pk,
              },
            }}
          />
        ))}
      </div>
    </>
  );
}
