import Image from "next/image";
import link from "@/public/pinterest1.jpeg";

import AnimatedImage from "../AnimatedImage";

export default function About_PM() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row">
          <AnimatedImage>
            <div className="about__image ">
              <Image
                className="h-full w-auto object-cover"
                src={link}
                alt="Tatouage des yeux et des flèches à Orléans"
                priority={true}
              />
            </div>
          </AnimatedImage>

          <AnimatedImage>
            <div className="about__image ">
              <Image
                className="h-full w-auto object-cover"
                src={link}
                alt="Tatouage des yeux et des flèches à Orléans"
                priority={true}
              />
            </div>
          </AnimatedImage>

          <div>
            <h2 className="title lg:max-w-[570px] lg:ml-auto">
              Sublimez Votre Beauté avec le Maquillage Permanent par Olga
              Denieul
            </h2>
            <p className="mb-4 lg:mb-6">
              Vous en avez assez de dessiner des lignes sur vos yeux chaque
              jour, de mettre du rouge à lèvres qui laisse des traces sur chaque
              surface qu'il touche, de retoucher vos sourcils tout en veillant à
              ce que votre maquillage reste impeccable tout au long de la
              journée ? Arrêtez de vous tourmenter ! Il y a une solution : optez
              pour le maquillage permanent et oubliez les cosmétiques que vous
              utilisiez auparavant pendant plusieurs années. Le maquillage
              permanent est une puissante alternative à tout type de maquillage.
            </p>

            <p>
              Durable, beau, net – avec lui, vous ressentirez une transformation
              tant extérieure qu'intérieure. Le maquillage permanent ne se
              contente pas de souligner vos atouts, il dissimule également les
              imperfections. Cicatrices, traces d'acné, herpès labial, rides
              d'expression sur les paupières, zones dégarnies des sourcils ou
              leur absence totale : tout ce qui vous gênait, vous mettait mal à
              l'aise et nécessitait l'utilisation de cosmétiques pour le
              dissimuler ne sera plus visible. Vous gagnerez en confiance et
              serez indéniablement plus attirante. Décidez de changer dès
              maintenant ! Et la maîtresse de l'Art du Beauté, Olga Denieul, est
              prête à vous y aider avec plaisir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
