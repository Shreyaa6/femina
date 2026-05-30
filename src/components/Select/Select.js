'use client';

import { useState, useRef, useEffect, useId } from 'react';
import styles from './Select.module.css';

export default function Select({
  label,
  options,
  value,
  onChange,
  id: idProp,
  className,
  align = 'left',
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const generatedId = useId();
  const triggerId = idProp || generatedId;

  const selected = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <div
      className={`${styles.wrapper} ${className || ''}`}
      ref={rootRef}
      data-align={align}
    >
      {label && (
        <label htmlFor={triggerId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.control}>
        <button
          type="button"
          id={triggerId}
          className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
        >
          <span className={styles.value}>{selected.label}</span>
          <span
            className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
            aria-hidden="true"
          />
        </button>
        {open && (
          <ul
            id={listId}
            className={styles.menu}
            role="listbox"
            aria-labelledby={triggerId}
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <li key={opt.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`${styles.option} ${isSelected ? styles.optionSelected : ''}`}
                    onClick={() => handleSelect(opt.value)}
                  >
                    {isSelected && (
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>
                    )}
                    <span>{opt.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
