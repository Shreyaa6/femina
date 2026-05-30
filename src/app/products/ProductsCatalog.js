'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import Select from '@/components/Select/Select';
import styles from './products.module.css';

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Categories' },
  { value: 'Suits', label: 'Suits' },
  { value: 'Sarees', label: 'Sarees' },
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'price-asc', label: 'Price: Low to High' },
];

export default function ProductsCatalog({ products }) {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('newest');

  const filteredProducts = useMemo(() => {
    let list =
      category === 'all'
        ? [...products]
        : products.filter((p) => p.category === category);

    switch (sort) {
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'newest':
      default:
        list.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? -1 : 1));
        break;
    }

    return list;
  }, [products, category, sort]);

  return (
    <>
      <div className={styles.filters}>
        <Select
          label="Category"
          options={CATEGORY_OPTIONS}
          value={category}
          onChange={setCategory}
        />
        <Select
          label="Sort By"
          options={SORT_OPTIONS}
          value={sort}
          onChange={setSort}
          align="right"
        />
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
