import type { Metadata } from "next";
import { Italiana } from "next/font/google";
import "./globals.css";

// Italiana font for the whole site
const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

export const metadata: Metadata = {
  title: "Ukiyo Virginia",
  description: "Ukiyo Nightlife Virginia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${italiana.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}





