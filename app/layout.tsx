import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sterling Insurance Group | Comprehensive Insurance Solutions",
  description: "Trusted insurance agency providing life, health, auto, home, and business coverage. Protecting what matters most for over three decades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
