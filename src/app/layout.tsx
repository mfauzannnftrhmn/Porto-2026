import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFF2F2",
};

export const metadata: Metadata = {
  title: "Muhammad Fauzan Faturrohman — Portfolio",
  description:
    "Portofolio Muhammad Fauzan Faturrohman, Mahasiswa S1 Teknik Informatika UBP Karawang, Software Engineer, Front-End Developer & UI/UX Designer.",
  keywords: ["portfolio", "creative developer", "UI/UX designer", "web development", "Muhammad Fauzan Faturrohman", "UBP Karawang"],
  authors: [{ name: "Muhammad Fauzan Faturrohman" }],
  openGraph: {
    title: "Muhammad Fauzan Faturrohman — Portfolio",
    description: "Software Engineer, Front-End Developer & UI/UX Designer.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
