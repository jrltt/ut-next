import { Button } from "@/components/ui/button";
import { getCheck } from "@/lib/services/checks.service";
import { renderLabelType } from "@/lib/utils";
import { format, formatDistance } from "date-fns";
import { ChevronDownIcon, Share2 } from "lucide-react";
import { EditCheckDialog } from "../components/edit-check-dialog";

export default async function CheckIdPage({
  params,
}: {
  params: { id: string };
}) {
  const details = await getCheck(+params.id);

  return (
    <>
      <div className="flex justify-between border-b border-b-slate-300 pb-8 mb-8">
        <h1 className="font-bold text-2xl flex items-center">
          Check Analysis{" "}
          <pre className="bg-red-200/50 text-xs rounded-md ml-4 p-1 text-orange-400">
            {params.id}
          </pre>
        </h1>

        <div className="flex space-x-2">
          <Button type="button" disabled variant="outline">
            <Share2 className="h-4 w-4" />
            Share Check Analysis <ChevronDownIcon />
          </Button>
          <EditCheckDialog {...{ check: details }} />
          <Button
            disabled
            type="button"
            variant="outline"
            className="bg-blue-500 text-white"
          >
            Download <ChevronDownIcon />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-9">
          <div className="p-6 bg-white border border-b-0 border-slate-300 space-y-4">
            <h4 className="text-xl text-blue-600 font-bold">{details.name}</h4>
            <span className="text-sm text-black font-bold">
              {details.msp_address} / {renderLabelType(details.check_type)}
            </span>
          </div>
          <div className="p-6 bg-white border border-b-0 border-slate-300 space-y-4">
            <h6 className="font-bold">
              Details - render component based on `check_type`
            </h6>
            <div className="bg-slate-200 text-slate-500 p-4 rounded-md w-full h-12 flex items-center">
              Placeholder based on check_type: {details.check_type}
            </div>
          </div>
          <div className="p-6 bg-white border border-b-0 border-slate-300 space-y-4">
            <h6 className="font-bold">
              Uptime{" "}
              <span className="text-slate-400 text-sm">last 24 hours</span>
            </h6>
            <div className="bg-slate-200 text-slate-500 p-4 rounded-md w-full h-12 flex items-center">
              Uptime component placeholder
            </div>
          </div>
          <div className="p-6 bg-white border border-slate-300 space-y-4">
            <div className="flex justify-between items-center border-b border-b-slate-400 pb-2 font-semibold">
              <h6 className="w-48">Alert log</h6>
              <span className="text-sm flex-1">Reason</span>
              <span className="w-32 text-sm">Duration</span>
            </div>
            <p className="text-sm">No alerts in this period.</p>
          </div>
        </div>
        <div className="col-span-3 border bg-white">
          <div className="p-6 border-b space-y-4">
            <h5 className="uppercase text-xs font-bold">Current status</h5>
            <p className="text-green-400">
              {details.state_is_up ? "Up" : "Down"}
            </p>
            <p className="text-xs flex flex-col">
              For{" "}
              {formatDistance(
                new Date(details.created_at),
                new Date(details.modified_at),
                { includeSeconds: true, addSuffix: true }
              )}
              <span className="text-slate-500 mt-2">
                (
                {format(
                  new Date(details.created_at),
                  "MMM. dd, yyyy - hh:mm:ss a 'GMT'xxx''"
                )}
                )
              </span>
            </p>
          </div>
          <div className="p-6 space-y-4 border-b">
            <h5 className="uppercase text-xs font-bold">Uptime</h5>
            <p className="text-green-400">100%</p>
            <Button type="button" variant="outline" className="w-full" disabled>
              Install Widget
            </Button>
          </div>
          <div className="p-6 space-y-4 border-b">
            <h5 className="uppercase text-xs font-bold">Downtime</h5>
            <p className="text-slate-400">None recorded</p>
          </div>
          <div className="p-6 space-y-4 border-b">
            <h5 className="uppercase text-xs font-bold">Latest downtime</h5>
            <p className="text-slate-400">None recorded</p>
          </div>
          <div className="p-6 space-y-4 border-b">
            <h5 className="uppercase text-xs font-bold">Alert analysis</h5>
            <Button
              type="button"
              variant="outline"
              className="w-full bg-blue-500 text-white"
              disabled
            >
              Real-Time Analysis
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
