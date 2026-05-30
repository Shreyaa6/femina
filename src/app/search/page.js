'use client';
import { useState } from 'react';
import Link from 'next/link';
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

  const trendingSearches = ["Saree", "Suit", "Velvet", "Ivory", "Organza"];

  return (
    <div className={styles.page}>
      <div className={styles.searchHeader}>
        <span className={styles.subtitle}>Curated Catalog</span>
        <h1 className={styles.title}>Search Creations</h1>
        <div className={styles.separator}></div>
      </div>

      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search for elegant pieces..." 
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <div className={styles.searchUnderline}></div>
      </div>

      {!query ? (
        <div className={styles.suggestionsContainer}>
          <h3 className={styles.suggestionsTitle}>Trending Collections</h3>
          <div className={styles.suggestionTags}>
            {trendingSearches.map(tag => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className={styles.tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          <p className={styles.resultsText}>
            {searchResults.length} creation{searchResults.length !== 1 ? 's' : ''} found for "{query}"
          </p>
          
          {searchResults.length > 0 ? (
            <div className={styles.grid}>
              {searchResults.map(product => (
                <div key={product.id} className={styles.productWrapper}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No exquisite creations match your search. Explore our full catalog to discover contemporary silhouettes.</p>
              <Link href="/products" className={styles.exploreLink}>
                View All Designs
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
