"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Trash2,
  ArrowLeft,
  Plus,
  Minus,
  Truck,
  Shield,
  CreditCard,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Mock cart data - in a real app this would come from a cart context/store
const mockCartItems = [
  {
    id: "glove-001",
    name: "Gants Classiques Hiver",
    size: "M",
    quantity: 1,
    image: "/images/products/classic-winter-1.jpg",
    slug: "gants-classiques-hiver",
  },
  {
    id: "glove-002",
    name: "Gants Élégants Femme",
    size: "S",
    quantity: 2,
    image: "/images/products/elegant-women-1.jpg",
    slug: "gants-elegants-femme",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // TODO: Implement checkout process
    console.log("Proceeding to checkout...");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>

              <h1 className="text-3xl font-serif font-light mb-4">
                Votre panier est vide
              </h1>

              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Découvrez notre collection de gants en cuir français et ajoutez
                vos favoris à votre panier.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Continuer les achats
              </Link>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-serif font-light mb-2">
              Votre Panier
            </h1>
            <p className="text-muted-foreground">
              {cartItems.length} article{cartItems.length !== 1 ? "s" : ""} dans
              votre panier
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-border/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Link
                              href={`/products/${item.slug}`}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">
                              Taille: {item.size}
                            </p>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center justify-end mt-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 border border-border rounded hover:bg-muted transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 border border-border rounded hover:bg-muted transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border/20 sticky top-24">
                <h2 className="text-xl font-medium mb-6">
                  Résumé de la commande
                </h2>

                {/* Order Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Articles</span>
                    <span>{cartItems.length}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-green-600">Gratuite</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="w-4 h-4" />
                    <span>Livraison gratuite</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Garantie 2 ans</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard className="w-5 h-5" />
                  {isCheckingOut ? "Traitement..." : "Passer la commande"}
                </button>

                {/* Continue Shopping */}
                <Link
                  href="/products"
                  className="block w-full text-center mt-4 text-primary hover:underline"
                >
                  Continuer les achats
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
