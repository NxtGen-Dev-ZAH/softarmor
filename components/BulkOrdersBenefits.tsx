"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Globe, Check } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Capacité de production élevée",
    description:
      "Nous gérons vos volumes sans stress grâce à notre infrastructure moderne et notre équipe expérimentée.",
    features: [
      "Production à grande échelle",
      "Équipements modernes",
      "Équipe expérimentée",
    ],
  },
  {
    icon: Clock,
    title: "Délais rapides et respectés",
    description:
      "Vos produits livrés quand vous en avez besoin avec un engagement ferme sur les délais de livraison.",
    features: [
      "Délais garantis",
      "Suivi en temps réel",
      "Communication proactive",
    ],
  },
  {
    icon: Shield,
    title: "Qualité premium garantie",
    description:
      "Chaque gant testé et validé avec un contrôle qualité rigoureux à chaque étape de la production.",
    features: [
      "Contrôle qualité",
      "Matériaux premium",
      "Garantie satisfaction",
    ],
  },
  {
    icon: Globe,
    title: "Livraison internationale",
    description:
      "Où que vous soyez, nous vous livrons avec un service de logistique fiable et efficace.",
    features: ["Livraison mondiale", "Gestion douanes", "Suivi complet"],
  },
];

export default function BulkOrdersBenefits() {
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
            Pourquoi choisir{" "}
            <span className="text-primary font-medium">SoftArmor</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre expertise en production en gros vous garantit des résultats
            qui dépassent vos attentes et respectent vos contraintes.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            Prêt à optimiser vos approvisionnements ?
          </p>
          <a
            href="mailto:info@softarmor.fr"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group"
            aria-label="Demander un devis pour commandes en gros"
          >
            Demander un devis
            <Check className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
