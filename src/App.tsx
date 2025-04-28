import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Breaking Grounds Network</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;