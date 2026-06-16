import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "현성의 공간",
  description: "독서, 투자, 군대, 운동, 잡생각을 기록합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#fafafa]">
        <Header />
        <main className="max-w-2xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
