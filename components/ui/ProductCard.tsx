"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Scale,
  Ruler,
  ZoomIn,
} from "lucide-react";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  className?: string;
  onCompare?: (product: Product) => void;
  onVisualize?: (product: Product) => void;
  onSizeGuide?: () => void;
}

export default function ProductCard({
  product,
  index = 0,
  className = "",
  onCompare,
  onVisualize,
  onSizeGuide,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement cart functionality
    console.log("Add to cart:", product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onVisualize?.(product);
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCompare?.(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Sale Badge */}
      {product.isOnSale && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium">
            -
            {Math.round(
              ((product.originalPrice! - product.price) /
                product.originalPrice!) *
                100
            )}
            %
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
      >
        <Heart
          className={`w-4 h-4 ${
            isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
          }`}
        />
      </button>

      {/* Product Image */}
      <Link href={`/products/${product.slug}`} className="block relative">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Enhanced Quick View Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="flex gap-2">
              <button
                onClick={handleQuickView}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 group/btn"
                title="Visualisation 3D"
              >
                <ZoomIn className="w-4 h-4 text-gray-700 group-hover/btn:scale-110 transition-transform" />
              </button>
              <button
                onClick={handleCompare}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 group/btn"
                title="Comparer"
              >
                <Scale className="w-4 h-4 text-gray-700 group-hover/btn:scale-110 transition-transform" />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 group/btn"
                title="Ajouter au panier"
              >
                <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* 3D View Indicator */}
          <motion.div
            className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          >
            <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs">
              <Eye className="w-3 h-3" />
              <span>3D</span>
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Category and Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-muted-foreground">4.8</span>
          </div>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold text-foreground">
            {product.price.toFixed(2)}€
          </span>
          {product.isOnSale && product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toFixed(2)}€
            </span>
          )}
        </div>

        {/* Enhanced Sizes with Size Guide */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Tailles:</span>
            <div className="flex gap-1">
              {product.sizes.slice(0, 3).map((size) => (
                <span
                  key={size}
                  className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 3 && (
                <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                  +{product.sizes.length - 3}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onSizeGuide}
            className="text-xs text-primary hover:underline flex items-center gap-1"
            title="Guide des tailles"
          >
            <Ruler className="w-3 h-3" />
            Guide
          </button>
        </div>

        {/* Material Info */}
        {product.material && (
          <div className="mb-4">
            <span className="text-xs text-muted-foreground">
              {product.material}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Ajouter au panier
          </button>

          {/* Secondary Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleQuickView}
              className="flex-1 py-2 px-3 border border-border rounded-lg text-sm hover:bg-muted transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3 h-3" />
              Voir 3D
            </button>
            <button
              onClick={handleCompare}
              className="flex-1 py-2 px-3 border border-border rounded-lg text-sm hover:bg-muted transition-colors flex items-center justify-center gap-1"
            >
              <Scale className="w-3 h-3" />
              Comparer
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
