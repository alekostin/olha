import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo_full_transparent.png";

export default function Footer() {
  return (
    <footer id="contacts" className="footer py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Логотип */}
        <div className="mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" width={289} height={181} />
        </div>

        {/* Контакты */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Контакты</h2>
          <ul>
            <li>Email: info@example.com</li>
            <li>Телефон: +1 234 567 890</li>
            <li>Адрес: 1234 Main St, Anytown, USA</li>
          </ul>
        </div>

        {/* Имя создателя */}
        <div>
          <h2 className="text-lg font-bold">Создатель</h2>
          <p>Ольга Денёль</p>
          <Link href="https://linkedin.com/in/olgadenieul">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
