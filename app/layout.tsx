import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DriveFlow",
  description:
    "An app for driving instructors to manage scheduling, availability, and cancellations — making it easier for both instructors and learners to book sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
