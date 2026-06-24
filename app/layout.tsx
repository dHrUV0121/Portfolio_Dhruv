import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dhruv Jain — Full Stack Developer",
  description:
    "Full Stack Developer (MERN) and B.Tech CSE (AI) student at KIET. Building scalable web applications with React, Node.js, and MongoDB. Experienced in Generative AI, RAG pipelines, and real-time systems.",
  generator: "Next.js",
  applicationName: "Dhruv Jain",
  keywords: [
    "full stack developer",
    "MERN stack",
    "react",
    "node.js",
    "mongodb",
    "frontend",
    "backend",
    "developer",
    "software engineer",
    "AI",
    "generative AI",
    "RAG",
    "python",
    "portfolio",
    "full stack developer portfolio",
    "web developer",
    "KIET",
    "Dhruv Jain",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Dhruv Jain — Full Stack Developer",
    description:
      "Full Stack Developer (MERN) and B.Tech CSE (AI) student at KIET. Building scalable web applications and AI-powered solutions.",
    url: "https://dhruvjain.dev/",
    siteName: "dhruvjain.dev",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Jain — Full Stack Developer",
    description:
      "Full Stack Developer (MERN) and B.Tech CSE (AI) student at KIET. Building scalable web applications and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
