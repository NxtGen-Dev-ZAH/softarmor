"use client";

import { motion } from "framer-motion";
import { Search, Calculator, FileText, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choisissez vos modèles",
    description:
      "Sélectionnez parmi notre gamme de gants ou proposez vos propres designs personnalisés.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Définissez vos quantités",
    description:
      "Spécifiez les quantités nécessaires pour votre projet et vos besoins spécifiques.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    number: "03",
    icon: FileText,
    title: "Recevez un devis express",
    description:
      "Obtenez un devis détaillé et personnalisé sous 24h avec toutes les options disponibles.",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    number: "04",
    icon: Truck,
    title: "Livraison assurée",
    description:
      "Production et livraison de vos gants avec suivi en temps réel jusqu'à destination.",
    color: "from-amber-500/20 to-amber-600/20",
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-20 bg-white">
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
            Comment ça <span className="text-primary font-medium">marche</span>{" "}
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un processus simple et transparent en 4 étapes pour transformer
            votre vision en réalité.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2 z-0" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className="text-4xl font-serif font-light text-muted-foreground/30 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
              Prêt à commencer votre projet ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous dès maintenant pour obtenir votre devis
              personnalisé.
            </p>
            <a
              href="mailto:info@softarmor.fr"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group"
            >
              Commencer maintenant
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
