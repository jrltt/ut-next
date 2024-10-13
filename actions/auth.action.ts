"use server";

import { login as loginService } from "@/lib/services/auth.service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(data: { email: string; password: string }) {
  const response = await loginService(data);

  if (response?.access_token) {
    cookies().set("access_token", response.access_token);
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  cookies().delete("access_token");
  redirect("/login");
}
