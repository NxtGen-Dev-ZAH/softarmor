"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Users, Truck, Shield } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";

export default function VisualizationHero() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  const features = [
    {
      icon: Factory,
      title: "Production en Gros",
      description: "Commandes en volume avec délais optimisés",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Users,
      title: "Personnalisation",
      description: "Vos logos et couleurs sur tous nos produits",
      color: "from-green-500/20 to-blue-500/20",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "Chaîne d'approvisionnement fiable et optimisée",
      color: "from-red-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="SoftArmor premium sports gloves manufacturing background"
          fill
          priority
          quality={95}
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              <Factory className="w-4 h-4" />
              Fabrication & Personnalisation
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl font-serif font-light leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-foreground">Solutions</span>
              <br />
              <span className="text-primary font-medium">Professionnelles</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Votre partenaire de confiance pour l'achat de gants de sport
              premium, avec une spécialisation dans les gants de moto.
              Production sur mesure en grande quantité pour marques, revendeurs
              et professionnels.
            </motion.p>

            {/* Interactive Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                    activeFeature === index
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/products"
                className="elegant-button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Commander en Ligne
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="elegant-button bg-transparent border border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2"
              >
                Demande de Devis
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 3D Preview Area */}
            <div className="relative aspect-square bg-gradient-to-br from-muted/20 to-muted/10 rounded-2xl overflow-hidden">
              {/* Featured Products Preview */}
              <div className="absolute inset-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {featuredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <Link href={`/products/${product.slug}`}>
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-lg">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="mt-3 text-center">
                          <h3 className="text-sm font-medium text-foreground line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {product.price.toFixed(2)}€
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Elements */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Factory className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Users className="w-5 h-5 text-secondary-foreground" />
              </motion.div>
            </div>

            {/* Feature Highlight */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg border border-border/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                {(() => {
                  const FeatureIcon = features[activeFeature].icon;
                  return <FeatureIcon className="w-4 h-4 text-primary" />;
                })()}
                <span className="text-sm font-medium">
                  {features[activeFeature].title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
