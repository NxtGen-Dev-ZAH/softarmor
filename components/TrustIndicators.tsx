"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Truck,
  Award,
  Star,
  Check,
  Sparkles,
  Factory,
  Users,
} from "lucide-react";

const trustItems = [
  {
    icon: Factory,
    title: "Production Fiable",
    description: "Chaîne de production optimisée et délais garantis",
    stat: "100%",
    statLabel: "Fiabilité",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Personnalisation",
    description: "Vos logos et couleurs sur tous nos produits",
    stat: "24h",
    statLabel: "Devis",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Matériaux de première qualité et finition professionnelle",
    stat: "500+",
    statLabel: "Clients Pro",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Truck,
    title: "Livraison Optimisée",
    description: "Supply chain dédiée pour commandes en gros",
    stat: "48h",
    statLabel: "Livraison",
    color: "from-yellow-500 to-yellow-600",
  },
];

export default function TrustIndicators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [backgroundElements, setBackgroundElements] = useState<
    Array<{ left: string; top: string }>
  >([]);

  useEffect(() => {
    setIsClient(true);
    // Generate random positions only on client side
    const elements = Array.from({ length: 8 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setBackgroundElements(elements);
  }, []);

  return (
    <motion.section
      className="py-16 bg-muted/20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {isClient &&
          backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute opacity-5"
              style={{
                left: element.left,
                top: element.top,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {trustItems.map((item, index) => (
            <TrustCard
              key={index}
              item={item}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TrustCard({
  item,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  item: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="space-y-3 relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background card effect */}
      <motion.div
        className="absolute inset-0 bg-white/50 rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating particles */}
      <AnimatePresence>
        {isHovered &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${50 + (Math.random() - 0.5) * 100}%`,
                top: `${50 + (Math.random() - 0.5) * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
      </AnimatePresence>

      {/* Icon container with advanced animations */}
      <motion.div className="relative mx-auto" style={{ width: "fit-content" }}>
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${item.color.split(" ")[1]}, ${
              item.color.split(" ")[3]
            })`,
          }}
          animate={
            isHovered
              ? {
                  scale: [1, 1.3, 1.6],
                  opacity: [0.3, 0.1, 0],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut",
          }}
        />

        {/* Main icon */}
        <motion.div
          className="relative z-10 bg-white rounded-full p-4 shadow-lg"
          animate={
            isHovered
              ? {
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={
              isHovered
                ? {
                    y: [0, -5, 0],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <item.icon
              className="w-8 h-8 mx-auto text-primary"
              style={{
                filter: isHovered
                  ? "drop-shadow(0 0 8px rgba(62,44,35,0.3))"
                  : "none",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Success checkmark */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Title with gradient animation */}
      <motion.h3
        className="font-serif text-lg font-medium relative"
        style={{
          backgroundImage: `linear-gradient(135deg, ${
            item.color.split(" ")[1]
          }, ${item.color.split(" ")[3]})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        animate={
          isHovered
            ? {
                color: "rgb(62, 44, 35)",
              }
            : {}
        }
        transition={{ duration: 0.4 }}
      >
        {item.title}

        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-1 left-1/2 h-0.5"
          style={{
            background: `linear-gradient(135deg, ${item.color.split(" ")[1]}, ${
              item.color.split(" ")[3]
            })`,
          }}
          initial={{ width: 0, x: "-50%" }}
          animate={isHovered ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-sm text-muted-foreground relative z-10"
        animate={
          isHovered
            ? {
                color: "rgb(62, 44, 35)",
                scale: 1.02,
              }
            : {}
        }
        transition={{ duration: 0.3 }}
      >
        {item.description}
      </motion.p>

      {/* Stat counter */}
      <motion.div
        className="relative z-10"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-2xl font-bold text-primary"
          style={{
            backgroundImage: `linear-gradient(135deg, ${
              item.color.split(" ")[1]
            }, ${item.color.split(" ")[3]})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          animate={
            isHovered
              ? {
                  color: "transparent",
                }
              : {}
          }
          transition={{ duration: 0.4 }}
        >
          {item.stat}
        </motion.div>
        <div className="text-xs text-muted-foreground font-medium">
          {item.statLabel}
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="relative z-10 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full bg-gray-200 rounded-full h-1">
          <motion.div
            className="h-1 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${
                item.color.split(" ")[1]
              }, ${item.color.split(" ")[3]})`,
            }}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Magnetic border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={
          isHovered
            ? {
                borderColor: item.color.split(" ")[1],
                boxShadow: `0 0 20px ${item.color.split(" ")[1]}40`,
              }
            : {}
        }
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
