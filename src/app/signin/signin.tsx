import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const status = { useSession };

  if (status === "authenticated") router.push("/dashboard");

  return <></>;
}
