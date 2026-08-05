import PortfolioWorkPage from "@/components/Portfolio/WorkPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work · Classic Layout | Jacob Bernard",
  description: "The original grid presentation of selected work by Jacob Bernard.",
};

export default function ClassicWorkPage() {
  return <PortfolioWorkPage />;
}
