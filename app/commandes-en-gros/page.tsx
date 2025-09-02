import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BulkOrdersHero from "@/components/BulkOrdersHero";
import BulkOrdersBenefits from "@/components/BulkOrdersBenefits";
import BulkOrdersFeatures from "@/components/BulkOrdersFeatures";
import BulkOrdersProcess from "@/components/BulkOrdersProcess";
import BulkOrdersCTA from "@/components/BulkOrdersCTA";

export const metadata: Metadata = {
  title:
    "Commandes en gros | SoftArmor — Production en gros gants moto & sport",
  description:
    "Commandes en gros de gants moto et sport avec délais optimisés, qualité premium et livraison internationale. Demandez votre devis personnalisé.",
  keywords:
    "production en gros gants moto, production en gros gants sport, commandes en gros gants, devis gants en volume, approvisionnements gants",
  openGraph: {
    title:
      "Commandes en gros | SoftArmor — Production en gros gants moto & sport",
    description:
      "Commandes en gros de gants moto et sport avec délais optimisés, qualité premium et livraison internationale.",
    type: "website",
  },
};

export default function BulkOrdersPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="bulk-orders-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commandes en Gros - SoftArmor",
            description:
              "Production en gros de gants moto et sport avec délais optimisés, qualité premium et livraison internationale",
            provider: {
              "@type": "Organization",
              name: "SoftArmor",
              email: "info@softarmor.fr",
              url: "https://softarmor.fr",
            },
            serviceType: "Production en Gros",
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Gants en Gros",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Gants de Moto en Gros",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Gants de Sport en Gros",
                  },
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <BulkOrdersHero />
        <BulkOrdersBenefits />
        <BulkOrdersFeatures />
        <BulkOrdersProcess />
        <BulkOrdersCTA />
        <Footer />
      </div>
    </>
  );
}
