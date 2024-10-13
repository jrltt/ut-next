import Link from "next/link";

function Sidebar() {
  return (
    <nav className="bg-slate-900 text-white px-4 min-w-[250px]">
      <div className="font-extrabold text-xl text-center py-4">UT.com</div>
      <ul className="space-y-2">
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          Launchpad
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          Alerts
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          Monitoring
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          Reports
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          Status Pages
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          Secure Vault
        </li>
        <li className="rounded-3xl py-[15px] font-bold px-8 hover:bg-slate-500">
          IRM & On-Call
        </li>
      </ul>
    </nav>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="container bg-slate-300/20 min-h-full px-0 sm:px-6 md:px-4 lg:mx-auto lg:px-16 lg:py-10">
        <main className="flex w-full flex-col">{children}</main>
      </div>
    </div>
  );
}
