"use client";
import Search from "@/components/commons/Search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";
import { AppSidebar } from "../AppSidebar/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];
export default function Header() {
  const pathname = usePathname();
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false)
  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  const handleClick = ()=>{
      setOpen(!open)
      setHamburgerClicked(!hamburgerClicked)
      console.log(open)

  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${styles.header} ${scrolled ? styles.scrolled : "" } ${hamburgerClicked ? styles.hamburgerClicked : ""}`}>
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
          <button onClick={()=>handleClick()} ><Menu/></button>
          {open && (
          <div className={styles.navListMobile}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={styles.liMobile}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </div>
          )}
        </div>
      </div>

      {isSearching && <Search placeholder="Search blogs..." />}
    </nav>
  );
}
