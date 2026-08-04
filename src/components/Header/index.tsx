"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

    const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-1000 flex min-h-[88px] w-full items-center bg-[#b7c5dd] text-[#111] md:min-h-[120px] ${
          stickyMenu
            ? "border-b border-[#2f3e5c]/10 py-4! shadow-[0_8px_30px_rgba(47,62,92,0.08)] transition duration-200 lg:py-0!"
            : "py-5 lg:py-0"
        }`}
      >
        <div className="relative mx-auto w-full max-w-[1200px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0">
          <div className="flex w-full items-center justify-between lg:w-1/4">
            <Link href="/">
              <span className="text-xl font-semibold leading-6 text-[#1f2937] md:text-2xl">
                Jacob Bernard
              </span>
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
                className="block rounded-md p-2 lg:hidden"
                aria-label="Toggle navigation"
                aria-expanded={navigationOpen}
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-[#1f2937] delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-[#1f2937] delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-[#1f2937] delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-[#1f2937] delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-[#1f2937] duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-3/4 ${
              navigationOpen
                ? "visible! relative mt-4 h-auto! max-h-[400px] overflow-y-auto rounded-xl bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
                : ""
            }`}
          >
            <nav className="ml-auto">
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
                {menuData.map((menuItem, key) => (
                  <li
                    key={key}
                    className={`nav__menu group relative ${
                      stickyMenu ? "lg:py-4" : "lg:py-7"
                    }`}
                  >
                    {menuItem.submenu ? (
                      <DropDown menuItem={menuItem} />
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={`relative rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/60 hover:text-[#111] ${
                          pathUrl === menuItem.path
                            ? "text-[#111]"
                            : "text-[#1f2937]"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden">
              {false ? (
                <>
                  <p>{""}</p>
                  <button
                    aria-label="Sign Out button"
                    onClick={() => void 0}
                    className="text-sm text-[#1f2937] hover:text-[#111]"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="text-sm text-[#1f2937] hover:text-[#111]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="relative flex items-center gap-1.5 rounded-lg bg-[#2f3e5c] px-4.5 py-2.5 text-sm text-white shadow-[0_8px_24px_rgba(47,62,92,0.18)] transition hover:bg-[#253149]"
                  >
                    Sign up
                    <svg
                      className="mt-0.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

