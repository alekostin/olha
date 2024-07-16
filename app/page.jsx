import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import PricingTable from "@/components/sections/Prices";
import About_PM from "@/components/sections/About_PM";
import TextImageRight from "@/components/sections/TextImageRight";
import About from "@/components/sections/About";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center md:justify-center">
      <Hero />

      <About_PM />

      <About />

      <Services />

      <PricingTable />

      <ContactForm />

      <TextImageRight />
    </main>
  );
}
