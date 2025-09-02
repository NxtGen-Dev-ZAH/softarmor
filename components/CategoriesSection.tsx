"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Factory, Users, Shield } from "lucide-react";

// Updated categories for B2B focus
const b2bCategories = [
  {
    id: "customization",
    name: "Personnalisation",
    slug: "personnalisation",
    image: "/images/categories/men-gloves.jpg",
    description: "Vos logos et couleurs sur nos gants premium",
    icon: Users,
  },
  {
    id: "wholesale",
    name: "Commandes en Gros",
    slug: "commandes-en-gros",
    image: "/images/categories/women-gloves.jpg",
    description: "Production en volume avec délais optimisés",
    icon: Factory,
  },
  {
    id: "motorcycle",
    name: "Gants de Moto",
    slug: "gants-de-moto",
    image: "/images/categories/driving-gloves.jpg",
    description: "Spécialisation en gants de motocycliste",
    icon: Shield,
  },
  {
    id: "sports",
    name: "Gants de Sport",
    slug: "gants-de-sport",
    image: "/images/categories/winter-gloves.jpg",
    description: "Performance et confort pour tous sports",
    icon: Sparkles,
  },
];

export default function CategoriesSection() {
  return (
    <motion.section
      className="py-16 lg:py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background texture */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
          backgroundSize: "50px 50px",
        }}
      />

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
            className="section-title mb-4"
            // FIXED: Moved static gradient styles to the `style` prop
            style={{
              backgroundImage:
                "linear-gradient(45deg, #3e2c23, #dcd2c1, #3e2c23)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Nos Services
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Solutions professionnelles pour marques, revendeurs et distributeurs
          </motion.p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {b2bCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 group"
          >
            <Sparkles className="w-5 h-5" />
            Demander un Devis Personnalisé
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

function CategoryCard({ category, index }: { category: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const IconComponent = category.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="category-card group cursor-pointer perspective-1000"
    >
      <Link href={`/${category.slug}`}>
        <div className="relative aspect-[4/5] bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl overflow-hidden mb-4">
          {/* Category image */}
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              animate={{
                opacity: isHovered ? 0.8 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 300,
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
              <IconComponent className="w-3 h-3" />
              {category.name}
            </div>
          </motion.div>

          {/* Hover overlay with CTA */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="text-center text-white">
              <motion.div
                className="mb-2"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-8 h-8 mx-auto" />
              </motion.div>
              <p className="text-sm font-medium">Découvrir</p>
            </div>
          </motion.div>
        </div>

        {/* Category info */}
        <div className="text-center">
          <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
