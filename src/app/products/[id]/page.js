'use client';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import Button from '@/components/Button/Button';
import { useStore } from '@/context/StoreContext';
import styles from './productDetail.module.css';

export default function ProductDetail({ params }) {
  // Next 15 requires unwrapping params via React.use()
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);
  const { dispatch } = useStore();

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h1>Product Not Found</h1>
        <Link href="/products">
          <Button variant="secondary">Return to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.detailsSection}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> / <Link href="/products">Collections</Link> / <span>{product.name}</span>
          </div>
          
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
          
          <div className={styles.description}>
            <p>{product.description}</p>
          </div>

          <div className={styles.sizeSection}>
            <div className={styles.sizeHeader}>
              <span>Select Size</span>
              <Link href="/size-guide" className={styles.sizeGuideBtn}>
                Size Guide
              </Link>
            </div>
            <div className={styles.sizeGrid}>
              {product.sizes.map(size => (
                <button key={size} className={styles.sizeOption}>{size}</button>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" fullWidth onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>

          <div className={styles.accordion}>
            <div className={styles.accordionItem}>
              <h3>Details & Care</h3>
              <p>Dry clean only. Handle with care. Store in provided garment bag.</p>
            </div>
            <div className={styles.accordionItem}>
              <h3>Shipping & Returns</h3>
              <p>Complimentary express shipping on all orders. Free returns within 14 days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
