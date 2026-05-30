import Link from 'next/link';
import { CONTACT } from '@/data/contact';
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
            <Link href="/products">Collections</Link>
            <Link href="/products">New Arrivals</Link>
            <Link href="/products">Best Sellers</Link>
          </div>
          <div className={styles.column}>
            <h3>Support</h3>
            <Link href="/contact">Contact Us</Link>
            <Link href="/size-guide">Size Guide</Link>
            <Link href="/contact">Visit Boutique</Link>
          </div>
          <div className={styles.column}>
            <h3>Visit Us</h3>
            <p className={styles.contactRow}>
              <span className={styles.contactLabel}>Located in</span>
              <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
                {CONTACT.location}
              </a>
            </p>
            <p className={styles.contactRow}>
              <span className={styles.contactLabel}>Address</span>
              <span>{CONTACT.address}</span>
            </p>
            <p className={styles.contactRow}>
              <span className={styles.contactLabel}>Phone</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Femina Exclusif. All rights reserved.</p>
      </div>
    </footer>
  );
}
