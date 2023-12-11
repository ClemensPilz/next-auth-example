import AuthInfo from "./components/AuthInfo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Next-Auth basic example</h1>
      <h2 className="text-2xl mb-4">
        How to setup next-auth with next 13 and app-router
      </h2>
      <p className="mb-4">
        You can use the auto-generated routes{" "}
        <Link href={"/api/auth/signin"} className="text-red-400 font-bold">
          'api/auth/signin'
        </Link>{" "}
        and
        <Link href={"/api/auth/signout"} className="text-red-400 font-bold">
          'api/auth/signout'
        </Link>{" "}
        to sign in or out with GitHub.
      </p>
      <h3 className="text-xl">Below is your authentification-status:</h3>
      <AuthInfo />
    </div>
  );
}
