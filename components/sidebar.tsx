"use client";

import { logoutAction } from "@/actions/auth.action";
import Link from "next/link";
import { Button } from "./ui/button";

export function Sidebar() {
  return (
    <div className="flex flex-col">
      <nav className="bg-slate-900 text-white px-4 min-w-[250px] min-h-auto h-full">
        <div className="font-extrabold text-xl text-center py-4">UT.com</div>
        <ul className="space-y-2">
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            Launchpad
          </li>
          <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            Alerts
          </li>
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            Monitoring
          </li>
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            Reports
          </li>
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            Status Pages
          </li>
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            Secure Vault
          </li>
          <li className="cursor-not-allowed text-slate-300 rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
            IRM & On-Call
          </li>
        </ul>
      </nav>
      <Button
        className="mt-auto bg-slate-900 text-white rounded-none"
        variant="outline"
        onClick={() => {
          logoutAction();
        }}
      >
        Log out
      </Button>
    </div>
  );
}
