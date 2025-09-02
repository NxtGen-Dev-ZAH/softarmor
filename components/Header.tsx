"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, Search, Globe } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/products" },
    { name: "Personnalisation", href: "/customization" },
    { name: "Commandes en Gros", href: "/commandes-en-gros" },
    { name: "Services", href: "/services" },
    { name: "À Propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-all duration-300"
          >
            <div className="relative flex items-center">
              <Image
                src="/images/brand/logo.png"
                alt="SoftArmor Logo"
                width={120}
                height={40}
                priority
                className="h-8 lg:h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const textFallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (textFallback) textFallback.style.display = "flex";
                }}
              />
              <div className="hidden items-center space-x-1">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">
                    SA
                  </span>
                </div>
                <span className="font-serif text-xl font-light text-primary tracking-wide">
                  SoftArmor
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group tracking-wide"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <button className="p-2.5 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <button className="hidden sm:flex items-center space-x-1.5 px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300">
              <Globe className="w-4 h-4" />
              <span className="font-medium">FR</span>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2.5 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300 group"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium group-hover:scale-110 transition-transform duration-200">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/30 bg-white/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border/20 pt-3 mt-3">
                <button className="flex items-center space-x-2 px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 w-full">
                  <Globe className="w-4 h-4" />
                  <span>Français</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
