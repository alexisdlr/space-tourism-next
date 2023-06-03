import { Barlow } from "./fonts";
import "./globals.css";

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
      <body className={Barlow.className}>{children}</body>
    </html>
  );
}
