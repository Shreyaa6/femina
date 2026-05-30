import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import styles from "./page.module.css";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="https://i.pinimg.com/736x/8e/c4/9a/8ec49a8ac16e4c905f5f53a5da61e9c7.jpg"
            alt="Contemporary Indian Elegance"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Modern Ethnic Grace</h1>
          <p className={styles.subtitle}>Discover our curated collection of chic, contemporary sarees and elegantly tailored suits.</p>
          <Link href="/products">
            <Button variant="primary">Shop the Collection</Button>
          </Link>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className={styles.categories}>
        <div className={styles.sectionHeaderCentered}>
          <h2>Shop by Category</h2>
          <p>Explore the essence of modern Indian fashion</p>
        </div>
        <div className={styles.categoryGrid}>
          <Link href="/products" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image src="https://i.pinimg.com/736x/f5/66/93/f566930b79824c1c25ac775d32ee5e73.jpg" alt="Sarees" fill className={styles.categoryImage} />
            </div>
            <div className={styles.categoryOverlay}>
              <h3>Sarees</h3>
            </div>
          </Link>
          <Link href="/products" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image src="https://i.pinimg.com/736x/0d/03/40/0d0340b076efa73a66612099d50c7047.jpg" alt="Modern Suits" fill className={styles.categoryImage} />
            </div>
            <div className={styles.categoryOverlay}>
              <h3>Modern Suits</h3>
            </div>
          </Link>
          <Link href="/products" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image src="https://i.pinimg.com/736x/b5/21/89/b5218972633af172c29fd772da33fdb3.jpg" alt="Shararas" fill className={styles.categoryImage} />
            </div>
            <div className={styles.categoryOverlay}>
              <h3>Shararas</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Collection */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <h2>Featured Collection</h2>
          <Link href="/products" className={styles.viewAll}>View All Designs</Link>
        </div>
        <div className={styles.productGrid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* The Atelier Section */}
      <section className={styles.atelier}>
        <div className={styles.atelierContent}>
          <h2>The Design Studio</h2>
          <p>
            At Femina Exclusif, we blend minimalist design with rich Indian textiles. Our contemporary silhouettes are crafted for the modern woman who appreciates subtle elegance, clean lines, and sophisticated details over heavy traditional embellishments.
          </p>
          <Button variant="secondary">Our Philosophy</Button>
        </div>
      </section>

      {/* VIP Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContainer}>
          <h2>Join the Exclusive Circle</h2>
          <p>Sign up to receive private invitations to our trunk shows, early access to new collections, and bespoke styling tips.</p>
          <form className={styles.newsletterForm} action="">
            <input type="email" placeholder="Enter your email address" required className={styles.newsletterInput} />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
