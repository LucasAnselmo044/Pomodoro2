import { signOut } from "next-auth/react";
export default function SignOut() {
  return (
    <main>
      <div className="mt-auto">
        <h1 onClick={() => signOut({ callbackUrl: "/" })}>Sign out</h1>
      </div>
    </main>
  );
}
