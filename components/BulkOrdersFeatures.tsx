"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Truck, Check } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Délais optimisés",
    description:
      "Production rapide et respect des échéances pour répondre à vos besoins urgents.",
    details: [
      "Production accélérée",
      "Respect des délais",
      "Suivi en temps réel",
    ],
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description:
      "Chaque lot fait l'objet d'un contrôle rigoureux pour maintenir nos standards d'excellence.",
    details: ["Contrôle qualité", "Matériaux premium", "Tests rigoureux"],
  },
  {
    icon: Truck,
    title: "Logistique fiable",
    description:
      "Livraison efficace en France et à l'international avec gestion complète de la chaîne logistique.",
    details: [
      "Livraison France",
      "Expédition internationale",
      "Gestion douanes",
    ],
  },
];

export default function BulkOrdersFeatures() {
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
            Nos <span className="text-primary font-medium">atouts</span> pour
            vos commandes en gros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trois piliers fondamentaux qui font de SoftArmor votre partenaire de
            confiance pour vos approvisionnements en volume.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Details */}
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
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
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              1000+
            </div>
            <div className="text-sm text-muted-foreground">
              Commandes en Gros
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              100k+
            </div>
            <div className="text-sm text-muted-foreground">
              Paires Produites
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              99%
            </div>
            <div className="text-sm text-muted-foreground">
              Délais Respectés
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">Pays Livrés</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
