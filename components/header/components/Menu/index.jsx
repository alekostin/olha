"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu";

const Links = [
  {
    name: "À propos",
    path: "apropos",
  },
  {
    name: "Prix",
    path: "prix",
  },
  {
    name: "Éducation",
    path: "/education",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

export default function Menu() {
  const pathname = usePathname();

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset =
        targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      {isDesktop ? (
        <nav className="w-full hidden lg:block">
          <ul className="flex gap-4 justify-center items-center w-full h-[50px] px-3 text-primary">
            {Links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    className={`${link.path === pathname && "border-b-2"}`}
                    href={`#${link.path}`}
                    onClick={(e) => handleScroll(e, link.path)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        <MobileMenu links={Links} />
      )}
    </>
  );
}
