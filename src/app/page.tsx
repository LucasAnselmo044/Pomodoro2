import SignIn from "./components/signin";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (session) redirect("/dashboard");
  else {
    return (
      <main className="flex flex-col items-center justify-center bg-black min-h-screen">
        <div className="text-3xl">
          <h1>
            Hello, welcome to Pomodoros. A site to help you on study focus. To
            proceed, please click on the button above to login:
          </h1>
        </div>
        <SignIn />
      </main>
    );
  }
}
