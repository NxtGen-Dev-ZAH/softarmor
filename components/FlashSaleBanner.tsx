"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function FlashSaleBanner() {
  const bannerItems = [
    { icon: Star, text: "Vente Flash" },
    { text: "•", hidden: true },
    { text: "Jusqu'à 40% de réduction", hidden: true },
    { text: "•" },
    { text: "Livraison gratuite" },
    { icon: Star, text: "" },
  ];

  return (
    <motion.section
      className="bg-primary text-primary-foreground py-3 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: "50%",
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <Star className="w-3 h-3 fill-current opacity-30" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center space-x-2 text-sm font-medium"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {bannerItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${
                item.hidden ? "hidden sm:inline" : ""
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: item.icon ? 1.2 : 1.1,
                transition: { duration: 0.2 },
              }}
            >
              {item.icon && (
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <item.icon className="w-4 h-4 fill-current" />
                </motion.div>
              )}
              {item.text && (
                <motion.span
                  whileHover={{
                    textShadow: "0 0 8px rgba(255,255,255,0.8)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.text}
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sliding highlight effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-white/30"
        animate={{
          width: ["0%", "100%", "0%"],
          left: ["0%", "0%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.section>
  );
}
