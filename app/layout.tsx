import "./globals.css";
import { ReactNode } from "react";
import SessionProvider from "@/app/context/SessionProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <div>{children}</div>
        </body>
      </SessionProvider>
    </html>
  );
}
