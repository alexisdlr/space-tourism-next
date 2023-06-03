import Navbar from "@/components/Header";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Space Tourism Website",
  description: "Challenge from FrontendMentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
