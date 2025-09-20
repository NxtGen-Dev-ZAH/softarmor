"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  ArrowLeft,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { Product } from "@/lib/products";
import ProductGrid from "./ui/ProductGrid";
import Header from "./Header";
import Footer from "./Footer";

interface ProductDetailPageProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailPage({
  product,
  relatedProducts,
}: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une taille");
      return;
    }
    // TODO: Implement cart functionality
    console.log("Add to cart:", { product, size: selectedSize, quantity });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b border-border/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Accueil
              </Link>
              <span>/</span>
              <Link
                href="/products"
                className="hover:text-foreground transition-colors"
              >
                Produits
              </Link>
              <span>/</span>
              <Link
                href={`/products?category=${product.category.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Main Image */}
                <div className="relative aspect-[4/5] bg-white rounded-xl overflow-hidden">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Sale Badge */}

                  {/* Wishlist Button */}
                  <button
                    onClick={handleWishlist}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          selectedImage === index
                            ? "border-primary"
                            : "border-transparent hover:border-primary/50"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} - Vue ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 25vw, 12vw"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Product Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Category */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      4.8 (24 avis)
                    </span>
                  </div>
                </div>

                {/* Product Name */}
                <h1 className="text-3xl lg:text-4xl font-serif font-light text-foreground">
                  {product.name}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Product Details */}
                <div className="space-y-4">
                  {product.material && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">
                        Matériau:
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {product.material}
                      </span>
                    </div>
                  )}
                  {product.origin && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">
                        Origine:
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {product.origin}
                      </span>
                    </div>
                  )}
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Taille
                    </span>
                    <button className="text-sm text-primary hover:underline">
                      Guide des tailles
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-3 rounded-lg border transition-all duration-200 ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground">
                    Quantité
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decreaseQuantity}
                      className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier
                  </button>

                  <button className="w-full border border-primary text-primary py-4 px-6 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                    Acheter maintenant
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/20">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="w-4 h-4" />
                    <span>Livraison gratuite</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Garantie 2 ans</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 border-t border-border/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">
                  Produits Similaires
                </h2>
                <p className="text-muted-foreground">
                  Découvrez d'autres gants qui pourraient vous plaire
                </p>
              </motion.div>

              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
