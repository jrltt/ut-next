"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const FormSchema = z.object({
  name: z.string(),
  type: z.string(),
  contacts: z.array(z.string()),
  tags: z.string().optional(),
  domain: z.string(),
  beforeExpiry: z.number(),
  whoIsInfo: z.boolean(),
});

function EditCheckForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      type: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("You submitted the following values:", data);
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
                <FormLabel>Name of check</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Name of check" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-full">
          <p className="text-sm mb-2">
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
                  <Input disabled placeholder="Check type" {...field} />
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
                  <Input disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
                  <Input disabled placeholder="Domain" {...field} />
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
                  <Input disabled placeholder="201" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-full">
          <p>
            expires: 2025-05-20 nameservers:
            ns1085.ui-dns.biz,ns1085.ui-dns.com,ns1085.ui-dns.de,ns1085.ui-dns.org
            registrar: ionos se
          </p>
          <Button type="button">Refresh</Button>
        </div>
      </form>
    </Form>
  );
}

interface DialogProps {
  id: number;
  checkType?: string;
}

export function EditCheckDialog({ id, checkType }: DialogProps) {
  console.log(id, checkType);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          Edit check
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="py-2 mb-2 border-b border-b-slate-300 text-2xl">
            Edit check
          </DialogTitle>
          <DialogDescription className="flex justify-between space-x-3">
            <Button className="w-full" variant="outline">
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
        <EditCheckForm />
        <DialogFooter>
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
