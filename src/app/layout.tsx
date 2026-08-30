import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { STUDENT_INFO } from "@/lib/student-config";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: `Realbugz — Eldoria Expedition Registration | ${STUDENT_INFO.fullNameThai}`,
  description: "Software Testing Bug Hunting Simulator — Realbugz Thai & English Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between bg-[#f7f3eb] dark:bg-[#1a1917] font-sans text-stone-800 dark:text-stone-200 antialiased selection:bg-amber-200 selection:text-amber-950">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster position="top-right" richColors closeButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
