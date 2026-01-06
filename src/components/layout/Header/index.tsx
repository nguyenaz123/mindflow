"use client";
import Search from "@/components/commons/Search";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shopifyProducts", label: "Shopify Products" },
  { href: "/table", label: "DataTable Shadcn" },
  { href: "/ticket", label: "Ticket" },
  { href: "/react-hook-form", label: "React Form" },
  { href: "/dumbdream", label: "Dumb Dream" },
];
export default function Header() {
  const pathname = usePathname();
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav >
      <div className="flex items-center justify-between w-full border-b-2 border-white border-solid ">
        <div className={styles.hamburger}>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent text-white cursor-pointer">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="max-w-2/3 pt-15 [&_button_svg]:hidden [&_button_span]:hidden [&_focus]:none  [&_button:focus]:ring-0"
            >
              <SheetHeader className="py-0">
                <SheetTitle>MindFlow</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className={styles.navListMobile}>
                {navLinks.map((link) => (
                  <li key={link.href} className={styles.liMobile}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </div>
              <FaSearch
                className={styles.searchIcon}
                onClick={() => setIsSearching(!isSearching)}
              />
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/dumbdream" className="text-xl absolute left-1/2 transform -translate-x-1/2">DUMB DREAM</Link>      </div>

      {isSearching && <Search placeholder="Search blogs..." />}
    </nav>
  );
}