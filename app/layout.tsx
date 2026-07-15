import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BY 个人网站 | 李邦一",
  description: "李邦一 / BY 的个人数字名片、作品集与 Vibe Coding 展示站。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
