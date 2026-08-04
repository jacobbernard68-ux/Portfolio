import PortfolioWorkPage from "@/components/Portfolio/WorkPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Jacob Bernard",
  description: "Selected UX and visual design work by Jacob Bernard.",
};

export default function WorkPage() {
  return (
    <PortfolioWorkPage />
  );
}
