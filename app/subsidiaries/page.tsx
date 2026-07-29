import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = {
  title: "شرکت‌های زیرمجموعه",
  description: "معرفی شرکت‌های تخصصی زیرمجموعه گروه صنعتی صباح.",
};

export default function SubsidiariesPage() {
  return <InnerPage page="subsidiaries" />;
}
