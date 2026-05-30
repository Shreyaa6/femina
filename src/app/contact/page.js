import Link from 'next/link';
import { CONTACT } from '@/data/contact';
import ContactForm from './ContactForm';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us | Femina Exclusif',
  description: 'Visit our Ranchi boutique or reach the Femina Exclusif atelier team.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.subtitle}>The Atelier</span>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.intro}>
          We welcome you to experience our collections in person or connect with our team for styling,
          appointments, and bespoke inquiries.
        </p>
        <div className={styles.separator} />
      </header>

      <div className={styles.grid}>
        <section className={styles.infoCard}>
          <div className={styles.goldFrame}>
            <h2 className={styles.cardTitle}>Visit the Boutique</h2>

            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Located in</span>
              <a
                href={CONTACT.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailLink}
              >
                {CONTACT.location}
              </a>
            </div>

            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Address</span>
              <p>{CONTACT.address}</p>
            </div>

            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Phone</span>
              <a href={CONTACT.phoneHref} className={styles.detailLink}>
                {CONTACT.phone}
              </a>
            </div>

            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Email</span>
              <a href={CONTACT.emailHref} className={styles.detailLink}>
                {CONTACT.email}
              </a>
            </div>

            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Hours</span>
              <p>{CONTACT.hours}</p>
            </div>

            <a
              href={CONTACT.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsBtn}
            >
              Get Directions
            </a>

            <p className={styles.sizeGuideNote}>
              Unsure of your fit?{' '}
              <Link href="/size-guide" className={styles.inlineLink}>
                View our size guide
              </Link>
            </p>
          </div>
        </section>

        <section className={styles.formCard}>
          <div className={styles.goldFrame}>
            <h2 className={styles.cardTitle}>Send a Message</h2>
            <p className={styles.formDesc}>
              Share your question and our concierge will be in touch shortly.
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
