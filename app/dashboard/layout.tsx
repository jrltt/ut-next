import { Sidebar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-300/20">
      <Sidebar />
      <div className="container  min-h-full px-0 sm:px-6 md:px-4 lg:mx-auto lg:px-16 lg:py-10">
        <main className="flex w-full flex-col">{children}</main>
      </div>
    </div>
  );
}
