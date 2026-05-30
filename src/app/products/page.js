import { products } from "@/data/products";
import ProductsCatalog from "./ProductsCatalog";
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

      <ProductsCatalog products={products} />
    </div>
  );
}
