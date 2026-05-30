'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import Button from '@/components/Button/Button';
import styles from './cart.module.css';

export default function CartPage() {
  const { state, dispatch } = useStore();
  const { cart } = state;

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleUpdateQuantity = (item, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity: newQuantity } });
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Your Cart is Empty</h1>
        <p>Discover our exclusive collections and find something extraordinary.</p>
        <Link href="/products">
          <Button variant="primary">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Shopping Cart</h1>
      
      <div className={styles.container}>
        <div className={styles.items}>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.name} fill className={styles.image} />
              </div>
              <div className={styles.itemDetails}>
                <div className={styles.itemHeader}>
                  <Link href={`/products/${item.id}`} className={styles.itemName}>{item.name}</Link>
                  <button className={styles.removeBtn} onClick={() => handleRemove(item)}>✕</button>
                </div>
                <p className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</p>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleUpdateQuantity(item, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateQuantity(item, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <Link href="/checkout" className={styles.checkoutLink}>
            <Button variant="primary" fullWidth>Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
