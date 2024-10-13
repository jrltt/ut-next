import { getAccessToken } from "@/lib/services/auth.service";

const baseURL = "https://uptime.com/api/v1/";

export async function getChecks() {
  try {
    const result = await fetch(`${baseURL}checks/`, {
      headers: { Authorization: `Token ${getAccessToken()}` },
    });
    if (!result.ok) {
      console.error("getChecks error", result);
      throw Error("Something goes wrong; getChecks error");
    }

    const data = result.json();

    return data;
  } catch (error) {
    console.error("getChecks error", error);
    throw error;
  }
}
