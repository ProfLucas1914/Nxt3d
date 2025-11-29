import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { FullCatalog } from './components/FullCatalog';
import { Materials } from './components/Materials';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/Admin/AdminLogin';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { ProductForm } from './components/Admin/ProductForm';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';
import { motion } from 'framer-motion';
import { DataProvider, useData } from './context/DataContext';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Catalog />
    <Materials />
    <Pricing />
    <Gallery />
    <Testimonials />
    <ContactForm />
  </>
);

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useData();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200 relative">
        <div className="bg-noise" />
        
        {/* Navbar should handle logic to hide itself on admin pages if needed, but for now it's fine */}
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<FullCatalog />} />
            <Route path="/sobre" element={<AboutPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/products/new" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/products/:id" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Action Button for Mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/30 text-white"
          >
            <MessageCircle size={28} />
          </a>
        </motion.div>
      </div>
    </DataProvider>
  );
}

export default App;
