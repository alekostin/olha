import Image from "next/image";

import Logo from "@/public/logo_full_transparent.png";
import Menu from "./components/Menu";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AnimatedHeader from "../AnimatedHeader";

export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 w-full overflow-hidden z-50">
      <div className="container">
        <div className="h-[80px] flex flex-row justify-between items-center">
          <AnimatedHeader>
            <ul className="flex flex-col gap-2 text-[1.25rem] md:flex-row">
              <li>
                <Link
                  href="https://www.facebook.com/olga.denieul"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/olga_denieul/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </AnimatedHeader>
          <AnimatedHeader>
            <Link href="/">
              <div className="w-[106px] h-[66px]">
                <Image
                  className="h-full object-cover"
                  src={Logo}
                  priority
                  alt="Logo"
                  width={289}
                  height={181}
                />
              </div>
            </Link>
          </AnimatedHeader>

          <AnimatedHeader>
            <Menu />
          </AnimatedHeader>
        </div>
      </div>
    </header>
  );
}
