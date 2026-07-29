import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = {
  title: "توانمندی‌ها",
  description: "توانمندی‌های راهبردی، عملیاتی و تولیدی گروه صنعتی صباح.",
};

export default function CapabilitiesPage() {
  return <InnerPage page="capabilities" />;
}
