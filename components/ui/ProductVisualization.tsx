"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, RotateCw, Eye, Heart } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductVisualizationProps {
  product: Product;
  onClose: () => void;
}

export default function ProductVisualization({
  product,
  onClose,
}: ProductVisualizationProps) {
  const [selectedView, setSelectedView] = useState<string>("front");
  const [isZoomed, setIsZoomed] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const visualizationViews = [
    { id: "front", label: "Vue de Face", image: product.images[0] },
    {
      id: "back",
      label: "Vue de Dos",
      image: product.images[1] || product.images[0],
    },
    { id: "detail", label: "Détails", image: product.images[0] },
    { id: "wearing", label: "Porté", image: product.images[0] },
  ];

  const materialDetails = [
    { label: "Type de Cuir", value: product.material || "Cuir pleine fleur" },
    { label: "Doublure", value: "Polaire douce" },
    { label: "Finition", value: "Naturelle" },
    { label: "Entretien", value: "Cire de protection" },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/20">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-light">
              Visualisation: {product.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted
                    ? "fill-red-500 text-red-500"
                    : "text-muted-foreground"
                }`}
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Main Visualization */}
          <div className="space-y-4">
            {/* View Selector */}
            <div className="flex gap-2 overflow-x-auto">
              {visualizationViews.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setSelectedView(view.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedView === view.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-square bg-muted rounded-xl overflow-hidden">
              <Image
                src={
                  visualizationViews.find((v) => v.id === selectedView)
                    ?.image || product.images[0]
                }
                alt={`${product.name} - ${selectedView}`}
                fill
                className={`object-cover transition-all duration-300 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />

              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200">
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>

              {/* Sale Badge */}
              {product.isOnSale && (
                <div className="absolute top-4 left-4">
                  <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
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
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-200"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Vue ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Info */}
            <div>
              <h3 className="text-2xl font-serif font-light mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-semibold text-primary">
                  {product.price.toFixed(2)}€
                </span>
                {product.isOnSale && product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Material Details */}
            <div>
              <h4 className="font-medium mb-3">Caractéristiques Techniques</h4>
              <div className="grid grid-cols-2 gap-3">
                {materialDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="p-3 bg-muted/20 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-xs text-muted-foreground mb-1">
                      {detail.label}
                    </p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Size Information */}
            <div>
              <h4 className="font-medium mb-3">Tailles Disponibles</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Usage Context */}
            <div>
              <h4 className="font-medium mb-3">Contexte d'Utilisation</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Idéal pour les températures entre -5°C et 15°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Conduite urbaine et autoroutière</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Activités quotidiennes et professionnelles</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200">
                Ajouter au Panier
              </button>
              <button className="w-full border border-primary text-primary py-3 px-6 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                Voir les Détails Complets
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
