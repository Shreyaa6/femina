'use client';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { state } = useStore();
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const favCount = state.favourites.length;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/products" className={styles.link}>Shop</Link>
          <Link href="/search" className={styles.link}>Search</Link>
        </div>
        
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            Femina Exclusif
          </Link>
        </div>

        <div className={styles.right}>
          <Link href="/favourites" className={styles.link}>
            Favourites {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
          </Link>
          <Link href="/cart" className={styles.link}>
            Cart {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
