import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIK-R CERIA DENSATGA",
  description:
    "Tempat curhat aman, tumbuh bareng tanpa takut dihakimi untuk remaja SMAN [NAMA SEKOLAH].",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
