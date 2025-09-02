"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Ruler, Hand, Info } from "lucide-react";

interface SizeGuideProps {
  onClose: () => void;
}

export default function SizeGuide({ onClose }: SizeGuideProps) {
  const [selectedGender, setSelectedGender] = useState<"men" | "women">("men");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const sizeData = {
    men: [
      {
        size: "S",
        palm: "8.5-9 cm",
        fingers: "7.5-8 cm",
        description: "Petite main",
      },
      {
        size: "M",
        palm: "9-9.5 cm",
        fingers: "8-8.5 cm",
        description: "Main moyenne",
      },
      {
        size: "L",
        palm: "9.5-10 cm",
        fingers: "8.5-9 cm",
        description: "Grande main",
      },
      {
        size: "XL",
        palm: "10-10.5 cm",
        fingers: "9-9.5 cm",
        description: "Très grande main",
      },
    ],
    women: [
      {
        size: "XS",
        palm: "7-7.5 cm",
        fingers: "6.5-7 cm",
        description: "Très petite main",
      },
      {
        size: "S",
        palm: "7.5-8 cm",
        fingers: "7-7.5 cm",
        description: "Petite main",
      },
      {
        size: "M",
        palm: "8-8.5 cm",
        fingers: "7.5-8 cm",
        description: "Main moyenne",
      },
      {
        size: "L",
        palm: "8.5-9 cm",
        fingers: "8-8.5 cm",
        description: "Grande main",
      },
    ],
  };

  const currentSizes = sizeData[selectedGender];

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/20">
          <div className="flex items-center gap-3">
            <Ruler className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-light">
              Guide des Tailles
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Gender Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">
              Sélectionnez votre genre
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedGender("men")}
                className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                  selectedGender === "men"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Hommes
              </button>
              <button
                onClick={() => setSelectedGender("women")}
                className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                  selectedGender === "women"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Femmes
              </button>
            </div>
          </div>

          {/* Size Chart */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Tableau des Tailles</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border/20 rounded-lg">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="p-4 text-left font-medium">Taille</th>
                    <th className="p-4 text-left font-medium">Tour de Paume</th>
                    <th className="p-4 text-left font-medium">
                      Longueur des Doigts
                    </th>
                    <th className="p-4 text-left font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSizes.map((size, index) => (
                    <motion.tr
                      key={size.size}
                      className={`border-t border-border/10 cursor-pointer hover:bg-muted/20 transition-colors ${
                        selectedSize === size.size ? "bg-primary/5" : ""
                      }`}
                      onClick={() => setSelectedSize(size.size)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="p-4 font-medium">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                          {size.size}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{size.palm}</td>
                      <td className="p-4 text-muted-foreground">
                        {size.fingers}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {size.description}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Measurement Instructions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Hand className="w-5 h-5 text-primary" />
                Comment Mesurer
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                    1
                  </span>
                  <p>Placez votre main à plat sur une surface plane</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                    2
                  </span>
                  <p>
                    Mesurez le tour de votre paume au niveau des articulations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                    3
                  </span>
                  <p>Mesurez la longueur de votre majeur du bout au poignet</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Conseils
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="p-3 bg-muted/20 rounded-lg">
                  <p className="font-medium mb-1">Taille recommandée</p>
                  <p>
                    Si vous hésitez entre deux tailles, choisissez la plus
                    grande
                  </p>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg">
                  <p className="font-medium mb-1">Ajustement</p>
                  <p>Les gants en cuir s'assouplissent avec le temps</p>
                </div>
                <div className="p-3 bg-muted/20 rounded-lg">
                  <p className="font-medium mb-1">Retours</p>
                  <p>
                    Échange gratuit sous 30 jours si la taille ne convient pas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Size Info */}
          {selectedSize && (
            <motion.div
              className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4 className="font-medium mb-2">
                Taille Sélectionnée: {selectedSize}
              </h4>
              <p className="text-sm text-muted-foreground">
                Cette taille correspond à{" "}
                {currentSizes.find((s) => s.size === selectedSize)?.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border/20 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Besoin d'aide ? Contactez notre service client
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Compris
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
