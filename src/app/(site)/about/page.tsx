import PortfolioAboutPage from "@/components/Portfolio/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jacob Bernard",
  description: "About Jacob Bernard and his approach to UX and interface design.",
};

const AboutPage = () => {
  return (
    <PortfolioAboutPage />
  );
};

export default AboutPage;
