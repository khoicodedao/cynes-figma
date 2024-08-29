import type { Metadata } from "next";
import "../styles/global.scss";
import MenuComponent from "@/app/components/menu";

export const metadata: Metadata = {
  title: "Cynes EDR",
  description: "EDR for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="main-container">
        <MenuComponent />
        {children}
      </body>
    </html>
  );
}
