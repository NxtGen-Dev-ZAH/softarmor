"use client";

import { motion } from "framer-motion";
import { Search, Palette, Package, ArrowRight, Check } from "lucide-react";

const orderingSteps = [
  {
    number: "1",
    icon: Search,
    title: "Choisissez vos modèles",
    description:
      "Sélectionnez parmi notre collection de gants ou proposez vos propres designs personnalisés selon vos besoins.",
    details: [
      "Gamme complète de modèles",
      "Designs personnalisés",
      "Consultation gratuite",
    ],
  },
  {
    number: "2",
    icon: Palette,
    title: "Envoyez vos éléments de marque",
    description:
      "Partagez vos logos, designs, couleurs et spécifications pour une personnalisation parfaite.",
    details: [
      "Logos haute résolution",
      "Palette de couleurs",
      "Spécifications techniques",
    ],
  },
  {
    number: "3",
    icon: Package,
    title: "Recevez vos produits personnalisés",
    description:
      "Production et livraison de vos gants personnalisés dans les meilleurs délais avec suivi complet.",
    details: ["Production sur mesure", "Contrôle qualité", "Livraison express"],
  },
];

export default function ServicesOrdering() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">
            Processus de{" "}
            <span className="text-primary font-medium">Commande</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un processus simplifié en 3 étapes pour obtenir vos gants
            personnalisés rapidement et efficacement.
          </p>
        </motion.div>

        {/* Ordering Steps */}
        <div className="space-y-12">
          {orderingSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step Container */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-border/20">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                  {/* Left Side - Icon and Number */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <step.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Center - Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < orderingSteps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -bottom-6 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-border/20">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-border/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-medium mb-4 text-foreground">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Contactez-nous dès maintenant pour discuter de vos besoins et
              obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@softarmor.fr"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary/80 transition-all duration-300"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
