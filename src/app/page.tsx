import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginButtons from "./components/LoginButtons.";

export default async function page() {
  const session = await auth();
  if (session) redirect("/dashboard");
  else {
    return (
      <main className="flex flex-col items-center justify-center bg-black min-h-screen">
        <div className="text-3xl">
          <h1>
            Hello, welcome to Pomodoros. A site to help you on study focus. To
            proceed, please click on the button above to login if you want to
            save your study progress:
          </h1>
        </div>
        <LoginButtons />
      </main>
    );
  }
}
