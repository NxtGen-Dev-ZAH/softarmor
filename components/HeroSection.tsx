"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Shield, Truck, Factory, Users } from "lucide-react";
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
      {/* Enhanced Hero Background with Dynamic and Interactive Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-secondary/15"
          animate={{
            background: [
              "linear-gradient(135deg, #ffffff 0%, #fffde7 50%, #fff7d1 100%)",
              "linear-gradient(135deg, #ffffff 0%, #fefefe 50%, #fff7d1 100%)",
              "linear-gradient(135deg, #fefefe 0%, #fef5e6 50%, #fef3d7 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Enhanced Geometric Circles with Animations */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-16 left-16 w-40 h-40 border-2 border-primary/30 rounded-full bg-primary/5"
            style={{ rotateX, rotateY }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
          </motion.div>
          <motion.div
            className="absolute top-48 right-24 w-32 h-32 border-2 border-secondary/30 rounded-full bg-secondary/5"
            style={{ rotateX, rotateY }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.35, 0.25],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-lg" />
          </motion.div>
          <motion.div
            className="absolute bottom-24 left-1/3 w-28 h-28 border-2 border-primary/30 rounded-full bg-primary/5"
            style={{ rotateX, rotateY }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-md" />
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-1/4 w-36 h-36 border-2 border-secondary/30 rounded-full bg-secondary/5"
            style={{ rotateX, rotateY }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
              rotate: [0, -180, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/15 to-transparent blur-xl" />
          </motion.div>
        </div>

        {/* Enhanced Radial Gradient Overlay with Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]"
          animate={{ opacity: [0.3, 0.4, 0.3] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/15 to-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <Factory className="w-4 h-4 fill-current" />
              <span className="font-semibold">
                Fabrication & Personnalisation en Gros
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-7xl font-serif font-light leading-tight">
                <span className="text-foreground">Gants de Sport</span>
                <br />
                <span className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Haut de Gamme
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-muted-foreground/90 max-w-xl">
                Votre partenaire de{" "}
                <span className="text-primary font-semibold">confiance</span>{" "}
                pour l'achat de gants de sport premium
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Spécialisation dans les gants de moto avec production sur mesure
              en grande quantité pour marques, revendeurs et professionnels.
            </motion.p>

            {/* Key Services */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2.5 bg-primary/15 rounded-lg">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    Qualité Supérieure
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Confort, résistance et performance
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2.5 bg-primary/15 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    Personnalisation
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Votre logo et vos couleurs
                  </p>
                </div>
              </div>
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
                className="elegant-button bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Commander en Ligne
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="elegant-button bg-white/80 backdrop-blur-sm border border-primary/20 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Demande de Devis
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-medium">Production fiable</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Truck className="w-4 h-4 text-primary" />
                <span className="font-medium">Livraison optimisée</span>
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
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                        Premium
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            {isClient && (
              <>
                <motion.div
                  className="absolute -top-8 -right-20 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm"
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
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full backdrop-blur-sm"
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
