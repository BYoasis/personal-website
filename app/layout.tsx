import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://byydoujr.cn"),
  title: "BY 个人网站 | 李邦一",
  description: "李邦一 / BY 的个人网站，记录海外增长、产品运营、社区运营与个人项目。",
  keywords: ["李邦一", "BY", "产品运营", "海外增长", "社区运营", "个人作品集"],
  authors: [{ name: "李邦一" }],
  icons: {
    icon: "/assets/avatar-hamster.png",
    apple: "/assets/avatar-hamster.png",
  },
  openGraph: {
    title: "BY 个人网站 | 李邦一",
    description: "从真实问题出发，把想法做成可以使用的项目。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/assets/by-world-banner.png", width: 2120, height: 742, alt: "BY 个人网站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BY 个人网站 | 李邦一",
    description: "从真实问题出发，把想法做成可以使用的项目。",
    images: ["/assets/by-world-banner.png"],
  },
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
