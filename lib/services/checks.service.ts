import { getAccessToken } from "@/lib/services/auth.service";

const baseURL = "https://uptime.com/api/v1/";

export type Check = {
  pk: number;
  url: string;
  stats_url: string;
  alerts_url: string;
  share_url: string;
  name: string;
  cached_response_time: number;
  contact_groups: string[];
  created_at: Date;
  modified_at: Date;
  locations: string[];
  tags: string[];
  check_type: string;
  escalations: string;
  maintenance: string;
  monitoring_service_type: string;
  is_paused: boolean;
  is_under_maintenance: boolean;
  state_is_up: boolean;
  state_changed_at: Date;
  msp_protocol: string;
  msp_interval: number;
  msp_address: string;
  msp_port: number;
  msp_username: string;
  msp_proxy: string;
  msp_dns_server: string;
  msp_dns_record_type: string;
  msp_status_code: string;
  msp_send_string: string;
  msp_expect_string: string;
  msp_expect_string_type: string;
  msp_encryption: string;
  msp_threshold: number;
  msp_headers: string;
  msp_script: string;
  msp_version: number;
  msp_sensitivity: number;
  msp_num_retries: number;
  msp_use_ip_version: string;
  msp_uptime_sla: string;
  msp_response_time_sla: string;
  msp_notes: string;
  msp_include_in_global_metrics: boolean;
};

type CheckResults = {
  count: number;
  next: string;
  previous: string;
  results: Check[];
};
export async function getChecks(): Promise<CheckResults> {
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

export async function getCheck(pk: number): Promise<Check> {
  try {
    const result = await fetch(`${baseURL}checks/${pk}/`, {
      headers: { Authorization: `Token ${getAccessToken()}` },
    });
    if (!result.ok) {
      console.error("getCheck error", result);
      throw Error("Something goes wrong; getCheck error");
    }

    const data = result.json();

    return data;
  } catch (error) {
    console.error("getCheck error", error);
    throw error;
  }
}

export async function patchCheck(
  pk: number,
  check: Partial<Check>
): Promise<Check> {
  try {
    const result = await fetch(`${baseURL}checks/${pk}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(check),
    });
    const data = result.json();
    return data;
  } catch (error) {
    console.error("patchCheck error", error);
    throw error;
  }
}
