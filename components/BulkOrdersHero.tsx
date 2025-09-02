"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Package, Truck, TrendingUp, ArrowRight } from "lucide-react";

export default function BulkOrdersHero() {
  return (
    <motion.section
      className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-background via-background to-secondary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg2.jpg"
          alt="SoftArmor commandes en gros - production en gros gants moto sport"
          fill
          priority
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Factory className="w-4 h-4 fill-current" />
              Production en Gros
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl font-serif font-light leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-foreground">Commandes</span>
              <br />
              <span className="text-primary font-medium">en Gros</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              className="text-xl lg:text-2xl font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passez à la vitesse supérieure pour vos approvisionnements
            </motion.h2>

            {/* Intro Paragraph */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Vous voulez booster vos ventes avec des produits fiables et haut
              de gamme, et vous cherchez un partenaire de confiance pour vos
              commandes en grande quantité ? Chez SoftArmor, nous disposons de
              la capacité et du savoir-faire nécessaires pour produire et livrer
              vos gants de moto et de sport en volumes importants, sans
              compromis sur la qualité.
            </motion.p>

            {/* SEO Line */}
            <motion.p
              className="text-sm text-muted-foreground/80 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Production en gros gants moto / sport • Commandes en gros gants •
              Devis gants en volume
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="mailto:info@softarmor.fr"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 group shadow-lg"
                aria-label="Demander un devis pour commandes en gros"
              >
                <Package className="w-5 h-5" />
                Demander un devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-primary">
                    Volume & Qualité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Production en gros sans compromis sur l'excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
