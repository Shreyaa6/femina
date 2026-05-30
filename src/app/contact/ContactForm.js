'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import Select from '@/components/Select/Select';
import styles from './contact.module.css';

const SUBJECT_OPTIONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'appointment', label: 'Boutique Appointment' },
  { value: 'order', label: 'Order & Shipping' },
  { value: 'styling', label: 'Personal Styling' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState('general');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.formSuccess}>
        <h3>Thank You</h3>
        <p>
          Your message has been received. Our atelier team will respond within one to two business days.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <input type="text" name="name" placeholder="Full Name" required className={styles.input} />
        <input type="email" name="email" placeholder="Email Address" required className={styles.input} />
      </div>
      <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} />
      <input type="hidden" name="subject" value={subject} />
      <Select
        label="Subject"
        options={SUBJECT_OPTIONS}
        value={subject}
        onChange={setSubject}
        className={styles.subjectSelect}
      />
      <textarea
        name="message"
        placeholder="How may we assist you?"
        required
        rows={5}
        className={styles.textarea}
      />
      <Button type="submit" variant="primary" fullWidth>
        Send Message
      </Button>
    </form>
  );
}
