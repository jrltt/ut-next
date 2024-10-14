"use client";

import { updateCheck } from "@/actions/checks.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "@/lib/services/checks.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// FIXME implement better validations
const FormSchema = z.object({
  name: z.string(),
  type: z.string(),
  contacts: z.array(z.string()),
  tags: z.array(z.string()).optional(),
  domain: z.string(),
  beforeExpiry: z.number(),
});
// FIXME pick props from check that are relevant to the form
function EditCheckForm({
  check,
  closeDialog,
}: {
  check: Check;
  closeDialog: () => void;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: check?.name ?? "",
      type: check?.check_type ?? "",
      contacts: check?.contact_groups ?? ["default"],
      domain: check?.msp_address ?? "",
      beforeExpiry: 20,
      tags: check?.tags ?? [],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await updateCheck(check.pk, { name: data.name });
    closeDialog();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 py-4"
      >
        <div className="col-span-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label>Name of check</Label>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name of check"
                    {...field}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-full">
          <p className="text-sm mb-2 font-bold">
            Check interval: 24 hours <span className="text-red-600">*</span>
          </p>
          <p className="text-xs text-slate-500">
            This check type monitors once every 24 hours. If your check is Down
            and you believe it should be Up, use the Monitor Entire Site Tool to
            test or confirm check status.
          </p>
        </div>
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Check of type <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="Check type"
                    {...field}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="contacts"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Contacts <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input disabled placeholder="Default" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input disabled {...field} defaultValue={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* TODO: missing tabs based on the check type */}
        <div className="col-span-full">Required</div>
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Domain <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="Domain"
                    {...field}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="beforeExpiry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Before expiry <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="201"
                    {...field}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-full">
          {check.check_type === "WHOIS" && (
            <>
              <p className="text-sm mb-2 font-bold">
                Whois info <span className="text-red-600">*</span>
              </p>
              <p className="bg-slate-200 p-4 rounded-sm">
                expires: 2025-05-20 nameservers:
                ns1085.ui-dns.biz,ns1085.ui-dns.com,ns1085.ui-dns.de,ns1085.ui-dns.org
                registrar: ionos se
              </p>
              <Button type="button" className="bg-blue-500 mt-2" disabled>
                Refresh
              </Button>
            </>
          )}
        </div>
        <DialogFooter className="col-span-full border-t border-t-slate-400 pt-6">
          <Button type="submit" className="bg-blue-500">
            Save
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-blue-500 text-blue-500"
            onClick={closeDialog}
          >
            Cancel
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

type DialogProps = { check: Check };

export function EditCheckDialog({ check }: DialogProps) {
  const [open, setOpen] = useState(false);

  function closeDialog() {
    setOpen(false);
  }

  function openDialog() {
    setOpen(true);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" onClick={openDialog}>
          Edit check
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="py-2 mb-2 border-b border-b-slate-300 text-2xl">
            Edit check
          </DialogTitle>
          <DialogDescription className="flex justify-between space-x-3">
            <Button
              className="w-full border-blue-500 text-blue-500"
              variant="outline"
            >
              Basic
            </Button>
            <Button disabled className="w-full" variant="outline">
              Advanced
            </Button>
            <Button disabled className="w-full" variant="outline">
              Escalations
            </Button>
            <Button disabled className="w-full" variant="outline">
              Maintenance
            </Button>
          </DialogDescription>
        </DialogHeader>
        <EditCheckForm {...{ check }} closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
}
