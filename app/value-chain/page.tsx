import type { Metadata } from "next";
import { InnerPage } from "../components/InnerPage";

export const metadata: Metadata = {
  title: "زنجیره ارزش",
  description: "زنجیره ارزش یکپارچه گروه صنعتی صباح از تأمین تا فروش.",
};

export default function ValueChainPage() {
  return <InnerPage page="value-chain" />;
}
