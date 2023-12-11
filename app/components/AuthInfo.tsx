"use client";

import { useSession } from "next-auth/react";

export default function AuthInfo() {
  const { data: session, status } = useSession();
  return (
    <div className="p-4 my-4 border border-lg border-black rounded w-fit ms-4">
      <div>Your login status: {status}</div>
      <div>
        Your name: {status === "authenticated" ? session.user?.name : "Unknown"}
      </div>
    </div>
  );
}
