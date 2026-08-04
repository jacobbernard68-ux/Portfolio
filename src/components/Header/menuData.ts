import { Menu } from "@/types/menu";

// Portfolio navigation only. Template routes remain available by direct URL.
const menuData: Menu[] = [
  {
    id: 1,
    title: "HOME",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "WORK",
    newTab: false,
    path: "/work",
  },
  {
    id: 3,
    title: "ABOUT",
    newTab: false,
    path: "/about",
  },
  {
    id: 4,
    title: "CONTACT",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
