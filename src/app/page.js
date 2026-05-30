import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import styles from "./page.module.css";

export default function Home() {
  // Select top contemporary items for featured showcase
  const featuredProducts = products.slice(0, 6);

  return (
    <div className={styles.page}>
      {/* Editorial Framed Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroFrame}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="https://i.pinimg.com/1200x/fa/3c/a8/fa3ca830641848cb81db692fcc603751.jpg"
              alt="Contemporary Modern Indian Wear"
              fill
              priority
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>The Summer Atelier</span>
            <h1 className={styles.heroTitle}>
              Modern <br />
              <span className={styles.italic}>Ethnic</span> Grace
            </h1>
            <p className={styles.heroSubtitle}>
              A curation of highly contemporary, minimalist Indian wear designed for the discerning modern muse.
            </p>
            <Link href="/products">
              <Button variant="tertiary" className={styles.heroBtn}>Shop Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Minimal Quote Banner */}
      <section className={styles.quoteBanner}>
        <div className={styles.goldLine}></div>
        <p className={styles.quoteText}>
          “Blending clean, contemporary lines with the rich poetic drapes of Indian textiles.”
        </p>
        <span className={styles.quoteAuthor}>— FEMINA EXCLUSIF ATELIER</span>
        <div className={styles.goldLine}></div>
      </section>

      {/* Premium Balanced Categories Grid */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.sectionSubtitle}>The Collections</span>
          <h2 className={styles.sectionTitle}>Curated Edit</h2>
          <div className={styles.headerSeparatorCentered}></div>
        </div>

        <div className={styles.categoriesGrid}>
          {/* Saree Card */}
          <Link href="/products" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image 
                src="https://i.pinimg.com/736x/f5/66/93/f566930b79824c1c25ac775d32ee5e73.jpg" 
                alt="Contemporary Sarees" 
                fill 
                className={styles.categoryImage} 
              />
            </div>
            <div className={styles.categoryInfo}>
              <span className={styles.catSubtitle}>01 / Fluid Drapes</span>
              <h3 className={styles.catTitle}>Modern Sarees</h3>
              <span className={styles.catLink}>Explore Collection ↗</span>
            </div>
          </Link>

          {/* Suits Card */}
          <Link href="/products" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image 
                src="https://i.pinimg.com/736x/0d/03/40/0d0340b076efa73a66612099d50c7047.jpg" 
                alt="Minimalist Tailored Suits" 
                fill 
                className={styles.categoryImage} 
              />
            </div>
            <div className={styles.categoryInfo}>
              <span className={styles.catSubtitle}>02 / Sharp Silhouettes</span>
              <h3 className={styles.catTitle}>Contemporary Suits</h3>
              <span className={styles.catLink}>Explore Collection ↗</span>
            </div>
          </Link>

          {/* Shararas Card */}
          <Link href="/products" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image 
                src="https://i.pinimg.com/736x/b5/21/89/b5218972633af172c29fd772da33fdb3.jpg" 
                alt="Chic Shararas" 
                fill 
                className={styles.categoryImage} 
              />
            </div>
            <div className={styles.categoryInfo}>
              <span className={styles.catSubtitle}>03 / Festive Movement</span>
              <h3 className={styles.catTitle}>Shararas</h3>
              <span className={styles.catLink}>Explore Collection ↗</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Creations */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.sectionSubtitle}>Handpicked Pieces</span>
          <h2 className={styles.sectionTitle}>The Bestsellers</h2>
          <p className={styles.sectionDesc}>Timeless, elegant creations defined by pure lines and effortless luxury.</p>
          <div className={styles.headerSeparatorCentered}></div>
        </div>

        <div className={styles.productGrid}>
          {featuredProducts.map(product => (
            <div key={product.id} className={styles.productWrapper}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / The Design Studio Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContainer}>
          <div className={styles.philosophyTextCol}>
            <span className={styles.philosophyLabel}>Our Philosophy</span>
            <h2 className={styles.philosophyTitle}>
              Minimalist Luxury, <br />
              <span className={styles.italic}>Artisanal</span> Roots.
            </h2>
            <div className={styles.titleLine}></div>
            <p className={styles.philosophyText}>
              <span className={styles.dropcap}>W</span>e believe luxury is found in the restraint of design. 
              Femina Exclusif rejects loud, heavy traditional wear in favor of sophisticated silhouettes, 
              ethereal lightweight chiffons, structured organzas, and beautifully tailored straight cuts. 
              Designed for the modern Indian woman who commands elegance through subtle, high-fidelity luxury.
            </p>
            <Link href="/products">
              <Button variant="secondary" className={styles.philosophyBtn}>Discover The Ethos</Button>
            </Link>
          </div>

          <div className={styles.philosophyImageCol}>
            {/* Stunning Overlapping Collage */}
            <div className={styles.collageContainer}>
              <div className={styles.mainImageFrame}>
                <Image
                  src="https://i.pinimg.com/736x/ec/2d/70/ec2d70288dc5d34d913e7c6cd5123dab.jpg"
                  alt="Modern Velvet Suit Details"
                  fill
                  className={styles.collageImgMain}
                />
              </div>
              <div className={styles.offsetImageFrame}>
                <Image
                  src="https://i.pinimg.com/736x/22/79/50/227950265e48fccfa96e5d82eacd8c83.jpg"
                  alt="Slate Grey Organza details"
                  fill
                  className={styles.collageImgOffset}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterGoldFrame}>
            <span className={styles.newsletterLabel}>Privé Access</span>
            <h2>Join the Inner Circle</h2>
            <p>
              Subscribe to receive private invitations to seasonal trunk shows, early capsule collection releases, and bespoke wardrobe styling.
            </p>
            <form className={styles.newsletterForm} action="">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                className={styles.newsletterInput} 
              />
              <button type="submit" className={styles.newsletterSubmit}>
                Request Access
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
