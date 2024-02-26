import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import MainNav from "@/components/MainNav";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gil Estates",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MainNav>{children}</MainNav>
      </body>
    </html>
  );
}
