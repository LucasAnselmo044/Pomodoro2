import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Dashboard from "./dashboardClient";
import NavBar from "../components/navbar";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/");

  return <Dashboard />;
}
