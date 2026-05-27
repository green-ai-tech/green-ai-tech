import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green AI Tech | AI Engineer",
  description:
    "AI Engineer and LLM Application Developer building EduAgent, StockAgent, RAG systems, multi-agent workflows, and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
