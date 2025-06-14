"use client";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/components/SignIn";
import { SignUpForm } from "@/components/SignUp";
import Image from "next/image";

export function AuthForm() {
  const pathname = usePathname();
  const currentPath = pathname.trim().split("/").at(-1);
  const isSignUp = currentPath === "signup";

  return (
    <div className="overflow-hidden p-0 h-dvh flex items-center justify-center">
      <div className="grid p-0 md:grid-cols-2 md:px-20">
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <div className="bg-muted relative hidden md:block">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="https://cendlos.gov.gh/training/wp-content/uploads/2024/10/What-is-Artiificial-IntelligenceAI.webp"
              alt="AI Background"
              fill
              priority
              className="object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
