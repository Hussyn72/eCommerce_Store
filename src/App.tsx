import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AdminDashboard from './components/Admin/AdminDashboard';
import Footer from './components/Footer';
import ProfilePage from './components/Profile/ProfilePage';

const AppContent: React.FC = () => {
  const { state } = useApp();

  if (state.currentView === 'admin') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <AdminDashboard />
      </div>
    );
  }

  if (state.currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <ProfilePage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;