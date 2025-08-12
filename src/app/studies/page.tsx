import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Studies() {
  const session = await auth();
  if (!session) redirect("/");
  else {
    return <div>page</div>;
  }
}
