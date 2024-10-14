import { LoginForm } from "@/components/login-form";
import { MessageSquareCode } from "lucide-react";

export default async function LoginPage() {
  return (
    <div className="h-svh w-svw flex items-center justify-center bg-[#235964]">
      <div className="w-[520px] p-24 rounded-lg border bg-white flex items-center flex-col">
        <div className="rounded-xl bg-gradient-to-tr from-green-400 w-16 h-16 flex items-center justify-center mb-4">
          <MessageSquareCode className="w-8 h-8" strokeWidth={1} />
        </div>
        <h1 className="uppercase text-3xl mb-6 ">
          <span className="font-bold">UT</span>.com
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
