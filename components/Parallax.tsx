// src/components/Parallax.tsx
import React from 'react';
import styles from '../styles/parallax.module.css';

const Parallax: React.FC = () => {
  return (
    <div className={styles.parallax}>
      <div className={`${styles.parallax__layer} ${styles.parallax__layerback}`}>
        <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/castle1.jpg')" }} />
      </div>
      <div className={`${styles.parallax__layer} ${styles.parallax__layerbase}`}>
        <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/castle3_nobg.png')" }} />
      </div>
    </div>
  );
};

export default Parallax;
