"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Sparkles } from "lucide-react";

export default function BulkOrdersCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-current rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-current rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-current rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-current rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              Projet de Grande Envergure
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-4xl lg:text-6xl font-serif font-light mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Un projet de <span className="font-medium">grande envergure</span>{" "}
              ?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contactez-nous à{" "}
              <a
                href="mailto:info@softarmor.fr"
                className="text-white underline hover:no-underline"
              >
                info@softarmor.fr
              </a>{" "}
              et obtenez un devis sur mesure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="mailto:info@softarmor.fr"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 group shadow-lg"
                aria-label="Demander un devis maintenant pour commandes en gros"
              >
                <Mail className="w-5 h-5" />
                Demander un devis maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 group"
                aria-label="Appeler maintenant pour commandes en gros"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-serif font-medium mb-2">24h</div>
              <div className="text-white/70 text-sm">Délai de réponse</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-medium mb-2">
                Gratuit
              </div>
              <div className="text-white/70 text-sm">Devis personnalisé</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-medium mb-2">
                Mondial
              </div>
              <div className="text-white/70 text-sm">
                Livraison internationale
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-white/60 text-sm">
              Email:{" "}
              <a
                href="mailto:info@softarmor.fr"
                className="text-white hover:underline"
              >
                info@softarmor.fr
              </a>{" "}
              | Téléphone:{" "}
              <a href="tel:+33123456789" className="text-white hover:underline">
                +33 1 23 45 67 89
              </a>
            </p>
            <p className="text-white/60 text-sm mt-2">
              Réponse rapide et devis sur mesure pour vos commandes en gros
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
