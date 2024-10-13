"use client";

import { logoutAction } from "@/actions/auth.action";

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => logoutAction()}>Logout</button>
    </>
  );
}
