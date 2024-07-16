import Image from "next/image";
import AnimatedText from "../AnimatedText";
import Link from "next/link";
import hero from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container flex flex-col justify-end items-center md:flex-row md:justify-center md:items-end h-full">
        {/* Text */}
        <div className="flex flex-col justify-center items-center mb-[5px] px-[15px] md:h-full md:items-end md:mb-0 md:pt-16">
          <AnimatedText>
            <p className="text-center md:text-right text-sm">Spécialisée en</p>
            <h1 className="max-w-[260px] md:max-w-[220px] xl:max-w-[350px] mx-auto md:mr-0 text-2xl xl:text-5xl text-center md:text-right">
              Maquillage permanent <br className="" /> à Orléans
            </h1>
          </AnimatedText>

          <AnimatedText>
            <h2 className="max-w-[350px] lg:max-w-[300px] mb-2 md:ml-auto text-center md:text-right text-sm md:text-xl">
              Un look spectaculaire avec un accent sur les yeux en seulement 1,5
              heure dans notre studio !
            </h2>
          </AnimatedText>

          <AnimatedText>
            <Link
              href="#signin"
              className="md:ml-auto bg-primary rounded-3xl text-white px-5 py-2"
            >
              S&apos;inscrire
            </Link>
          </AnimatedText>
        </div>

        {/* Image */}

        {/* <AnimatedImage> */}
        <div className="hero__image ">
          <Image
            className="h-full w-auto object-cover"
            src={hero}
            alt="Tatouage des yeux et des flèches à Orléans"
            priority={true}
          />
        </div>
        {/* </AnimatedImage> */}

        {/* <div className="scroll-arrow relative right-0"></div> */}
      </div>
    </section>
  );
}
