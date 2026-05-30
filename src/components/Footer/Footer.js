import styles from './Footer.module.css';

const CONTACT = {
  location: 'Bagroy Market',
  address: 'Main Road, Ranchi, Jharkhand 834001',
  phone: '0651 233 1413',
  phoneHref: 'tel:+916512331413',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Femina+Exclusif+Bagroy+Market+Main+Road+Ranchi+Jharkhand+834001',
};

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
