import { Metadata } from "next";
import CartPage from "@/components/CartPage";

export const metadata: Metadata = {
  title: "Panier - SoftArmor | Gants en Cuir de Luxe",
  description:
    "Votre panier SoftArmor. Passez votre commande de gants en cuir français de haute qualité.",
  keywords: "panier, commande, gants cuir, leather gloves, checkout",
};

export default function Cart() {
  return <CartPage />;
}
