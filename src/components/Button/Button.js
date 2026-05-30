import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  fullWidth, 
  className, 
  type = 'button',
  disabled
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
