import "@/styles/tailwind.css";
import { Inter, Manrope } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-project-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-project-display" });

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body>
    <Link href="/work" aria-label="Close project and return to selected work" title="Back to selected work" className="fixed right-4 top-4 z-[1000] grid size-11 place-items-center rounded-full border border-white/35 bg-[#182331]/80 text-2xl font-light leading-none text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:scale-105 hover:bg-[#182331] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6">×</Link>
    {children}
  </body></html>;
}
