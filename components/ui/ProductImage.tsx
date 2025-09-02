"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallbackSrc?: string;
  enableHover?: boolean;
}

export default function ProductImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  fallbackSrc = "/images/placeholders/product-placeholder.jpg",
  enableHover = true,
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const ImageComponent = (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
      className={`transition-opacity duration-300 ${
        isLoading ? "opacity-0" : "opacity-100"
      } ${className}`}
      onError={handleError}
      onLoad={handleLoad}
    />
  );

  if (enableHover) {
    return (
      <motion.div className="relative w-full h-full">
        {ImageComponent}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 animate-pulse rounded-lg" />
        )}
      </motion.div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {ImageComponent}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 animate-pulse rounded-lg" />
      )}
    </div>
  );
}
