import type { Metadata } from "next";

import "../components/globals.css";
import Header from "./_components/Header";
import { inter } from "@/components/fonts";
import ThemeProvider from "./_components/ThemeProvider";

export const metadata: Metadata = {
  title: "Svatbogram",
  description: "Svatební aplikace pro fotky a videa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs-cz">
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider>
          <Header />

          <div className="container mx-auto bg-cool-white min-h-[calc(100vh-4rem)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
