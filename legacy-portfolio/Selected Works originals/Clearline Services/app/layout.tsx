import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Clearline Services", description: "A responsive cleaning-service portfolio prototype by Jacob Bernard." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
