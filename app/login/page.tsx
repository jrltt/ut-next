import { LoginForm } from "@/components/login-form";

export default async function LoginPage() {
  return (
    <div className="h-svh w-svw flex items-center justify-center">
      <div className="w-[520px] p-24 rounded-lg border">
        <h1>UT.com</h1>
        <LoginForm />
      </div>
    </div>
  );
}
