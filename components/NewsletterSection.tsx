"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Check, Sparkles, Factory, Users } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [factoryPositions, setFactoryPositions] = useState<
    Array<{ left: string; top: string }>
  >([]);

  useEffect(() => {
    setIsClient(true);
    // Generate random positions only on client side
    const positions = Array.from({ length: 12 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setFactoryPositions(positions);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <motion.section
      className="py-16 bg-primary text-primary-foreground relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating factory icons */}
        {isClient &&
          factoryPositions.map((factory, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: factory.left,
                top: factory.top,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <Factory className="w-6 h-6 fill-current" />
            </motion.div>
          ))}

        {/* Sparkle effects */}
        {isClient &&
          isHovered &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 5}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-white/30" />
            </motion.div>
          ))}

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80"
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(90deg, rgba(62,44,35,0.8), transparent, rgba(62,44,35,0.8))",
                    "linear-gradient(90deg, transparent, rgba(62,44,35,0.8), transparent)",
                    "linear-gradient(90deg, rgba(62,44,35,0.8), transparent, rgba(62,44,35,0.8))",
                  ],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header with animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-serif text-3xl lg:text-4xl font-light mb-4 relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #ffffff, #dcd2c1, #ffffff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 200%",
              }}
              animate={
                isHovered
                  ? {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
                  : {}
              }
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Restez Informé de nos Services Pro
            </motion.span>

            {/* Floating mail icon */}
            <motion.div
              className="absolute -top-2 -right-8 opacity-30"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mail className="w-6 h-6" />
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-lg opacity-90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Recevez nos dernières innovations, offres spéciales et opportunités
            de personnalisation pour professionnels.
          </motion.p>
        </motion.div>

        {/* Newsletter form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Email input with fancy effects */}
                <motion.div
                  className="flex-1 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email professionnel"
                    className="w-full px-4 py-3 rounded-none bg-white text-foreground border-0 focus:ring-2 focus:ring-accent transition-all duration-300 placeholder:text-muted-foreground"
                    required
                  />

                  {/* Input focus glow */}
                  <motion.div
                    className="absolute inset-0 rounded-none border-2 border-accent/50 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileFocus={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Floating label animation */}
                  {email && (
                    <motion.div
                      className="absolute -top-2 left-3 bg-white px-1 text-xs text-muted-foreground"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Email Pro
                    </motion.div>
                  )}
                </motion.div>

                {/* Submit button with advanced animations */}
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-accent text-accent-foreground font-medium relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(220,210,193,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!email}
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent via-white/20 to-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    S'inscrire
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {/* Success message */}
                <motion.div
                  className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.1)",
                      "0 0 40px rgba(255,255,255,0.2)",
                      "0 0 20px rgba(255,255,255,0.1)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="flex items-center justify-center mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-serif font-medium mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Inscription réussie !
                  </motion.h3>

                  <motion.p
                    className="text-sm opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 0.5 }}
                  >
                    Vous recevrez nos offres professionnelles et innovations.
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-8 text-sm opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Check className="w-4 h-4" />
            <span>Contenu professionnel</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Check className="w-4 h-4" />
            <span>Offres spéciales</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Check className="w-4 h-4" />
            <span>Innovations produits</span>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-32 h-32 border border-white/20 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-20"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-24 h-24 border border-white/20 rounded-lg rotate-45" />
        </motion.div>
      </div>
    </motion.section>
  );
}
