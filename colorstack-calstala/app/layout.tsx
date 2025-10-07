
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colorstack @ Cal State LA",
  description: "ColorStack chapter website for Cal State LA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
