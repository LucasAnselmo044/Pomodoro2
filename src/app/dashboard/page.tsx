import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Dashboard from "./dashboardClient";

export default async function DashboardPage() {
  const session = await auth();

  return <Dashboard />;
}
