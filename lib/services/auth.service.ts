import { cookies } from "next/headers";

const baseURL = "https://uptime.com/api/v1/";

interface LoginProps {
  email: string;
  password: string;
}
export async function login({ email, password }: LoginProps) {
  try {
    const result = await fetch(`${baseURL}auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!result.ok) {
      console.error("login error", result);
      throw Error("Something goes wrong; login error");
    }

    const data = await result.json();
    cookies().set("access_token", data.access_token);

    return data;
  } catch (error) {
    console.error("login error", error);
    throw error;
  }
}

export async function logout() {
  cookies().delete("access_token");
}

export function getAccessToken(): string {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;
  if (!token) throw new Error("Something goes wrong; no access token found");

  return token;
}
