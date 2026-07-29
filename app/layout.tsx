import type { Metadata } from "next";
import "vazirmatn/Vazirmatn-font-face.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sabahholding.com"),
  title: {
    default: "گروه صنعتی صباح | هلدینگ یکپارچه صنعت لبنیات",
    template: "%s | گروه صنعتی صباح",
  },
  description:
    "گروه صنعتی صباح؛ هلدینگی یکپارچه و پیشرو در تولید، بسته‌بندی، توزیع و فروش محصولات لبنی ایران.",
  keywords: [
    "گروه صنعتی صباح",
    "هلدینگ صباح",
    "صنعت لبنیات",
    "تولید محصولات لبنی",
    "زنجیره ارزش",
  ],
  openGraph: {
    title: "گروه صنعتی صباح",
    description: "قدرت یک زنجیره کامل در صنعت لبنیات",
    locale: "fa_IR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
