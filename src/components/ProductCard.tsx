import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import ProductDetailModal from './ProductDetail/ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useApp();
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity: 1,
        size: product.sizes[0],
        color: product.colors[0],
      }
    });
    
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleCardClick = () => {
    setShowDetailModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative">
        {showNotification && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 animate-pulse">
            Added to cart!
          </div>
        )}
        
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={handleCardClick}
          />
          
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              SALE
            </div>
          )}
          
          <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              className="bg-white text-slate-800 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Quick Add
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-2 cursor-pointer" onClick={handleCardClick}>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-slate-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
              )}
            </div>
            
            <div className="text-xs text-gray-500">
              {product.reviews} reviews
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={product}
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
      />
    </>
  );
};

export default ProductCard;