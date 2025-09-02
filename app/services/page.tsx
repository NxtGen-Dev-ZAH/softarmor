import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesOverview from "@/components/ServicesOverview";
import ServicesBenefits from "@/components/ServicesBenefits";
import ServicesProcess from "@/components/ServicesProcess";
import ServicesOrdering from "@/components/ServicesOrdering";
import ServicesCTA from "@/components/ServicesCTA";

export const metadata: Metadata = {
  title: "Services - SoftArmor | Commandes en Gros Gants Moto Sport",
  description:
    "Découvrez nos services professionnels : soutien aux marques, fabrication personnalisée, production en gros et qualité premium. Commandes en gros gants moto sport avec livraison internationale.",
  keywords:
    "commandes en gros gants moto sport, fabrication personnalisée, soutien aux marques, production en gros, qualité premium, livraison internationale",
  openGraph: {
    title: "Services - SoftArmor | Commandes en Gros Gants Moto Sport",
    description:
      "Services professionnels de fabrication et personnalisation de gants de qualité premium.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesOverview />
      <ServicesBenefits />
      <ServicesProcess />
      <ServicesOrdering />
      <ServicesCTA />
      <Footer />
    </div>
  );
}
