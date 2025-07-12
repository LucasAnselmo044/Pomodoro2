import SignIn from "./components/signin";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session) redirect("/dashboard");
  return (
    <main>
      <div>Hello! to proceed, please click on the button above to login:</div>
      <SignIn />
    </main>
  );
}
