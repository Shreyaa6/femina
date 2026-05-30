import Link from 'next/link';
import {
  SUIT_SIZE_CHART,
  SAREE_SIZE_CHART,
  SIZE_GUIDE_TIPS,
} from '@/data/sizeGuide';
import styles from './size-guide.module.css';

export const metadata = {
  title: 'Size Guide | Femina Exclusif',
  description: 'Reference measurements for suits, sets, and sarees at Femina Exclusif.',
};

function SizeTable({ chart }) {
  return (
    <div className={styles.chartBlock}>
      <h2 className={styles.chartTitle}>{chart.title}</h2>
      <p className={styles.chartNote}>{chart.note}</p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {chart.columns.map((col) => (
                <th key={col} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chart.rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((cell, i) => (
                  <td key={`${row[0]}-${i}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SizeGuidePage() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.subtitle}>Fit &amp; Measurements</span>
        <h1 className={styles.title}>Size Guide</h1>
        <p className={styles.intro}>
          Use these reference charts as a starting point. Measurements are approximate and may vary
          slightly by design — our boutique team is happy to assist with a personalized fitting.
        </p>
        <div className={styles.separator} />
      </header>

      <div className={styles.disclaimer}>
        <span className={styles.disclaimerLabel}>Note</span>
        <p>
          This guide uses placeholder atelier standards for now. For bespoke tailoring or exact
          garment specs, please visit us in store or{' '}
          <Link href="/contact" className={styles.inlineLink}>
            contact our team
          </Link>
          .
        </p>
      </div>

      <div className={styles.charts}>
        <SizeTable chart={SUIT_SIZE_CHART} />
        <SizeTable chart={SAREE_SIZE_CHART} />
      </div>

      <section className={styles.tipsCard}>
        <div className={styles.goldFrame}>
          <h2 className={styles.tipsTitle}>How to Measure</h2>
          <ul className={styles.tipsList}>
            {SIZE_GUIDE_TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <Link href="/contact" className={styles.appointmentLink}>
            Book a Fitting Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
