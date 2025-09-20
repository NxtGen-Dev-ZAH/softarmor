"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
  Factory,
  Sparkles,
  Check,
} from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Personnalisation", href: "/customization" },
      { name: "Commandes en Gros", href: "/wholesale" },
      { name: "Gants de Moto", href: "/products?category=motorcycle" },
      { name: "Gants de Sport", href: "/products?category=sports" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Pro", href: "/contact" },
      { name: "À Propos", href: "/about" },
      { name: "Devis Personnalisé", href: "/quote" },
      { name: "Support Technique", href: "/support" },
    ],
  },
  {
    title: "Légal",
    links: [
      { name: "Conditions Générales", href: "/terms" },
      { name: "Politique de Confidentialité", href: "/privacy" },
      { name: "Mentions Légales", href: "/legal" },
      { name: "CGV Pro", href: "/cgv" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "hover:text-pink-500",
  },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
];

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [sparklePositions, setSparklePositions] = useState<
    Array<{ left: string; top: string }>
  >([]);

  useEffect(() => {
    setIsClient(true);
    // Generate random positions only on client side
    const positions = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setSparklePositions(positions);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-foreground text-background py-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {isClient &&
          sparklePositions.map((sparkle, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: sparkle.left,
                top: sparkle.top,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand section */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="font-serif text-2xl font-light tracking-wider relative"
              whileHover={{ scale: 1.05 }}
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
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                SoftArmor
              </motion.span>

              {/* Floating factory icon */}
              <motion.div
                className="absolute -top-1 -right-6 opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Factory className="w-4 h-4 fill-current" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-sm opacity-80 max-w-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Votre partenaire de confiance pour l'achat de gants de sport
              premium, avec une spécialisation dans les gants de moto.
              Fabrication et personnalisation en gros pour professionnels.
            </motion.p>

            {/* Contact info */}
            <motion.div
              className="space-y-2 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:text-accent transition-colors">
                  +33 661 19 47 56
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:text-accent transition-colors">
                  info@softarmor.fr
                </span>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-full border border-white/20 transition-all duration-300 ${social.color}`}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: sectionIndex * 0.1,
              }}
              onMouseEnter={() => setHoveredSection(sectionIndex)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <motion.h3
                className="font-serif text-lg font-medium relative"
                whileHover={{ color: "#dcd2c1" }}
              >
                {section.title}

                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredSection === sectionIndex ? "100%" : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.h3>

              <ul className="space-y-2 text-sm opacity-80">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="hover:opacity-100 hover:text-accent transition-all duration-300 relative group"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute left-0 -bottom-0.5 h-px bg-accent"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter section */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3
              className="font-serif text-lg font-medium relative"
              whileHover={{ color: "#dcd2c1" }}
            >
              Newsletter Pro
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.h3>

            <motion.p
              className="text-sm opacity-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recevez nos dernières innovations et offres spéciales pour
              professionnels.
            </motion.p>

            <motion.form
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email professionnel"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm placeholder:text-white/60 focus:outline-none focus:border-accent transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-accent text-accent-foreground rounded text-sm font-medium hover:bg-accent/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  S'inscrire
                </motion.button>
              </div>
            </motion.form>

            <motion.div
              className="flex items-center gap-2 text-xs opacity-60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Check className="w-3 h-3" />
              <span>Contenu professionnel uniquement</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div
          className="border-t border-white/20 mt-8 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-60">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              &copy; 2024 SoftArmor. Tous droits réservés. Fabrication{" "}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ffffff", "#ff6b6b", "#ffffff"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🏭
              </motion.span>{" "}
              en France.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/privacy"
                className="hover:text-accent transition-colors"
              >
                Confidentialité
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-accent transition-colors"
              >
                Conditions
              </Link>
              <span>•</span>
              <Link
                href="/cookies"
                className="hover:text-accent transition-colors"
              >
                Cookies
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-accent text-accent-foreground rounded-full shadow-lg z-50 group"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(220,210,193,0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="w-5 h-5 group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 opacity-5"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border border-white/20 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 opacity-5"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border border-white/20 rounded-lg rotate-45" />
      </motion.div>
    </motion.footer>
  );
}
