"use server";

import * as authService from "@/lib/services/auth.service";
import { redirect } from "next/navigation";

export async function login(data: { email: string; password: string }) {
  await authService.login(data);

  redirect("/dashboard");
}

export async function logoutAction() {
  authService.logout();
  redirect("/login");
}
