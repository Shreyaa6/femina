import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Femina Exclusif</h2>
          <p className={styles.tagline}>Elegance Redefined. Luxury Personified.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3>Shop</h3>
            <a href="/products">Collections</a>
            <a href="/products">New Arrivals</a>
            <a href="/products">Best Sellers</a>
          </div>
          <div className={styles.column}>
            <h3>Support</h3>
            <a href="#">Contact Us</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Femina Exclusif. All rights reserved.</p>
      </div>
    </footer>
  );
}
