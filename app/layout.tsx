import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./ChatWidget";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "곽민성 — 아이디어를 실행 결과물로 증명하는 개발자",
  description:
    "Java/Spring Boot 백엔드와 React 프론트엔드를 오가며, 아이디어를 직접 구현하고 검증하는 신입 개발자 곽민성의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-text antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
