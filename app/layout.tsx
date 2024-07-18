import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

// const inter = Inter({ subsets: ["latin"] });
const popins = Poppins({subsets: ["latin"], weight: ["200","400","600","800"]});

export const metadata: Metadata = {
  title: "Posts Viewer",
  description: "View posts in a good manner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <NavbarComponent />
        {children}
        </body>
    </html>
  );
}
