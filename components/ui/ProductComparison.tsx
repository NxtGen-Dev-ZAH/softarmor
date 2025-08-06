"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, Check, Star, Shield, Truck } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

export default function ProductComparison({
  products,
  onClose,
}: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(
    products.slice(0, 3)
  );

  const comparisonFeatures = [
    { key: "price", label: "Prix", type: "price" },
    { key: "material", label: "Matériau", type: "text" },
    { key: "origin", label: "Origine", type: "text" },
    { key: "category", label: "Catégorie", type: "text" },
    { key: "sizes", label: "Tailles disponibles", type: "sizes" },
    { key: "isOnSale", label: "En promotion", type: "boolean" },
    { key: "isFeatured", label: "Produit vedette", type: "boolean" },
  ];

  const getFeatureValue = (product: Product, feature: any) => {
    switch (feature.key) {
      case "price":
        return `${product.price.toFixed(2)}€`;
      case "sizes":
        return product.sizes.join(", ");
      case "boolean":
        return product[feature.key as keyof Product] ? "Oui" : "Non";
      default:
        return product[feature.key as keyof Product] || "N/A";
    }
  };

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
          <h2 className="text-2xl font-serif font-light">
            Comparaison de Produits
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/20">
                <th className="p-4 text-left font-medium text-muted-foreground min-w-[200px]">
                  Caractéristiques
                </th>
                {selectedProducts.map((product, index) => (
                  <th
                    key={product.id}
                    className="p-4 text-center min-w-[250px]"
                  >
                    <div className="space-y-3">
                      {/* Product Image */}
                      <div className="relative aspect-square mx-auto w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.isOnSale && (
                          <div className="absolute top-1 left-1">
                            <span className="bg-destructive text-destructive-foreground px-1 py-0.5 rounded text-xs">
                              PROMO
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Product Name */}
                      <h3 className="font-medium text-sm line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg font-semibold text-primary">
                          {product.price.toFixed(2)}€
                        </span>
                        {product.isOnSale && product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice.toFixed(2)}€
                          </span>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={feature.key} className="border-b border-border/10">
                  <td className="p-4 font-medium text-sm">{feature.label}</td>
                  {selectedProducts.map((product) => (
                    <td
                      key={`${product.id}-${feature.key}`}
                      className="p-4 text-center"
                    >
                      {feature.type === "boolean" ? (
                        <div className="flex items-center justify-center">
                          {product[feature.key as keyof Product] ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {getFeatureValue(product, feature)}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Trust Indicators Row */}
              <tr className="bg-muted/20">
                <td className="p-4 font-medium text-sm">Garanties</td>
                {selectedProducts.map((product) => (
                  <td
                    key={`${product.id}-guarantees`}
                    className="p-4 text-center"
                  >
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>2 ans</span>
                      <Truck className="w-4 h-4" />
                      <span>Gratuite</span>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-border/20 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Comparez jusqu'à 3 produits pour faire le meilleur choix
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Fermer
            </button>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Voir les Produits
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
