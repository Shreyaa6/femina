'use client';
import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import Button from '@/components/Button/Button';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { state } = useStore();
  const { cart } = state;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <h1>Order Confirmed</h1>
        <p>Thank you for shopping with Femina Exclusif.</p>
        <p>Your order details and receipt have been sent to your email.</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Checkout</h1>
      
      <div className={styles.container}>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Shipping Information</h2>
            <div className={styles.formGrid}>
              <input type="text" placeholder="First Name" required className={styles.input} />
              <input type="text" placeholder="Last Name" required className={styles.input} />
              <input type="email" placeholder="Email Address" required className={`${styles.input} ${styles.fullWidth}`} />
              <input type="text" placeholder="Address" required className={`${styles.input} ${styles.fullWidth}`} />
              <input type="text" placeholder="City" required className={styles.input} />
              <input type="text" placeholder="Postal Code" required className={styles.input} />
              <input type="text" placeholder="Country" required className={`${styles.input} ${styles.fullWidth}`} />
            </div>

            <h2 className={styles.paymentTitle}>Payment Details</h2>
            <div className={styles.formGrid}>
              <input type="text" placeholder="Card Number" required className={`${styles.input} ${styles.fullWidth}`} />
              <input type="text" placeholder="MM/YY" required className={styles.input} />
              <input type="text" placeholder="CVC" required className={styles.input} />
            </div>

            <Button type="submit" variant="primary" fullWidth className={styles.submitBtn}>
              Place Order
            </Button>
          </form>
        </div>
        
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.itemsList}>
            {cart.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <div className={styles.itemName}>
                  {item.name} <span>x {item.quantity}</span>
                </div>
                <div>₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
              </div>
            ))}
          </div>
          
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
        </div>
      </div>
    </div>
  );
}
