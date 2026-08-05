"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const pathname = usePathname();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => setNavigationOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-1000 flex min-h-[88px] items-center border-b transition-all duration-300 md:min-h-[120px] ${scrolled ? "border-[#2f3e5c]/12 bg-[#b7c5dd]/92 shadow-[0_16px_45px_rgba(31,41,55,0.10)] backdrop-blur-xl" : "border-transparent bg-[#b7c5dd]"}`}>
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-[60px] xl:px-0">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f3e5c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#b7c5dd] sm:gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/45 p-1.5 shadow-[0_8px_20px_rgba(31,41,55,0.10)] ring-1 ring-[#2f3e5c]/10 transition duration-300 group-hover:-rotate-2 group-hover:scale-105 sm:size-12">
            <Image src="/images/logo-jb-parallel.svg" alt="" width={48} height={48} priority className="size-full" />
          </span>
          <span>
            <span className="block truncate text-base font-semibold leading-5 tracking-[-0.025em] text-[#111] sm:text-xl">Jacob Bernard</span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#526985] sm:block">UX · Frontend · Systems</span>
          </span>
        </Link>

        <button type="button" onClick={() => setNavigationOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={navigationOpen} aria-controls="site-navigation" className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#2f3e5c]/15 bg-white/35 text-[#1f2937] transition hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f3e5c] sm:size-11 lg:hidden">
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${navigationOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${navigationOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${navigationOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <nav id="site-navigation" aria-label="Primary navigation" className={`${navigationOpen ? "flex" : "hidden"} absolute left-5 right-5 top-[76px] flex-col gap-2 rounded-2xl border border-[#2f3e5c]/10 bg-[#edf2f7]/96 p-3 shadow-[0_22px_60px_rgba(31,41,55,0.18)] backdrop-blur-xl sm:left-8 sm:right-8 lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none`}>
          {menuData.map((item) => {
            if (!item.path) return null;
            const active = pathname === item.path;
            return (
              <Link key={item.id} href={item.path} aria-current={active ? "page" : undefined} className={`relative rounded-xl px-4 py-3 text-xs font-bold tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f3e5c] lg:py-2.5 ${active ? "bg-[#1f2937] text-white shadow-[0_8px_20px_rgba(31,41,55,0.16)]" : "text-[#34445c] hover:bg-white/45 hover:text-[#111]"}`}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
