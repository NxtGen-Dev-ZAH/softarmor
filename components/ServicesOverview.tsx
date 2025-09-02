"use client";

import { motion } from "framer-motion";
import { Users, Palette, Package, Award, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Soutien aux Marques",
    description:
      "Accompagnement personnalisé pour développer votre marque avec des gants de qualité premium. Expertise en marketing et stratégie de marque.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Palette,
    title: "Fabrication Personnalisée",
    description:
      "Création de gants sur mesure selon vos spécifications. Design, couleurs, matériaux et finitions adaptés à vos besoins.",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Package,
    title: "Production en Gros",
    description:
      "Commandes en gros gants moto sport avec des quantités importantes. Tarifs préférentiels et délais optimisés pour les professionnels.",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description:
      "Gants de qualité supérieure avec des matériaux premium et un savoir-faire artisanal français. Garantie qualité et durabilité.",
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-600",
  },
];

export default function ServicesOverview() {
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
            Nos <span className="text-primary font-medium">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de services professionnels pour
            répondre à tous vos besoins en gants de qualité premium.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            Besoin d'un service personnalisé ?
          </p>
          <a
            href="mailto:info@softarmor.fr"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
