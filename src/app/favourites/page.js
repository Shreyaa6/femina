'use client';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './favourites.module.css';

export default function FavouritesPage() {
  const { state } = useStore();
  const { favourites } = state;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Your Favourites</h1>
        <p>A curated list of your most desired pieces.</p>
      </div>

      {favourites.length === 0 ? (
        <div className={styles.empty}>
          <p>You haven't saved any items yet.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {favourites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
