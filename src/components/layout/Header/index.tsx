"use client";
import Search from "@/components/commons/Search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shopifyProducts", label: "Shopify Products" },
  { href: "/table", label: "DataTable Shadcn" },
  { href: "/ticket", label: "Ticket" },
  { href: "/react-hook-form", label: "React Form" },
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
    <nav className={`${styles.header} ${scrolled ? styles.scrolled : ""} `}>
      <div>
        <ul className={styles.navList}>
          <div className={styles.leftItems}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${styles.navItem} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </div>

          <li className={styles.navItem}>
            <FaSearch
              className={styles.searchIcon}
              onClick={() => setIsSearching(!isSearching)}
            />
          </li>
        </ul>
        <div className={styles.hamburger}>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent text-black">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isSearching && <Search placeholder="Search blogs..." />}
    </nav>
  );
}
