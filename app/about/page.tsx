import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = {
  title: "درباره هلدینگ",
  description: "معرفی گروه صنعتی صباح، ماموریت، چشم‌انداز و ساختار یکپارچه گروه.",
};

export default function AboutPage() {
  return <InnerPage page="about" />;
}
