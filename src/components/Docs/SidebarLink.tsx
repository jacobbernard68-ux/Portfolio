"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const pathUrl = usePathname();

  return (
    <li>
      <Link
        href={`/docs/${post?.slug}`}
        className={`block rounded-md px-3 py-2.5 font-medium duration-300 hover:bg-[#b7c5dd]/40 hover:text-[#111] ${
          pathUrl === `/docs/${post?.slug}` ? "bg-[#b7c5dd]/55 text-[#111]" : ""
        }`}
      >
        {post?.title}
      </Link>
    </li>
  );
};

export default SidebarLink;
