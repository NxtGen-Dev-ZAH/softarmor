import { Suspense } from "react";
import { Metadata } from "next";
import ProductsPage from "@/components/ProductsPage";

export const metadata: Metadata = {
  title: "Produits - SoftArmor | Gants en Cuir de Luxe",
  description:
    "Découvrez notre collection complète de gants en cuir français. Hommes, femmes, hiver, conduite - trouvez vos gants parfaits.",
  keywords:
    "gants cuir, leather gloves, produits, collection, hommes, femmes, hiver, conduite",
};

export default function Products() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ProductsPage />
    </Suspense>
  );
}
