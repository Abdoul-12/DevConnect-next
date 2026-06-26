import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevConnect",
  description: "Le portail de portfolios des développeurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
