import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباط با دفتر مرکزی گروه صنعتی صباح.",
};

export default function ContactPage() {
  return <InnerPage page="contact" />;
}
