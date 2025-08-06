"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getFeaturedProducts } from "@/lib/products";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    setMousePosition({ x: mouseXPos, y: mouseYPos });
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      className="hero-section relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-secondary/20"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="SoftArmor luxury leather gloves background"
          fill
          priority
          quality={95}
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
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
              <Star className="w-4 h-4 fill-current" />
              Artisanat français depuis 1985
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl font-serif font-light leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-foreground">Gants en Cuir</span>
              <br />
              <span className="text-primary font-medium">d'Exception</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Découvrez notre collection de gants en cuir français de première
              qualité. Élégance, confort et savoir-faire artisanal pour toutes
              les saisons.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/products"
                className="elegant-button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Découvrir la Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/about"
                className="elegant-button bg-transparent border border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Notre Histoire
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Garantie 2 ans</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4" />
                <span>Livraison gratuite</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Featured Products Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
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

            {/* Floating Elements */}
            {isClient && (
              <>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/20 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
