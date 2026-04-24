import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JayceHuang | 小木",
  description: "用 AI 赋能业务，打造超级个体。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
