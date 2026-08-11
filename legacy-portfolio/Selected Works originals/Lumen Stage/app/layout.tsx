import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Lumen Stage", description: "A responsive editorial festival portfolio prototype by Jacob Bernard." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
