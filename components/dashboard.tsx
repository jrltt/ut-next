"use client";

import { logoutAction } from "@/actions/auth.action";
import Link from "next/link";

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/dashboard/checks">Checks</Link>
        </li>
        <li>
          <button onClick={() => logoutAction()}>Logout</button>
        </li>
      </ul>
    </>
  );
}
