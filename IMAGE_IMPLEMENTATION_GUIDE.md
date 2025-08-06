# 🖼️ SoftArmor Image Implementation Guide

## 📁 Recommended Public Folder Structure

```
public/
├── images/
│   ├── categories/
│   │   ├── men-gloves.jpg
│   │   ├── women-gloves.jpg
│   │   ├── winter-gloves.jpg
│   │   └── driving-gloves.jpg
│   ├── products/
│   │   ├── classic-winter-1.jpg
│   │   ├── classic-winter-2.jpg
│   │   ├── elegant-women-1.jpg
│   │   ├── elegant-women-2.jpg
│   │   ├── driving-men-1.jpg
│   │   ├── driving-men-2.jpg
│   │   ├── warm-lined-1.jpg
│   │   ├── warm-lined-2.jpg
│   │   ├── business-men-1.jpg
│   │   ├── business-men-2.jpg
│   │   ├── touchscreen-women-1.jpg
│   │   └── touchscreen-women-2.jpg
│   ├── hero/
│   │   ├── hero-bg.jpg
│   │   ├── hero-gloves.jpg
│   │   └── leather-texture.jpg
│   ├── brand/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   └── softarmor-wordmark.svg
│   ├── placeholders/
│   │   ├── product-placeholder.jpg
│   │   └── category-placeholder.jpg
│   └── patterns/
│       ├── leather-pattern.jpg
│       └── fabric-texture.jpg
└── (existing SVG files...)
```

## 🎯 Image Optimization Best Practices

### 1. **Image Formats & Sizes**

- **JPEG**: For photographs and complex images (products, categories)
- **PNG**: For logos with transparency
- **WebP**: Modern format for better compression (Next.js auto-converts)
- **SVG**: For icons and simple graphics

### 2. **Recommended Dimensions**

```typescript
// Product images
Product: 800x800px (1:1 aspect ratio)
ProductThumbnail: 400x400px

// Category images
Category: 600x400px (3:2 aspect ratio)

// Hero images
HeroBg: 1920x1080px (16:9 aspect ratio)
HeroProduct: 1200x800px

// Logo
Logo: 300x100px (transparent PNG)
LogoIcon: 64x64px
```

### 3. **File Size Guidelines**

- **Product images**: < 150KB each
- **Category images**: < 100KB each
- **Hero images**: < 300KB
- **Logos**: < 50KB

## 🔧 Implementation Examples

### Basic Next.js Image Usage

```tsx
import Image from 'next/image';

// Fill mode (responsive container)
<div className="relative aspect-square">
  <Image
    src="/images/products/classic-winter-1.jpg"
    alt="Classic Winter Gloves"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover rounded-lg"
    priority={index < 3} // Load first 3 images with priority
  />
</div>

// Fixed dimensions
<Image
  src="/images/brand/logo.png"
  alt="SoftArmor Logo"
  width={200}
  height={60}
  priority
/>
```

### Using the ProductImage Utility Component

```tsx
import ProductImage from '@/components/ui/ProductImage';

// Product card image
<ProductImage
  src={product.images[0]}
  alt={product.name}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  priority={index < 3}
  fallbackSrc="/images/placeholders/product-placeholder.jpg"
  enableHover={true}
/>

// Category image
<ProductImage
  src={category.image}
  alt={category.name}
  fill
  sizes="(max-width: 768px) 100vw, 25vw"
  fallbackSrc="/images/placeholders/category-placeholder.jpg"
/>
```

## 🎨 Image Integration in Components

### 1. **FeaturedProducts Component** ✅ Updated

- Uses actual product images from `product.images[0]`
- Includes fallback handling
- Optimized loading with priority for first 3 products
- Maintains hover effects and animations

### 2. **CategoriesSection Component** ✅ Updated

- Uses category images from `category.image`
- Responsive image sizing
- Loading optimization for first 2 categories
- Preserved 3D hover effects

### 3. **HeroSection Component** (To Update)

```tsx
// Add background image
<div className="absolute inset-0">
  <Image
    src="/images/hero/hero-bg.jpg"
    alt="Luxury leather gloves background"
    fill
    className="object-cover"
    priority
    quality={95}
  />
  <div className="absolute inset-0 bg-black/20" />
</div>
```

### 4. **Header Component** (To Update)

```tsx
// Logo implementation
<Link href="/" className="flex items-center">
  <Image
    src="/images/brand/logo.png"
    alt="SoftArmor"
    width={150}
    height={40}
    priority
    className="h-8 w-auto"
  />
</Link>
```

## 🚀 Performance Optimization

### 1. **Loading Strategy**

```tsx
// Critical images (above fold)
priority={true}

// Product listings
priority={index < 3} // First 3 products

// Below fold images
loading="lazy" // Default behavior
```

### 2. **Responsive Images with Sizes**

```tsx
// Product grid
sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

// Category grid
sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw";

// Full width hero
sizes = "100vw";
```

### 3. **Quality Settings**

```tsx
// Hero/marketing images
quality={95}

// Product images
quality={85} // Default

// Thumbnails
quality={75}
```

## 🛡️ Error Handling & Fallbacks

### Implement Error Boundaries

```tsx
const [imgSrc, setImgSrc] = useState(src);

const handleError = () => {
  setImgSrc("/images/placeholders/product-placeholder.jpg");
};

<Image
  src={imgSrc}
  onError={handleError}
  // ... other props
/>;
```

### Loading States

```tsx
const [isLoading, setIsLoading] = useState(true);

<div className="relative">
  <Image
    onLoad={() => setIsLoading(false)}
    className={`transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}
    // ... other props
  />
  {isLoading && (
    <div className="absolute inset-0 bg-accent/20 animate-pulse rounded-lg" />
  )}
</div>;
```

## 📋 Next Steps Checklist

- [ ] Create the recommended folder structure in `public/images/`
- [ ] Add placeholder images for development
- [ ] Update HeroSection with background images
- [ ] Add logo to Header component
- [ ] Implement product gallery for detail pages
- [ ] Add category images to navigation
- [ ] Create custom 404 page image
- [ ] Optimize all images for web (compress, convert formats)
- [ ] Test loading performance on different devices
- [ ] Add lazy loading for below-fold images

## 🔍 Testing & Validation

### Performance Testing

```bash
# Check image optimization
npm run build
npm run start

# Audit with Lighthouse
# Check Core Web Vitals, LCP (Largest Contentful Paint)
```

### Accessibility

- Always include descriptive `alt` attributes
- Use semantic HTML structure around images
- Ensure proper contrast ratios for text over images

## 📚 Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web Image Formats Guide](https://web.dev/choose-the-right-image-format/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Responsive Images](https://web.dev/responsive-images/)
