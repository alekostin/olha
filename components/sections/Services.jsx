import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import service1 from "@/public/service1.jpg";
import service2 from "@/public/service2.jpg";
import service3 from "@/public/service3.jpg";
import service4 from "@/public/service4.jpg";

import SliderServices from "../SliderServices";
import AnimatedSlider from "../SliderServices";

export default function Services() {
  return (
    <section className="services min-h-screen md:flex md:justify-between md:items-center">
      <div className="container">
        <div className="md:w-[50%]">
          <h2 className="title">Services</h2>
        </div>
        <div className="md:w-[50%] px-[15px]">
          {/* Slider */}
          <AnimatedSlider />

          {/* <ul className="flex gap-4 flex-wrap justify-between items-center px-3">
          <li className="max-w-[250px] md:w-[45%]">
            <Link href="#">
              <Image src={service2} alt="Photo" />
              Цены и услуги
            </Link>
          </li>
          <li className="max-w-[250px] md:w-[45%]">
            <Link href="#">
              <Image src={service3} alt="Photo" />
              Обучение
            </Link>
          </li>
          <li className="max-w-[250px] md:w-[45%]">
            <Link href="#">
              <Image src={service4} alt="Photo" />
              Контакты
            </Link>
          </li>
          <li className="max-w-[250px] md:w-[45%]">
            <Link href="#">
              <Image src={service4} alt="Photo" />
              Контакты
            </Link>
          </li>
          <li className="max-w-[250px] md:w-[45%]">
            <Link href="#">
              <Image src={service4} alt="Photo" />
              Контакты
            </Link>
          </li>
        </ul> */}
        </div>
      </div>
    </section>
  );
}
