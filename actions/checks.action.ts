"use server";

import { Check, patchCheck } from "@/lib/services/checks.service";
import { redirect } from "next/navigation";

export async function updateCheck(pk: number, check: Partial<Check>) {
  const data = await patchCheck(pk, check);
  console.log("patchCheck", data);

  redirect("/dashboard/checks");
}
