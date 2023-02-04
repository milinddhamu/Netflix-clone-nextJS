import Topbar from "@/components/Topbar";
import "@/styles/globals.css";
import { Oswald } from "@next/font/google";
import { SessionProvider } from "next-auth/react";

const oswald = Oswald({
  weight: "200",
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main className={oswald.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
