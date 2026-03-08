import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chao Xie | Computational Psychiatry & Neuroscience",
    template: "%s | Chao Xie",
  },
  description:
    "Chao Xie (谢超) — Researcher in Computational Psychiatry and Cognitive Neuroscience at Tsinghua University. Using brain imaging and computational models to understand human cognition and mental health.",
  keywords: [
    "Chao Xie",
    "谢超",
    "Computational Psychiatry",
    "Cognitive Neuroscience",
    "Neuroimaging",
    "fMRI",
    "Tsinghua University",
    "Machine Learning",
    "Mental Health",
  ],
  authors: [{ name: "Chao Xie", url: "https://xiec199.github.io" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chao Xie | Neuroscience Research",
    title: "Chao Xie | Computational Psychiatry & Neuroscience",
    description:
      "Researcher in Computational Psychiatry and Cognitive Neuroscience at Tsinghua University.",
  },
  twitter: {
    card: "summary",
    title: "Chao Xie | Computational Psychiatry",
    description:
      "Researcher in Computational Psychiatry and Cognitive Neuroscience at Tsinghua University.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#0f172a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
