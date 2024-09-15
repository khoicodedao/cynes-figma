import type { Metadata } from "next";
import "../styles/global.scss";
import MenuComponent from "@/app/components/menu";
import Footer from "@/app/components/footer";
export const metadata: Metadata = {
  title: "Cynes EDR",
  description: "EDR for everyone",
  icons: {
    icon: "/favicon.ico",
  },
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
        <Footer />
      </body>
    </html>
  );
}
