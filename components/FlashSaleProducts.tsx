"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getSaleProducts } from "@/lib/products";
import { Clock, Zap } from "lucide-react";

export default function FlashSaleProducts() {
  const saleProducts = getSaleProducts();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <motion.section
      className="py-16 bg-muted/20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${25 * i}%`,
              top: `${20 + i * 15}%`,
              width: "100px",
              height: "100px",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            <Zap className="w-full h-full text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.h2
              className="section-title mb-2 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-8 h-8 text-primary fill-current" />
              </motion.div>
              Ventes Flash
              {/* Countdown timer effect */}
              <motion.div
                className="flex items-center gap-1 text-sm font-mono text-primary/70"
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Clock className="w-4 h-4" />
                <span>23:59:45</span>
              </motion.div>
            </motion.h2>

            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Offres limitées sur une sélection de nos plus beaux gants
            </motion.p>

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/products?sale=true"
              className="elegant-button hidden sm:inline-flex group"
            >
              <span className="group-hover:scale-110 transition-transform">
                Voir Tout
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isHovered={hoveredProduct === product.id}
              onHover={() => setHoveredProduct(product.id)}
              onLeave={() => setHoveredProduct(null)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProductCard({
  product,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  product: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="product-card p-4 cursor-pointer group perspective-1000"
    >
      {/* Product image container */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <motion.div
          className="aspect-square bg-accent/20 rounded-lg flex items-center justify-center relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Placeholder product image */}
          <motion.div
            className="w-16 h-16 bg-primary/20 rounded-lg"
            animate={
              isHovered
                ? {
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={
              isHovered
                ? {
                    x: ["-100%", "100%"],
                  }
                : {}
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Floating sparkles */}
          <AnimatePresence>
            {isHovered &&
              [...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/60 rounded-full"
                  initial={{
                    scale: 0,
                    x: "50%",
                    y: "50%",
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                  }}
                  exit={{ scale: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Sale badge */}
        {product.isOnSale && (
          <motion.div
            className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded flex items-center gap-1"
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 4px 12px rgba(62,44,35,0.3)",
            }}
          >
            <Zap className="w-3 h-3 fill-current" />-{discountPercentage}%
          </motion.div>
        )}

        {/* Quick view overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white text-primary px-4 py-2 rounded-lg font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aperçu Rapide
          </motion.button>
        </motion.div>
      </div>

      {/* Product info */}
      <motion.h3
        className="font-serif text-lg font-medium mb-1"
        animate={isHovered ? { color: "rgb(62, 44, 35)" } : {}}
        transition={{ duration: 0.3 }}
      >
        {product.name}
      </motion.h3>

      {/* Price with animation */}
      <div className="flex items-center space-x-2 mb-2">
        <motion.span
          className="text-lg font-semibold text-primary"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {product.price}€
        </motion.span>
        {product.originalPrice && (
          <motion.span
            className="text-sm text-muted-foreground line-through"
            initial={{ opacity: 0.7 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1.05 }
                : { opacity: 0.7, scale: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            {product.originalPrice}€
          </motion.span>
        )}
      </div>

      <motion.p
        className="text-sm text-muted-foreground mb-3"
        animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {product.material}
      </motion.p>

      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
        <Link
          href={`/products/${product.slug}`}
          className="text-sm text-primary hover:underline flex items-center group"
        >
          Voir les détails
          <motion.span
            className="ml-1"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
