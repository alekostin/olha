import Image from "next/image";
import olgaImage from "@/public/about_Olha.jpg"; // Замените на путь к изображению Ольги

export default function About() {
  return (
    <section id="apropos" className="about bg-primary text-white py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Ольга Денюль</h2>
          <p>
            Olga Denyul est une maîtresse talentueuse et propriétaire du studio
            &quot;L&apos;art de la beauté&quot; à Orléans. Olga est connue pour
            ses compétences professionnelles et son approche créative du
            maquillage et du tatouage. Son travail ne met pas seulement en
            valeur la beauté naturelle de ses clients, mais cache également les
            défauts, tels que les cicatrices et les traces d&apos;acné.
          </p>
          <p>
            Avec des années d&apos;expérience et une passion pour son métier,
            Olga crée des looks uniques qui aident les clients à se sentir
            confiants et attrayants. Son studio propose une large gamme de
            services, y compris le maquillage permanent, le tatouage des
            sourcils et des lèvres, ainsi que les soins de la peau.
            L&apos;attention aux détails et l&apos;approche individuelle de
            chaque client font d&apos;Olga l&apos;un des spécialistes les plus
            recherchés dans son domaine.
          </p>
          <p>
            Olga améliore constamment ses compétences en participant à divers
            séminaires et masterclasses pour offrir à ses clients les techniques
            les plus modernes et les plus sûres. Son objectif est de faire en
            sorte que chaque femme se sente belle et confiante.
          </p>
        </div>

        <div className="md:w-1/3">
          <Image
            src={olgaImage}
            alt="Ольга Денюль"
            className="rounded-full w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
