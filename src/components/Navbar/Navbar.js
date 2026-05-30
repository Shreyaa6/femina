'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { products } from '@/data/products';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { state } = useStore();
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const favCount = state.favourites.length;

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const filteredProducts = searchQuery
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const trendingSearches = ["Saree", "Suit", "Velvet", "Ivory", "Organza"];

  const navLinks = (
    <>
      <Link href="/products" className={styles.link} onClick={closeMenu}>
        Shop
      </Link>
      <Link href="/contact" className={styles.link} onClick={closeMenu}>
        Contact
      </Link>
      <button
        type="button"
        onClick={() => {
          closeMenu();
          setSearchOpen(true);
        }}
        className={styles.link}
      >
        Search
      </button>
      <Link href="/favourites" className={styles.link} onClick={closeMenu}>
        Favourites {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
      </Link>
      <Link href="/cart" className={styles.link} onClick={closeMenu}>
        Cart {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      </Link>
    </>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.desktopLeft}>
            <Link href="/products" className={styles.link}>Shop</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={styles.link}
            >
              Search
            </button>
          </div>

          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              Femina Exclusif
            </Link>
          </div>

          <div className={styles.desktopRight}>
            <Link href="/favourites" className={styles.link}>
              Favourites {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
            </Link>
            <Link href="/cart" className={styles.link}>
              Cart {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav}>{navLinks}</nav>
      </div>
      {menuOpen && (
        <button
          type="button"
          className={styles.menuBackdrop}
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}

      {searchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchContainer}>
            <button
              className={styles.closeButton}
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              aria-label="Close search"
            >
              ✕ Close
            </button>

            <div className={styles.searchBox}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for elegant pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <div className={styles.searchUnderline}></div>
            </div>

            {!searchQuery ? (
              <div className={styles.suggestions}>
                <h4>Trending Searches</h4>
                <div className={styles.suggestionTags}>
                  {trendingSearches.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className={styles.tag}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.searchResults}>
                {filteredProducts.length > 0 ? (
                  <div className={styles.resultsGrid}>
                    {filteredProducts.map(product => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                        className={styles.resultItem}
                      >
                        <div className={styles.resultImageWrapper}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={styles.resultImage}
                          />
                        </div>
                        <div className={styles.resultInfo}>
                          <span className={styles.resultCategory}>{product.category}</span>
                          <span className={styles.resultName}>{product.name}</span>
                          <span className={styles.resultPrice}>₹{product.price.toLocaleString('en-IN')}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noResults}>
                    <p>No exquisite creations found for &ldquo;{searchQuery}&rdquo;</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
