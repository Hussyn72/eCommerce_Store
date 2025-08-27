import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import LoginModal from './Auth/LoginModal';
import CartSidebar from './Cart/CartSidebar';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const toggleView = () => {
    dispatch({ 
      type: 'SET_VIEW', 
      payload: state.currentView === 'store' ? 'admin' : 'store' 
    });
  };

  const handleLogin = (user: any) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const handleUserClick = () => {
    if (state.user) {
      dispatch({ type: 'SET_PAGE', payload: 'profile' });
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogoClick = () => {
    dispatch({ type: 'SET_PAGE', payload: 'home' });
    dispatch({ type: 'SET_VIEW', payload: 'store' });
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={handleLogoClick}
                className="text-2xl font-bold text-slate-800 hover:text-amber-600 transition-colors"
              >
                Style<span className="text-amber-500">Hub</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors">
                Men
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors">
                Women
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors">
                Kids
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors">
                Shoes
              </a>
              <a href="#" className="text-gray-700 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors">
                Accessories
              </a>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Admin Toggle */}
            <button
              onClick={toggleView}
              className={`p-2 rounded-lg transition-colors ${
                state.currentView === 'admin' 
                  ? 'bg-amber-100 text-amber-600' 
                  : 'text-gray-600 hover:text-amber-500 hover:bg-gray-100'
              }`}
              title={state.currentView === 'store' ? 'Switch to Admin' : 'Switch to Store'}
            >
              <Shield className="h-5 w-5" />
            </button>

            {/* User Account */}
            <button 
              onClick={handleUserClick}
              className="text-gray-600 hover:text-amber-500 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <User className="h-5 w-5" />
            </button>

            {/* Shopping Cart */}
            {state.currentView === 'store' && (
              <button 
                onClick={() => setShowCartSidebar(true)}
                className="relative text-gray-600 hover:text-amber-500 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-amber-500 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>


      {/* Modals */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
      
      <CartSidebar 
        isOpen={showCartSidebar}
        onClose={() => setShowCartSidebar(false)}
      />
    </>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              <div className="mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <a href="#" className="block text-gray-700 hover:text-amber-500 px-3 py-2 text-base font-medium">
                Men
              </a>
              <a href="#" className="block text-gray-700 hover:text-amber-500 px-3 py-2 text-base font-medium">
                Women
              </a>
              <a href="#" className="block text-gray-700 hover:text-amber-500 px-3 py-2 text-base font-medium">
                Kids
              </a>
              <a href="#" className="block text-gray-700 hover:text-amber-500 px-3 py-2 text-base font-medium">
                Shoes
              </a>
              <a href="#" className="block text-gray-700 hover:text-amber-500 px-3 py-2 text-base font-medium">
                Accessories
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;