import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2025 Breaking Grounds Network</p>
    </footer>
  );
};

export default Footer;