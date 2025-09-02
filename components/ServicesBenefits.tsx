"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Globe, Check } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Capacité de Production Élevée",
    description:
      "Infrastructure moderne permettant de traiter des commandes importantes dans des délais optimaux.",
    features: [
      "Production à grande échelle",
      "Équipements modernes",
      "Équipe expérimentée",
    ],
  },
  {
    icon: Clock,
    title: "Délais Rapides et Respectés",
    description:
      "Engagement sur les délais de livraison avec suivi en temps réel de votre commande.",
    features: [
      "Délais garantis",
      "Suivi en temps réel",
      "Communication proactive",
    ],
  },
  {
    icon: Shield,
    title: "Qualité Premium Garantie",
    description:
      "Contrôle qualité rigoureux à chaque étape de la production pour garantir l'excellence.",
    features: [
      "Contrôle qualité",
      "Matériaux premium",
      "Garantie satisfaction",
    ],
  },
  {
    icon: Globe,
    title: "Livraison Internationale",
    description:
      "Service de livraison mondial avec gestion des douanes et suivi jusqu'à destination.",
    features: ["Livraison mondiale", "Gestion douanes", "Suivi complet"],
  },
];

export default function ServicesBenefits() {
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
            Pourquoi choisir{" "}
            <span className="text-primary font-medium">SoftArmor</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre expertise et notre engagement vous garantissent un service de
            qualité et des résultats qui dépassent vos attentes.
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
              500+
            </div>
            <div className="text-sm text-muted-foreground">
              Marques Satisfaites
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              50k+
            </div>
            <div className="text-sm text-muted-foreground">
              Paires Produites
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              98%
            </div>
            <div className="text-sm text-muted-foreground">
              Taux de Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-2">
              24h
            </div>
            <div className="text-sm text-muted-foreground">
              Délai de Réponse
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
