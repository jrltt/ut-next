"use server";

import { Check, patchCheck } from "@/lib/services/checks.service";
import { redirect } from "next/navigation";

export async function updateCheck(pk: number, check: Partial<Check>) {
  await patchCheck(pk, check);

  redirect("/dashboard");
}
