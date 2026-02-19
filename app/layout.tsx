import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageTransition from "@/components/animations/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. John Smith - Premium Medical Care",
  description: "Expert medical consultation and premium healthcare services",
  keywords: "doctor, medical, healthcare, consultation, clinic",
  authors: [{ name: "Dr. John Smith" }],
  openGraph: {
    title: "Dr. John Smith - Premium Medical Care",
    description: "Expert medical consultation and premium healthcare services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
