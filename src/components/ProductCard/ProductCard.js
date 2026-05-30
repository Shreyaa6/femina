'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { state, dispatch } = useStore();
  const isFavourite = state.favourites.some(fav => fav.id === product.id);

  const toggleFav = (e) => {
    e.preventDefault();
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: product });
  };

  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className={styles.image}
        />
        {product.isNew && <span className={styles.badge}>New In</span>}
        <button className={styles.favButton} onClick={toggleFav} aria-label="Toggle Favourite">
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </Link>
  );
}
