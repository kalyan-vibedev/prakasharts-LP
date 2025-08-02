import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Update page title based on current page
  useEffect(() => {
    const pageTitles: { [key: string]: string } = {
      home: 'Prakash Arts | South India\'s Most Trusted OOH Partner',
      about: 'About Us | Prakash Arts',
      services: 'Our Services | Prakash Arts',
      clients: 'Our Clients | Prakash Arts',
      contact: 'Contact Us | Prakash Arts'
    };

    document.title = pageTitles[currentPage] || 'Prakash Arts';
  }, [currentPage]);

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && ['home', 'about', 'services', 'clients', 'contact'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      }
    };

    // Set initial page based on hash
    const hash = window.location.hash.slice(1);
    if (hash && ['home', 'about', 'services', 'clients', 'contact'].includes(hash)) {
      setCurrentPage(hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const pageComponents = {
      home: Home,
      about: About,
      services: Services,
      clients: Clients,
      contact: Contact
    };

    const PageComponent = pageComponents[currentPage as keyof typeof pageComponents];
    
    return (
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <PageComponent />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;