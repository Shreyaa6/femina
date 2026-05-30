'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import styles from './search.module.css';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const searchResults = query
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className={styles.page}>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search for elegant pieces..." 
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      {query && (
        <div className={styles.resultsContainer}>
          <p className={styles.resultsText}>
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
          </p>
          
          {searchResults.length > 0 && (
            <div className={styles.grid}>
              {searchResults.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
