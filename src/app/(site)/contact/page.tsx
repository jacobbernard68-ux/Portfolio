import PortfolioContactPage from "@/components/Portfolio/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jacob Bernard",
  description: "Contact Jacob Bernard about UX and interface design work.",
};

export default function ContactPage() {
  return (
    <PortfolioContactPage />
  );
}
