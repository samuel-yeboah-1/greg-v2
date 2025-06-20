"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/services/auth.service";

export default function ProtectRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (!token) {
        router.replace("/auth/signin");
        return;
      }
      const valid = await verifyToken(token);
      if (!valid) {
        router.replace("/auth/signin");
        return;
      }
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  if (loading) return null;
  return <>{children}</>;
}

// This file is now unused. You can delete it if you wish.
