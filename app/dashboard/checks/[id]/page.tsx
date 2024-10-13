import { Button } from "@/components/ui/button";
import { getCheck } from "@/lib/services/checks.service";
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
    <div className="container">
      <div className="flex justify-between border-b border-b-slate-300 pb-8 mb-8">
        <h1 className="font-bold text-2xl flex items-center">
          Check Analysis{" "}
          <pre className="bg-red-200/50 text-xs rounded-md ml-4 p-1 text-orange-400">
            {params.id}
          </pre>
        </h1>
        <div className="flex space-x-2">
          <Button type="button" variant="outline">
            <Share2 className="h-4 w-4" />
            Share Check Analysis <ChevronDownIcon />
          </Button>
          <EditCheckDialog id={details.pk} />
          <Button type="button" variant="outline">
            Download <ChevronDownIcon />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-9">
          <h4>{details.name}</h4>
          {/* <pre>{JSON.stringify(details, null, 2)}</pre> */}
        </div>
        <div className="col-span-3">
          <div className="p-6 border space-y-4">
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
          <div className="p-6 border">
            <h5 className="uppercase text-xs font-bold">Uptime</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
