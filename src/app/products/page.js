import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import styles from "./products.module.css";

export const metadata = {
  title: "Collections | Femina Exclusif",
};

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Our Collections</h1>
        <p>Explore our curated selection of ultra-luxurious garments and accessories.</p>
      </div>
      
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label>Category</label>
          <select className={styles.select}>
            <option>All Categories</option>
            <option>Dresses</option>
            <option>Gowns</option>
            <option>Accessories</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Sort By</label>
          <select className={styles.select}>
            <option>Newest Arrivals</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
