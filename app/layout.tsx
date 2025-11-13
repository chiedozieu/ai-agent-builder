import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent AI Builder",
  description: "Generate and deploy AI agents with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body
          className={outfit.className}
        >
          <ConvexClientProvider>
            <Provider>{children}</Provider>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
