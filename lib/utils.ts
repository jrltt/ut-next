import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Available types:
// HTTP, HTTP_POC, RUM2, ICMP, SSH, TCP, UDP, DNS, SMTP, POP, IMAP, NTP, BLACKLIST, WHOIS, MALWARE, SSL_CERT, TRANSACTION, API, HEARTBEAT, WEBHOOK, GROUP, PAGESPEED, CLOUDSTATUS
export function renderLabelType(type: string) {
  const availableTypes = {
    WHOIS: "Whois/Domain Expiry",
    HTTP: "HTTP(S)",
    PAGESPEED: "Page speed",
  };
  return availableTypes[type as keyof typeof availableTypes] ?? "Unknown";
}
