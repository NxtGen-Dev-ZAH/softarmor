import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getFeaturedProducts } from "@/lib/products";
import ProductDetailPage from "@/components/ProductDetailPage";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produit non trouvé - SoftArmor",
    };
  }

  return {
    title: `${product.name} - SoftArmor | Gants en Cuir de Luxe`,
    description: product.description,
    keywords: `gants cuir, ${product.name}, ${product.category}, leather gloves`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <ProductDetailPage product={product} relatedProducts={relatedProducts} />
  );
}
