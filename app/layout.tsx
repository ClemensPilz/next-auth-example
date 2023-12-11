import "./globals.css";
import { ReactNode } from "react";
import NextAuthProvider from "./context/NextAuthProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>
          <div>{children}</div>
        </body>
      </NextAuthProvider>
    </html>
  );
}
