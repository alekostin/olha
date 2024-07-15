"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { RiHome2Line } from "react-icons/ri";

export default function MobileMenu({ links }) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset =
        targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after scrolling
  };

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0, transition: { delay: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    open: { opacity: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.5, delay: 4 } },
  };

  return (
    /* Mobile */
    <div>
      <button
        className="lg:hidden lg:opacity-0 flex flex-col justify-around w-6 h-6 bg-none border-none cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="w-6 h-[3px] bg-primary" />
        <span className="w-6 h-[3px] bg-primary" />
        <span className="w-6 h-[3px] bg-primary" />
      </button>

      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 w-full max-w-[390px] h-full bg-white shadow-left flex flex-col justify-center items-center z-[999]"
      >
        <button
          className="absolute top-[15px] right-[15px] text-5xl"
          onClick={toggleMenu}
        >
          ×
        </button>
        <motion.ul className="text-center mb-6">
          <motion.li className="mb-5" variants={linkVariants}>
            {/* Home */}
            <Link className="flex justify-center" href="/" onClick={toggleMenu}>
              <RiHome2Line className="text-5xl" />
            </Link>
          </motion.li>

          {/* Links */}
          {links.map((link, index) => {
            return (
              <motion.li key={index} variants={linkVariants}>
                <Link
                  className={`${link.path === pathname ? "border-b-2" : ""}`}
                  href={`#${link.path}`}
                  onClick={(e) => handleScroll(e, link.path)}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}

          {/* Button */}
          <motion.li className="mt-4" variants={linkVariants}>
            <Button onClick={toggleMenu}>S&apos;inscrire</Button>
          </motion.li>
        </motion.ul>
      </motion.nav>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/50 pointer-events-auto z-[998]"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={overlayVariants}
          onClick={toggleMenu}
        ></motion.div>
      )}
    </div>
  );
}
