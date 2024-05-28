import React from 'react';
import styles from './PostCard.module.css';
const Layout = ({ children }) => {
  return (
    <div className={styles.mains}>
      <main >
        {children}
      
        </main>
      <footer>
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
};

export default Layout;
