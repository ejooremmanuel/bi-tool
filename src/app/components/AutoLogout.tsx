"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AutoLogout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  //   useEffect(() => {}, [status, router]);

  useEffect(() => {
    console.log(status, ":::>><<<");

    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (
      !session ||
      (
        session.user as {
          rememberMe: boolean;
        }
      )?.rememberMe
    )
      return; // Skip logout if "Keep me logged in" is checked

    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        signOut({
          callbackUrl: "/",
        });
      }, 60000); // 1 minute = 60,000ms
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    resetTimer(); // Start countdown on component mount

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, [session, router, status]);

  if (status === "loading") {
    return <>Loading</>;
  }
  if (status === "unauthenticated") {
    return <>Loading</>;
  }

  if (status === "authenticated") return <>{children}</>; // No UI needed
}
