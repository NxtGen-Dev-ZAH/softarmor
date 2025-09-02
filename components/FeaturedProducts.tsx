"use client";

import { motion } from "framer-motion";
import { Factory, Award, Star, Users, Truck, Shield } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import ProductGrid from "./ui/ProductGrid";

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <motion.section
      className="py-16 lg:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Elegant background pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="featured-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="1"
                fill="currentColor"
                className="text-primary/5"
                animate={{
                  r: [1, 2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#featured-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="section-title mb-4 flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Factory className="w-8 h-8 text-primary fill-current" />
            </motion.div>
            Produits Vedettes
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos modèles les plus demandés par les professionnels
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-1 h-1 bg-primary/60 rounded-full" />
              <div className="w-1 h-1 bg-primary/40 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Products Grid */}
        <ProductGrid
          products={featuredProducts}
          showViewAll={true}
          viewAllHref="/products"
        />

        {/* Professional Services Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">
              Qualité Premium
            </h3>
            <p className="text-sm text-muted-foreground">
              Matériaux de première qualité et finition professionnelle
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">
              Personnalisation
            </h3>
            <p className="text-sm text-muted-foreground">
              Vos logos et couleurs sur tous nos produits
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-medium text-foreground mb-2">
              Livraison Optimisée
            </h3>
            <p className="text-sm text-muted-foreground">
              Délais de production et livraison garantis
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
