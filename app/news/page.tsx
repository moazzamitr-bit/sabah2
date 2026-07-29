import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = {
  title: "اخبار",
  description: "تازه‌ترین اخبار، برنامه‌ها و رویدادهای گروه صنعتی صباح.",
};

export default function NewsPage() {
  return <InnerPage page="news" />;
}
